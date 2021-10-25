var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_cut4 = (function () {
    function hitFire_cut4() {
    }
    hitFire_cut4.addSprite10843 = function (mc, own_role) {
        mc.addFrameScript(mc, [10, hitFire_cut4.frame10]);
        return;
    };
    hitFire_cut4.frame10 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_cut4;
}());
__reflect(hitFire_cut4.prototype, "hitFire_cut4");
//# sourceMappingURL=hitFire_cut4.js.map