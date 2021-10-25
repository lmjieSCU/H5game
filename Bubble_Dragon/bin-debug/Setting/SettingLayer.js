var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SettingLayer = (function (_super) {
    __extends(SettingLayer, _super);
    function SettingLayer() {
        var _this = _super.call(this) || this;
        return _this;
    }
    SettingLayer.prototype.onEnter = function () {
        this.node = new egret.DisplayObjectContainer();
        this.addChild(this.node);
        var circle = UI.addPic("circle_png", false, this.node);
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
    };
    SettingLayer.prototype.onsetting_btn_touched = function (e) {
        SoundCtrl.getInstance().playmusic("anniu");
        if (this.isShow) {
            this.hide();
        }
        else {
            this.show();
        }
        return;
    };
    SettingLayer.prototype.onsoundoff_btn_touched = function (e) {
        SoundCtrl.getInstance().playmusic("anniu");
        this.setSound(true);
        return;
    };
    SettingLayer.prototype.onsoundon_btn_touched = function (e) {
        SoundCtrl.getInstance().playmusic("anniu");
        this.setSound(false);
        return;
    };
    SettingLayer.prototype.onmusic_btn_touched = function (e) {
        SoundCtrl.getInstance().playmusic("anniu");
        this.setMusic(false);
        return;
    };
    SettingLayer.prototype.onmusicoff_btn_touched = function (e) {
        SoundCtrl.getInstance().playmusic("anniu");
        this.setMusic(true);
        return;
    };
    SettingLayer.prototype.show = function () {
        this.node.scaleX = 0;
        this.node.scaleY = 0;
        egret.Tween.get(this.node).to({ "scaleX": 1, "scaleY": 1 }, 300);
        this.isShow = true;
        return;
    };
    SettingLayer.prototype.hide = function () {
        egret.Tween.removeTweens(this.node);
        egret.Tween.get(this.node).to({ "scaleX": 0, "scaleY": 0 }, 300);
        this.isShow = false;
        Model.settingModel.saveData();
        return;
    };
    //特效音效
    SettingLayer.prototype.setSound = function (arg1, isfirst) {
        if (isfirst === void 0) { isfirst = false; }
        Model.settingModel.sound = arg1;
        Model.settingModel.saveData();
        if (arg1 && !isfirst) {
            SoundCtrl.getInstance().playmusic("anniu");
        }
        else {
            SoundCtrl.getInstance().stopMusic();
        }
        this.soundoff_btn.visible = !Model.settingModel.sound;
        this.soundon_btn.visible = Model.settingModel.sound;
        return;
    };
    //背景音效
    SettingLayer.prototype.setMusic = function (arg1) {
        Model.settingModel.music = arg1;
        Model.settingModel.saveData();
        if (arg1) {
            SoundCtrl.getInstance().playbgmusic("music_bg");
        }
        else {
            SoundCtrl.getInstance().stopBgMusic();
        }
        this.musicoff_btn.visible = !Model.settingModel.music;
        this.musicon_btn.visible = Model.settingModel.music;
        return;
    };
    SettingLayer.prototype.destroy = function () {
        this.node.removeChildren();
        this.node = null;
        this.removeChildren();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        return;
    };
    SettingLayer.prototype.onExit = function () {
        this.destroy();
        return;
    };
    return SettingLayer;
}(Scene));
__reflect(SettingLayer.prototype, "SettingLayer");
//# sourceMappingURL=SettingLayer.js.map