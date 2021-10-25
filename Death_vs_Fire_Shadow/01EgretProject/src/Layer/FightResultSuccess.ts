class FightResultSuccess extends Scene {
    public static instance: FightResultSuccess;
    public _yellowStar: Array<egret.Bitmap> = [];
    public _grayStar: Array<egret.Bitmap> = [];
    public constructor() {
        super();
        player1id = null;
        player2id = null;
    }

    protected onEnter() {
        FightResultSuccess.instance = this;
        //深色背景图
        UI.addPic(this, "settlement_background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        //胜利图
        UI.addPic(this, "logo_vicotry_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 - 25, true);
        //星星
        this._grayStar[0] = UI.addPic(this, "defeat_star_png", UI.WINSIZE_W / 2 - 48, UI.WINSIZE_H / 3 - 94, true);
        this._grayStar[1] = UI.addPic(this, "defeat_star_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 3 - 111, true);
        this._grayStar[2] = UI.addPic(this, "defeat_star_png", UI.WINSIZE_W / 2 + 48, UI.WINSIZE_H / 3 - 94, true);
        this._yellowStar[0] = UI.addPic(this, "logo_star_png", UI.WINSIZE_W / 2 - 48, UI.WINSIZE_H / 3 - 94, true);
        this._yellowStar[1] = UI.addPic(this, "logo_star_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 3 - 111, true);
        this._yellowStar[2] = UI.addPic(this, "logo_star_png", UI.WINSIZE_W / 2 + 48, UI.WINSIZE_H / 3 - 94, true);

        for (let i = 0; i < 3; i++) {
            this._yellowStar[i].alpha = 0;
            this._yellowStar[i].scaleX = 4;
            this._yellowStar[i].scaleY = 4;
        }

        //奖励块
        UI.addPic(this, "box_award_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "logo_gold_png", UI.WINSIZE_W / 2 - 110, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "with_png", UI.WINSIZE_W / 2 - 80, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "logo_diamonds_png", UI.WINSIZE_W / 2 + 45, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "with_png", UI.WINSIZE_W / 2 + 75, UI.WINSIZE_H / 2 + 100, true);

        //选择按钮
        UI.addBtn(this, "button_getreward_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 162, true, function (arg) {
            SceneManager.Instance.changeScene(new FightloadScene(1));
        });
        UI.addBtn(this, "Direct_collection_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 213, true, function (arg) {

        });

        //星星动画
        let tw1 = egret.Tween.get(this._yellowStar[0]);
        tw1.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        let tw2 = egret.Tween.get(this._yellowStar[1]).wait(300);
        tw2.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        let tw3 = egret.Tween.get(this._yellowStar[2]).wait(600);
        tw3.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
    }

    protected onExit() {

    }
}