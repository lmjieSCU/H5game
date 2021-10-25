var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var eff_rush = (function () {
    function eff_rush() {
    }
    eff_rush.addSprite6067 = function (mc, own_role) {
        mc.addFrameScript(mc, [14, eff_rush.frame15]);
        return;
    };
    eff_rush.frame15 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return eff_rush;
}());
__reflect(eff_rush.prototype, "eff_rush");
//# sourceMappingURL=eff_rush.js.map