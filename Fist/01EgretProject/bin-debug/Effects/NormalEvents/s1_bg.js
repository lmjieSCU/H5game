var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var s1_bg = (function () {
    function s1_bg() {
    }
    s1_bg.addSprite11184 = function (mc, own_role) {
        mc.addFrameScript(mc, [9, s1_bg.frame9]);
        return;
    };
    s1_bg.frame9 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return s1_bg;
}());
__reflect(s1_bg.prototype, "s1_bg");
//# sourceMappingURL=s1_bg.js.map