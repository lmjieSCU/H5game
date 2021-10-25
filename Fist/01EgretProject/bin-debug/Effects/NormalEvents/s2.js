var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var s2 = (function () {
    function s2() {
    }
    s2.addSprite11289 = function (mc, own_role) {
        mc.addFrameScript(mc, [16, s2.frame32]);
        return;
    };
    s2.frame32 = function (mc) {
        //_root.shinning_bg._visible = 0;
        mc.parent.removeChild(mc);
    };
    return s2;
}());
__reflect(s2.prototype, "s2");
//# sourceMappingURL=s2.js.map