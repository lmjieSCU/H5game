var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HitValue = (function () {
    function HitValue() {
        this.freezeTime2 = 3;
        this.freezeTime = 3;
        this.nohit_status = [];
        this.nohit_skills = [];
    }
    return HitValue;
}());
__reflect(HitValue.prototype, "HitValue");
//# sourceMappingURL=HitValue.js.map