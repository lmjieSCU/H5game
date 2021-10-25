var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire7 = (function () {
    function fire7() {
    }
    fire7.addSprite4921 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire7.frame1, 12, fire7.frame12]);
        return;
    };
    fire7.frame1 = function () {
        // _level0.fire2_snd.start();
    };
    fire7.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire7;
}());
__reflect(fire7.prototype, "fire7");
//# sourceMappingURL=fire7.js.map