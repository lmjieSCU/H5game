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
var SettingPanel = (function (_super) {
    __extends(SettingPanel, _super);
    function SettingPanel() {
        var _this = _super.call(this) || this;
        _this.node = new egret.DisplayObjectContainer();
        _this.addChild(_this.node);
        var circle = UI.addPic("circle_png", false, _this.node);
        _this.musicoff_btn = UI.addPic("musicoff_btn_png", false, _this.node);
        _this.musicon_btn = UI.addPic("musicon_btn_png", false, _this.node);
        _this.soundoff_btn = UI.addPic("soundoff_btn_png", false, _this.node);
        _this.soundon_btn = UI.addPic("soundon_btn_png", false, _this.node);
        UI.setXandY(_this.soundoff_btn, circle.width - _this.soundoff_btn.width, circle.height - _this.soundoff_btn.height);
        UI.setXandY(_this.soundon_btn, circle.width - _this.soundon_btn.width, circle.height - _this.soundon_btn.height);
        UI.addClickAction(_this, _this.musicoff_btn, _this.onmusicoff_btn_touched);
        UI.addClickAction(_this, _this.musicon_btn, _this.onmusic_btn_touched);
        UI.addClickAction(_this, _this.soundoff_btn, _this.onsoundoff_btn_touched);
        UI.addClickAction(_this, _this.soundon_btn, _this.onsoundon_btn_touched);
        _this.setting_btn = UI.addPic("setting_btn_png", false, _this);
        _this.setting_btn.anchorOffsetY = _this.setting_btn.height;
        _this.setting_btn.y = UI.WINSIZE_H;
        UI.addClickAction(_this, _this.setting_btn, _this.onsetting_btn_touched);
        _this.node.scaleX = 0;
        _this.node.scaleY = 0;
        _this.node.anchorOffsetY = _this.node.height;
        _this.node.y = UI.WINSIZE_H;
        _this.isShow = false;
        _this.setSound(Model.settingModel.sound, true);
        _this.setMusic(Model.settingModel.music);
        return _this;
    }
    SettingPanel.prototype.onsetting_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        if (this.isShow) {
            this.hide();
        }
        else {
            this.show();
        }
        return;
    };
    SettingPanel.prototype.onsoundoff_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        this.setSound(true);
        return;
    };
    SettingPanel.prototype.onsoundon_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        this.setSound(false);
        return;
    };
    SettingPanel.prototype.onmusic_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        this.setMusic(false);
        return;
    };
    SettingPanel.prototype.onmusicoff_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        this.setMusic(true);
        return;
    };
    SettingPanel.prototype.show = function () {
        this.node.scaleX = 0;
        this.node.scaleY = 0;
        egret.Tween.get(this.node).to({ "scaleX": 1, "scaleY": 1 }, 300);
        this.isShow = true;
        return;
    };
    SettingPanel.prototype.hide = function () {
        egret.Tween.removeTweens(this.node);
        egret.Tween.get(this.node).to({ "scaleX": 0, "scaleY": 0 }, 300);
        this.isShow = false;
        Model.settingModel.saveData();
        return;
    };
    //特效音效
    SettingPanel.prototype.setSound = function (arg1, isfirst) {
        if (isfirst === void 0) { isfirst = false; }
        Model.settingModel.sound = arg1;
        Model.settingModel.saveData();
        if (arg1 && !isfirst) {
            SoundCtrl.I.playmusic("button_down");
        }
        else {
            SoundCtrl.I.stopMusic();
        }
        this.soundoff_btn.visible = !Model.settingModel.sound;
        this.soundon_btn.visible = Model.settingModel.sound;
        return;
    };
    //背景音效
    SettingPanel.prototype.setMusic = function (arg1) {
        Model.settingModel.music = arg1;
        Model.settingModel.saveData();
        if (arg1) {
            SoundCtrl.I.playbgmusic("music_bg");
        }
        else {
            SoundCtrl.I.stopBgMusic();
        }
        this.musicoff_btn.visible = !Model.settingModel.music;
        this.musicon_btn.visible = Model.settingModel.music;
        return;
    };
    return SettingPanel;
}(Elements));
__reflect(SettingPanel.prototype, "SettingPanel");
//# sourceMappingURL=SettingPanel.js.map