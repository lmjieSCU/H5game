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
var FightUI = (function (_super) {
    __extends(FightUI, _super);
    function FightUI() {
        var _this = _super.call(this) || this;
        _this._flyTimer = 0;
        _this._startKOmcAnimate = false;
        _this._winnerAnimate = false;
        _this.ui = new zmovie.ZMovieClip(["fightui0_json"], RES.getRes("fightui_json"), "fightui");
        var scale = 0.8;
        _this.ui.scaleX = scale;
        _this.ui.scaleY = scale;
        //
        _this._fightbar = new FightBar(_this.ui.getChildMovie("hpbarmc"));
        _this._qibar1 = new QiBar(_this.ui.getChildMovie("fzqi1"));
        _this._qibar2 = new QiBar(_this.ui.getChildMovie("fzqi2"));
        _this._hits1 = new HitsUI(_this.ui.getChildMovie("hits1"));
        _this._hits2 = new HitsUI(_this.ui.getChildMovie("hits2"));
        _this._startKOmc = _this.ui.getChildMovie("startKOmc");
        _this._qibar2.setDirect(-1);
        _this._p1PosUI = new egret.Bitmap(RES.getRes("player_pos_p1_png"));
        _this._p2PosUI = new egret.Bitmap(RES.getRes("player_pos_p2_png"));
        _this._p1PosUI.visible = false;
        _this._p2PosUI.visible = false;
        //this.ui.addChild(this._p1PosUI);
        //this.ui.addChild(this._p2PosUI);
        if (GameMode.isAcrade()) {
            //this.trace("fightUI.initlize");
            _this._fightbar.initScore();
            GameEvent.addEventListener("SCORE_UPDATE", _this.updateScore);
        }
        return _this;
    } // end 
    FightUI.prototype.IGameUI = function () {
    };
    FightUI.prototype.initlize = function (param1, param2) {
        this._fightbar.setFighter(param1, param2);
        this._qibar1.setFighter(param1.currentFighter, param1.fuzhu);
        this._qibar2.setFighter(param2.currentFighter, param2.fuzhu);
        this.updateScore();
        //
        this.ui.x = UI.WINSIZE_W / 2 - 320;
        this.ui.y = 95;
        GameScene.instance.addChild(this.ui);
        return;
    }; // end function
    FightUI.prototype.showWins = function (param1, param2) {
        this._fightbar.showWin(param1, param2);
        return;
    }; // end function
    FightUI.prototype.updateScore = function () {
        GameUI.I.getUI()._fightbar.setScore(GameData.I.score);
        //this._fightbar.setScore(GameData.I.score);
        return;
    }; // end function
    FightUI.prototype.destory = function () {
        GameEvent.removeEventListener("SCORE_UPDATE", this.updateScore);
        if (this._pauseDialog) {
            this._pauseDialog.destory();
            this._pauseDialog = null;
        }
        if (this._fightbar) {
            this._fightbar.destory();
            this._fightbar = null;
        }
        if (this._qibar1) {
            this._qibar1.destory();
            this._qibar1 = null;
        }
        if (this._qibar2) {
            this._qibar2.destory();
            this._qibar2 = null;
        }
        if (this._hits1) {
            this._hits1.destory();
            this._hits1 = null;
        }
        if (this._hits2) {
            this._hits2.destory();
            this._hits2 = null;
        }
        if (this.ui) {
            try {
                this.ui.removeChildren();
                //this.ui.stopAllMovieClips();
                this.ui.STOP();
            }
            catch (e) {
                //this.trace(e);
            }
            this.ui = null;
        }
        return;
    };
    ;
    FightUI.prototype.fadIn = function (param1) {
        if (param1 === void 0) { param1 = true; }
        this._fightbar.fadIn(param1);
        if (this.QI_BAR_MODE == 1) {
            this._qibar1.fadIn(false);
            this._qibar2.fadIn(false);
            this._qibar1.setPosAndScale(120, 60, 0.8);
            this._qibar2.setPosAndScale(675, 60, 0.8);
        }
        else {
            this._qibar1.fadIn(param1);
            this._qibar2.fadIn(param1);
        }
        return;
    };
    ;
    FightUI.prototype.fadOut = function (param1) {
        if (param1 === void 0) { param1 = true; }
        this._fightbar.fadOut(param1);
        this._qibar1.fadOut(param1);
        this._qibar2.fadOut(param1);
        return;
    };
    ;
    FightUI.prototype.getUI = function () {
        return this.ui;
    };
    ;
    FightUI.prototype.render = function () {
        this._fightbar.render();
        this._qibar1.render();
        this._qibar2.render();
        var _loc_1 = GameCtrl.I.gameState.camera.getZoom();
        this.renderPlayerPosUI(_loc_1);
        if (this._renderEnd) {
            this.renderEnd();
        }
        return;
    };
    ;
    FightUI.prototype.renderQibarPos = function (param1) {
        if (this.QI_BAR_MODE != 0) {
            return;
        }
        if (param1 < 1.5) {
            this._qibar1.moveTo(120, 60, 0.8);
            this._qibar2.moveTo(675, 60, 0.8);
        }
        else {
            this._qibar1.moveResume();
            this._qibar2.moveResume();
        }
        return;
    }; // end function
    FightUI.prototype.renderAnimate = function () {
        this._fightbar.renderAnimate();
        this._qibar1.renderAnimate();
        this._qibar2.renderAnimate();
        if (this._startKOmcAnimate) {
            this.renderStartAndKO();
        }
        if (this._winnerAnimate && this._startKOmc.getChildMovie("winnermc")) {
            this._startKOmc.getChildMovie("winnermc").nextFrame();
        }
        return;
    };
    ;
    FightUI.prototype.renderStartAndKO = function () {
        var _loc_2 = this._startKOmc;
        if (!_loc_2) {
            return;
        }
        var _loc_1 = _loc_2.getCurrPlayLabel();
        if (_loc_1) {
            if (_loc_1 == "stop") {
                return;
            }
            if (_loc_1.indexOf("go:") != -1) {
                _loc_2.gotoAndStop(_loc_1.split("go:")[1]);
                return;
            }
        }
        _loc_2.nextFrame();
        return;
    }; // end function
    FightUI.prototype.showHits = function (param1, param2) {
        var _loc_3 = param2 == 1 ? (this._hits1) : (this._hits2);
        _loc_3.show(param1);
        return;
    };
    ;
    FightUI.prototype.hideHits = function (param1) {
        var _loc_2 = param1 == 1 ? (this._hits1) : (this._hits2);
        _loc_2.hide();
        return;
    };
    ;
    FightUI.prototype.showStart = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        GameUI.I.getUI().ui.visible = true;
        var finishBack = param1;
        var params = param2;
        var onFight = function (event) {
            GameEvent.removeEventListener("fight", onFight);
            //this._startKOmc.removeEventListener("fight", onFight);
            return;
        } // end function
        ;
        var startComplete = function (event) {
            GameEvent.removeEventListener("complete", startComplete);
            //this._startKOmc.removeEventListener("complete", startComplete);
            if (finishBack != null) {
                finishBack();
            }
            return;
        } // end function
        ;
        this.fadIn();
        var round = GameCtrl.I.gameRunData.round;
        this._startKOmc.y = -50;
        this._startKOmc.round = round;
        this._startKOmc.gotoAndStop(round < 5 ? ("start") : ("start_final"));
        this._startKOmcAnimate = true;
        SoundCtrl.I.playStartSound("l_101");
        //GameEvent.addEventListener("fight",onFight)
        //this._startKOmc.addEventListener("fight", onFight,this);
        if (finishBack != null) {
            //GameEvent.addEventListener("complete",startComplete)
            //this._startKOmc.addEventListener("complete", startComplete,this);
        }
        return;
    };
    ;
    FightUI.prototype.showEnd = function (param1, param2) {
        var _loc_3 = null;
        this._endParam = param2;
        if (!this._endParam) {
            this._endParam = {};
        }
        this._endParam.finishBack = param1;
        this._drawGame = param2 ? (param2.drawGame) : (false);
        this._renderEnd = true;
        this._playOver = false;
        if (GameCtrl.I.gameRunData.isTimerOver) {
            this.playTimeOver();
        }
        else {
            _loc_3 = param2 ? (param2.loser) : (null);
            this.playKO(_loc_3);
        }
        return;
    };
    ;
    FightUI.prototype.playKO = function (param1) {
        if (param1 === void 0) { param1 = null; }
        var loser = param1;
        this._startKOmc.y = 0;
        this._startKOmc.gotoAndStop("ko");
        this._startKOmcAnimate = true;
        GameEvent.addEventListener("complete", this.koBack);
        //this._startKOmc.addEventListener("complete",this.koBack,this);
        SoundCtrl.I.playSwcSound(bsKO ? ("snd_ko_bs") : ("snd_ko"));
        this._qibar1.fadOut();
        this._qibar2.fadOut();
        this._showWinnerDelay = 0;
        EffectCtrl.I.freezeEnabled = false;
        this._isSlowDown = false;
        if (loser) {
            EffectCtrl.I.doEffectById("hit_end", loser.x, loser.y);
            EffectCtrl.I.shine(16777215, 0.5);
            GameCtrl.I.gameState.cameraFocusOne(loser.getDisplay());
        }
        GameCtrl.I.pause();
        var bsKO;
        var p1 = GameCtrl.I.gameRunData.p1FighterGroup.currentFighter;
        var p2 = GameCtrl.I.gameRunData.p2FighterGroup.currentFighter;
        if (p1 && p2) {
            EffectCtrl.I.BGEffect("kobg", 2);
            if (p1.actionState == 12 || p1.actionState == 13 || p2.actionState == 12 || p2.actionState == 13) {
                bsKO;
            }
        }
        EffectCtrl.I.shake(5, 0, 1.5);
        //SoundCtrl.I.playSwcSound(snd_over_hit);
        return;
    }; // end function
    FightUI.prototype.koBack = function () {
        EffectCtrl.I.freezeEnabled = true;
        GameEvent.removeEventListener("complete", this.koBack);
        //this._startKOmc.removeEventListener("complete", this.koBack,false);
        this._playOver = true;
        GameCtrl.I.resume();
        EffectCtrl.I.freezeEnabled = true;
        return;
    }; // end function
    FightUI.prototype.playTimeOver = function () {
        //屏蔽
        if (GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode instanceof btn_actionCtrl) {
            GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        }
        if (GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode instanceof btn_actionCtrl) {
            GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        }
        if (GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode instanceof FighterKeyCtrl_lmj) {
            GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        }
        if (GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode instanceof FighterKeyCtrl_lmj) {
            GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        }
        this._startKOmc.y = 0;
        this._startKOmc.gotoAndStop("timeover");
        this._startKOmcAnimate = true;
        SoundCtrl.I.playStartSound("l_128");
        GameEvent.addEventListener("complete", this.timeoverBack);
        //this._startKOmc.addEventListener("complete",this.timeoverBack,this);
        this._qibar1.fadOut();
        this._qibar2.fadOut();
        return;
    }; // end function
    FightUI.prototype.timeoverBack = function () {
        EffectCtrl.I.freezeEnabled = true;
        GameEvent.removeEventListener("complete", this.timeoverBack);
        //this._startKOmc.removeEventListener("complete",this.timeoverBack,false);
        if (this._drawGame) {
            this.playDrawGame();
            this._showWinnerDelay = 0;
        }
        else {
            this._playOver = true;
            this._showWinnerDelay = 1 * GameConfig.FPS_GAME;
        }
        return;
    }; // end function
    FightUI.prototype.playDrawGame = function () {
        this._startKOmc.gotoAndStop("drawgame");
        this._startKOmcAnimate = true;
        //SoundCtrl.I.playStartSound("l_131")
        GameEvent.addEventListener("complete", this.drawGameBack);
        //this._startKOmc.addEventListener("complete", this.drawGameBack,this);
        return;
    }; // end function
    FightUI.prototype.drawGameBack = function (event) {
        GameEvent.removeEventListener("complete", this.drawGameBack);
        //this._startKOmc.removeEventListener("complete",this.drawGameBack,false);
        if (this._endParam.finishBack != null) {
            //this._endParam.finishBack();
        }
        return;
    }; // end function
    FightUI.prototype.renderEnd = function () {
        var _loc_2 = null;
        if (!this._playOver) {
            return;
        }
        if (!this._endParam) {
            return;
        }
        if (this._showWinnerDelay > 0) {
            this._showWinnerDelay = (this._showWinnerDelay - 1);
            if (this._showWinnerDelay <= 0) {
                _loc_2 = this._endParam.winner;
                if (_loc_2) {
                    GameCtrl.I.gameState.cameraFocusOne(_loc_2.getDisplay());
                    this.showWinner(_loc_2);
                    if (GameMode.isSingleMode()) {
                        this.showWins(_loc_2, GameCtrl.I.gameRunData.getWins(_loc_2));
                    }
                    if (this._endParam) {
                        this._endParam.finishBack();
                    }
                }
                this._renderEnd = false;
                this._endParam = null;
            }
            return;
        }
        var _loc_1 = this._endParam.loser;
        if (_loc_1) {
            if (_loc_1.actionState == 22) {
                if (!this._isSlowDown) {
                    this._isSlowDown = true;
                    EffectCtrl.I.slowDown(2, 0);
                    this._flyTimer = egret.getTimer();
                }
            }
            if (_loc_1.actionState == 30) {
                if (this._isSlowDown) {
                    if (egret.getTimer() - this._flyTimer < 2000) {
                        this._showWinnerDelay = 2 * GameConfig.FPS_GAME;
                    }
                    else {
                        this._showWinnerDelay = 1 * GameConfig.FPS_GAME;
                    }
                    EffectCtrl.I.slowDownResume();
                }
                else {
                    this._showWinnerDelay = 2 * GameConfig.FPS_GAME;
                    EffectCtrl.I.slowDownResume();
                }
            }
        }
        return;
    }; // end function
    FightUI.prototype.clearStartAndEnd = function () {
        this._startKOmc.gotoAndStop(1);
        return;
    }; // end function
    FightUI.prototype.pause = function () {
        if (!this._pauseDialog) {
            this._pauseDialog = new PauseDialog();
            this.ui.addChild(this._pauseDialog);
        }
        this._pauseDialog.show();
        return;
    }; // end function
    FightUI.prototype.resume = function () {
        if (!this._pauseDialog) {
            return;
        }
        this._pauseDialog.hide();
        return;
    }; // end function
    FightUI.prototype.showWinner = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var winner = param1;
        var back = param2;
        var winnerBack = function (event) {
            GameEvent.removeEventListener("complete", winnerBack);
            //this._startKOmc.removeEventListener("complete", winnerBack);
            if (back != null) {
                back();
            }
            return;
        } // end function
        ;
        this._startKOmc.y = 30;
        var teamid = winner && winner.team ? (winner.team.id) : (1);
        // switch((teamid - 1)) branch count is:<1>[11, 26] default offset is:<38>;
        // ui.startKOmc.$winnerX = 30;
        // ;
        // ui.startKOmc.$winnerX = 546;
        // ui.startKOmc.$perfect = winner.hp >= winner.hpMax;
        this._startKOmc.isPerfect = winner.hp >= winner.hpMax;
        this._startKOmc.gotoAndStop("winner");
        this._startKOmcAnimate = true;
        this._startKOmc.x = 30;
        if (back != null) {
            GameEvent.addEventListener("complete", winnerBack);
            //this._startKOmc.addEventListener("complete", winnerBack,this);
        }
        return;
    }; // end function
    FightUI.prototype.renderPlayerPosUI = function (param1) {
        var _loc_4 = null;
        if (param1 > 1.8) {
            var _loc_5 = false;
            this._p2PosUI.visible = false;
            this._p1PosUI.visible = _loc_5;
            return;
        }
        var _loc_3 = GameCtrl.I.gameRunData.p1FighterGroup.currentFighter;
        var _loc_2 = GameCtrl.I.gameRunData.p2FighterGroup.currentFighter;
        if (_loc_3) {
            _loc_4 = this.getPlayerPos(_loc_3);
            this._p1PosUI.x = _loc_4.x;
            this._p1PosUI.y = _loc_4.y;
            this._p1PosUI.visible = true;
        }
        if (_loc_2) {
            _loc_4 = this.getPlayerPos(_loc_2);
            this._p2PosUI.x = _loc_4.x;
            this._p2PosUI.y = _loc_4.y;
            this._p2PosUI.visible = true;
        }
        return;
    }; // end function
    FightUI.prototype.getPlayerPos = function (param1) {
        var _loc_2 = GameCtrl.I.gameState.getGameSpriteGlobalPosition(param1, 0, -50);
        if (_loc_2.x < 20) {
            _loc_2.x = 20;
        }
        if (_loc_2.x > GameConfig.GAME_SIZE.x - 20) {
            _loc_2.x = GameConfig.GAME_SIZE.x - 20;
        }
        if (_loc_2.y < 60) {
            _loc_2.y = 60;
        }
        if (_loc_2.y > GameConfig.GAME_SIZE.y - 5) {
            _loc_2.x = GameConfig.GAME_SIZE.x - 5;
        }
        return _loc_2;
    }; // end function
    return FightUI;
}(egret.DisplayObject));
__reflect(FightUI.prototype, "FightUI", ["IGameUI"]);
//# sourceMappingURL=FightUI.js.map