var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_cut = (function () {
    function hitFire_cut() {
    }
    hitFire_cut.addSprite10621 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, hitFire_cut.frame12]);
        return;
    };
    hitFire_cut.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_cut;
}());
__reflect(hitFire_cut.prototype, "hitFire_cut");
//# sourceMappingURL=hitFire_cut.js.map