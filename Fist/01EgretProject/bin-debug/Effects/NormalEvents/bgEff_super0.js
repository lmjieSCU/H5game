var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bgEff_super0 = (function () {
    function bgEff_super0() {
    }
    bgEff_super0.addSprite10923 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, bgEff_super0.frame1, 2, bgEff_super0.frame2, 15, bgEff_super0.frame15]);
        return;
    };
    bgEff_super0.frame1 = function (mc) {
    };
    bgEff_super0.frame2 = function (mc) {
        mc.play();
    };
    bgEff_super0.frame15 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return bgEff_super0;
}());
__reflect(bgEff_super0.prototype, "bgEff_super0");
//# sourceMappingURL=bgEff_super0.js.map