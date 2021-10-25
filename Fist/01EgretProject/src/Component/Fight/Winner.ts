/**击败对手使用*/
class Winner extends egret.DisplayObjectContainer implements egret.DisplayObject {
    private black1: egret.Shape;
    private black2: egret.Shape;
    private win_img: egret.Bitmap;
    private player: Life;
    private winner: Role;
    private RenderAnimate: number = 0;

    public constructor(winner: Role, winTimes: number = 1) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.winner = winner;
        this.winner.winTimes += winTimes;
    }


    onEnter() {
        this.initlize();
        FightMainRender.getInstance().Add(this, this.render);
        return;
    }

    public initlize() {
        this.player = _level0.deepCompare(_level0.P1_role, this.winner) ? SplashScene.instance._life.p1_life : SplashScene.instance._life.p2_life;
        // this.win_img = UI.addPic(this, "Fight_word_I_png", GameConfig.FightWidth / 2, -50, true);
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
        if (this.RenderAnimate == 15) {
            let victory = (_level0.deepCompare(_level0.P1_role, this.winner) && SplashScene.instance.player == 1) || (_level0.deepCompare(_level0.P2_role, this.winner) && SplashScene.instance.player == 2);
            // let x = this.player.x + this.player.width / 2 - 25 - this.winner.winTimes * 25;
            // let y = this.player.y + this.player.height + 10;
            // egret.Tween.get(this.win_img).to({ scale: 0, x: x, y: y }, 300, egret.Ease.sineIn);
            let result: egret.Bitmap = UI.addPic(this, `Fight_pic_${victory?'victory':'fail'}_png`, UI.WINSIZE_W/2, UI.WINSIZE_H/2, true, 3);
            egret.Tween.get(result).to({scaleX: 1, scaleY: 1}, 200, egret.Ease.sineIn);
        }
        else if (this.RenderAnimate == 20) {////winner字体移动，以及胜场标示
           let v: egret.Bitmap = UI.addPic(this.player, "Word_pic_v_png", this.player.width - this.winner.winTimes*20, this.player.height);
           v.anchorOffsetX = v.width/2;
           v.x += v.width/2;
           if(_level0.deepCompare(this.winner, _level0.P2_role))  v.$setSkewY(180);
        }
        else if (this.RenderAnimate == 30) {
            this.CloseBlack_cloth();
        }
        else if (this.RenderAnimate == 50) {
            this.RoundEnd();
        } else if(this.RenderAnimate == 55) {
            this.OpenBlack();
        }
        else if (this.RenderAnimate >= 75) {
            FightMainRender.getInstance().Remove(this, this.render);
            this.RenderAnimate = 0;
            this.AddRoundBegin_Animate();
        }
    }

    public CloseBlack_cloth() {
        this.removeChildAt(this.numChildren - 1);
        egret.Tween.get(this.black1).to({ y: 0 }, 500, egret.Ease.sineIn);
        egret.Tween.get(this.black2).to({ y: UI.WINSIZE_H / 2 }, 500, egret.Ease.sineIn);
    }

    public RoundEnd() {
        if (this.winner.winTimes >= 2) return;
        SplashScene.instance.nextRound();
        FightMainRender.getInstance().Add(this, this.render);
        SplashScene.instance.stage.setChildIndex(this, -1);
    }


    public OpenBlack() {
        if (this.winner.winTimes >= 2||NoviceGuidance.I().AI_stop) {//胜利场数大于等于两场，游戏结束
            SplashScene.instance.clear();
            let victory = SplashScene.instance.player == 1 ? _level0.deepCompare(_level0.P1_role, this.winner) : _level0.deepCompare(_level0.P2_role, this.winner);
            if(NoviceGuidance.I().AI_stop) victory = true;
            SceneManager.getInstance().ChangeScene(new FightOver(victory, SplashScene.instance.type, SplashScene.instance.player == 1?SplashScene.instance.playInfo.p1:SplashScene.instance.playInfo.p2));
            this.stage.removeChild(this);
            FightMainRender.getInstance().destroy();
            return;
        }
        egret.Tween.get(this.black1).to({ y: -UI.WINSIZE_H / 2 }, 500, egret.Ease.sineIn);
        egret.Tween.get(this.black2).to({ y: UI.WINSIZE_H }, 500, egret.Ease.sineIn);
    }

    public AddRoundBegin_Animate() {
        // if (this.winner.winTimes < 2) {
        //     SplashScene.instance.stage.addChild(new Round(_level0.P1_role.winTimes + _level0.P2_role.winTimes + 1))
        // }
        this.stage.removeChild(this);
    }
}