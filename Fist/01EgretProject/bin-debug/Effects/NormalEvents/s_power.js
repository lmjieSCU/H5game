var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var s_power = (function () {
    function s_power() {
    }
    s_power.addSprite11167 = function (mc, own_role) {
        mc.addFrameScript(mc, [11, s_power.frame11]);
        return;
    };
    s_power.frame11 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return s_power;
}());
__reflect(s_power.prototype, "s_power");
//# sourceMappingURL=s_power.js.map