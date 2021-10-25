class GameInfoPanel extends Elements {

    public levelLabel: egret.BitmapText;

    public scorelLabel: egret.BitmapText;

    public highScoreLabel: egret.BitmapText;

    public pause_btn: egret.Bitmap;

    public hbar: HProgressBar;

    public topinfo: egret.Bitmap;

    public constructor() {
        super();
        this.topinfo = UI.addPic("res.topinfo", false, this, 0, 0);
        this.topinfo.anchorOffsetX = this.topinfo.width / 2;
        UI.setscalXandY(this.topinfo, UI.WINSIZE_W * 1.1 / this.topinfo.width, UI.WINSIZE_W * 1.1 / this.topinfo.width);
        this.levelLabel = UI.addBitText(this,"","info_fnt",false,-UI.WINSIZE_W / 2 + 55,60);
        this.levelLabel.textAlign = "center";

        this.scorelLabel = UI.addBitText(this,"","info_fnt",false,50,60);
        this.scorelLabel.textAlign = "center";

        this.highScoreLabel = UI.addBitText(this,"","info_fnt",false, UI.WINSIZE_W / 2 - 120,60);
        this.highScoreLabel.textAlign = "center";


        this.pause_btn = UI.addPic("res.pause_btn", true, this, UI.WINSIZE_W / 2 - 30, 60);
        UI.addClickAction(this, this.pause_btn, this.onBtnTouch);
        this.hbar = new HProgressBar();
        this.hbar.x = -110;
        this.hbar.y = 60;
        this.addChild(this.hbar);
        this.setPercent(0);
        return;
    }


    public onBtnTouch(arg1: egret.TouchEvent): void {
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_PAUSE_UI));
        return;
    }

    public updateInfo(): void {
        this.levelLabel.text = String(Model.levelModel.selectedLevel);
        this.scorelLabel.text = String(Model.levelModel.currentScore);
        this.highScoreLabel.text = String(Model.levelModel.currentHighScore);
        UI.FreshLocation(this.levelLabel);
        UI.FreshLocation(this.scorelLabel);
        UI.FreshLocation(this.highScoreLabel);
        return;
    }

    public setPercent(arg1: number): void {
        this.hbar.ratio = arg1;
        return;
    }

}
