/**游戏菜单
 * 包含:声音设置以及开始游戏按钮
 * 由menuModule创建
 */
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
var menuScene = (function (_super) {
    __extends(menuScene, _super);
    function menuScene() {
        var _this = _super.call(this) || this;
        return _this;
    }
    menuScene.prototype.onEnter = function () {
        //==============================图片===========================================
        var GameEntry_bg = UI.addPic("GameEntry_bg_jpg", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        GameEntry_bg.scaleY = UI.WINSIZE_H * 1.1 / GameEntry_bg.height;
        GameEntry_bg.scaleX = UI.WINSIZE_W * 1.1 / GameEntry_bg.width;
        UI.addPic("res.title", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 4);
        //=============================按钮============================================
        this.begin_btn = UI.addPic("res.play_btn", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H * 2.5 / 4);
        UI.addClickAction(this, this.begin_btn, this.onBeginbtnTouch);
        //=============================动画=============================================
        egret.Tween.get(this.begin_btn, { loop: true }).to({ "scaleX": 1.3, "scaleY": 0.7 }).wait(100).to({ "scaleX": 1, "scaleY": 1 }).wait(2000);
        //=============================Layer============================================
        SceneManager.getInstance().AddLayer(new SettingLayer());
    };
    menuScene.prototype.onBeginbtnTouch = function () {
        egret.Tween.removeTweens(this.begin_btn);
        SoundCtrl.getInstance().playmusic("anniu");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MAP_UI));
        return;
    };
    menuScene.prototype.onExit = function () {
    };
    return menuScene;
}(Scene));
__reflect(menuScene.prototype, "menuScene");
//# sourceMappingURL=menuScene.js.map