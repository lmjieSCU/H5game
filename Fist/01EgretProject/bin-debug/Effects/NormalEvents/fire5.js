var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire5 = (function () {
    function fire5() {
    }
    fire5.addSprite4898 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire5.frame1, 10, fire5.frame10]);
        return;
    };
    fire5.frame1 = function () {
        // _level0.fire2_snd.start();
    };
    fire5.frame10 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire5;
}());
__reflect(fire5.prototype, "fire5");
//# sourceMappingURL=fire5.js.map