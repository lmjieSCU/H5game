var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var down2 = (function () {
    function down2() {
    }
    down2.addSprite11121 = function (mc, own_role) {
        mc.addFrameScript(mc, [8, down2.frame8]);
        return;
    };
    down2.frame8 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return down2;
}());
__reflect(down2.prototype, "down2");
//# sourceMappingURL=down2.js.map