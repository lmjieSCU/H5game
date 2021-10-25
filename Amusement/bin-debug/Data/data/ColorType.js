var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ColorType = (function () {
    function ColorType() {
    }
    ColorType.GREEN = 1;
    ColorType.RED = 2;
    ColorType.YELLOW = 3;
    ColorType.PURPLE = 4;
    ColorType.BLUE = 5;
    ColorType.FRUIT1 = 7;
    ColorType.FRUIT2 = 8;
    ColorType.FRUIT3 = 9;
    return ColorType;
}());
__reflect(ColorType.prototype, "ColorType");
//# sourceMappingURL=ColorType.js.map