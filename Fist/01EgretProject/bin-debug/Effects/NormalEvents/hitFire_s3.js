var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_s3 = (function () {
    function hitFire_s3() {
    }
    hitFire_s3.addSprite10919 = function (mc, own_role) {
        mc.addFrameScript(mc, [16, hitFire_s3.frame16]);
        return;
    };
    hitFire_s3.frame16 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_s3;
}());
__reflect(hitFire_s3.prototype, "hitFire_s3");
//# sourceMappingURL=hitFire_s3.js.map