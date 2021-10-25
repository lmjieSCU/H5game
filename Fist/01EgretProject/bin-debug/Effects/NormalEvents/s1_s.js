var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var s1_s = (function () {
    function s1_s() {
    }
    s1_s.addSprite11357 = function (mc, own_role) {
        mc.addFrameScript(mc, [16, s1_s.frame20]);
        return;
    };
    s1_s.frame20 = function (mc) {
        //_root.shinning_bg._visible = 0;
        mc.parent.removeChild(mc);
    };
    return s1_s;
}());
__reflect(s1_s.prototype, "s1_s");
//# sourceMappingURL=s1_s.js.map