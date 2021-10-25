var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_end = (function () {
    function K_end() {
    }
    K_end.addSprite5040 = function (mc, own_role) {
        mc.addFrameScript(mc, [55, K_end.frame55]);
        return;
    };
    K_end.frame55 = function (mc) {
        mc.stop();
    };
    return K_end;
}());
__reflect(K_end.prototype, "K_end");
//# sourceMappingURL=K_end.js.map