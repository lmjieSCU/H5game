var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var terry_shanzi4 = (function () {
    function terry_shanzi4() {
    }
    terry_shanzi4.addSprite7941 = function (mc, own_role) {
        mc.addFrameScript(mc, [18, terry_shanzi4.frame18]);
        return;
    };
    terry_shanzi4.frame18 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    return terry_shanzi4;
}());
__reflect(terry_shanzi4.prototype, "terry_shanzi4");
//# sourceMappingURL=terry_shanzi4.js.map