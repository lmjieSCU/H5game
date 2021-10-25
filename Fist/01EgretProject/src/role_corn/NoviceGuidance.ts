class NoviceGuidance{
    public  AI_stop:boolean=false;
    public  novice_btn:string="";
    public  next_btn:string="";
    public  popup:any=null;
    public  shelter_time:any;
    public time=150;
    public tips:Finger;
    public border:egret.Bitmap;
    public spr:egret.Bitmap;
    public text:egret.Bitmap;
    public yuan:egret.Bitmap;
    public punch:egret.Bitmap;
    public static itself:NoviceGuidance=null;
    
    public static I(){
        if(NoviceGuidance.itself==null){
            NoviceGuidance.itself=new NoviceGuidance();
        }
        return NoviceGuidance.itself;
    }
    public step1(){
        _level0.P1_role.stage.setChildIndex(_level0.P1_role.keyCtrl.key,100);
        this.novice_btn="none";
        this.tips=new Finger(0,0);
        this.shelter_time=this.Shelter();
        this.AI_stop=true;
        let popup=this.Popup();
        this.blackCloth(popup,()=>{
            this.step1_2();
            popup.parent.removeChild(popup);
            
        })
        let p1_life = SplashScene.instance._life.p1_life;
        let text1=UI.addPic(popup,"Word_01_png",p1_life.x-40,p1_life.y+10);
        let yuan1=UI.addPic(popup,"Word_point_png",p1_life.x-40+text1.width-1,p1_life.y+10,true);
        text1.y+=yuan1.height/2-1;
        let p2_life = SplashScene.instance._life.p2_life;
        let text2=UI.addPic(popup,"Word_02_png",p2_life.x-150,p2_life.y+10);
        let yuan2=UI.addPic(popup,"Word_point_png",p2_life.x-149,p2_life.y+10,true);
        text2.y+=yuan2.height/2-1;
    }
    public step1_2(){
        let popup=this.Popup();
        this.blackCloth(popup,()=>{
            this.step2();
            popup.parent.removeChild(popup);
        })
        
        let p1_power = SplashScene.instance._life.p1_power;
        let text3=UI.addPic(popup,"Word_03_png",p1_power.x+50,p1_power.y+10);
        let yuan3=UI.addPic(popup,"Word_point_png",p1_power.x+51,p1_power.y+10,true);
        text3.y+=yuan3.height/2-1;
    }
    public step2(){
        this.next_btn="right";
        
        let popup=this.Popup();
        this.blackCloth(popup,()=>{
            popup.parent.removeChild(popup);
            GameRender.I.Add(this,this.step2_inFreeze);
            this.clert();
        })
        this.bright();
        let rocker_x = _level0.P1_role.keyCtrl.key.initial_x;
        let rocker_y = _level0.P1_role.keyCtrl.key.initial_y;
        let text3=UI.addPic(SplashScene.instance.stage,"Word_04_png",rocker_x+50,rocker_y);
        let yuan3=UI.addPic(SplashScene.instance.stage,"Word_point_png",rocker_x+51,rocker_y,true);
        SplashScene.instance.stage.addChildAt(this.tips,20);
        text3.y-=text3.height;
        text3.y-=yuan3.height/2-1;
        this.tips.x=yuan3.x;
        this.tips.y=yuan3.y;
        this.tips.rotation=0;
        this.tips.visible=true;
        this.yuan=yuan3;
        this.text=text3;
    }
    public step2_inFreeze(){
        if(_level0.P1_role.status_1=="walk_f"){
            egret.setTimeout(function(){
                this.step3();
                this.next_btn="left";
            },this,1500)
            GameRender.I.Remove(this,this.step2_inFreeze);
        }
        
    }
    public step3(){
        _level0.P1_role.toStatus_switch("stand");
        _level0.P1_role.keyCtrl.key.initial();
        let popup=this.Popup();
        this.blackCloth(popup,()=>{
            popup.parent.removeChild(popup);
            GameRender.I.Add(this,this.step3_inFreeze);
            this.clert();
        })
        this.bright();
        let rocker_x = _level0.P1_role.keyCtrl.key.initial_x;
        let rocker_y = _level0.P1_role.keyCtrl.key.initial_y;
        let text3=UI.addPic(SplashScene.instance.stage,"Word_06_png",rocker_x-50,rocker_y);
        let yuan3=UI.addPic(SplashScene.instance.stage,"Word_point_png",rocker_x-49,rocker_y,true);
        text3.y-=text3.height;
        text3.y-=yuan3.height/2-1;
        this.tips.x=yuan3.x;
        this.tips.y=yuan3.y;
        this.tips.rotation=180;
        this.tips.visible=true;
        this.yuan=yuan3;
        this.text=text3;
    }
    public step3_inFreeze(){
        if(_level0.P1_role.status_1=="walk_b"){
            egret.setTimeout(function(){
                this.step4();
                this.next_btn="up";
            },this,1500)
            GameRender.I.Remove(this,this.step3_inFreeze)
        }
        
    }
    public step4(){
        _level0.P1_role.toStatus_switch("stand");
        _level0.P1_role.keyCtrl.key.initial();
        let popup=this.Popup();
        this.blackCloth(popup,()=>{
            popup.parent.removeChild(popup);
            GameRender.I.Add(this,this.step4_inFreeze)
            this.clert();
        })
        this.bright();
        let rocker_x = _level0.P1_role.keyCtrl.key.initial_x;
        let rocker_y = _level0.P1_role.keyCtrl.key.initial_y;
        let text3=UI.addPic(SplashScene.instance.stage,"Word_05_png",rocker_x,rocker_y-50);
        let yuan3=UI.addPic(SplashScene.instance.stage,"Word_point_png",rocker_x+1,rocker_y-50,true);
        text3.y-=text3.height;
        text3.y-=yuan3.height/2-1;
        this.tips.x=yuan3.x;
        this.tips.y=yuan3.y;
        this.tips.rotation=180;
        this.tips.visible=true;
        this.yuan=yuan3;
        this.text=text3;
    }
    public step4_inFreeze(){
        if(_level0.P1_role.status_1=="jump"){
            egret.setTimeout(function(){
                this.tips.visible=false;
                this.step5();
                this.next_btn="down";
            },this,1000)
            GameRender.I.Remove(this,this.step4_inFreeze)
        }
        
    }
    public step5(){
        
        _level0.P1_role.toStatus_switch("stand");
        _level0.P1_role.keyCtrl.key.initial();
        let popup=this.Popup();
        this.blackCloth(popup,()=>{
            popup.parent.removeChild(popup);
            GameRender.I.Add(this,this.step5_inFreeze);
            this.clert();
        })
        let rocker_x = _level0.P1_role.keyCtrl.key.initial_x;
        let rocker_y = _level0.P1_role.keyCtrl.key.initial_y;
        this.bright();
        let text3=UI.addPic(SplashScene.instance.stage,"Word_07_png",rocker_x,rocker_y+50);
        let yuan3=UI.addPic(SplashScene.instance.stage,"Word_point_png",rocker_x+1,rocker_y+50,true);
        text3.y+=yuan3.height/2-1;
        this.tips.x=yuan3.x;
        this.tips.y=yuan3.y;
        this.tips.rotation=180;
        this.tips.visible=true;
        this.yuan=yuan3;
        this.text=text3;
    }
    public step5_inFreeze(){
        if(_level0.P1_role.status_1=="squat"){
            egret.setTimeout(function(){
                this.tips.visible=false;
                this.step6();
                this.next_btn="";
            },this,1000)
            GameRender.I.Remove(this,this.step5_inFreeze)
        }
    }
    public step6(){
        _level0.P1_role.toStatus_switch("stand");
        _level0.P1_role.keyCtrl.key.initial();
        this.novice_btn="punch";
        let popup=this.Popup();
        this.blackCloth(popup,()=>{
            popup.parent.removeChild(popup);
            GameRender.I.Add(this,this.step6_inFreeze)
            this.clert();
        })
        this.bright();
        this.bright2();
        let rocker_x = GameConfig.FightWidth - 80;
        let rocker_y = UI.WINSIZE_H -150;
        let text3=UI.addPic(SplashScene.instance.stage,"Word_08_png",rocker_x,rocker_y);
        text3.x-=text3.width;
        this.tips.x=rocker_x;
        this.tips.y=rocker_y+60;
        this.tips.rotation=180;
        this.tips.visible=true;
        this.text=text3;
    }
    public step6_inFreeze(){
        if(_level0.P2_role.life<80){
            this.step7();
            GameRender.I.Remove(this,this.step6_inFreeze);
        }
    }
    public step7(){
        this.next_btn="none";
        this.novice_btn="none";
        this.shelter_time.parent.removeChild(this.shelter_time);
        let popup=this.Popup();
        this.blackCloth(popup);
        let p1_power = SplashScene.instance._life.timer;
        let text3=UI.addPic(popup,"Word_09_png",p1_power.x,p1_power.y+p1_power.height-10);
        let yuan3=UI.addPic(popup,"Word_point_png",p1_power.x+1,p1_power.y+p1_power.height-10,true);
        text3.y+=yuan3.height/2-1;
        this.popup=popup;
        this.tips.x=yuan3.x;
        this.tips.y=yuan3.y;
        this.tips.rotation=180;
        this.tips.visible=true;
    }
    public step8(){
        let popup=this.Popup();
        let instructions = PauseLayer.I().instructions_btn.localToGlobal();
        let text3=UI.addPic(popup,"Word_10_png",instructions.x+50,instructions.y+PauseLayer.I().instructions_btn.height/2);
        let yuan3=UI.addPic(popup,"Word_point_png",instructions.x+49,instructions.y+PauseLayer.I().instructions_btn.height/2,true);
        text3.x-=text3.width;
        text3.y+=yuan3.height/2-1;
        this.popup=popup;
        this.popup=popup;
        this.tips.x=yuan3.x;
        this.tips.y=yuan3.y;
        this.tips.rotation=180;
        this.tips.visible=true;
        

    }
    public step9(){
        NoviceGuidance.itself=null;
        this.novice_btn="";
        this.next_btn="";
        let popup=this.Popup();
        let text3=UI.addPic(popup,"Word_11_png",UI.WINSIZE_W/2-100,UI.WINSIZE_H/2-150);
        GameRender.I.Add(this,this.step9_inFreeze,[popup]);
        NewHand.setNewHand("isComplete",1);
        this.tips.parent.removeChild(this.tips);
    }
    public step9_inFreeze(popup){
        if(this.time<=0){
            popup.parent.removeChild(popup);
            GameRender.I.Remove(this,this.step9_inFreeze);
        }
        this.time--;
    }
    public Popup(){
        let popup=new egret.DisplayObjectContainer();
        popup.width=UI.WINSIZE_W;
        popup.height=UI.WINSIZE_H;
        SplashScene.instance.stage.addChild(popup);
        return popup;
    }
    public blackCloth(node:any,event:Function=null){
        let shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0x00000, 0.6);
        shp.graphics.drawRect( 0, 0, UI.WINSIZE_W, UI.WINSIZE_H );
        shp.graphics.endFill();
        node.addChild( shp );
        if(event!=null){
            shp.touchEnabled = true;
            shp.addEventListener(egret.TouchEvent.TOUCH_BEGIN,event,shp);
        }
    }

    public Shelter(){
        let p1_power = SplashScene.instance._life.timer;
        let shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0x00000, 0);
        shp.graphics.drawRect( p1_power.x-p1_power.width, p1_power.y, 400, 120);
        shp.graphics.endFill();
        SplashScene.instance.stage.addChild( shp );
        shp.touchEnabled = true;
        shp.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{},shp);
        return shp;
    }
    public bright(){
        let initial_x = 160;
        let initial_y = UI.WINSIZE_H- 145;
        this.border = UI.addPic(SplashScene.instance.stage, "thumbstick-background_png", initial_x, initial_y, true);
        this.border.scaleX = 0.8;
        this.border.scaleY = 0.8;
        //摇杆
        let spr: egret.Bitmap = UI.addPic(SplashScene.instance.stage, "thumbstick-pad_png", initial_x,initial_y, true);
        spr.scaleX = 0.8;
        spr.scaleY = 0.8;
        this.spr=spr;
        SplashScene.instance.stage.setChildIndex(this.spr,18)
        SplashScene.instance.stage.setChildIndex(this.border,19)
    }
    public bright2(){
        let img=Key_btn.addPic(SplashScene.instance.stage, "Fight_Button_quan_png", true);
        img.x = GameConfig.FightWidth - 35 -img.width / 2 *img.scaleX;
        img.y = UI.WINSIZE_H - 55 -img.height / 2 *img.scaleY;
        img.scaleX=1.5;
        img.scaleY=1.5;
        SplashScene.instance.stage.setChildIndex(img,17);
        this.punch=img;
    }
    public clert(){
        if(this.border!=null&&this.border.parent){
            this.border.parent.removeChild(this.border);
        }
        if(this.spr!=null&&this.spr.parent){
            this.spr.parent.removeChild(this.spr);
        }
        if(this.text!=null&&this.text.parent){
            this.text.parent.removeChild(this.text);
        }
        if(this.yuan!=null&&this.yuan.parent){
            this.yuan.parent.removeChild(this.yuan);
        }
        if(this.punch!=null&&this.punch.parent){
            this.punch.parent.removeChild(this.punch);
        }
    }
}


// 游戏默认暂停
// ↓
// 血条，能量，倒计时同时介绍，（弹窗形式）
// ↓
// 点击屏幕任意区域
// ↓
// 依此有白色明显字体及指向按钮移动右，左，上，下，内容：点击此处进行向右移动/向左移动/跳跃/蹲下，玩家点击对应按钮后才弹出下一操作。
// ↓
// 有白色明显字体及指向按钮普通攻击，内容：移动到敌人界面移动到敌人面前进行攻击(小提示，可连续点击4次攻击按钮打出连招喔）
// ↓
// 点击按钮移动并攻击
// ↓
// AI血量少于90时
// ↓
// 白色明显字体及指向倒计时池，内容：点击此处可暂停游戏并查看技能指令喔
// ↓
// 点击交互倒计时池
// ↓
// 画面暂停并弹出设置框(技能指令，关闭声音。退出对局）
// ↓
// 白色明显字体及指向技能指令按钮，内容：点此查看技能指令
// ↓
// 点击技能指令
// ↓
// 弹出技能指令框
// ↓
// 点×关闭
// ↓
// 白色明显字体，内容：使用攻击和技能打败你的对手吧