var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var terry_fireEff2 = (function () {
    function terry_fireEff2() {
    }
    terry_fireEff2.addSprite8032 = function (mc, own_role) {
        mc.addFrameScript(mc, [11, terry_fireEff2.frame11]);
        return;
    };
    terry_fireEff2.frame11 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    return terry_fireEff2;
}());
__reflect(terry_fireEff2.prototype, "terry_fireEff2");
//# sourceMappingURL=terry_fireEff2.js.map