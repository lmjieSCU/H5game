var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_slashEff2 = (function () {
    function kula_slashEff2() {
    }
    kula_slashEff2.addSprite18485 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, kula_slashEff2.frame21]);
        return;
    };
    kula_slashEff2.frame21 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_slashEff2;
}());
__reflect(kula_slashEff2.prototype, "kula_slashEff2");
//# sourceMappingURL=kula_slashEff2.js.map