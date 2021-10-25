var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_h = (function () {
    function hitFire_h() {
    }
    hitFire_h.addSprite10646 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, hitFire_h.frame1, 16, hitFire_h.frame16]);
        return;
    };
    hitFire_h.frame1 = function (mc) {
        mc.rotation = Math.round((Math.random() * 360));
    };
    hitFire_h.frame16 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_h;
}());
__reflect(hitFire_h.prototype, "hitFire_h");
//# sourceMappingURL=hitFire_h.js.map