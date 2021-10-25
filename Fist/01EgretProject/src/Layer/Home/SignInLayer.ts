class SignInLayer extends Scene {
    public constructor() {
        super();
    }
    public signIn: egret.DisplayObjectContainer;
    public signInTimes: number;
    public isSignIn: boolean;

    
    onEnter() {
        let backBg: egret.Bitmap = UI.addPic(this, "Signin_head_png", 0, 0);
        let back: egret.Bitmap = UI.addBtn(this, "Button_back_png", 0, 0, false, () => {
            Home.instace.changeLayer(this, new HomeLayer());
        })
        this.createSignIn(backBg.height);
    }

    onExit() {}

    public createSignIn(head: number) {
        this.signIn = new egret.DisplayObjectContainer();
        let bg: egret.Bitmap = UI.addPic(this.signIn, "Signin_holebox_png", 0, 0);
        this.signIn.width = bg.width;
        this.signIn.height = bg.height;

        this.signIn.x = UI.WINSIZE_W/2 - this.signIn.width/2;
        this.signIn.y = (UI.WINSIZE_H + head)/2 - this.signIn.height/2;
        this.addChild(this.signIn);

        this.signInTimes = SignInData.getSignInTimes();
        this.isSignIn = SignInData.isSignIn();
        // this.signInTimes = 21;
        // this.isSignIn = false;

        for(let i=0; i<this.signInTimes; i++) {
            let shadow: egret.Bitmap = UI.addPic(this.signIn, "Signin_box_shadow0_png", 15, 23);
            const row = Math.floor(i/7);
            const col = i%7;
            shadow.x += col*(shadow.width + 1.5);
            shadow.y += row*(shadow.height + 21);
        }
        if(this.isSignIn) {
            let shadow: egret.Bitmap = UI.addBtn(this.signIn, "Signin_box_shadow_png", 2.5, -10, false, () => this.setSignIn(shadow));
            const row = Math.floor(this.signInTimes/7);
            const col = this.signInTimes%7;
            shadow.x += col*(shadow.width-22.5);
            shadow.y += row*(shadow.height-24);
        }
    }

    public setSignIn(target: egret.Bitmap) {
        const reward: Reward[] = SignInData.setSignIn();
        if(reward) {
            target.$setTexture(RES.getRes("Signin_box_shadow0_png"));
            target.touchEnabled = false;
            target.x += 12;
            target.y += 32;
        }
    }
}