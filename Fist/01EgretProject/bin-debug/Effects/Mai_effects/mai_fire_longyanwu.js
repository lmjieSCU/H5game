var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mai_fire_longyanwu = (function () {
    function mai_fire_longyanwu() {
    }
    mai_fire_longyanwu.addSprite7828 = function (mc, own_role) {
        mc.addFrameScript(mc, [24, mai_fire_longyanwu.frame24]);
        return;
    };
    mai_fire_longyanwu.frame24 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return mai_fire_longyanwu;
}());
__reflect(mai_fire_longyanwu.prototype, "mai_fire_longyanwu");
//# sourceMappingURL=mai_fire_longyanwu.js.map