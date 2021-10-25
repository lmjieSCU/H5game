var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire_m4 = (function () {
    function fire_m4() {
    }
    fire_m4.addSprite7224 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire_m4.frame1, 20, fire_m4.frame20]);
        return;
    };
    fire_m4.frame1 = function (mc) {
        //    numMax = 3;
        // color1 = "fire_red1";
        // color2 = "fire_red2";
        //_root.role_mc.changeColor("fire",500);
    };
    fire_m4.frame20 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire_m4;
}());
__reflect(fire_m4.prototype, "fire_m4");
//# sourceMappingURL=fire_m4.js.map