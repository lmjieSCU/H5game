var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_l = (function () {
    function hitFire_l() {
    }
    hitFire_l.addSprite10713 = function (mc, own_role) {
        mc.addFrameScript(mc, [13, hitFire_l.frame13]);
        return;
    };
    hitFire_l.frame13 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_l;
}());
__reflect(hitFire_l.prototype, "hitFire_l");
//# sourceMappingURL=hitfire_l.js.map