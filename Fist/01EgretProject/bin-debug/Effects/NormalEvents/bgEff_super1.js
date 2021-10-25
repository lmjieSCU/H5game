var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bgEff_super1 = (function () {
    function bgEff_super1() {
    }
    bgEff_super1.addSprite10934 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, bgEff_super1.frame1, 2, bgEff_super1.frame2, 29, bgEff_super1.frame30]);
        return;
    };
    bgEff_super1.frame1 = function (mc) {
    };
    bgEff_super1.frame2 = function (mc) {
        mc.play();
    };
    bgEff_super1.frame30 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return bgEff_super1;
}());
__reflect(bgEff_super1.prototype, "bgEff_super1");
//# sourceMappingURL=bgEff_super1.js.map