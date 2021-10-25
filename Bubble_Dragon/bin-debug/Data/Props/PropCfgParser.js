var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PropCfgParser = (function () {
    function PropCfgParser() {
        this._map = new Dicts();
        this._map = new Dicts();
        return;
    }
    PropCfgParser.prototype.setUp = function (arg1) {
        return;
    };
    PropCfgParser.prototype.getPropCfg = function (arg1) {
        if (this._map.size == 0) {
            for (var loc2 in PropList.list) {
                var loc3 = new PropCfg(PropList.list[loc2]);
                this._map.put(PropList.list[loc2].id, loc3);
            }
        }
        return this._map.take(arg1);
    };
    return PropCfgParser;
}());
__reflect(PropCfgParser.prototype, "PropCfgParser", ["IJsonConfig"]);
//# sourceMappingURL=PropCfgParser.js.map