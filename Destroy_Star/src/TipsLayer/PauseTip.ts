class PauseTip extends egret.DisplayObjectContainer {
    private _bg: egret.Bitmap;
    public static instance: PauseTip;
    private _begin: egret.Bitmap;
    private _ReturnChoose: egret.Bitmap;
    private _sound: egret.Bitmap;
    private _Clickmodel: egret.Bitmap;
    private _defeat: egret.Bitmap;
    private _success: egret.Bitmap;
    private _bomb: egret.Bitmap;
    private _paint: egret.Bitmap;
    private _update: egret.Bitmap;
    private _rules: egret.TextField;
    private _props: Array<egret.TextField> = [];
    private success: egret.TextField;
    private defeat: egret.TextField;



    constructor() {
        super();
        PauseTip.instance = this;
        this._bg = UI.addPic(this, "bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.setscalXandY(this._bg, UI.WINSIZE_W * 1.1 / this._bg.width, UI.WINSIZE_H * 1.1 / this._bg.height);
        this._begin = UI.addPic(this, "begin_png", UI.WINSIZE_W / 5, UI.WINSIZE_H / 1.1, true);
        this._ReturnChoose = UI.addPic(this, "ReturntoChoose_png", UI.WINSIZE_W * 2 / 5, UI.WINSIZE_H / 1.1, true);
        let s = SoundCtrl.I.Bgtag == true ? "sound_png" : "nosound_png";
        this._sound = UI.addPic(this, s, UI.WINSIZE_W * 3 / 5, UI.WINSIZE_H / 1.1, true);
        let mode = MainMoive.instance.clickmode == true ? "mode1_png" : "mode2_png";
        this._Clickmodel = UI.addPic(this, mode, UI.WINSIZE_W * 4 / 5, UI.WINSIZE_H / 1.1, true);
        this._success = UI.addPic(this, "success_png", UI.WINSIZE_W / 3, UI.WINSIZE_H / 2.5, true);
        this._defeat = UI.addPic(this, "defeat_png", UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 2.5, true);
        this.success = UI.addText(this, "相连", UI.WINSIZE_W / 3, UI.WINSIZE_H / 2.5 + this._success.height / 2 + 50, true);
        this.defeat = UI.addText(this, "不相连", UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 2.5 + this._success.height / 2 + 50, true);
        this._bomb = UI.addPic(this, "mv1_png", UI.WINSIZE_W / 8, UI.WINSIZE_H / 1.6, true);
        this._paint = UI.addPic(this, "mv2_png", UI.WINSIZE_W / 8, UI.WINSIZE_H / 1.4, true);
        this._update = UI.addPic(this, "mv3_png", UI.WINSIZE_W / 8, UI.WINSIZE_H / 1.25, true);
        this._props.push(UI.addText(this, "-炸掉3*3的方块 -5个金币", this._bomb.x + this._bomb.width/2, this._bomb.y - this._bomb.height / 2));
        this._props.push(UI.addText(this, "-自选方块颜色 -2个金币", this._paint.x + this._paint.width/2, this._paint.y - this._paint.height / 2));
        this._props.push(UI.addText(this, "-更新所有方块颜色 -2个金币", this._update.x + this._update.width/2, this._update.y - this._update.height / 2));
        this._rules = UI.addText(this, "基本规则：\n\n- 选中并消除相连的方块\n\n- 选中的方块越多，分数越高\n\n- 剩余方块小于10则有额外奖励", UI.WINSIZE_W / 10, UI.WINSIZE_H / 14);
        this.addBtn();
    }

    private addBtn(): void {
        UI.addClickAction(this, this._Clickmodel, this.ChooseClickMode);
        UI.addClickAction(this, this._begin, this.Begin);
        UI.addClickAction(this, this._ReturnChoose, this.ReturnChoose);
        UI.addClickAction(this, this._sound, this.ChooseMusic);
    }

    private ChooseMusic(): void {
        SoundCtrl.I.Bgtag = !SoundCtrl.I.Bgtag;
        if (SoundCtrl.I.Bgtag == false) {
            PauseTip.instance._sound.texture = RES.getRes("nosound_png");
            SoundCtrl.I.BGclose();
        } else {
            PauseTip.instance._sound.texture = RES.getRes("sound_png");
            switch (GameModel.currentMode) {
                case GameModel.NORMAL: SoundCtrl.I.BGplay("yinyue2"); break;
                case GameModel.TIMELIMIT: SoundCtrl.I.BGplay("yinyue3"); break;
                case GameModel.BULIMIT: SoundCtrl.I.BGplay("yinyue4"); break;
            }
        }
    }

    private ChooseClickMode(): void {
        MainMoive.instance.clickmode = !MainMoive.instance.clickmode;
        let s = MainMoive.instance.clickmode == true ? "mode1_png" : "mode2_png";
        PauseTip.instance._Clickmodel.texture = RES.getRes(s);
    }

    private Begin(): void {
        MainMoive.instance.removeChild(PauseTip.instance);
        MainMoive.instance.begin();
    }

    private ReturnChoose(): void {
        MainMoive.instance.destroy();
        SceneManager.Instance.changeScene(new ChooseScene());
    }

}