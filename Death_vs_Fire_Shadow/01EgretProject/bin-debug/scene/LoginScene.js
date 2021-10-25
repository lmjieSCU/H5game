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
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        var _this = _super.call(this) || this;
        _this.secondFlag = 0;
        return _this;
    }
    LoginScene.prototype.onEnter = function () {
        LoginScene.Instance = this;
        UI.addPic(this, "bg_jpg", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.addBtn(this, "startBtn_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true, function (arg) {
            SplashScene.loginTT();
            var s1 = new GameScene();
            SceneManager.Instance.changeScene(s1);
        });
        SplashScene.playMusic();
        SplashScene.showBannerForce(LoginScene.Instance);
        SplashScene.addVersion(this);
        //UI.addText(this, "H", 111, 111);
    };
    LoginScene.prototype.onExit = function () {
    };
    return LoginScene;
}(Scene));
__reflect(LoginScene.prototype, "LoginScene");
//# sourceMappingURL=LoginScene.js.map