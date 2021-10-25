var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BubbleCfg = (function () {
    function BubbleCfg(arg1) {
        this.id = arg1.id;
        this.colorType = arg1.colorType;
        this.effectType = arg1.effectType;
        this.resBottom = arg1.resBottom;
        this.resTop = arg1.resTop;
        this.score = arg1.score;
        return;
    }
    return BubbleCfg;
}());
__reflect(BubbleCfg.prototype, "BubbleCfg");
//# sourceMappingURL=BubbleCfg.js.map