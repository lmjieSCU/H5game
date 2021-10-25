var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FightData = (function () {
    function FightData() {
    }
    //=====================================试炼level的战斗信息====================================================
    /**
     * @param maxLevel 最高关卡
     * @param passCount 总通关次数
     * @param levelVictory 胜利次数
     * @param levelFail 失败次数
     * @param maxLevelHero+id 单英雄最高关卡
     * @param passCountHero+id 单英雄通关次数
     * @param levelVictoryHero+id 单英雄胜场
     * @param levelFailHero+id 单英雄败场
     */
    FightData.getFightLevelInfo = function () {
        var maxLevel = Number(egret.localStorage.getItem("maxLevel")) || 0;
        var passCount = Number(egret.localStorage.getItem("passCount")) || 0;
        var levelVictory = Number(egret.localStorage.getItem("levelVictory")) || 0;
        var levelFail = Number(egret.localStorage.getItem("levelFail")) || 0;
        var heroIds = HeroData.getHeroList();
        var info = {
            maxLevel: maxLevel,
            passCount: passCount,
            allVictory: levelVictory,
            allFail: levelFail,
            heroList: []
        };
        heroIds.map(function (data, index) {
            var heroMaxLevel = Number(egret.localStorage.getItem("maxLevelHero" + data)) || 0;
            var passCountHero = Number(egret.localStorage.getItem("passCountHero" + data)) || 0;
            info.heroList.push({ heroId: data, maxLevel: heroMaxLevel, passCount: passCountHero });
        });
        return info;
    };
    FightData.setFightLevelMax = function (max, heroId) {
        var heroMaxLevel = Number(egret.localStorage.getItem("maxLevelHero" + heroId)) || 0;
        egret.localStorage.setItem("maxLevelHero" + heroId, "" + Math.max(heroMaxLevel, max));
        var levelMax = Number(egret.localStorage.getItem("maxLevel")) || 0;
        egret.localStorage.setItem("levelMax", "" + Math.max(levelMax, max));
    };
    FightData.setLevelPassCount = function (count, heroId) {
        var passCount = (Number(egret.localStorage.getItem("passCount")) || 0) + count;
        egret.localStorage.setItem("passCount", "" + passCount);
        var passCountHero = (Number(egret.localStorage.getItem("passCountHero" + heroId)) || 0) + passCount;
        egret.localStorage.setItem("passCountHero" + heroId, "" + passCountHero);
    };
    FightData.setLevelVictoryFail = function (victory, heroId) {
        if (victory) {
            var victory_1 = (Number(egret.localStorage.getItem("levelVictory")) || 0) + 1;
            egret.localStorage.setItem("levelVictory", "" + victory_1);
            var victoryHero = (Number(egret.localStorage.getItem("levelVictoryHero" + heroId)) || 0) + 1;
            egret.localStorage.setItem("levelVictoryHero" + heroId, "" + victoryHero);
        }
        else {
            var fail = (Number(egret.localStorage.getItem("levelFail")) || 0) + 1;
            egret.localStorage.setItem("levelFail", "" + fail);
            var failHero = (Number(egret.localStorage.getItem("levelFailHero" + heroId)) || 0) + 1;
            egret.localStorage.setItem("levelFailHero" + heroId, "" + failHero);
        }
    };
    //=====================================试炼level的战斗信息====================================================
    //=====================================匹配match的战斗信息====================================================
    /**
     * @param matchFailCount 累计失败场次
     * @param matchVictoryCount 累计胜利场次
     * @param matchRepeatedly 最高连胜次数
     * @param matchRepeatedlyNow 当前连胜次数
     * @param matchFailHero+id 单英雄败场
     * @param matchVictoryHero+id 单英雄胜场
     */
    FightData.getFightMatchInfo = function () {
        var matchFailCount = Number(egret.localStorage.getItem("matchFailCount")) || 0;
        var matchVictoryCount = Number(egret.localStorage.getItem("matchVictoryCount")) || 0;
        var matchRepeatedly = Number(egret.localStorage.getItem("matchRepeatedly")) || 0;
        var matchRepeatedlyNow = Number(egret.localStorage.getItem("matchRepeatedlyNow")) || 0;
        var heroIds = HeroData.getHeroList();
        var info = {
            repeatedlyMax: matchRepeatedly,
            repeatedlyNow: matchRepeatedlyNow,
            victoryCount: matchVictoryCount,
            failCount: matchFailCount,
            heroList: []
        };
        heroIds.map(function (data, index) {
            var victory = Number(egret.localStorage.getItem("matchVictoryHero" + data)) || 0;
            info.heroList.push({ heroId: data, victory: victory });
        });
        return info;
    };
    FightData.setMatchVictoryFail = function (victory, heroId) {
        var repeatedlyMax = Number(egret.localStorage.getItem("matchRepeatedly")) || 0;
        var repeatedlyNow;
        if (victory) {
            var allVictory = (Number(egret.localStorage.getItem("matchVictoryCount")) || 0) + 1;
            egret.localStorage.setItem("matchVictoryCount", "" + allVictory);
            var matchVictoryHero = (Number(egret.localStorage.getItem("matchVictoryHero" + heroId)) || 0) + 1;
            egret.localStorage.setItem("matchVictoryHero" + heroId, "" + matchVictoryHero);
            repeatedlyNow = (Number(egret.localStorage.getItem("matchRepeatedlyNow")) || 0) + 1;
        }
        else {
            var allFail = (Number(egret.localStorage.getItem("matchFailCount")) || 0) + 1;
            egret.localStorage.setItem("matchFailCount", "" + allFail);
            var matchFailHero = (Number(egret.localStorage.getItem("matchFailHero" + heroId)) || 0) + 1;
            egret.localStorage.setItem("matchFailHero" + heroId, "" + matchFailHero);
            repeatedlyNow = 0;
        }
        egret.localStorage.setItem("matchRepeatedlyNow", "" + repeatedlyNow);
        egret.localStorage.setItem("matchRepeatedly", "" + Math.max(repeatedlyMax, repeatedlyNow));
    };
    //=====================================匹配match的战斗信息====================================================
    //=====================================排位rank的战斗信息====================================================
    /**
     * @param rankVictoryCount 总胜场
     * @param rankFailCount 总败场
     * @param rankVictoryHero+id 单英雄总胜场
     * @param rankFailHero+id 单英雄总败场
     */
    FightData.getFightRankInfo = function () {
        var rankVictoryCount = Number(egret.localStorage.getItem("rankVictoryCount")) || 0;
        var rankFailCount = Number(egret.localStorage.getItem("rankFailCount")) || 0;
        var info = {
            victoryCount: rankVictoryCount,
            failCount: rankFailCount,
            heroList: []
        };
        var heroIds = HeroData.getHeroList();
        heroIds.map(function (data, index) {
            var rankFailHero = Number(egret.localStorage.getItem("rankFailHero" + data)) || 0;
            var rankVictoryHero = Number(egret.localStorage.getItem("rankVictoryHero" + data)) || 0;
            info.heroList.push({ heroId: data, victory: rankVictoryHero, fail: rankFailHero });
        });
        return info;
    };
    FightData.setFightRankInfo = function (victory, heroId) {
        if (victory) {
            var victoryCount = (Number(egret.localStorage.getItem("rankVictoryCount")) || 0) + 1;
            egret.localStorage.setItem("rankVictoryCount", "" + victoryCount);
            var victoryHero = (Number(egret.localStorage.getItem("rankVictoryHero" + heroId)) || 0) + 1;
            egret.localStorage.setItem("rankVictoryHero" + heroId, "" + victoryHero);
        }
        else {
            var failCount = (Number(egret.localStorage.getItem("rankFailCount")) || 0) + 1;
            egret.localStorage.setItem("rankFailCount", "" + failCount);
            var failHero = (Number(egret.localStorage.getItem("rankFailHero" + heroId)) || 0) + 1;
            egret.localStorage.setItem("rankFailHero" + heroId, "" + failHero);
        }
    };
    return FightData;
}());
__reflect(FightData.prototype, "FightData");
//# sourceMappingURL=FightData.js.map