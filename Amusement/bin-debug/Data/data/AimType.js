var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AimType = (function () {
    function AimType() {
    }
    AimType.SCORE = 0;
    AimType.GREEN = 1;
    AimType.RED = 2;
    AimType.YELLOW = 3;
    AimType.PURPLE = 4;
    AimType.BLUE = 5;
    AimType.BOARD = 6;
    AimType.FRUIT1 = 7;
    AimType.FRUIT2 = 8;
    AimType.FRUIT3 = 9;
    AimType.LINE_BOMB = 10;
    AimType.ICE = 11;
    AimType.AIM_ICONS = ["scoreaim", "candy0", "candy1", "candy2", "candy3", "candy4", "brick1", "fruit1", "fruit2", "fruit3", "cat", "sprite2"];
    return AimType;
}());
__reflect(AimType.prototype, "AimType");
//# sourceMappingURL=AimType.js.map