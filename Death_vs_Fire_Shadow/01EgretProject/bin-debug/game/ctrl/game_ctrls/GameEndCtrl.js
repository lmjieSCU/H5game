var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameEndCtrl = (function () {
    function GameEndCtrl() {
        return;
    } // end function
    GameEndCtrl.prototype.initlize = function (param1, param2) {
        GameCtrl.I.gameRunData.setAllowLoseHP(false);
        this._winner = param1;
        this._loser = param2;
        this._step = 0;
        this._isRender = true;
        return;
    }; // end function
    GameEndCtrl.prototype.drawGame = function () {
        GameCtrl.I.gameRunData.setAllowLoseHP(false);
        this._drawGame = true;
        this._step = 0;
        this._isRender = true;
        return;
    }; // end function
    GameEndCtrl.prototype.destory = function () {
        this._winner = null;
        this._loser = null;
        return;
    }; // end function
    GameEndCtrl.prototype.render = function () {
        if (!this._isRender) {
            return false;
        }
        this._holdFrame = (this._holdFrame - 4);
        if (this._holdFrame > 0) {
            return false;
        }
        //屏蔽
        GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        if (this._drawGame) {
            return this.renderDrawGame();
        }
        return this.renderEND();
    }; // end function
    GameEndCtrl.prototype.renderDrawGame = function () {
        var _this = this;
        switch (Number(this._step)) {
            case 0:
                GameUI.I.getUI().showEnd(function (e) { _this._holdFrame = 0; }, { "drawGame": true });
                this._step = 1;
                this._holdFrame = 15 * GameConfig.FPS_GAME;
                break;
            case 1:
                this._isRender = false;
                GameUI.I.getUI().clearStartAndEnd();
                break;
        }
        return true;
    }; // end function
    GameEndCtrl.prototype.renderEND = function () {
        var _this = this;
        console.log("renderEND:  ", this._step);
        switch (Number(this._step)) {
            //UI提示time over / ko
            case 0:
                GameUI.I.getUI().showEnd(function (e) { _this._holdFrame = 0; }, {
                    "winner": this._winner,
                    "loser": this._loser
                });
                this._step = 1;
                this._holdFrame = 15 * GameConfig.FPS_GAME;
                break;
            //胜者造型
            case 1:
                if (!FighterActionState.isAllowWinState(this._winner.actionState)) {
                    return false;
                }
                this._winner.win();
                this._holdFrame = 3 * GameConfig.FPS_GAME;
                this._step = 2;
                var rundata = GameCtrl.I.gameRunData;
                var winner = rundata.lastWinner;
                if (GameMode.isTeamMode() || GameMode.currentMode == GameMode.SURVIVOR) {
                    var timeRate = rundata.gameTime == -1 ? 1 : Number(rundata.gameTime / rundata.gameTimeMax);
                    var addHPMax = winner.hpMax * 0.2;
                    var addHP = addHPMax * timeRate;
                    if (addHP < winner.hpMax * 0.05) {
                        addHP = winner.hpMax * 0.05;
                    }
                    winner.hp = winner.hp + addHP;
                }
                rundata.lastWinnerHp = winner.hp;
                break;
            case 2:
                this._step = 22;
                this._winner = null;
                this._loser = null;
                this._step = 3;
                StateCtrl.I.transIn(function () {
                    this._step = 3;
                }, false);
                break;
            case 3:
                this._isRender = false;
                GameUI.I.getUI().clearStartAndEnd();
                GameUI.I.getUI().fadOut(false);
                break;
        }
    }; // end function
    GameEndCtrl.prototype.skip = function () {
        if (this._step == 2) {
            this._holdFrame = 0;
        }
        return;
    }; // end function
    return GameEndCtrl;
}());
__reflect(GameEndCtrl.prototype, "GameEndCtrl");
//# sourceMappingURL=GameEndCtrl.js.map