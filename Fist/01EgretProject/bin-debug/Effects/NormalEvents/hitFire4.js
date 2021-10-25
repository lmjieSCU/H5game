var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire4 = (function () {
    function hitFire4() {
    }
    hitFire4.addSprite10841 = function (mc, own_role) {
        mc.addFrameScript(mc, [16, hitFire4.frame16]);
        return;
    };
    hitFire4.frame16 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire4;
}());
__reflect(hitFire4.prototype, "hitFire4");
//# sourceMappingURL=hitFire4.js.map