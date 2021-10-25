var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mai_shanzipo = (function () {
    function mai_shanzipo() {
    }
    mai_shanzipo.addSprite7771 = function (mc, own_role) {
        mc.addFrameScript(mc, [39, mai_shanzipo.frame39]);
        return;
    };
    mai_shanzipo.frame39 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return mai_shanzipo;
}());
__reflect(mai_shanzipo.prototype, "mai_shanzipo");
//# sourceMappingURL=mai_shanzipo.js.map