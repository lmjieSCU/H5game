var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mai_fireEff2 = (function () {
    function mai_fireEff2() {
    }
    mai_fireEff2.addSprite7829 = function (mc, own_role) {
        mc.addFrameScript(mc, [7, mai_fireEff2.frame7]);
        return;
    };
    mai_fireEff2.frame7 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return mai_fireEff2;
}());
__reflect(mai_fireEff2.prototype, "mai_fireEff2");
//# sourceMappingURL=mai_fireEff2.js.map