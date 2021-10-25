var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitEff_ice1 = (function () {
    function hitEff_ice1() {
    }
    hitEff_ice1.addSprite4389 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, hitEff_ice1.frame1, 30, hitEff_ice1.frame30]);
        return;
    };
    hitEff_ice1.frame1 = function (mc) {
        // numMax = 4;
        // color1 = "ice1";
        // color2 = "ice1";
    };
    hitEff_ice1.frame30 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return hitEff_ice1;
}());
__reflect(hitEff_ice1.prototype, "hitEff_ice1");
//# sourceMappingURL=hitEff_ice1.js.map