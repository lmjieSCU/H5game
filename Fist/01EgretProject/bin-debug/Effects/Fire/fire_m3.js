var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire_m3 = (function () {
    function fire_m3() {
    }
    fire_m3.addSprite6037 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire_m3.frame1, 39, fire_m3.frame39]);
        return;
    };
    fire_m3.frame1 = function (mc) {
        // numMax = 5;
        // color1 = "fire_red1";
        // color2 = "fire_red2";
        //_root.role_mc.changeColor("fire",1000);
    };
    fire_m3.frame39 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire_m3;
}());
__reflect(fire_m3.prototype, "fire_m3");
//# sourceMappingURL=fire_m3.js.map