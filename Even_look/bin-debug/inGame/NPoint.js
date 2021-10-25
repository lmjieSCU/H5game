var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NPoint = (function () {
    function NPoint(arg1, arg2) {
        if (arg1 === void 0) { arg1 = 0; }
        if (arg2 === void 0) { arg2 = 0; }
        this.x = arg1;
        this.y = arg2;
        return;
    }
    NPoint.prototype.setTo = function (arg1, arg2) {
        this.x = arg1;
        this.y = arg2;
        return;
    };
    return NPoint;
}());
__reflect(NPoint.prototype, "NPoint");
//# sourceMappingURL=NPoint.js.map