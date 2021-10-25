/**进入游戏初始界面 */
class InitScene extends Scene {
    public bg: egret.Bitmap;
    public toChooseLvBtn: egret.Bitmap;
    public static instance: InitScene;
    constructor() {
        super();
    }

    public onEnter() {
        SoundCtrl.I.playbgSound("bgsound");
        InitScene.instance = this;
        this.bg = UI.addPic(this, "init_png", true);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 1.7);
        UI.setscalXandY(this.bg, UI.WINSIZE_W * 1.2 / this.bg.width, UI.WINSIZE_H * 1.2 / this.bg.height);
        this.toChooseLvBtn = UI.addPic(this, "next_png", true);
        UI.setXandY(this.toChooseLvBtn, UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 1.2);
        UI.setscalXandY(this.toChooseLvBtn, 150 / this.toChooseLvBtn.width, 150 / this.toChooseLvBtn.height);
        UI.addClickAction(this, this.toChooseLvBtn, this.TochooseScene);
        this.toChooseLvBtn.alpha = 0;
        DailyLogonCtrl.I.checkLogon();
    }

    public TochooseScene(): void {
        SceneManager.I.ChangeScene(new ChooseScene);
    }

    public onExit() {

    }
}