var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_pk_m = (function () {
    function hitFire_pk_m() {
    }
    hitFire_pk_m.addSprite10891 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, hitFire_pk_m.frame1, 13, hitFire_pk_m.frame13]);
        return;
    };
    hitFire_pk_m.frame1 = function (mc) {
        mc.rotation = Math.round((Math.random() * 360));
    };
    hitFire_pk_m.frame13 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_pk_m;
}());
__reflect(hitFire_pk_m.prototype, "hitFire_pk_m");
//# sourceMappingURL=hitFire_pk_m.js.map