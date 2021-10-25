var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**level设置 */
var LevelConfig = (function () {
    function LevelConfig() {
        this._dict = new Dicts(); //key:levelnum,value:levelCO
        return;
    }
    LevelConfig.prototype.setUp = function (arg1) {
        return;
    };
    LevelConfig.prototype.getLevel = function (arg1) {
        var loc3 = 0;
        var loc4 = null;
        var loc5 = 0;
        var loc6 = 0;
        var loc7 = 0;
        if (this._dict.contains(arg1)) {
            return this._dict.take(arg1);
        }
        // let loc2: any = com.popchan.framework.core.Core.texturesManager.getXml("Level" + arg1);
        if (arg1 < 0 || arg1 > LevelConfig.TOTAL_LEVEL) {
            console.log("未找到关卡-" + arg1);
            return null;
        }
        else {
            var loc1 = new LevelCO();
            var level_Class = egret.getDefinitionByName("Level" + arg1 + "_Data");
            LevelData.I.initlize(level_Class);
            //----------------------------------------------------------------------------
            loc1.tile = this.convertToArray(LevelData.I.getValueByKey("tile"));
            loc1.board = this.convertToArray(LevelData.I.getValueByKey("board"));
            // loc1.ice = this.convertToArray(LevelData.I.getValueByKey("ice"));
            // loc1.stone = this.convertToArray(LevelData.I.getValueByKey("stone"));
            loc1.candy = this.convertToArray(LevelData.I.getValueByKey("candy"));
            loc1.barrier = this.convertToArray(LevelData.I.getValueByKey("barrier"));
            if (LevelData.I.getValueByKey("colorCount") != null) {
                loc1.colorCount = Number(LevelData.I.getValueByKey("colorCount"));
            }
            else {
                loc1.colorCount = 5;
            }
            if (loc1.colorCount < 3) {
                loc1.colorCount = 3;
            }
            else if (loc1.colorCount > 5) {
                loc1.colorCount = 5;
            }
            if (LevelData.I.getValueByKey("ironWire") != null) {
                loc1.ironWire = this.convertToArray(LevelData.I.getValueByKey("ironWire"));
            }
            else {
                loc1.ironWire = this.getBlankArray();
            }
            if (LevelData.I.getValueByKey("eat") != null) {
                loc1.eat = this.convertToArray(LevelData.I.getValueByKey("eat"));
            }
            else {
                loc1.eat = this.getBlankArray();
            }
            if (LevelData.I.getValueByKey("monster") != null) {
                loc1.monster = this.convertToArray(LevelData.I.getValueByKey("monster"));
            }
            else {
                loc1.monster = this.getBlankArray();
            }
            // loc1.lock = this.convertToArray(LevelData.I.getValueByKey("lock"));
            loc1.entryAndExit = this.convertToArray(LevelData.I.getValueByKey("entryAndExit"));
            loc1.aim = LevelData.I.getValueByKey("aim").split("|");
            loc1.mode = Number(LevelData.I.getValueByKey("mode"));
            loc1.step = Number(LevelData.I.getValueByKey("step"));
            loc1.needScore = 0;
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                loc5 = 0;
                while (loc5 < GameConst.ROW_COUNT) {
                    if (loc1.tile[loc5][loc3] > 0) {
                        loc1.needScore = loc1.needScore + 50;
                    }
                    ++loc5;
                }
                ++loc3;
            }
            var loc8 = 0;
            var loc9 = loc1.aim;
            for (var loc in loc9) {
                loc4 = loc9[loc];
                loc6 = Number(loc4.split(",")[0]);
                loc7 = Number(loc4.split(",")[1]);
                if (loc6 == AimType.SCORE) {
                    continue;
                }
                loc1.needScore = loc1.needScore + loc7 * 50;
            }
            this._dict.put(arg1, loc1);
            return loc1;
        }
    };
    LevelConfig.prototype.convertToArray = function (arg1, arg2, arg3) {
        if (arg2 === void 0) { arg2 = "|"; }
        if (arg3 === void 0) { arg3 = ","; }
        var loc4 = null;
        var loc5 = null;
        var loc6 = 0;
        var ansArray = [];
        var loc2 = arg1.split(arg2);
        for (var loc3 = 0; loc3 < loc2.length; loc3++) {
            loc5 = (loc4 = loc2[loc3]).split(arg3);
            ansArray[loc3] = [];
            loc6 = 0;
            while (loc6 < loc5.length) {
                ansArray[loc3][loc6] = Number(loc5[loc6]);
                ++loc6;
            }
        }
        return ansArray;
    };
    LevelConfig.prototype.getBlankArray = function () {
        var loc3 = 0;
        var BlankArray = new Array();
        for (var loc2 = 0; loc2 < 9; loc2++) {
            BlankArray[loc2] = new Array();
            for (var loc3_1 = 0; loc3_1 < 9; loc3_1++) {
                BlankArray[loc2][loc3_1] = 0;
            }
        }
        return BlankArray;
    };
    LevelConfig.TOTAL_LEVEL = 330;
    return LevelConfig;
}());
__reflect(LevelConfig.prototype, "LevelConfig", ["IJsonConfig"]);
//# sourceMappingURL=LevelConfig.js.map