var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var KO_mc = (function () {
    function KO_mc() {
    }
    KO_mc.addSprite9916 = function (mc, own_role) {
        mc.addFrameScript(mc, [47, KO_mc.frame47]);
        return;
    };
    KO_mc.frame47 = function (mc) {
        _level0.gameEnd();
        mc.parent.removeChild(mc);
    };
    return KO_mc;
}());
__reflect(KO_mc.prototype, "KO_mc");
//# sourceMappingURL=KO_mc.js.map