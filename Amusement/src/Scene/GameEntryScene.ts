class GameEntryScene extends Scene {
    public begin_btn: egret.Bitmap;

    public constructor() {
        super();
        return;
    }

    public onEnter() {
        this.init();
        let GameEntry_bg = UI.addPic("GameEntry_bg_jpg", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        GameEntry_bg.scaleY = UI.WINSIZE_H * 1.1 / GameEntry_bg.height;
        UI.addPic("GameEntry_logo_png", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 4);
        this.begin_btn = UI.addPic("play_btn_png", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H * 2.5 / 4);
        egret.Tween.get(this.begin_btn, { loop: true }).to({ "scaleX": 1.3, "scaleY": 0.7 }).wait(100).to({ "scaleX": 1, "scaleY": 1 }).wait(2000);
        UI.addClickAction(this, this.begin_btn, this.onTouch);
        let setting = new SettingPanel();
        this.addChild(setting);

    }

    public onTouch() {
        egret.Tween.removeTweens(this.begin_btn);
        SoundCtrl.I.playmusic("button_down");
        egret.setTimeout(function () {
            SceneManager.I.ChangeScene(new MapScene);
        }, this, 200);
        return;
    }

    public onExit() {

    }

    public init(): void {
        Model.levelModel.loadData();
        Model.settingModel.loadData();
        Model.gameModel.isTest = true;
        GameModule.getInstance().init();
        EndModule.getInstance().init();
        MapModule.getInstance().init();
        GuideModule.getInstance().init();
        return;
    }
}
