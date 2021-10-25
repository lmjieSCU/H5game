var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_sf3_1 = (function () {
    function hitFire_sf3_1() {
    }
    hitFire_sf3_1.addSprite12029 = function (mc, own_role) {
        mc.addFrameScript(mc, [8, hitFire_sf3_1.frame13]);
        return;
    };
    hitFire_sf3_1.frame13 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_sf3_1;
}());
__reflect(hitFire_sf3_1.prototype, "hitFire_sf3_1");
//# sourceMappingURL=hitFire_sf3_1.js.map