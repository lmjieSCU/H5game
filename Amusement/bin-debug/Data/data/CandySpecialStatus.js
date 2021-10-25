var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CandySpecialStatus = (function () {
    function CandySpecialStatus() {
    }
    CandySpecialStatus.NOTHING = 0;
    CandySpecialStatus.HORIZ = 1;
    CandySpecialStatus.VERT = 2;
    CandySpecialStatus.BOMB = 3;
    CandySpecialStatus.COLORFUL = 4;
    return CandySpecialStatus;
}());
__reflect(CandySpecialStatus.prototype, "CandySpecialStatus");
//# sourceMappingURL=CandySpecialStatus.js.map