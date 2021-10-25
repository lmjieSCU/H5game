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
/**帮助界面
 * 不会暂停游戏
 */
var HelpLayer = (function (_super) {
    __extends(HelpLayer, _super);
    function HelpLayer() {
        return _super.call(this) || this;
    }
    HelpLayer.prototype.onEnter = function () {
        this.bg = UI.addPic(this, "pause_png", true);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.bg, UI.WINSIZE_W / this.bg.width, UI.WINSIZE_W / this.bg.width);
        //
        this.reStartBtn = UI.addPic(this, "restart_png", true);
        UI.setXandY(this.reStartBtn, UI.WINSIZE_W * 6 / 7, UI.WINSIZE_H / 1.2);
        this.GamingBtn = UI.addPic(this, "next_png", true);
        UI.setXandY(this.GamingBtn, UI.WINSIZE_W * 4 / 7, UI.WINSIZE_H / 1.2);
        this.toChooseLvBtn = UI.addPic(this, "return_png", true);
        UI.setXandY(this.toChooseLvBtn, UI.WINSIZE_W * 2 / 7, UI.WINSIZE_H / 1.2);
        var tex = SoundCtrl.I.isForbidden ? "musicSwitchOff_png" : "musicSwitch_png";
        this.musicSwitchBtn = UI.addPic(this, tex, true);
        UI.setXandY(this.musicSwitchBtn, UI.WINSIZE_W / 1.1, UI.WINSIZE_H / 2);
        //
        UI.addClickAction(this, this.toChooseLvBtn, this.ToChooseScene);
        UI.addClickAction(this, this.reStartBtn, this.RestartGame);
        UI.addClickAction(this, this.GamingBtn, this.ContinGame);
        UI.addClickAction(this, this.musicSwitchBtn, this.musicSwitch);
    };
    HelpLayer.prototype.ToChooseScene = function () {
        this.stage.removeChild(this);
        SceneManager.I.ChangeScene(new ChooseScene);
    };
    HelpLayer.prototype.RestartGame = function () {
        this.stage.removeChild(this);
        GameCtrl.I._gamestate._playerLayer.$setTouchChildren(true);
        GameCtrl.I.GameStart();
    };
    HelpLayer.prototype.ContinGame = function () {
        this.stage.removeChild(this);
        GameCtrl.I._gamestate._playerLayer.$setTouchChildren(true);
    };
    HelpLayer.prototype.musicSwitch = function () {
        SoundCtrl.I.changeForbidden();
        if (SoundCtrl.I.isForbidden) {
            this.musicSwitchBtn.texture = RES.getRes("musicSwitchOff_png");
        }
        else {
            this.musicSwitchBtn.texture = RES.getRes("musicSwitch_png");
        }
    };
    HelpLayer.prototype.onExit = function () {
    };
    return HelpLayer;
}(Scene));
__reflect(HelpLayer.prototype, "HelpLayer");
//# sourceMappingURL=HelpLayer.js.map