var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerData = (function () {
    function PlayerData() {
    }
    /**
     * @param ran 段位
     * @param smallRank 小段位
     * @param rankStar 段位星星
     * @param rankVictoryHero+id 单英雄排位胜场
     * @param rankFallHero+id 单英雄排位负场
     * @param rankMax 最高段未 段位|小段位|段位星星
     * @param rankReward+index 0未领取，1已领取
     * @param playerLv 当前等级
     * @param playerExp 当前经验
     */
    PlayerData.getRankInfo = function () {
        var rank = egret.localStorage.getItem("rank");
        var smallRank = egret.localStorage.getItem("smallRank");
        var rankStar = egret.localStorage.getItem("rankStar");
        var rankInfo;
        if (!rank || !smallRank || !rankStar) {
            egret.localStorage.setItem("rank", "1");
            egret.localStorage.setItem("smallRank", "1");
            egret.localStorage.setItem("rankStar", "0");
            rankInfo = {
                rank: 1,
                rankStar: 0,
                smallRank: 1
            };
        }
        else {
            rankInfo = {
                rank: Number(rank),
                rankStar: Number(rankStar),
                smallRank: Number(smallRank)
            };
        }
        return rankInfo;
    };
    PlayerData.setRankInfo = function (victory) {
        var rank = Number(egret.localStorage.getItem("rank"));
        var smallRank = Number(egret.localStorage.getItem("smallRank"));
        var rankStar = Number(egret.localStorage.getItem("rankStar"));
        rankStar += victory;
        if (rankStar >= 4) {
            smallRank++;
            rankStar = 0;
        }
        else if (rankStar < 0) {
            smallRank--;
            rankStar = 3;
        }
        if (smallRank >= 4) {
            rank++;
            smallRank = 1;
        }
        else if (smallRank < 1) {
            if (rank > 1) {
                rank--;
                smallRank = 3;
            }
            else
                smallRank = 1;
        }
        egret.localStorage.setItem("rank", rank.toString());
        egret.localStorage.setItem("smallRank", smallRank.toString());
        egret.localStorage.setItem("rankStar", rankStar.toString());
    };
    PlayerData.getRankHeroInfo = function () {
        var heroList = PropData.getHeroList();
        var heroRankInfo = [];
        heroList.map(function (data, index) {
            var victory = Number(egret.localStorage.getItem("rankVictoryHero" + data.id));
            var fall = Number(egret.localStorage.getItem("rankFallHero" + data.id));
            var info = {
                heroId: data.id,
                victory: 0,
                fall: 0,
            };
            if (victory)
                info.victory = victory;
            else
                egret.localStorage.setItem("rankVictoryHero" + data.id, "0");
            if (fall)
                info.fall = fall;
            else
                egret.localStorage.setItem("rankFallHero" + data.id, "0");
            heroRankInfo.push(info);
        });
        return heroRankInfo;
    };
    PlayerData.setRankHeroInfo = function (id, victory) {
        var victoryNum = Number(egret.localStorage.getItem("rankVictoryHero" + id));
        var fallNum = Number(egret.localStorage.getItem("rankFallHero" + id));
        if (victory)
            egret.localStorage.setItem("rankVictoryHero" + id, (victoryNum + 1).toString());
        else
            egret.localStorage.setItem("rankVictoryHero" + id, (fallNum + 1).toString());
    };
    PlayerData.getRankMax = function () {
        var rankMax = egret.localStorage.getItem("rankMax");
        var rankInfo;
        if (rankMax) {
            var max = rankMax.split("|");
            rankInfo = {
                rank: Number(max[0]),
                smallRank: Number(max[1]),
                rankStar: Number(max[2])
            };
            return rankInfo;
        }
        egret.localStorage.setItem("rankMax", "1|1|0");
        rankInfo = {
            rank: 1,
            smallRank: 1,
            rankStar: 0
        };
        return rankInfo;
    };
    PlayerData.getRankReward = function (index) {
        var status = egret.localStorage.getItem("rankReward" + index);
        if (status) {
            return status;
        }
        else {
            egret.localStorage.setItem("rankReward0", "0");
            egret.localStorage.setItem("rankReward1", "0");
            egret.localStorage.setItem("rankReward2", "0");
            return "0";
        }
    };
    PlayerData.setRankReward = function (index, status) {
        egret.localStorage.setItem("rankReward" + index, "" + status);
        if (status == 1) {
            var reward = {
                type: this.rankReward[index].rewardType,
                num: this.rankReward[index].rewardNum
            };
            return reward;
        }
        return null;
    };
    PlayerData.setRankMax = function (rankInfo) {
        var rankMax = this.getRankMax();
        if (rankInfo.rank > rankMax.rank) {
            egret.localStorage.setItem("rankMax", rankMax.rank + "|" + rankMax.smallRank + "|" + rankMax.rankStar);
            return "rank";
        }
        else if (rankInfo.rank == rankMax.rank) {
            if (rankInfo.smallRank > rankMax.smallRank) {
                egret.localStorage.setItem("rankMax", rankMax.rank + "|" + rankMax.smallRank + "|" + rankMax.rankStar);
                return "smallRank";
            }
            else if (rankInfo.smallRank == rankMax.smallRank) {
                if (rankInfo.rankStar > rankMax.rankStar) {
                    egret.localStorage.setItem("rankMax", rankMax.rank + "|" + rankMax.smallRank + "|" + rankMax.rankStar);
                    return "rankStar";
                }
                return '';
            }
            return '';
        }
        return '';
    };
    // public static getRankReward
    PlayerData.getMaxLevel = function () {
        var max = egret.localStorage.getItem("maxLevel");
        if (max)
            return Number(max);
        egret.localStorage.setItem("maxLevel", "0");
        return 0;
    };
    PlayerData.setMaxLevel = function (level) {
        var max = this.getMaxLevel();
        if (level <= max)
            return false;
        egret.localStorage.setItem("maxLevel", "" + (max + 1));
        return true;
    };
    PlayerData.flushMaxLevel = function () {
        egret.localStorage.setItem("maxLevel", "0");
    };
    PlayerData.setPlayerLv = function (Exp, Lv) {
        if (Exp === void 0) { Exp = 0; }
        if (Lv === void 0) { Lv = 0; }
        var lv = Number(egret.localStorage.getItem("playerLv")) || 1;
        var exp = Number(egret.localStorage.getItem("playerExp")) || 0;
        if (Lv != 0)
            lv += Lv;
        if (exp != 0 && lv < 30) {
            var exper = exp + Exp;
            while (this.playerLv[lv - 1].exp >= exper) {
                exper -= this.playerLv[lv - 1].exp;
                lv++;
            }
            exp = exper;
        }
        egret.localStorage.setItem("playerLv", "" + lv);
        egret.localStorage.setItem("playerExp", "" + exp);
        return { lv: lv, exp: exp };
    };
    PlayerData.playerLv = [
        { lv: 1, exp: 100 },
        { lv: 2, exp: 150 },
        { lv: 3, exp: 300 },
        { lv: 4, exp: 600 },
        { lv: 5, exp: 900 },
        { lv: 6, exp: 1200 },
        { lv: 7, exp: 1500 },
        { lv: 8, exp: 1800 },
        { lv: 9, exp: 2100 },
        { lv: 10, exp: 2300 },
        { lv: 11, exp: 2500 },
        { lv: 12, exp: 2700 },
        { lv: 13, exp: 2900 },
        { lv: 14, exp: 3100 },
        { lv: 15, exp: 3300 },
        { lv: 16, exp: 3500 },
        { lv: 17, exp: 3700 },
        { lv: 18, exp: 3900 },
        { lv: 19, exp: 4100 },
        { lv: 20, exp: 4300 },
        { lv: 21, exp: 4500 },
        { lv: 22, exp: 4700 },
        { lv: 23, exp: 4900 },
        { lv: 24, exp: 5100 },
        { lv: 25, exp: 5300 },
        { lv: 26, exp: 5500 },
        { lv: 27, exp: 5700 },
        { lv: 28, exp: 5900 },
        { lv: 29, exp: 6100 },
    ];
    PlayerData.lvReward = [
        { lv: 5, rewardType: [1002, 1004], rewardNum: [5, 2] },
        { lv: 10, rewardType: [1002, 1004], rewardNum: [10, 4] },
        { lv: 15, rewardType: [1002, 1004, 1005], rewardNum: [20, 8, 25] },
        { lv: 20, rewardType: [1002, 1004, 1005], rewardNum: [40, 16, 50] },
        { lv: 25, rewardType: [1002, 1004, 1005], rewardNum: [80, 32, 100] }
    ];
    PlayerData.rank = [
        { lv: 1, name: "拳者" },
        { lv: 2, name: "拳师" },
        { lv: 3, name: "拳王" },
        { lv: 4, name: "拳尊" },
        { lv: 5, name: "拳圣" },
        { lv: 6, name: "拳皇" },
    ];
    PlayerData.maxRankReward = {
        "smallRank": { rewardType: [1002], rewardNum: [1] },
        "rank": { rewardType: [1002, 1004, 1005], rewardNum: [5, 2, 5] }
    };
    PlayerData.rankReward = [
        { lv: 3, rewardType: 2002, rewardNum: 1 },
        { lv: 5, rewardType: 2005, rewardNum: 1 },
        { lv: 6, rewardType: 2999, rewardNum: 1 },
    ];
    PlayerData.levelReward = {
        "level5": { rewardType: [1005], rewardNum: [2] },
        "level6": { rewardType: [1005], rewardNum: [2] },
        "level7": { rewardType: [1005], rewardNum: [2] },
        "level8": { rewardType: [1005], rewardNum: [2] },
        "level9": { rewardType: [1005], rewardNum: [2] },
        "level10": { rewardType: [1005], rewardNum: [2] },
        "level11": { rewardType: [1005, 1002], rewardNum: [2, 2] },
        "level12": { rewardType: [1005, 1005], rewardNum: [2, 10] },
        "level13": { rewardType: [1005, 1005], rewardNum: [2, 10] }
    };
    return PlayerData;
}());
__reflect(PlayerData.prototype, "PlayerData");
//# sourceMappingURL=PlayerData.js.map