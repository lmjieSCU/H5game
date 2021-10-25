var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire3 = (function () {
    function hitFire3() {
    }
    hitFire3.addSprite10818 = function (mc, own_role) {
        mc.addFrameScript(mc, [7, hitFire3.frame7]);
        return;
    };
    hitFire3.frame7 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire3;
}());
__reflect(hitFire3.prototype, "hitFire3");
//# sourceMappingURL=hitFire3.js.map