var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var s_attack = (function () {
    function s_attack() {
    }
    s_attack.addSprite11142 = function (mc, own_role) {
        mc.addFrameScript(mc, [9, s_attack.frame9]);
        return;
    };
    s_attack.frame9 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return s_attack;
}());
__reflect(s_attack.prototype, "s_attack");
//# sourceMappingURL=s_attack.js.map