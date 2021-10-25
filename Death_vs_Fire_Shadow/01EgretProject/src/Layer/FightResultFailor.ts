class FightResultFailor extends Scene {
    public static instance: FightResultFailor;
    public _overBg: egret.Bitmap;
    public constructor() {
        super();
        player1id = null;
        player2id = null;
    }

    protected onEnter() {
        FightResultFailor.instance = this;
        //深色背景图
        this._overBg = UI.addPic(this, "settlement_background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);

        //失败图
        UI.addPic(this, "logo_defeat_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 - 25, true);

        //奖励块
        UI.addPic(this, "box_award_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "logo_gold_png", UI.WINSIZE_W / 2 - 110, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "with_png", UI.WINSIZE_W / 2 - 80, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "logo_diamonds_png", UI.WINSIZE_W / 2 + 45, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "with_png", UI.WINSIZE_W / 2 + 75, UI.WINSIZE_H / 2 + 100, true);

        //选择按钮
        UI.addBtn(this, "button_back_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 182, true, function (arg) {
            SceneManager.Instance.changeScene(new FightloadScene(1));
        });
        //UI.addBtn(this, "button_restart_png", UI.WINSIZE_W / 2+155, UI.WINSIZE_H / 2+182, true, function(arg){

        //  });
    }

    protected onExit() {

    }
}