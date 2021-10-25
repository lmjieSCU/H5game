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
/**进入游戏初始界面 */
var InitScene = (function (_super) {
    __extends(InitScene, _super);
    function InitScene() {
        return _super.call(this) || this;
    }
    InitScene.prototype.onEnter = function () {
        SoundCtrl.I.playbgSound("bgsound");
        InitScene.instance = this;
        this.bg = UI.addPic(this, "init_png", true);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 1.7);
        UI.setscalXandY(this.bg, UI.WINSIZE_W * 1.2 / this.bg.width, UI.WINSIZE_H * 1.2 / this.bg.height);
        this.toChooseLvBtn = UI.addPic(this, "next_png", true);
        UI.setXandY(this.toChooseLvBtn, UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 1.2);
        UI.setscalXandY(this.toChooseLvBtn, 150 / this.toChooseLvBtn.width, 150 / this.toChooseLvBtn.height);
        UI.addClickAction(this, this.toChooseLvBtn, this.TochooseScene);
        this.toChooseLvBtn.alpha = 0;
        DailyLogonCtrl.I.checkLogon();
    };
    InitScene.prototype.TochooseScene = function () {
        SceneManager.I.ChangeScene(new ChooseScene);
    };
    InitScene.prototype.onExit = function () {
    };
    return InitScene;
}(Scene));
__reflect(InitScene.prototype, "InitScene");
//# sourceMappingURL=InitScene.js.map