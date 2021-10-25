class GameTipLayer extends Scene {

    public iknow_btn: egret.Bitmap;

    public close_btn: egret.Bitmap;

    public constructor() {
        super();
        let gametip = UI.addPic("gametip_png", true, this);
        UI.setscalXandY(gametip,1,1.2);
        this.iknow_btn = UI.addPic("res.iknow_btn", true, this, 0, gametip.height / 2 - 30);
        this.close_btn = UI.addPic("res.close_btn", true, this, gametip.width / 2, 30 - gametip.height / 2);
        UI.addClickAction(this, this.iknow_btn, this.onBtnTouch);
        UI.addClickAction(this, this.close_btn, this.onBtnTouch);
        this.setdata(Config.levelCfgParser.getLevelCfg(Model.levelModel.selectedLevel).tipId);
        return;
    }

    public onEnter() {

    }

    public onExit() {

    }


    public onBtnTouch(arg1: egret.TouchEvent): void {
        this.onclose();
        return;
    }

    public onclose(): void {
        SoundCtrl.getInstance().playmusic("anniu");
        egret.Tween.get(this).to({ "x": -400 }, 500);
        egret.setTimeout(function () {
            GameScene.instance.readyGo();
            return;
        }, this, 501);
        return;
    }

    public setdata(arg1: number): void {
        UI.addPic("tip" + arg1 + "_png", true, this);
        this.x = UI.WINSIZE_W;
        this.y = UI.WINSIZE_H * 2 / 3;
        egret.Tween.get(this).to({ "x": UI.WINSIZE_W / 2 }, 500);
        return;
    }
}
