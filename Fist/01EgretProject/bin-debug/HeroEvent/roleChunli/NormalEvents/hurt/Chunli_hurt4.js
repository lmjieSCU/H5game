var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_hurt4 = (function () {
    function Chunli_hurt4() {
    }
    Chunli_hurt4.addSprite14587 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Chunli_hurt4.frame2, 12, Chunli_hurt4.frame12]);
        return;
    };
    Chunli_hurt4.frame2 = function () {
        // soundArray = [];
        // soundArray[0] = "mai_hurt3";
        // soundArray[1] = "mai_hurt4";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_hurt4.frame12 = function (mc) {
        mc.gotoAndStop("s2");
        //mc.play();
    };
    return Chunli_hurt4;
}());
__reflect(Chunli_hurt4.prototype, "Chunli_hurt4");
//# sourceMappingURL=Chunli_hurt4.js.map