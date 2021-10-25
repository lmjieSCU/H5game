var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire1 = (function () {
    function hitFire1() {
    }
    hitFire1.addSprite10783 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, hitFire1.frame1, 13, hitFire1.frame13]);
        return;
    };
    hitFire1.frame1 = function (mc) {
        mc.rotation = Math.round((Math.random() * 360));
    };
    hitFire1.frame13 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire1;
}());
__reflect(hitFire1.prototype, "hitFire1");
//# sourceMappingURL=hitFire1.js.map