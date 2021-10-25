var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_hurt3 = (function () {
    function Chunli_hurt3() {
    }
    Chunli_hurt3.addSprite14577 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_hurt3.frame1, 20, Chunli_hurt3.frame20]);
        return;
    };
    Chunli_hurt3.frame1 = function () {
        // soundArray = [];
        // soundArray[0] = "mai_hurt3";
        // soundArray[1] = "mai_hurt4";
        // soundArray[2] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_hurt3.frame20 = function (mc) {
        mc.stop();
    };
    return Chunli_hurt3;
}());
__reflect(Chunli_hurt3.prototype, "Chunli_hurt3");
//# sourceMappingURL=Chunli_hurt3.js.map