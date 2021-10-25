var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var down1 = (function () {
    function down1() {
    }
    down1.addSprite11077 = function (mc, own_role) {
        mc.addFrameScript(mc, [9, down1.frame9]);
        return;
    };
    down1.frame9 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return down1;
}());
__reflect(down1.prototype, "down1");
//# sourceMappingURL=down1.js.map