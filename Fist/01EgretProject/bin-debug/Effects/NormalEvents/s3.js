var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var s3 = (function () {
    function s3() {
    }
    s3.addSprite7337 = function (mc, own_role) {
        mc.addFrameScript(mc, [12, s3.frame21]);
        mc.play();
        return;
    };
    s3.frame21 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return s3;
}());
__reflect(s3.prototype, "s3");
//# sourceMappingURL=s3.js.map