var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PropCfg = (function () {
    function PropCfg(arg1) {
        this.id = arg1.id;
        this.name_ch = arg1.name_ch;
        this.name_en = arg1.name_en;
        this.price = arg1.price;
        this.desc_ch = arg1.desc_ch;
        this.desc_en = arg1.desc_en;
        this.p1 = arg1.p1;
        this.p2 = arg1.p2;
        this.type = arg1.type;
        return;
    }
    return PropCfg;
}());
__reflect(PropCfg.prototype, "PropCfg");
//# sourceMappingURL=PropCfg.js.map