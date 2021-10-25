var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_cut_lb2 = (function () {
    function hitFire_cut_lb2() {
    }
    hitFire_cut_lb2.addSprite12091 = function (mc, own_role) {
        mc.addFrameScript(mc, [7, hitFire_cut_lb2.frame12]);
        return;
    };
    hitFire_cut_lb2.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_cut_lb2;
}());
__reflect(hitFire_cut_lb2.prototype, "hitFire_cut_lb2");
//# sourceMappingURL=hitFire_cut_lb2.js.map