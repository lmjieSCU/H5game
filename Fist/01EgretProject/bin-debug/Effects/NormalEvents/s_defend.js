var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var s_defend = (function () {
    function s_defend() {
    }
    s_defend.addSprite11167 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, s_defend.frame12]);
        return;
    };
    s_defend.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return s_defend;
}());
__reflect(s_defend.prototype, "s_defend");
//# sourceMappingURL=s_defend.js.map