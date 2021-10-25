var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ken_waveCannon = (function () {
    function ken_waveCannon() {
    }
    ken_waveCannon.addSprite21094 = function (mc, own_role) {
        mc.addFrameScript(mc, [35, ken_waveCannon.frame35, 107, ken_waveCannon.frame107]);
        mc.addWaitingCallFun(mc, ['frame35Call', ken_waveCannon.frame35Call, [mc, own_role]]);
        return;
    };
    ken_waveCannon.frame35Call = function (mc, own_role) {
        Ryu_a21089.getInstance(own_role).name = "waveCannon";
    };
    ken_waveCannon.frame35 = function (mc) {
        mc.checkWaitingCallFun('frame35Call');
    };
    ken_waveCannon.frame107 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    return ken_waveCannon;
}());
__reflect(ken_waveCannon.prototype, "ken_waveCannon");
//# sourceMappingURL=ken_waveCannon.js.map