var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**level设置 */
var LevelCfgParser = (function () {
    function LevelCfgParser() {
        this._dict = new Dicts(); //key:levelnum,value:levelCO
        return;
    }
    LevelCfgParser.prototype.setUp = function (arg1) {
        return;
    };
    LevelCfgParser.prototype.getLevelCfg = function (arg1) {
        if (this._dict.contains(arg1)) {
            return this._dict.take(arg1);
        }
        if (arg1 < 0 || arg1 > LevelCfgParser.TOTAL_LEVEL) {
            console.log("未找到关卡-" + arg1);
            return null;
        }
        var loc1 = new LevelCfg();
        loc1.id = arg1;
        var levelxml = egret.getDefinitionByName("level" + arg1).xml;
        var loc6 = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
        loc1.map = this.loadFromString(levelxml.elements);
        loc1.map.unshift(loc6);
        loc1.map.unshift(loc6);
        loc1.step = Number(levelxml.step);
        loc1.starLevels = levelxml.stars.split(",");
        loc1.props = levelxml.prop.split(",");
        loc1.tipId = Number(levelxml.tipId);
        this._dict.put(arg1, loc1);
        return loc1;
    };
    LevelCfgParser.prototype.loadFromString = function (arg1, arg2, arg3) {
        if (arg2 === void 0) { arg2 = ","; }
        if (arg3 === void 0) { arg3 = "\n"; }
        var loc4 = null;
        var loc1 = [];
        var loc2 = arg1.split(arg3);
        for (var row = 0; row < loc2.length; row++) {
            loc1[row] = [];
            if (loc2[row] != "") {
                loc4 = loc2[row].split(arg2);
                for (var col = 0; col < loc4.length; col++) {
                    if (!(loc4[col] == "" || Number(loc4[col]) < 0)) {
                        loc1[row][col] = Number(loc4[col]);
                    }
                }
            }
        }
        return loc1;
    };
    LevelCfgParser.TOTAL_LEVEL = 206;
    return LevelCfgParser;
}());
__reflect(LevelCfgParser.prototype, "LevelCfgParser", ["IJsonConfig"]);
//# sourceMappingURL=LevelCfgParser.js.map