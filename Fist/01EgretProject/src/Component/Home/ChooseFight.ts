class ChooseFight extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(x: number, y: number) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.x = x;
        this.y = y;
    }


    onEnter() {
        if(Main.UItype == Main.UIT2) {
            let bg: egret.Bitmap = UI.addPic(this, "Home_lightning_png", 0, 0, true);
            this.width = bg.width;
            this.height = bg.height;
            bg.x = bg.width/2;
            bg.y = bg.height/2;
            let level: egret.Bitmap = UI.addBtn(this, "aiBtn_png", bg.width*0.125, bg.height*0.3125, true, () => this.goToFightReady('level'));
            let match: egret.Bitmap = UI.addBtn(this, "matchBtn_png", bg.width*0.85, bg.height*0.3125, true, () => {
                // const playCount = NewHand.getNewHandInfo().playCount;
                // if(playCount>=3) this.goToFightReady('match');
                // else {
                //     console.log("胜利三局开启匹配模式");
                //     SceneManager.getInstance().AddLayer(new NewDontPlay());
                // }
                // SceneManager.getInstance().AddLayer(new NewDontPlay());
                this.goToFightReady('match');
            });

            let home: egret.Bitmap = UI.addBtn(this, "fightBtn_png", bg.width*0.75, bg.height*0.65, true, () => this.goToFightReady('house'));

            let rank: egret.Bitmap = UI.addBtn(this, "rankBtn_png", bg.width*0.025, home.y, true, () => this.goToFightReady('rank'));

            this.setChildIndex(bg, this.numChildren - 1);
        } else {
            let shilian: egret.Bitmap = UI.addBtn(this, "Home_model_shilian_png", 0, 0, true, () => this.goToFightReady('level'));
            shilian.y = shilian.height/2;
            let pipei: egret.Bitmap = UI.addBtn(this, "Home_model_zaixian_png", shilian.x + shilian.width/2 + 60, shilian.y, true,() => this.goToFightReady('match'))
            let zhengba: egret.Bitmap = UI.addBtn(this, "Home_model_wuling_png", pipei.x + pipei.width/2 + 60, shilian.y, true, () => this.goToFightReady('rank'));
            let lianji: egret.Bitmap = UI.addBtn(this, "Home_model_lianji_png", zhengba.x + zhengba.width/2 + 60, shilian.y, true, () => this.goToFightReady('house'));
        }
    }

    public goToFightReady(type: string) {
        if(Home.instace.newHand) {
            Home.instace.removeChildAt(Home.instace.numChildren - 1);
        }
        Home.instace.changeLayer(this.parent as Scene, new FightReady(type))
        Home.fightType = type;
        Sound.getInstance().oneTimesPlay(Sound.getInstance().musicName.buttonClick);
    }

    public newHand() {
        let target = (this.getChildAt(0) as egret.Bitmap);
        Home.instace.addChild(new NewHandss(target, "fight", this.x+target.x - target.width/8, this.y+target.y, () => this.goToFightReady('level'), this))
        // Home.instace.addChild(new NewHands(this.x+target.x - target.width/2, this.y+target.y - target.height/2, target.width*0.75, target.height, "点击按钮进行对战", this.x+target.x - target.width, this.y + target.y + target.height/2));
    }
}