var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameRunDataVO = (function () {
    function GameRunDataVO() {
        this.p1Wins = 0;
        this.p2Wins = 0;
        this.lastWinnerHp = 1000;
        this.lastLoserQi = 0;
        this.round = 1;
        this.isTimeRuning = false;
        this.p1FighterGroup = new GameRunFighterGroup();
        this.p2FighterGroup = new GameRunFighterGroup();
        return;
    } // end function
    GameRunDataVO.prototype.getWins = function (param1) {
        switch (Number(param1.team.id) - 1) {
            case 0:
                return this.p1Wins;
            case 1:
                return this.p2Wins;
        }
    }; // end function
    GameRunDataVO.prototype.reset = function () {
        this.p1Wins = 0;
        this.p2Wins = 0;
        this.round = 1;
        this.lastWinnerTeam = null;
        this.lastWinner = null;
        this.lastLoserData = null;
        this.lastLoserQi = 0;
        this.isTimerOver = false;
        this.isDrawGame = false;
        this.lastWinnerHp = GameData.I.config.fighterHP;
        this.gameTimeMax = GameData.I.config.fightTime;
        this.gameTime = this.gameTimeMax;
        this.continueLoser = null;
        return;
    }; // end function
    GameRunDataVO.prototype.clear = function () {
        this.map = null;
        this.lastWinnerTeam = null;
        this.lastWinner = null;
        this.lastLoserData = null;
        this.continueLoser = null;
        return;
    }; // end function
    GameRunDataVO.prototype.nextRound = function () {
        this.round = this.round + 1;
        this.gameTime = this.gameTimeMax;
        this.isTimerOver = false;
        return;
    }; // end function
    GameRunDataVO.prototype.setAllowLoseHP = function (param1) {
        if (this.p1FighterGroup) {
            // this.p1FighterGroup.currentFighter.isAllowLoseHP = param1;
        }
        if (this.p2FighterGroup) {
            // this.p2FighterGroup.currentFighter.isAllowLoseHP = param1;
        }
        return;
    }; // end function
    return GameRunDataVO;
}());
__reflect(GameRunDataVO.prototype, "GameRunDataVO");
//# sourceMappingURL=GameRunDataVO.js.map