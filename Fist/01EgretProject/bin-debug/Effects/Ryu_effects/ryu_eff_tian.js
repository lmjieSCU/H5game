var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ryu_eff_tian = (function () {
    function ryu_eff_tian() {
    }
    ryu_eff_tian.addSprite19935 = function (mc, own_role) {
        mc.addFrameScript(mc, [23, ryu_eff_tian.frame23]);
        return;
    };
    ryu_eff_tian.frame23 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return ryu_eff_tian;
}());
__reflect(ryu_eff_tian.prototype, "ryu_eff_tian");
//# sourceMappingURL=ryu_eff_tian.js.map