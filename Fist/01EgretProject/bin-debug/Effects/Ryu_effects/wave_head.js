var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var wave_head = (function () {
    function wave_head() {
    }
    wave_head.addSprite19941 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, wave_head.frame3]);
        return;
    };
    wave_head.frame3 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return wave_head;
}());
__reflect(wave_head.prototype, "wave_head");
//# sourceMappingURL=wave_head.js.map