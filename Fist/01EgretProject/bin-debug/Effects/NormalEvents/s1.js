var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var s1 = (function () {
    function s1() {
    }
    s1.addSprite11356 = function (mc, own_role) {
        mc.addFrameScript(mc, [16, s1.frame26]);
        return;
    };
    s1.frame26 = function (mc) {
        //_root.shinning_bg._visible = 0;
        mc.parent.removeChild(mc);
    };
    return s1;
}());
__reflect(s1.prototype, "s1");
//# sourceMappingURL=s1.js.map