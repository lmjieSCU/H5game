var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var terry_shanzi6 = (function () {
    function terry_shanzi6() {
    }
    terry_shanzi6.addSprite7971 = function (mc, own_role) {
        mc.addFrameScript(mc, [14, terry_shanzi6.frame14]);
        return;
    };
    terry_shanzi6.frame14 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    return terry_shanzi6;
}());
__reflect(terry_shanzi6.prototype, "terry_shanzi6");
//# sourceMappingURL=terry_shanzi6.js.map