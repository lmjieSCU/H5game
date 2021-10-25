var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var boom1_mc = (function () {
    function boom1_mc() {
    }
    boom1_mc.addSprite12883 = function (mc, own_role) {
        mc.addFrameScript(mc, [24, boom1_mc.frame24]);
        return;
    };
    boom1_mc.frame24 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return boom1_mc;
}());
__reflect(boom1_mc.prototype, "boom1_mc");
//# sourceMappingURL=boom1_mc.js.map