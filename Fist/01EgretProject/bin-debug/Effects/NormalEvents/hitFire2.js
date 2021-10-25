var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire2 = (function () {
    function hitFire2() {
    }
    hitFire2.addSprite10803 = function (mc, own_role) {
        mc.addFrameScript(mc, [10, hitFire2.frame10]);
        return;
    };
    hitFire2.frame10 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire2;
}());
__reflect(hitFire2.prototype, "hitFire2");
//# sourceMappingURL=hitFire2.js.map