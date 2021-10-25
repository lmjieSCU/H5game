var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_kof_1 = (function () {
    function hitFire_kof_1() {
    }
    hitFire_kof_1.addSprite10892 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, hitFire_kof_1.frame1, 14, hitFire_kof_1.frame14]);
        return;
    };
    hitFire_kof_1.frame1 = function (mc) {
        mc.rotation = Math.round((Math.random() * 360));
    };
    hitFire_kof_1.frame14 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_kof_1;
}());
__reflect(hitFire_kof_1.prototype, "hitFire_kof_1");
//# sourceMappingURL=hitFire_kof_1.js.map