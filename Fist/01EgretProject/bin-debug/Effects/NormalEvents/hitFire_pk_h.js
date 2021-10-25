var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_pk_h = (function () {
    function hitFire_pk_h() {
    }
    hitFire_pk_h.addSprite10865 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, hitFire_pk_h.frame4, 10, hitFire_pk_h.frame10]);
        return;
    };
    hitFire_pk_h.frame4 = function (mc) {
    };
    hitFire_pk_h.frame10 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_pk_h;
}());
__reflect(hitFire_pk_h.prototype, "hitFire_pk_h");
//# sourceMappingURL=hitFire_pk_h.js.map