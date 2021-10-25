var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ryu_dragon = (function () {
    function ryu_dragon() {
    }
    ryu_dragon.addSprite19920 = function (mc, own_role) {
        mc.addFrameScript(mc, [23, ryu_dragon.frame23]);
        return;
    };
    ryu_dragon.frame23 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return ryu_dragon;
}());
__reflect(ryu_dragon.prototype, "ryu_dragon");
//# sourceMappingURL=ryu_dragon.js.map