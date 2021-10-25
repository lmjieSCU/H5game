var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Flash = (function () {
    function Flash() {
    }
    Flash.random = function (param1) {
        return Math2.numberBetween(0, param1 - 1, true);
    };
    Flash.isNaN = function (param) {
        return false;
    };
    Flash.hasFunction = function (param1, param2) {
        return true;
    };
    Flash.sortOn = function (param1, param2, param3) {
    };
    Flash.NUMERIC = 1; //按照数字顺序排序,从小到大
    return Flash;
}());
__reflect(Flash.prototype, "Flash");
//# sourceMappingURL=Flash.js.map