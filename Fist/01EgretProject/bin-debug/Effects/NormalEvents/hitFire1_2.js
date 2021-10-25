var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire1_2 = (function () {
    function hitFire1_2() {
    }
    hitFire1_2.addSprite10918 = function (mc, own_role) {
        mc.addFrameScript(mc, [13, hitFire1_2.frame13]);
        return;
    };
    hitFire1_2.frame13 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire1_2;
}());
__reflect(hitFire1_2.prototype, "hitFire1_2");
//# sourceMappingURL=hitFire1_2.js.map