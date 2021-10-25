/**帮助界面
 * 不会暂停游戏
 */
class HelpLayer extends Scene {
    public bg: egret.Bitmap;
    public reStartBtn: egret.Bitmap;
    public GamingBtn: egret.Bitmap;
    public toChooseLvBtn: egret.Bitmap;
    public musicSwitchBtn: egret.Bitmap;


    constructor() {
        super();
    }

    public onEnter() {
        this.bg = UI.addPic(this, "pause_png", true);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.bg, UI.WINSIZE_W / this.bg.width, UI.WINSIZE_W / this.bg.width);
        //
        this.reStartBtn = UI.addPic(this, "restart_png", true);
        UI.setXandY(this.reStartBtn, UI.WINSIZE_W * 6 / 7, UI.WINSIZE_H / 1.2);
        this.GamingBtn = UI.addPic(this, "next_png", true);
        UI.setXandY(this.GamingBtn, UI.WINSIZE_W * 4 / 7, UI.WINSIZE_H / 1.2);
        this.toChooseLvBtn = UI.addPic(this, "return_png", true);
        UI.setXandY(this.toChooseLvBtn, UI.WINSIZE_W * 2 / 7, UI.WINSIZE_H / 1.2);
        let tex = SoundCtrl.I.isForbidden ? "musicSwitchOff_png" : "musicSwitch_png"
        this.musicSwitchBtn = UI.addPic(this, tex, true);
        UI.setXandY(this.musicSwitchBtn, UI.WINSIZE_W / 1.1, UI.WINSIZE_H / 2);
        //
        UI.addClickAction(this, this.toChooseLvBtn, this.ToChooseScene);
        UI.addClickAction(this, this.reStartBtn, this.RestartGame);
        UI.addClickAction(this, this.GamingBtn, this.ContinGame);
        UI.addClickAction(this, this.musicSwitchBtn, this.musicSwitch);

    }

    public ToChooseScene() {
        this.stage.removeChild(this);
        SceneManager.I.ChangeScene(new ChooseScene)
    }

    public RestartGame() {
        this.stage.removeChild(this);
        GameCtrl.I._gamestate._playerLayer.$setTouchChildren(true);
        GameCtrl.I.GameStart();
    }

    public ContinGame() {
        this.stage.removeChild(this);
        GameCtrl.I._gamestate._playerLayer.$setTouchChildren(true);
    }

    public musicSwitch() {
        SoundCtrl.I.changeForbidden();
        if (SoundCtrl.I.isForbidden) {
            this.musicSwitchBtn.texture = RES.getRes("musicSwitchOff_png")
        } else {
            this.musicSwitchBtn.texture = RES.getRes("musicSwitch_png")
        }
    }


    public onExit() {
    }
}