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
var GameTipLayer = (function (_super) {
    __extends(GameTipLayer, _super);
    function GameTipLayer() {
        var _this = _super.call(this) || this;
        var gametip = UI.addPic("gametip_png", true, _this);
        UI.setscalXandY(gametip, 1, 1.2);
        _this.iknow_btn = UI.addPic("res.iknow_btn", true, _this, 0, gametip.height / 2 - 30);
        _this.close_btn = UI.addPic("res.close_btn", true, _this, gametip.width / 2, 30 - gametip.height / 2);
        UI.addClickAction(_this, _this.iknow_btn, _this.onBtnTouch);
        UI.addClickAction(_this, _this.close_btn, _this.onBtnTouch);
        _this.setdata(Config.levelCfgParser.getLevelCfg(Model.levelModel.selectedLevel).tipId);
        return _this;
    }
    GameTipLayer.prototype.onEnter = function () {
    };
    GameTipLayer.prototype.onExit = function () {
    };
    GameTipLayer.prototype.onBtnTouch = function (arg1) {
        this.onclose();
        return;
    };
    GameTipLayer.prototype.onclose = function () {
        SoundCtrl.getInstance().playmusic("anniu");
        egret.Tween.get(this).to({ "x": -400 }, 500);
        egret.setTimeout(function () {
            GameScene.instance.readyGo();
            return;
        }, this, 501);
        return;
    };
    GameTipLayer.prototype.setdata = function (arg1) {
        UI.addPic("tip" + arg1 + "_png", true, this);
        this.x = UI.WINSIZE_W;
        this.y = UI.WINSIZE_H * 2 / 3;
        egret.Tween.get(this).to({ "x": UI.WINSIZE_W / 2 }, 500);
        return;
    };
    return GameTipLayer;
}(Scene));
__reflect(GameTipLayer.prototype, "GameTipLayer");
//# sourceMappingURL=GameTipLayer.js.map