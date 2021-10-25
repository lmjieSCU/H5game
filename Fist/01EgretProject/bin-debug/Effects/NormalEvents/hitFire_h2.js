var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_h2 = (function () {
    function hitFire_h2() {
    }
    hitFire_h2.addSprite10694 = function (mc, own_role) {
        mc.addFrameScript(mc, [18, hitFire_h2.frame18]);
        return;
    };
    hitFire_h2.frame18 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_h2;
}());
__reflect(hitFire_h2.prototype, "hitFire_h2");
//# sourceMappingURL=hitFire_h2.js.map