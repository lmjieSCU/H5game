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
var RayEffect = (function (_super) {
    __extends(RayEffect, _super);
    function RayEffect() {
        var _this = _super.call(this) || this;
        UI.addPic("sun_png", true, _this);
        return _this;
    }
    RayEffect.prototype.Animation = function (candy, matches, index) {
        var disX = matches[index].x - candy.x;
        var disY = matches[index].y - candy.y;
        var dis = Math.sqrt(disX * disX + disY * disY);
        egret.Tween.get(this).to({ "x": matches[index].x, "y": matches[index].y }, dis * 1.25).call(this.RayEffectCall, this, [index, candy, matches]);
    };
    RayEffect.prototype.RayEffectCall = function (index, candyA, matches) {
        this.parent.removeChild(this);
        RayEffect.pool.put(this);
        if (index != matches.length - 1) {
            return;
        }
        GameCtrl.I._fightCtrl.tempScore = 300;
        matches.push(candyA);
        GameCtrl.I._fightCtrl.removeCandys(matches);
        GameCtrl.I._fightCtrl.waitDrop();
        return;
    };
    RayEffect.pool = new BasePool(RayEffect, 20);
    return RayEffect;
}(Elements));
__reflect(RayEffect.prototype, "RayEffect");
//# sourceMappingURL=RayEffect.js.map