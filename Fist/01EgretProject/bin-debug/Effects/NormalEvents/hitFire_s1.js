var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_s1 = (function () {
    function hitFire_s1() {
    }
    hitFire_s1.addSprite10742 = function (mc, own_role) {
        mc.addFrameScript(mc, [13, hitFire_s1.frame16]);
        return;
    };
    hitFire_s1.frame16 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_s1;
}());
__reflect(hitFire_s1.prototype, "hitFire_s1");
//# sourceMappingURL=hitFire_s1.js.map