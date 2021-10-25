var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_iceFire = (function () {
    function kula_iceFire() {
    }
    kula_iceFire.addSprite18528 = function (mc, own_role) {
        mc.addFrameScript(mc, [21, kula_iceFire.frame23]);
        return;
    };
    kula_iceFire.frame23 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_iceFire;
}());
__reflect(kula_iceFire.prototype, "kula_iceFire");
//# sourceMappingURL=kula_iceFire.js.map