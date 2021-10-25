var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire8 = (function () {
    function fire8() {
    }
    fire8.addSprite4922 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire8.frame1, 14, fire8.frame14]);
        return;
    };
    fire8.frame1 = function () {
        // _level0.fire2_snd.start();
    };
    fire8.frame14 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire8;
}());
__reflect(fire8.prototype, "fire8");
//# sourceMappingURL=fire8.js.map