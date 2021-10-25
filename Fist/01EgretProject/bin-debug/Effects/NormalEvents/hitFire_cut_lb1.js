var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_cut_lb1 = (function () {
    function hitFire_cut_lb1() {
    }
    hitFire_cut_lb1.addSprite12090 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, hitFire_cut_lb1.frame12]);
        return;
    };
    hitFire_cut_lb1.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_cut_lb1;
}());
__reflect(hitFire_cut_lb1.prototype, "hitFire_cut_lb1");
//# sourceMappingURL=hitFire_cut_lb1.js.map