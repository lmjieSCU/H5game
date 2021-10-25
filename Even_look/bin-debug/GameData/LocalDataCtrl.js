var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**本地信息
 * 包括已通过最高关卡，共计得分总值,金币数,每一关卡最高分数
 */
var LocalDataCtrl = (function () {
    function LocalDataCtrl() {
        // egret.localStorage.clear()
        this.highScores = new Array();
        this.highStars = new Array();
        if (egret.localStorage.getItem("highLevel") == null) {
            egret.localStorage.setItem("highLevel", "0");
            console.log("new level");
        }
        this.highLevel = Number(egret.localStorage.getItem("highLevel"));
        //
        if (egret.localStorage.getItem("coins") == null) {
            egret.localStorage.setItem("coins", "0");
            console.log("new coins");
        }
        this.coins = Number(egret.localStorage.getItem("coins"));
        //
        for (var i = 0; i < 100; i++) {
            if (egret.localStorage.getItem("highScore" + i) == null) {
                egret.localStorage.setItem("highScore" + i, "0");
            }
            this.highScores[i] = Number(egret.localStorage.getItem("highScore" + i));
            if (egret.localStorage.getItem("highStar" + i) == null) {
                egret.localStorage.setItem("highStar" + i, "0");
            }
            this.highStars[i] = Number(egret.localStorage.getItem("highStar" + i));
        }
        //
        if (egret.localStorage.getItem("totalScore") == null) {
            egret.localStorage.setItem("totalScore", "0");
            console.log("new totalScores");
        }
        this.totalScore = Number(egret.localStorage.getItem("totalScore"));
    }
    Object.defineProperty(LocalDataCtrl, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new LocalDataCtrl();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    LocalDataCtrl.prototype.FreshLevel = function (lv) {
        if (lv < 0 || lv > 99) {
            return;
        }
        if (lv <= this.highLevel) {
            return;
        }
        this.highLevel = lv;
        egret.localStorage.removeItem("highLevel");
        egret.localStorage.setItem("highLevel", String(lv));
        return;
    };
    LocalDataCtrl.prototype.FreshLvhighScore = function (score, lv) {
        if (lv < 0 || lv > 99) {
            return;
        }
        if (score <= this.highScores[lv]) {
            return;
        }
        this.highScores[lv] = score;
        egret.localStorage.removeItem("highScore" + lv);
        egret.localStorage.setItem("highScore" + lv, String(score));
        return;
    };
    LocalDataCtrl.prototype.FreshTotalScore = function (score) {
        if (score < 0) {
            return this.totalScore;
        }
        this.totalScore = this.totalScore + score;
        egret.localStorage.removeItem("totalScore");
        egret.localStorage.setItem("totalScore", String(this.totalScore));
        return this.totalScore;
    };
    LocalDataCtrl.prototype.Freshcoins = function (coin) {
        this.coins = this.coins + coin;
        GameData.jinbi = this.coins;
        egret.localStorage.removeItem("coins");
        egret.localStorage.setItem("coins", String(this.coins));
        return;
    };
    LocalDataCtrl.prototype.FreshLvStar = function (star, lv) {
        if (lv < 0 || lv > 99) {
            return;
        }
        if (star <= this.highStars[lv]) {
            return;
        }
        console.log(star, lv);
        this.highStars[lv] = star;
        egret.localStorage.removeItem("highStar" + lv);
        egret.localStorage.setItem("highStar" + lv, String(star));
        return;
    };
    return LocalDataCtrl;
}());
__reflect(LocalDataCtrl.prototype, "LocalDataCtrl");
//# sourceMappingURL=LocalDataCtrl.js.map