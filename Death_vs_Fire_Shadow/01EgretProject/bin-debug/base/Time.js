var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Time = (function () {
    function Time() {
    }
    Time.getMonth = function () {
        var now = new Date();
        var nowYear = now.getFullYear();
        var nowMonth = now.getMonth() + 1;
        var nowweekday = now.getDate();
        return nowMonth;
    };
    Time.getDay = function () {
        var now = new Date();
        var nowYear = now.getFullYear();
        var nowMonth = now.getMonth() + 1;
        var nowweekday = now.getDate();
        return nowweekday;
    };
    return Time;
}());
__reflect(Time.prototype, "Time");
//# sourceMappingURL=Time.js.map