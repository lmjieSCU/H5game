//弹窗
class PauseLayer extends egret.DisplayObjectContainer {
    public continue_btn:egret.Bitmap;//继续游戏
    public instructions_btn:egret.Bitmap;//指令
    public out_btn:egret.Bitmap;//结束游戏
    //单例
    public static itself:PauseLayer=null;
    public static I(){
        if(PauseLayer.itself==null){
            PauseLayer.itself=new PauseLayer();
        }
        return PauseLayer.itself;
    }
    public constructor() {
        super();
        this.width=380;
        this.height=420;
        this.x=UI.WINSIZE_W/2-this.width/2;
        this.y=UI.WINSIZE_H/2-this.height/2+70;
        this.blackCloth(this,()=>{})
        this.bg();
        this.continue();
        this.instructions();
        this.out();
    }
    //背景
    private bg() {
        UI.addPic(this,"Popup_box_png",0,0);
    }
    //继续游戏
    private continue() {
        this.continue_btn=UI.addBtn(this,"Popup_button_continue_png",this.width/2,this.height/5+25,true,()=>{
            if(NoviceGuidance.I().AI_stop){
                return;
            }
            FightMainRender.instance.renderPause = false;
            this.parent.removeChild(this);
        })
    }
    //指令
    private instructions() {
        this.instructions_btn=UI.addBtn(this,"Popup_button_order_png",this.width/2,this.height/5*2+25,true,()=>{
            this.stage.addChild(new InstructionList(_level0.P1_role));
            this.parent.removeChild(this);
            if(NoviceGuidance.I().novice_btn){
                NoviceGuidance.I().popup.parent.removeChild(NoviceGuidance.I().popup);
            }
        })
    }
    //结束游戏
    private out() {
        this.out_btn=UI.addBtn(this,"Popup_button_out_png",this.width/2,this.height/5*3+25,true,()=>{
            if(NoviceGuidance.I().AI_stop){
                return;
            }
            SplashScene.instance.clear();
            SceneManager.getInstance().ChangeScene(new Home());
            FightMainRender.getInstance().destroy();
        })
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
