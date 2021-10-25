class InstructionList extends egret.DisplayObjectContainer {
    public role:any;
    public skill_ordinary:Array<any>=[];
    public skill_EX:Array<any>=[];
    public skill_Cri:Array<any>=[["down","punch_l"],["down","kick_l"]];
    public constructor(role:any) {
        super();
        this.width=380;
        this.height=420;
        this.x=UI.WINSIZE_W/2-this.width/2;
        this.y=UI.WINSIZE_H/2-this.height/2;
        this.blackCloth(this,()=>{})
        this.bg();
        this.role=role;
        this.if_instructions(role.skill_array,role.skill_mapping);
        //this.roleList();
        this.end();
    }
    //背景
    private bg() {
        UI.addPic(this,"Popup_skill_png",0,0);
    }
    //关闭按钮
    private end() {
       UI.addBtn(this,"Popup_close_png",this.width-60,6,false,()=>{
            FightMainRender.instance.renderPause = false;
            this.parent.removeChild(this);
            if(NoviceGuidance.I().novice_btn){
                NoviceGuidance.I().step9();
            }
        })
    }
    //指令表
    public roleList(){
        UI.addText(this,"普通技能",45,50,false,17);
        let ordinary_h=50;
        let ordinary_w=65;
        for(let i in this.skill_ordinary ){
            ordinary_h+=25;
            UI.addText(this,`${this.if_string(this.skill_ordinary[i][0])} + ${this.if_string(this.skill_ordinary[i][1])}`,ordinary_w,ordinary_h,false,15);
        }
        ordinary_h+=30;
        ordinary_w=65;
        UI.addText(this,"EX技能(需要消耗能量条)",45,ordinary_h,false,17);
        for(let i in this.skill_EX ){
            ordinary_h+=25;
            UI.addText(this,`${this.if_string(this.skill_EX[i][0])} + ${this.if_string(this.skill_EX[i][1])}`,ordinary_w,ordinary_h,false,15);
        }
        ordinary_h+=30;
        UI.addText(this,"必杀技(需要爆发)",45,ordinary_h,false,17);
        for(let i in this.skill_Cri ){
            ordinary_h+=25;
            UI.addText(this,`${this.if_string(this.skill_Cri[i][0])} + ${this.if_string(this.skill_Cri[i][1])}`,ordinary_w,ordinary_h,false,15);
        }
        ordinary_h+=25;
        UI.addText(this,`禁`,ordinary_w,ordinary_h,false,15);
        ordinary_h+=25;
        UI.addText(this,`摇杆向左+禁`,ordinary_w,ordinary_h,false,15);
        ordinary_h+=30;
        UI.addText(this,`注：爆发需要能量条蓄满,按下 禁 即可`,45,ordinary_h,false,15);
    }
    //指令判断
    private if_instructions(skill_array:Array<any>,skill_mapping:Array<any>) {
        for(let i in skill_array){
            let skill_type=this.instructions_type(skill_mapping[i]);
            if(skill_type){
                this.skill_ordinary.push(skill_array[i]);
            }else{
                this.skill_EX.push(skill_array[i]);
            }
        }
        console.log(this.skill_ordinary);
        
        console.log( this.skill_EX);
        
    } 
    private instructions_type(mapping:string) {
        for(let i in this.role.skillObj){
            if(mapping==this.role.skillObj[i]){
                return false;
            }
        }
        return true;
    }
    //字符转指令
    private if_string(str) {
        switch(str){
            case "up":
                return "上";
            case "right":
                return "右";
            case "left":
                return "左";
            case "down":
                return "下";
            case "kick":
                return "";
            case "punch":
                return "普通攻击";
            case "punch_l":
                return "地";
            case "kick_l":
                return "天";
            case "burst":
                return "禁";
        }
    }
    //遮挡
    private blackCloth(node:any,event:Function=null){
        let shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0x00000, 0.3);
        let num = this.globalToLocal(0,0);
        shp.graphics.drawRect( num.x, num.y, UI.WINSIZE_W, UI.WINSIZE_H );
        shp.graphics.endFill();
        node.addChild( shp );
        if(event!=null){
            shp.touchEnabled = true;
            shp.addEventListener(egret.TouchEvent.TOUCH_BEGIN,event,shp);
        }
    }
}