var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire6 = (function () {
    function fire6() {
    }
    fire6.addSprite4918 = function (mc, own_role) {
        mc.addFrameScript(mc, [11, fire6.frame11]);
        return;
    };
    fire6.frame11 = function (mc) {
        // _level0.fire2_snd.start();
        mc.parent.removeChild(mc);
    };
    return fire6;
}());
__reflect(fire6.prototype, "fire6");
//# sourceMappingURL=fire6.js.map