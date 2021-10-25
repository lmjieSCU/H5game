/**超时时使用,暂未用到*/
class RoundOver extends egret.DisplayObjectContainer implements egret.DisplayObject {
    // private gameOver: egret.Bitmap;
    // private drawGame: egret.Bitmap;
    private black1: egret.Shape;
    private black2: egret.Shape;
    private RenderAnimate: number = 0;

    public constructor() {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }

    onEnter() {
        this.initlize();
        // this.gameOver = UI.addPic(this, "fightui_55_png", GameConfig.FightWidth / 2, -30, true);
        // this.drawGame = UI.addPic(this, "fightui_57_png", GameConfig.FightWidth / 2, -30, true);
        // egret.Tween.get(this.gameOver).to({ y: UI.WINSIZE_H / 2 - 100 }, 400, egret.Ease.sineIn);
        FightMainRender.getInstance().Add(this, this.render);
        return;
    }

    public initlize() {
        this.black1 = new egret.Shape();
        this.black2 = new egret.Shape();
        this.black1.graphics.beginFill(0x000000);
        this.black1.graphics.drawRect(0, 0, GameConfig.FightWidth, UI.WINSIZE_H / 2);
        this.black1.graphics.endFill();
        this.black1.y = -UI.WINSIZE_H / 2;
        this.addChild(this.black1);
        //上下黑色幕布
        this.black2.graphics.beginFill(0x000000);
        this.black2.graphics.drawRect(0, 0, GameConfig.FightWidth, UI.WINSIZE_H / 2);
        this.black2.graphics.endFill();
        this.black2.y = UI.WINSIZE_H;
        this.addChild(this.black2);
    }




    public render() {
        this.RenderAnimate += 1;
        if (this.RenderAnimate == 20) {
            // this.removeChild(this.gameOver);
            // egret.Tween.get(this.drawGame).to({ y: UI.WINSIZE_H / 2 - 100 }, 400, egret.Ease.sineIn);
        }
        if (this.RenderAnimate == 35) {
            this.CloseBlack_cloth();
        }
        else if (this.RenderAnimate == 50) {
            this.RoundEnd();
        }
        else if (this.RenderAnimate >= 65) {
            this.RenderAnimate = 0;
            this.AddRoundBegin_Animate();
            FightMainRender.getInstance().Remove(this, this.render);
        }
    }

    public CloseBlack_cloth() {
        egret.Tween.get(this.black1).to({ y: 0 }, 500, egret.Ease.sineIn);
        egret.Tween.get(this.black2).to({ y: UI.WINSIZE_H / 2 }, 500, egret.Ease.sineIn);
    }


    public RoundEnd() {
        egret.Tween.get(this.black1).to({ y: -UI.WINSIZE_H / 2 }, 300, egret.Ease.sineIn);
        egret.Tween.get(this.black2).to({ y: UI.WINSIZE_H }, 300, egret.Ease.sineIn);
    }


    public AddRoundBegin_Animate() {
        SplashScene.instance.nextRound();
        // SplashScene.instance.stage.addChild(new Round(_level0.P1_role.winTimes + _level0.P2_role.winTimes + 1));
        SplashScene.instance.stage.removeChild(this);
    }



    // onEnter() {
    //     this.gameOver = UI.addPic(this, "fightui_55_png", GameConfig.FightWidth / 2, -30, true);
    //     this.drawGame = UI.addPic(this, "fightui_57_png", GameConfig.FightWidth / 2, -30, true);
    //     egret.Tween.get(this.gameOver).to({ y: UI.WINSIZE_H / 2 - 100 }, 400, egret.Ease.sineIn);
    // const t = egret.setInterval(() => {
    //     this.removeChild(this.gameOver);
    //     egret.Tween.get(this.drawGame).to({ y: UI.WINSIZE_H / 2 - 100 }, 400, egret.Ease.sineIn);
    //     egret.clearInterval(t);
    // }, this, 600);
    // let black1: egret.Shape = new egret.Shape();
    // black1.graphics.beginFill(0x000000);
    // black1.graphics.drawRect(0, 0, GameConfig.FightWidth, UI.WINSIZE_H / 2);
    // black1.graphics.endFill();
    // black1.x = 0;
    // black1.y = -UI.WINSIZE_H / 2;
    // this.addChild(black1);

    // let black2: egret.Shape = new egret.Shape();
    // black2.graphics.beginFill(0x000000);
    // black2.graphics.drawRect(0, 0, GameConfig.FightWidth, UI.WINSIZE_H / 2);
    // black2.graphics.endFill();
    // black2.x = 0;
    // black2.y = UI.WINSIZE_H;
    // this.addChild(black2);

    // const t2 = egret.setInterval(() => {
    //     this.removeChild(drawGame);
    //     egret.Tween.get(black1).to({ y: 0 }, 300, egret.Ease.sineIn);
    //     egret.Tween.get(black2).to({ y: UI.WINSIZE_H / 2 }, 300, egret.Ease.sineIn);
    //     egret.clearInterval(t2);
    // }, this, 1200)

    // const t3 = egret.setInterval(() => {
    //     egret.Tween.get(black1).to({ y: -UI.WINSIZE_H / 2 }, 300, egret.Ease.sineIn);
    //     egret.Tween.get(black2).to({ y: UI.WINSIZE_H }, 300, egret.Ease.sineIn);
    //     SplashScene.instance.nextRound();
    //     egret.clearInterval(t3);
    // }, this, 1600);

    // const t4 = egret.setInterval(() => {
    //     SplashScene.instance.stage.addChild(new Round(_level0.P1_role.winTimes + _level0.P2_role.winTimes + 1))
    //     SplashScene.instance.stage.removeChild(this);
    //     egret.clearInterval(t4);
    // }, this, 2000)
    // }
}