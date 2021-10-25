var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitFire0 = (function () {
    function hitFire0() {
    }
    hitFire0.addSprite10761 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, hitFire0.frame1, 12, hitFire0.frame12]);
        return;
    };
    hitFire0.frame1 = function (mc) {
        mc.rotation = Math.round((Math.random() * 360));
        //blendMode = "screen";
    };
    hitFire0.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitFire0;
}());
__reflect(hitFire0.prototype, "hitFire0");
//# sourceMappingURL=hitFire0.js.map