var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_cut2 = (function () {
    function hitFire_cut2() {
    }
    hitFire_cut2.addSprite10637 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, hitFire_cut2.frame12]);
        return;
    };
    hitFire_cut2.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_cut2;
}());
__reflect(hitFire_cut2.prototype, "hitFire_cut2");
//# sourceMappingURL=hitFire_cut2.js.map