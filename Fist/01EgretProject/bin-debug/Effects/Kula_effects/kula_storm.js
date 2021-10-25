var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_storm = (function () {
    function kula_storm() {
    }
    kula_storm.addSprite18578 = function (mc, own_role) {
        mc.addFrameScript(mc, [65, kula_storm.frame65]);
        return;
    };
    kula_storm.frame65 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_storm;
}());
__reflect(kula_storm.prototype, "kula_storm");
//# sourceMappingURL=kula_storm.js.map