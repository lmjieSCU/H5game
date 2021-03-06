class PausePanel extends BasePanel3D {

    public soundoff_btn: egret.Bitmap;

    public soundon_btn: egret.Bitmap;

    public back_btn: egret.Bitmap;

    public continue_btn: egret.Bitmap;

    public retry_btn: egret.Bitmap;

    public musicoff_btn: egret.Bitmap;

    public musicon_btn: egret.Bitmap;

    public btns: Array<egret.Bitmap>;

    public points: Array<egret.Point>;

    public container: egret.DisplayObjectContainer;

    public mask_bg: egret.Bitmap;

    public constructor() {
        super();
        GameCtrl.I._fightCtrl.container.$setTouchEnabled(false);
        this.mask_bg = UI.addPic("cube_png", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.mask_bg, UI.WINSIZE_W * 1.1 / this.mask_bg.width, UI.WINSIZE_H * 1.1 / this.mask_bg.height);
        this.container = new egret.DisplayObjectContainer();
        this.addChild(this.container);
        this.back_btn = UI.addPic("back_btn_png", true, this.container, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        this.musicoff_btn = UI.addPic("musicoff_btn_png", true, this.container);
        this.musicon_btn = UI.addPic("musicon_btn_png", true, this.container);
        this.soundon_btn = UI.addPic("soundon_btn_png", true, this.container);
        this.soundoff_btn = UI.addPic("soundoff_btn_png", true, this.container);
        this.continue_btn = UI.addPic("continue_btn_png", true, this.container);
        this.retry_btn = UI.addPic("retry_btn_png", true, this.container);
        this.back_btn.scaleY = 0.8;
        this.back_btn.scaleX = 0.8;
        this.btns = [];
        this.btns.push(this.musicoff_btn);
        this.btns.push(this.musicon_btn);
        this.btns.push(this.soundon_btn);
        this.btns.push(this.soundoff_btn);
        this.btns.push(this.continue_btn);
        this.btns.push(this.retry_btn);
        this.points = [];
        this.points.push(new egret.Point(UI.WINSIZE_W / 4, UI.WINSIZE_H / 2));
        this.points.push(new egret.Point(UI.WINSIZE_W / 4, UI.WINSIZE_H / 2));
        this.points.push(new egret.Point(UI.WINSIZE_W * 3 / 4, UI.WINSIZE_H / 2));
        this.points.push(new egret.Point(UI.WINSIZE_W * 3 / 4, UI.WINSIZE_H / 2));
        this.points.push(new egret.Point(UI.WINSIZE_W / 2, UI.WINSIZE_H / 4));
        this.points.push(new egret.Point(UI.WINSIZE_W / 2, UI.WINSIZE_H * 3 / 4));
        UI.addClickAction(this, this.musicoff_btn, this.onmusicoff_btn_touched);
        UI.addClickAction(this, this.musicon_btn, this.onmusic_btn_touched);
        UI.addClickAction(this, this.soundoff_btn, this.onsoundoff_btn_touched);
        UI.addClickAction(this, this.soundon_btn, this.onsoundon_btn_touched);
        UI.addClickAction(this, this.retry_btn, this.onretry_btn_touched);
        UI.addClickAction(this, this.back_btn, this.onback_btn_touched);
        UI.addClickAction(this, this.continue_btn, this.oncontinue_btn_touched);

        this.setSound(Model.settingModel.sound);
        this.setMusic(Model.settingModel.music);
        this.show();
        return;
    }


    public show(): void {
        let loc2: egret.Bitmap = null;
        this.back_btn.scaleY = 0;
        this.back_btn.scaleX = 0;
        egret.Tween.get(this.back_btn).to({ "scaleX": 0.8, "scaleY": 0.8 }, 600);
        let loc1 = 0;
        for (let loc1 = 0; loc1 < this.btns.length; ++loc1) {
            loc2 = this.btns[loc1];
            loc2.scaleY = 0.8;
            loc2.scaleX = 0.8;
            loc2.x = UI.WINSIZE_W / 2;
            loc2.y = UI.WINSIZE_H / 2;
            egret.Tween.get(loc2).to({ "x": this.points[loc1].x, "y": this.points[loc1].y }, 500);
        }
        return;
    }

    public close(): void {
        super.close();
        Model.settingModel.saveData();
        return;
    }

    public onsoundoff_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.I.playmusic("button_down");
        this.setSound(true);
        return;
    }

    public onsoundon_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.I.playmusic("button_down");
        this.setSound(false);
        return;
    }

    public onmusic_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.I.playmusic("button_down");
        this.setMusic(false);
        return;
    }


    public onmusicoff_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.I.playmusic("button_down");
        this.setMusic(true);
        return;
    }

    //????????????
    public setSound(arg1: boolean, isfirst: boolean = false): void {
        Model.settingModel.sound = arg1;
        Model.settingModel.saveData();
        if (arg1 && !isfirst) {
            SoundCtrl.I.playmusic("button_down");
        } else {
            SoundCtrl.I.stopMusic();
        }
        this.soundoff_btn.visible = !Model.settingModel.sound;
        this.soundon_btn.visible = Model.settingModel.sound;
        return;
    }

    //????????????
    public setMusic(arg1: boolean): void {
        Model.settingModel.music = arg1;
        Model.settingModel.saveData();
        if (arg1) {
            SoundCtrl.I.playbgmusic("music_bg");
        } else {
            SoundCtrl.I.stopBgMusic();
        }
        this.musicoff_btn.visible = !Model.settingModel.music;
        this.musicon_btn.visible = Model.settingModel.music;
        return;
    }

    public onretry_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.container.$setTouchEnabled(true);
        GameCtrl.I._fightCtrl.destory();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        return;
    }

    public onback_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.container.$setTouchEnabled(true);
        GameCtrl.I._fightCtrl.destory();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    }

    public oncontinue_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.container.$setTouchEnabled(true);
        this.close();
    }

}
