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
var NoSwapTip = (function (_super) {
    __extends(NoSwapTip, _super);
    function NoSwapTip() {
        var _this = _super.call(this) || this;
        UI.addPic("nomatch_png", true, _this);
        _this.x = UI.WINSIZE_W / 2;
        _this.y = UI.WINSIZE_H / 2;
        return _this;
    }
    NoSwapTip.prototype.doAniamtion = function () {
        this.scaleY = 0;
        this.scaleX = 0;
        SoundCtrl.I.playmusic("nomatch");
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 100).call(this.action2, this);
        return;
    };
    NoSwapTip.prototype.action2 = function () {
        egret.Tween.get(this).to({ "y": this.y - 80 }, 700).call(this.onActionEnd, this);
        ;
    };
    NoSwapTip.prototype.onActionEnd = function () {
        egret.Tween.removeTweens(this);
        this.parent.removeChild(this);
        return;
    };
    return NoSwapTip;
}(Elements));
__reflect(NoSwapTip.prototype, "NoSwapTip");
//# sourceMappingURL=NoSwapTip.js.map