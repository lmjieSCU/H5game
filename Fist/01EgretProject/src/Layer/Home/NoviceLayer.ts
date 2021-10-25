class NoviceLayer extends Scene {
    public constructor() {
        super();
    }
    public novice: egret.DisplayObjectContainer;
    public noviceTimes: number;
    public isNovice: boolean;
    public onEnter() {
        this.noviceTimes = SignInData.getSignInTimes();
        this.isNovice = SignInData.isNewHandSignIn();
        this.novice = new egret.DisplayObjectContainer();
        UI.addBg(this, "Novice_bg_png");
        this.addChild(this.novice);
        let bg: egret.Bitmap = UI.addPic(this.novice, "Novice_front_png", 0, 0);
        this.novice.width = bg.width;
        this.novice.height = bg.height;
        this.novice.x = UI.WINSIZE_W/2 - this.novice.width/2;
        this.novice.y = UI.WINSIZE_H/2 - this.novice.height/2;

        for(let i=0;i<6;i++) {
            let reward: egret.Bitmap = UI.addPic(this.novice, `Novice_day${i+1}_png`, 0, 0, true);
            reward.x = this.novice.width/3 + (reward.width + 15)*(i%3);
            reward.y = this.novice.height/2 + 10 + (reward.height/2 + 10)*(Math.floor(i/3)-0.5)*2;
            let signIn: egret.Bitmap
            if(this.noviceTimes>i)  signIn = UI.addPic(this.novice, "Novice_button_signed_png", reward.x, reward.y+reward.height/2, true);
            else if(this.noviceTimes==i&&this.isNovice) signIn = UI.addBtn(this.novice, "Novice_button_sign_png", reward.x, reward.y+reward.height/2, true, () => this.siginIn(signIn));
            else signIn = UI.addPic(this.novice, "Novice_button_ besigned_png", reward.x, reward.y+reward.height/2, true);
            signIn.anchorOffsetY = signIn.height;
        }

        let day7: egret.Bitmap = UI.addPic(this.novice, "Novice_day7_png", this.novice.width/4*3, this.novice.height/2, true);
        day7.x -= day7.width/2;
        let signIn: egret.Bitmap;
        if(this.noviceTimes<6) signIn = UI.addPic(this.novice, "Novice_button_ besigned07_png", day7.x, day7.y + day7.height/2, true);
        else if(this.noviceTimes == 6 && this.isNovice) signIn = UI.addBtn(this.novice, "Novice_button_ sign07_png", day7.x, day7.y+day7.height/2, true,() => this.siginIn(signIn));
        else signIn = UI.addPic(this.novice, "Novice_button_signed_png", day7.x, day7.y + day7.height/2, true);
        signIn.anchorOffsetY = signIn.height;


        UI.addBtn(this.novice, "Novice_button_close_png", day7.x + day7.width, 0, true, () => {
            Home.instace.changeLayer(this, new HomeLayer());
        })
    }

    public onExit() {}

    public siginIn(target: egret.Bitmap) {//领取新手奖励
        let reward: Reward[] = SignInData.setNewHandSignIn();
        if(reward) {
            target.$setTexture(RES.getRes("Novice_button_signed_png"));
            console.log("获取奖励");
        }
    }
}