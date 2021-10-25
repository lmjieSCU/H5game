class Home extends Scene {
    public num=5;
    public constructor() {
        super();
        Home.instace = this;
    }

    public static instace: Home;
    public static fightType: string;
    public _header: Header;
    public newHand: boolean = false;
    public nowHero: number = 0;
    onEnter() {
        // this.anmei();
        RoomConfig.createUserID();
        let bg: egret.Bitmap = UI.addPic(this, `${Main.UItype == Main.UIT2 ? 'demoBg_jpg' : 'homeBg_png'}`, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        bg.scaleX = UI.WINSIZE_W / bg.width;
        bg.scaleY = UI.WINSIZE_H / bg.height;
        this._header = new Header();
        this.addChild(this._header);
        // let money = UI.addBtn(this, "button_delet_png", UI.WINSIZE_W/2, 0, false, () => egret.localStorage.clear());
        let home = new HomeLayer()
        SceneManager.getInstance().AddLayer(home);
        Sound.getInstance().bgPlay();
        if(!NewHand.getNewHandInfo().isComplete) {
            if(SignInData.isNewHandSignIn()) {
                Home.instace.changeLayer(home, new NoviceLayer());
            }
        }
        else{
            // this.newHand = true;
            // SceneManager.getInstance().AddLayer(new WelcomeLayer());
            // return
        }
        
    }
    public anmei(){
            let square: egret.Shape = new egret.Shape();
            square.graphics.beginFill(0xff0000,0);
            square.graphics.drawRect(UI.WINSIZE_W-100, 0,100, 100);
            square.graphics.endFill();
            square.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{
                this.num--;
                if(this.num<0){
                    egret.localStorage.clear();
                    console.log("清除所有缓存")
                }
            },square)
            square.touchEnabled=true;
            this.stage.addChild(square);
    } 
    onExit() { 
        Sound.getInstance().bgColse();
    }

    public changeLayer(s: Scene, s2: Scene) {
        this._header.chageHead(false);
        SceneManager.getInstance().RemoveLayer(s);
        SceneManager.getInstance().AddLayer(s2);
    }

    public getTimeSecond(time1: number, time2: number) {
        return Math.floor((time1 - time2) / 1000);
    }
}