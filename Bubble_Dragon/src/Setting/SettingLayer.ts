class SettingLayer extends Scene {

    public setting_btn: egret.Bitmap;

    public musicoff_btn: egret.Bitmap;

    public musicon_btn: egret.Bitmap;

    public soundoff_btn: egret.Bitmap;

    public soundon_btn: egret.Bitmap;

    public node: egret.DisplayObjectContainer;

    public isShow: boolean;

    public constructor() {
        super();
        return;
    }

    public onEnter(){
        this.node = new egret.DisplayObjectContainer();
        this.addChild(this.node);
        let circle = UI.addPic("circle_png", false, this.node);
        this.musicoff_btn = UI.addPic("musicoff_btn_png", false, this.node);
        this.musicon_btn = UI.addPic("musicon_btn_png", false, this.node);
        this.soundoff_btn = UI.addPic("soundoff_btn_png", false, this.node);
        this.soundon_btn = UI.addPic("soundon_btn_png", false, this.node);
        UI.setXandY(this.soundoff_btn, circle.width - this.soundoff_btn.width, circle.height - this.soundoff_btn.height);
        UI.setXandY(this.soundon_btn, circle.width - this.soundon_btn.width, circle.height - this.soundon_btn.height);
        UI.addClickAction(this, this.musicoff_btn, this.onmusicoff_btn_touched);
        UI.addClickAction(this, this.musicon_btn, this.onmusic_btn_touched);
        UI.addClickAction(this, this.soundoff_btn, this.onsoundoff_btn_touched);
        UI.addClickAction(this, this.soundon_btn, this.onsoundon_btn_touched);
        this.setting_btn = UI.addPic("setting_btn_png", false, this);
        this.setting_btn.anchorOffsetY = this.setting_btn.height;
        this.setting_btn.y = UI.WINSIZE_H;
        UI.addClickAction(this, this.setting_btn, this.onsetting_btn_touched);
        this.node.scaleX = 0;
        this.node.scaleY = 0;
        this.node.anchorOffsetY = this.node.height;
        this.node.y = UI.WINSIZE_H;
        this.isShow = false;
        this.setSound(Model.settingModel.sound, true);
        this.setMusic(Model.settingModel.music);
        return;
    }

    public onsetting_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.getInstance().playmusic("anniu");
        if (this.isShow) {
            this.hide();
        }
        else {
            this.show();
        }
        return;
    }

    public onsoundoff_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.getInstance().playmusic("anniu");
        this.setSound(true);
        return;
    }

    public onsoundon_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.getInstance().playmusic("anniu");
        this.setSound(false);
        return;
    }

    public onmusic_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.getInstance().playmusic("anniu");
        this.setMusic(false);
        return;
    }


    public onmusicoff_btn_touched(e: egret.TouchEvent) {
        SoundCtrl.getInstance().playmusic("anniu");
        this.setMusic(true);
        return;
    }

    public show(): void {
        this.node.scaleX = 0;
        this.node.scaleY = 0;
        egret.Tween.get(this.node).to({ "scaleX": 1, "scaleY": 1 }, 300);
        this.isShow = true;
        return;
    }

    public hide(): void {
        egret.Tween.removeTweens(this.node);
        egret.Tween.get(this.node).to({ "scaleX": 0, "scaleY": 0 }, 300);
        this.isShow = false;
        Model.settingModel.saveData();
        return;
    }

    //特效音效
    public setSound(arg1: boolean, isfirst: boolean = false): void {
        Model.settingModel.sound = arg1;
        Model.settingModel.saveData();
        if (arg1 && !isfirst) {
            SoundCtrl.getInstance().playmusic("anniu");
        } else {
            SoundCtrl.getInstance().stopMusic();
        }
        this.soundoff_btn.visible = !Model.settingModel.sound;
        this.soundon_btn.visible = Model.settingModel.sound;
        return;
    }

    //背景音效
    public setMusic(arg1: boolean): void {
        Model.settingModel.music = arg1;
        Model.settingModel.saveData();
        if (arg1) {
            SoundCtrl.getInstance().playbgmusic("music_bg");
        } else {
            SoundCtrl.getInstance().stopBgMusic();
        }
        this.musicoff_btn.visible = !Model.settingModel.music;
        this.musicon_btn.visible = Model.settingModel.music;
        return;
    }

    public destroy():void{
        this.node.removeChildren();
        this.node = null;
        this.removeChildren();
        if(this.parent){
            this.parent.removeChild(this);
        }
        return;
    }

    public onExit(){
        this.destroy();
        return;
    }

}
