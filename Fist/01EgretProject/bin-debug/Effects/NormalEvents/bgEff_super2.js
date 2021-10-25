var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bgEff_super2 = (function () {
    function bgEff_super2() {
    }
    bgEff_super2.addSprite10952 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, bgEff_super2.frame1, 2, bgEff_super2.frame2, 33, bgEff_super2.frame34]);
        return;
    };
    bgEff_super2.frame1 = function (mc) {
    };
    bgEff_super2.frame2 = function (mc) {
        mc.play();
    };
    bgEff_super2.frame34 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return bgEff_super2;
}());
__reflect(bgEff_super2.prototype, "bgEff_super2");
//# sourceMappingURL=bgEff_super2.js.map