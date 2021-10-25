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
var GameEntryScene = (function (_super) {
    __extends(GameEntryScene, _super);
    function GameEntryScene() {
        var _this = _super.call(this) || this;
        return _this;
    }
    GameEntryScene.prototype.onEnter = function () {
        this.init();
        var GameEntry_bg = UI.addPic("GameEntry_bg_jpg", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        GameEntry_bg.scaleY = UI.WINSIZE_H * 1.1 / GameEntry_bg.height;
        UI.addPic("GameEntry_logo_png", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 4);
        this.begin_btn = UI.addPic("play_btn_png", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H * 2.5 / 4);
        egret.Tween.get(this.begin_btn, { loop: true }).to({ "scaleX": 1.3, "scaleY": 0.7 }).wait(100).to({ "scaleX": 1, "scaleY": 1 }).wait(2000);
        UI.addClickAction(this, this.begin_btn, this.onTouch);
        var setting = new SettingPanel();
        this.addChild(setting);
    };
    GameEntryScene.prototype.onTouch = function () {
        egret.Tween.removeTweens(this.begin_btn);
        SoundCtrl.I.playmusic("button_down");
        egret.setTimeout(function () {
            SceneManager.I.ChangeScene(new MapScene);
        }, this, 200);
        return;
    };
    GameEntryScene.prototype.onExit = function () {
    };
    GameEntryScene.prototype.init = function () {
        Model.levelModel.loadData();
        Model.settingModel.loadData();
        Model.gameModel.isTest = true;
        GameModule.getInstance().init();
        EndModule.getInstance().init();
        MapModule.getInstance().init();
        GuideModule.getInstance().init();
        return;
    };
    return GameEntryScene;
}(Scene));
__reflect(GameEntryScene.prototype, "GameEntryScene");
//# sourceMappingURL=GameEntryScene.js.map