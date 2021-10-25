var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FightRank = (function (_super) {
    __extends(FightRank, _super);
    function FightRank(playInfo) {
        var _this = _super.call(this) || this;
        _this.rank = new egret.DisplayObjectContainer();
        _this.rankChest = new egret.DisplayObjectContainer();
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        return _this;
    }
    FightRank.prototype.onEnter = function () {
        this.rankInfo = PlayerData.getRankInfo();
        this.rankHeroInfo = PlayerData.getRankHeroInfo();
        // let victoryAll = 0;
        // let fallAll = 0;
        // let heroVictoyr = 0;
        // let heroFail = 0;
        // this.rankHeroInfo.map((data, index) => {
        //     victoryAll += data.victory;
        //     fallAll += data.victory;
        // })
        this.initRank();
        this.initChest();
        var start = UI.addBtn(this, "Online_button_startgame_png", UI.WINSIZE_W / 2 - 100, UI.WINSIZE_H - 50, true, function () {
            console.log("排位");
        });
    };
    FightRank.prototype.initRank = function () {
        this.rank = new egret.DisplayObjectContainer();
        var bg = UI.addPic(this.rank, "Ranking_box01_png", 0, 0);
        this.rank.y = this.parent.getChildAt(0).height;
        this.rank.width = bg.width;
        this.rank.height = bg.height;
        this.rank.x = UI.WINSIZE_W - this.rank.width - 50;
        var imgBox = UI.addPic(this.rank, "Ranking_box02_png", 30, 20);
        var rank = UI.addPic(this.rank, "Ranking_word_lv" + this.rankInfo.rank + "_png", imgBox.x + imgBox.width + 10, imgBox.y + imgBox.height / 2, true);
        rank.x += rank.width / 2;
        var smallRank = UI.addPic(this.rank, "Ranking_word_" + this.rankInfo.smallRank + "_png", rank.x + rank.width / 2 + 10, rank.y, true);
        smallRank.x += smallRank.width / 2;
        for (var i = 1; i <= 3; i++) {
            var rankStar = UI.addPic(this.rank, "Ranking_star_" + (this.rankInfo.rankStar >= i ? 'on' : 'off') + "_png", smallRank.x + smallRank.width / 2 + 10, smallRank.y, true);
            rankStar.x += i * (rankStar.width + 10);
        }
        this.addChild(this.rank);
        this.fightRankInfo = FightData.getFightRankInfo();
        var progrsee = this.parent.createProgress(this.fightRankInfo.failCount / (this.fightRankInfo.failCount + this.fightRankInfo.victoryCount) || 0);
        progrsee.y = imgBox.y + imgBox.height + 10;
        progrsee.x = this.rank.width / 2 - progrsee.width / 2;
        this.rank.addChild(progrsee);
        var victory = this.parent.getNumber(this.fightRankInfo.victoryCount, this.rank);
        victory.x = this.rank.width / 2 - 25;
        victory.y = 105;
        var fail = this.parent.getNumber(this.fightRankInfo.failCount, this.rank);
        fail.x = this.rank.width / 2 - 25;
        fail.y = 125;
        var victoryRate = this.parent.getNumber(this.fightRankInfo.victoryCount / this.fightRankInfo.failCount || 0, this.rank);
        victoryRate.x = this.rank.width / 2 - 25;
        victoryRate.y = 145;
        this.appearanceRate = this.parent.getNumber((this.fightRankInfo.heroList[0].fail + this.fightRankInfo.heroList[0].victory) / (this.fightRankInfo.victoryCount + this.fightRankInfo.failCount) || 0, this.rank);
        this.appearanceRate.x = this.rank.width / 2 - 20;
        this.appearanceRate.y = 165;
        this.heroVictory = this.parent.getNumber(this.fightRankInfo.heroList[0].victory, this.rank);
        this.heroVictory.x = this.rank.width / 2;
        this.heroVictory.y = 200;
        this.heroFail = this.parent.getNumber(this.fightRankInfo.heroList[0].fail, this.rank);
        this.heroFail.x = this.rank.width / 2;
        this.heroFail.y = 220;
        this.heroVictoryRate = this.parent.getNumber(this.fightRankInfo.heroList[0].victory / (this.fightRankInfo.heroList[0].fail + this.fightRankInfo.heroList[0].victory) || 0, this.rank);
        this.heroVictoryRate.x = this.rank.width / 2 - 20;
        this.heroVictoryRate.y = 237;
    };
    FightRank.prototype.initChest = function () {
        var _this = this;
        this.rankChest = new egret.DisplayObjectContainer();
        this.addChild(this.rankChest);
        var bg = UI.addPic(this.rankChest, "Ranking_box03_png", 0, 0);
        this.rankChest.x = this.rank.x + this.rank.width / 2;
        this.rankChest.y = this.rank.y + this.rank.height + 10;
        this.rankChest.width = bg.width;
        this.rankChest.height = bg.height;
        this.rankChest.anchorOffsetX = this.rankChest.width / 2;
        var progrseeBg = UI.addPic(this.rankChest, "Ranking_progress_bg_png", this.rankChest.width / 2, this.rankChest.height / 2, true);
        var progrsee = UI.addPic(this.rankChest, "Ranking_progress_png", progrseeBg.x, progrseeBg.y, true);
        var progrseeMask = new egret.Shape();
        progrseeMask.graphics.beginFill(0x000000);
        progrseeMask.graphics.drawRect(0, 0, progrseeBg.width, progrseeBg.height);
        progrseeMask.graphics.endFill();
        progrseeMask.x = progrseeBg.x - progrseeBg.width / 2;
        progrseeMask.y = progrseeBg.y - progrseeBg.height / 2;
        this.rankChest.addChild(progrseeMask);
        progrsee.mask = progrseeMask;
        progrseeMask.scaleX = (this.rankInfo.rank - 1 + (this.rankInfo.smallRank - 1) / 3 + this.rankInfo.rankStar / 9) / 5;
        var point = UI.addPic(this.rankChest, "Ranking_pic_round_png", progrseeBg.x - progrseeBg.width / 2, progrseeBg.y, true);
        var rankReward = [3, 4.5, 6];
        rankReward.map(function (data, index) {
            var chest = new egret.DisplayObjectContainer();
            _this.rankChest.addChild(chest);
            var chestBg = UI.addPic(chest, "Task_pic_treasure_png", 0, 0, true, 0.6);
            chest.width = chestBg.width;
            chest.height = chestBg.height;
            chestBg.x = chestBg.width / 2;
            chestBg.y = chestBg.height / 2;
            chest.y = progrseeBg.y;
            chest.x = progrseeBg.x + (data - 3) * progrseeBg.width / 6;
            chest.anchorOffsetX = chest.width / 2;
            chest.anchorOffsetY = chest.height / 2;
            if (_this.rankInfo.rank >= PlayerData.rankReward[index].lv) {
                if (PlayerData.getRankReward(index) == "1") {
                    chestBg.$setTexture(RES.getRes("Task_pic_treasure_open_png"));
                    chestBg.anchorOffsetX = chestBg.width / 2;
                    chestBg.anchorOffsetY = chestBg.height / 2;
                    chestBg.$setScaleX(0.5);
                    chestBg.$setScaleY(0.5);
                }
                else {
                    UI.addPic(chest, "Task_pic_treasure_shadow_png", chestBg.x, chestBg.y, true, 0.6);
                    UI.addClickAction(_this, chest, function () { return _this.getReward(chest, index); });
                }
            }
        });
    };
    FightRank.prototype.getReward = function (chest, index) {
        var open = chest.getChildAt(0);
        open.$setTexture(RES.getRes("Task_pic_treasure_open_png"));
        chest.removeChildAt(1);
        open.anchorOffsetX = open.width / 2;
        open.anchorOffsetY = open.height / 2;
        open.$setScaleX(0.5);
        open.$setScaleY(0.5);
        var reward = PlayerData.setRankReward(index, 1);
    };
    return FightRank;
}(egret.DisplayObjectContainer));
__reflect(FightRank.prototype, "FightRank", ["egret.DisplayObject"]);
//# sourceMappingURL=FightRank.js.map