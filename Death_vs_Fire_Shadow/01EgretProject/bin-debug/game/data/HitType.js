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
var HitType = (function (_super) {
    __extends(HitType, _super);
    function HitType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HitType.prototype.HitType = function () {
        return;
    }; // end function
    HitType.isHeavy = function (param1) {
        return this.heavyTypes.indexOf(param1) != -1;
    }; // end function
    HitType.KAN = 1;
    HitType.KAN_HEAVY = 6;
    HitType.DA = 2;
    HitType.DA_HEAVY = 3;
    HitType.MAGIC = 4;
    HitType.MAGIC_HEAVY = 5;
    HitType.FIRE = 7;
    HitType.ICE = 8;
    HitType.ELECTRIC = 9;
    HitType.STONE = 10;
    HitType.CATCH = 11;
    HitType.heavyTypes = [6, 3, 5, 7, 8, 9];
    return HitType;
}(Object));
__reflect(HitType.prototype, "HitType");
//# sourceMappingURL=HitType.js.map