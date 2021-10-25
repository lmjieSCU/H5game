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
var LaserEffect = (function (_super) {
    __extends(LaserEffect, _super);
    function LaserEffect() {
        var _this = _super.call(this) || this;
        _this.suns = new Array();
        for (var loc1 = 0; loc1 < 6; loc1++) {
            var loc2 = UI.addPic("sun_png", true, _this);
            _this.suns.push(loc2);
        }
        return _this;
    }
    LaserEffect.prototype.setData = function (arg1) {
        var loc2 = null;
        var loc3 = NaN;
        var loc4 = NaN;
        var loc1 = 0;
        while (loc1 < 6) {
            loc2 = this.suns[loc1];
            loc2.scaleX = 0.6 - loc1 * 0.05;
            loc2.scaleY = 0.6 - loc1 * 0.05;
            loc3 = Math.cos(Math.PI + arg1) * loc1 * 20;
            loc4 = Math.sin(Math.PI + arg1) * loc1 * 20;
            loc2.x = loc3;
            loc2.y = loc4;
            this.suns.push(loc2);
            ++loc1;
        }
        return;
    };
    LaserEffect.prototype.Animation = function (candy, matches, index, changeStatus, isRandomLine, callType) {
        if (isRandomLine === void 0) { isRandomLine = false; }
        var disX = matches[index].x - candy.x;
        var disY = matches[index].y - candy.y;
        var dis = Math.sqrt(disX * disX + disY * disY);
        var radian = Math.atan2(disY, disX);
        this.setData(radian);
        egret.Tween.get(this).to({ "x": matches[index].x, "y": matches[index].y }, dis * 2.5).call(this.LaserEffectEffectCall, this, [index, candy, matches, changeStatus, isRandomLine, callType]);
    };
    LaserEffect.prototype.LaserEffectEffectCall = function (index, candyA, matches, changeStatus, isRandomLine, callType) {
        this.parent.removeChild(this);
        LaserEffect.pool.put(this);
        if (isRandomLine) {
            if (Math.random() < 0.5) {
                matches[index].setSpecialStatus(CandySpecialStatus.VERT, true);
            }
            else {
                matches[index].setSpecialStatus(CandySpecialStatus.HORIZ, true);
            }
        }
        else {
            matches[index].setSpecialStatus(changeStatus, true);
        }
        if (index != matches.length - 1) {
            return;
        }
        if (!callType) {
            GameCtrl.I._fightCtrl.tempScore = 300;
            matches.push(candyA);
            GameCtrl.I._fightCtrl.removeCandys(matches);
            GameCtrl.I._fightCtrl.waitDrop();
        }
        else {
            GameCtrl.I._fightCtrl.tempScore = 300;
            GameCtrl.I._fightCtrl.changeCandysStatus(matches, CandySpecialStatus.BOMB);
            matches.push(candyA);
            GameCtrl.I._fightCtrl.removeCandys(matches);
            GameCtrl.I._fightCtrl.waitDrop();
        }
        return;
    };
    LaserEffect.prototype.Animation2 = function () {
    };
    LaserEffect.pool = new BasePool(LaserEffect, 20);
    return LaserEffect;
}(Elements));
__reflect(LaserEffect.prototype, "LaserEffect");
//# sourceMappingURL=LaserEffect.js.map