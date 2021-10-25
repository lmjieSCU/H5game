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
var BonusTimeTip = (function (_super) {
    __extends(BonusTimeTip, _super);
    function BonusTimeTip() {
        var _this = _super.call(this) || this;
        UI.addPic("bonustime_png", true, _this);
        return _this;
    }
    BonusTimeTip.prototype.doAniamtion = function () {
        this.y = UI.WINSIZE_H / 2;
        this.x = -100;
        SoundCtrl.I.playmusic("finaltry");
        egret.Tween.get(this).to({ "x": UI.WINSIZE_W / 2 }, 700).wait(1000).to({ "x": UI.WINSIZE_W * 1.5 }).call(this.onActionEnd, this);
    };
    BonusTimeTip.prototype.onActionEnd = function () {
        this.parent.removeChild(this);
        BonusTimeTip.pool.put(this);
        return;
    };
    BonusTimeTip.pool = new BasePool(BonusTimeTip, 10);
    return BonusTimeTip;
}(Elements));
__reflect(BonusTimeTip.prototype, "BonusTimeTip");
//# sourceMappingURL=BonusTimeTip.js.map