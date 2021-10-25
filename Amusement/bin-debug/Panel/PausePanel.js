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
var PausePanel = (function (_super) {
    __extends(PausePanel, _super);
    function PausePanel() {
        var _this = _super.call(this) || this;
        GameCtrl.I._fightCtrl.container.$setTouchEnabled(false);
        _this.mask_bg = UI.addPic("cube_png", true, _this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(_this.mask_bg, UI.WINSIZE_W * 1.1 / _this.mask_bg.width, UI.WINSIZE_H * 1.1 / _this.mask_bg.height);
        _this.container = new egret.DisplayObjectContainer();
        _this.addChild(_this.container);
        _this.back_btn = UI.addPic("back_btn_png", true, _this.container, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        _this.musicoff_btn = UI.addPic("musicoff_btn_png", true, _this.container);
        _this.musicon_btn = UI.addPic("musicon_btn_png", true, _this.container);
        _this.soundon_btn = UI.addPic("soundon_btn_png", true, _this.container);
        _this.soundoff_btn = UI.addPic("soundoff_btn_png", true, _this.container);
        _this.continue_btn = UI.addPic("continue_btn_png", true, _this.container);
        _this.retry_btn = UI.addPic("retry_btn_png", true, _this.container);
        _this.back_btn.scaleY = 0.8;
        _this.back_btn.scaleX = 0.8;
        _this.btns = [];
        _this.btns.push(_this.musicoff_btn);
        _this.btns.push(_this.musicon_btn);
        _this.btns.push(_this.soundon_btn);
        _this.btns.push(_this.soundoff_btn);
        _this.btns.push(_this.continue_btn);
        _this.btns.push(_this.retry_btn);
        _this.points = [];
        _this.points.push(new egret.Point(UI.WINSIZE_W / 4, UI.WINSIZE_H / 2));
        _this.points.push(new egret.Point(UI.WINSIZE_W / 4, UI.WINSIZE_H / 2));
        _this.points.push(new egret.Point(UI.WINSIZE_W * 3 / 4, UI.WINSIZE_H / 2));
        _this.points.push(new egret.Point(UI.WINSIZE_W * 3 / 4, UI.WINSIZE_H / 2));
        _this.points.push(new egret.Point(UI.WINSIZE_W / 2, UI.WINSIZE_H / 4));
        _this.points.push(new egret.Point(UI.WINSIZE_W / 2, UI.WINSIZE_H * 3 / 4));
        UI.addClickAction(_this, _this.musicoff_btn, _this.onmusicoff_btn_touched);
        UI.addClickAction(_this, _this.musicon_btn, _this.onmusic_btn_touched);
        UI.addClickAction(_this, _this.soundoff_btn, _this.onsoundoff_btn_touched);
        UI.addClickAction(_this, _this.soundon_btn, _this.onsoundon_btn_touched);
        UI.addClickAction(_this, _this.retry_btn, _this.onretry_btn_touched);
        UI.addClickAction(_this, _this.back_btn, _this.onback_btn_touched);
        UI.addClickAction(_this, _this.continue_btn, _this.oncontinue_btn_touched);
        _this.setSound(Model.settingModel.sound);
        _this.setMusic(Model.settingModel.music);
        _this.show();
        return _this;
    }
    PausePanel.prototype.show = function () {
        var loc2 = null;
        this.back_btn.scaleY = 0;
        this.back_btn.scaleX = 0;
        egret.Tween.get(this.back_btn).to({ "scaleX": 0.8, "scaleY": 0.8 }, 600);
        var loc1 = 0;
        for (var loc1_1 = 0; loc1_1 < this.btns.length; ++loc1_1) {
            loc2 = this.btns[loc1_1];
            loc2.scaleY = 0.8;
            loc2.scaleX = 0.8;
            loc2.x = UI.WINSIZE_W / 2;
            loc2.y = UI.WINSIZE_H / 2;
            egret.Tween.get(loc2).to({ "x": this.points[loc1_1].x, "y": this.points[loc1_1].y }, 500);
        }
        return;
    };
    PausePanel.prototype.close = function () {
        _super.prototype.close.call(this);
        Model.settingModel.saveData();
        return;
    };
    PausePanel.prototype.onsoundoff_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        this.setSound(true);
        return;
    };
    PausePanel.prototype.onsoundon_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        this.setSound(false);
        return;
    };
    PausePanel.prototype.onmusic_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        this.setMusic(false);
        return;
    };
    PausePanel.prototype.onmusicoff_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        this.setMusic(true);
        return;
    };
    //特效音效
    PausePanel.prototype.setSound = function (arg1, isfirst) {
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
    PausePanel.prototype.setMusic = function (arg1) {
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
    PausePanel.prototype.onretry_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.container.$setTouchEnabled(true);
        GameCtrl.I._fightCtrl.destory();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        return;
    };
    PausePanel.prototype.onback_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.container.$setTouchEnabled(true);
        GameCtrl.I._fightCtrl.destory();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    };
    PausePanel.prototype.oncontinue_btn_touched = function (e) {
        SoundCtrl.I.playmusic("button_down");
        GameCtrl.I._fightCtrl.container.$setTouchEnabled(true);
        this.close();
    };
    return PausePanel;
}(BasePanel3D));
__reflect(PausePanel.prototype, "PausePanel");
//# sourceMappingURL=PausePanel.js.map