var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bgShinngHit = (function () {
    function bgShinngHit() {
    }
    bgShinngHit.addSprite10970 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, bgShinngHit.frame1, 2, bgShinngHit.frame2, 3, bgShinngHit.frame3, 4, bgShinngHit.frame4, 5, bgShinngHit.frame5]);
        return;
    };
    bgShinngHit.frame1 = function (mc) {
        mc.stop();
        mc.visible = false;
    };
    bgShinngHit.frame2 = function (mc) {
        mc.visible = true;
    };
    bgShinngHit.frame3 = function (mc) {
        mc.gotoAndStop("end");
        mc.visible = false;
    };
    bgShinngHit.frame4 = function (mc) {
        mc.visible = true;
    };
    bgShinngHit.frame5 = function (mc) {
        mc.gotoAndStop("end2");
        mc.visible = false;
    };
    return bgShinngHit;
}());
__reflect(bgShinngHit.prototype, "bgShinngHit");
//# sourceMappingURL=bgShinngHit.js.map