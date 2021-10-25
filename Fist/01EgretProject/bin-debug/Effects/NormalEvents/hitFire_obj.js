var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire_obj = (function () {
    function hitFire_obj() {
    }
    hitFire_obj.addSprite10760 = function (mc, own_role) {
        mc.addFrameScript(mc, [16, hitFire_obj.frame16]);
        return;
    };
    hitFire_obj.frame16 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire_obj;
}());
__reflect(hitFire_obj.prototype, "hitFire_obj");
//# sourceMappingURL=hitFire_obj.js.map