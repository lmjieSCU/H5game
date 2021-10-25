var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelModel = (function () {
    function LevelModel() {
        this.selectedLevel = 1;
        this.currentLevel = 1;
        this.totalLevel = 206;
        this.levelsMap = new Array();
        this.buyProps = [];
        return;
    }
    LevelModel.prototype.getLevelVO = function (arg1) {
        if (this.levelsMap[arg1] == null) {
            var loc1 = new LevelVO();
            loc1.id = arg1;
            loc1.star = 0;
            loc1.highscore = 0;
            this.levelsMap[loc1.id] = loc1;
        }
        return this.levelsMap[arg1];
    };
    LevelModel.prototype.loadData = function () {
        var loc2 = null;
        var loc3 = 0;
        var loc4 = null;
        var loc5 = null;
        var loc6 = null;
        var loc1 = egret.localStorage.getItem("levels");
        if (loc1 == null) {
            this.currentLevel = 1;
            return;
        }
        if (loc1.length > 0) {
            loc2 = loc1.split("|");
            loc3 = 0;
            while (loc3 < loc2.length) {
                loc5 = (loc4 = loc2[loc3]).split("&");
                (loc6 = new LevelVO()).id = Number(loc5[0]);
                loc6.star = Number(loc5[1]);
                loc6.highscore = Number(loc5[2]);
                this.levelsMap[loc6.id] = loc6;
                ++loc3;
            }
            this.currentLevel = Number(egret.localStorage.getItem("currentLevel"));
        }
        return;
    };
    //本地存储通关记录
    LevelModel.prototype.saveData = function () {
        var loc1 = [];
        var loc3 = null;
        var level = null;
        var loc5 = this.levelsMap;
        for (var loc in loc5) {
            level = loc5[loc];
            loc1.push(level.id + "&" + level.star + "&" + level.highscore);
        }
        loc3 = loc1.join("|");
        egret.localStorage.setItem("currentLevel", String(this.currentLevel));
        egret.localStorage.setItem("levels", loc3);
        return;
    };
    LevelModel.prototype.checkHasProp = function (arg1) {
        var loc2 = null;
        var loc1 = 0;
        while (loc1 < this.buyProps.length) {
            loc2 = Config.propCfgParser.getPropCfg(this.buyProps[loc1]);
            if (loc2.type == arg1) {
                return true;
            }
            ++loc1;
        }
        return false;
    };
    return LevelModel;
}());
__reflect(LevelModel.prototype, "LevelModel");
//# sourceMappingURL=LevelModel.js.map