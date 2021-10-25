var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var down3 = (function () {
    function down3() {
    }
    down3.addSprite11102 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, down3.frame1, 12, down3.frame12]);
        return;
    };
    down3.frame1 = function (mc) {
        //_level0.shake_mc.shakeStart(2);
    };
    down3.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return down3;
}());
__reflect(down3.prototype, "down3");
//# sourceMappingURL=down3.js.map