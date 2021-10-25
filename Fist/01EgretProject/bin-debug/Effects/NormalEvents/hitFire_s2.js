var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_s2 = (function () {
    function hitFire_s2() {
    }
    hitFire_s2.addSprite10744 = function (mc, own_role) {
        mc.addFrameScript(mc, [16, hitFire_s2.frame16]);
        return;
    };
    hitFire_s2.frame16 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_s2;
}());
__reflect(hitFire_s2.prototype, "hitFire_s2");
//# sourceMappingURL=hitFire_s2.js.map