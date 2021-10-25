var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameStartCtrl = (function () {
    function GameStartCtrl(param1) {
        this._introTeamId = -1;
        this.round = GameCtrl.I.gameRunData.round;
        // this._ui = (GameUI.I.getUI() as FightUI).getUI().getChildMovie("startKOmc")
        this._ui = GameUI.I.getUI()._startKOmc;
        this.nummc = this._ui.getChildMovie("nummc");
        this.winnermc = this._ui.getChildMovie("winnermc");
        //
        this._state = param1;
        this._ui.ClearFrameScript();
        var loop = [0, this.frame1, 26, this.frame27, 27, this.frame28, 52, this.frame53, 57, this.frame58, 86, this.frame88, 138, this.frame139, 188, this.frame190, 199, this.frame200, 200, this.frame201, 209, this.frame210, 261, this.frame263, 307, this.frame309];
        for (var i = 28; i < 52; i++) {
            loop.push(i);
            loop.push(this.frame28);
        }
        this._ui.addFrameScript(this, loop);
        return;
    } // end function
    GameStartCtrl.prototype.destory = function () {
        this._p1 = null;
        this._p2 = null;
        this._state = null;
        return;
    }; // end function
    GameStartCtrl.prototype.render = function () {
        if (this._isStart1v1) {
            return this.renderStart1v1();
        }
        if (this._isStartNextRound) {
            return this.renderNextRound();
        }
        return false;
    }; // end function
    GameStartCtrl.prototype.start1v1 = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = -1; }
        this._p1 = param1;
        this._p2 = param2;
        //屏蔽
        this._p1.owerKeyBoardMode.setenabled(false);
        this._p2.owerKeyBoardMode.setenabled(false);
        GameUI.I.getUI().ui.visible = false;
        this._isStart1v1 = true;
        this._introTeamId = param3;
        switch (Number(param3) - 1) {
            case 0:
                SoundCtrl.I.playFightBGM(param1.data.id);
                break;
            case 1:
                SoundCtrl.I.playFightBGM(param2.data.id);
                break;
        }
        this.preRenderStart();
        return;
    }; // end function
    GameStartCtrl.prototype.preRenderStart = function () {
        this._step = -1;
        var initStep;
        switch (Number(this._introTeamId) - -1) {
            case 0:
                initStep = 0;
                break;
            default:
                initStep = 0;
                break;
            case 2:
                this._state.cameraFocusOne(this._p1.getDisplay());
                initStep = 1;
                break;
            case 3:
                this._state.cameraFocusOne(this._p2.getDisplay());
                initStep = 2;
        }
        this._state.camera.updateNow();
        this._step = initStep;
        StateCtrl.I.transOut(function () {
            this._step = initStep;
            return;
        } // end function
        , true);
        return;
    }; // end function
    GameStartCtrl.prototype.renderStart1v1 = function () {
        if (this._uiPlaying) {
            return false;
        }
        if (this._p1.actionState == 60 || this._p2.actionState == 60) {
            return false;
        }
        this._holdFrame = this._holdFrame - 1;
        if (this._holdFrame > 0) {
            return false;
        }
        switch (Number(this._step)) {
            case 0:
                if (this._introTeamId == -1 || this._introTeamId == 1) {
                    this._state.cameraFocusOne(this._p1.getDisplay());
                    this._holdFrame = 0.5 * GameConfig.FPS_GAME;
                    this._step = 1;
                }
                else {
                    this._step = 2;
                }
                break;
            case 1:
                this._p1.sayIntro();
                this._holdFrame = 0.3 * GameConfig.FPS_GAME;
                this._step = 2;
                break;
            case 2:
                if (this._introTeamId == -1 || this._introTeamId == 2) {
                    this._state.cameraFocusOne(this._p2.getDisplay());
                    this._holdFrame = 0.5 * GameConfig.FPS_GAME;
                    this._step = 3;
                }
                else {
                    this._step = 4;
                }
                break;
            case 3:
                this._p2.sayIntro();
                this._holdFrame = 0.3 * GameConfig.FPS_GAME;
                this._step = 4;
                break;
            case 4:
                this._state.cameraResume();
                this._holdFrame = 0.1 * GameConfig.FPS_GAME;
                this._step = 5;
                break;
            case 5:
                this._uiPlaying = true;
                GameUI.I.getUI().showStart(function () {
                    this._uiPlaying = false;
                }, null);
                this._step = 6;
                break;
            case 6:
                this._p1 = null;
                this._p2 = null;
                break;
        }
    }; // end function
    GameStartCtrl.prototype.startNextRound = function () {
        this._isStartNextRound = true;
        this._uiPlaying = true;
        StateCtrl.I.transOut(null, true);
        GameUI.I.getUI().showStart(function () {
            this._uiPlaying = false;
            return;
        }, null);
        return;
    }; // end function
    GameStartCtrl.prototype.skip = function () {
        if (this._isStart1v1) {
            if (this._step < 5) {
                StateCtrl.I.quickTrans();
                this._state.cameraResume();
                this._uiPlaying = false;
                this._step = 6;
                this._state.gameUI.getUI().fadIn(true);
                this._p1.idle();
                this._p2.idle();
                this._holdFrame = 0.5 * GameConfig.FPS_GAME;
            }
        }
        if (this._isStartNextRound) {
        }
        return;
    }; // end function
    GameStartCtrl.prototype.renderNextRound = function () {
        return this._uiPlaying == false;
    }; // end function
    GameStartCtrl.prototype.frame1 = function () {
        this.round = 1;
        this.perfect = false;
        this.winnerX = 30;
        this.winnerY = 90;
        GameUI.I.getUI()._startKOmcAnimate = false;
        //this._ui.stop();
        return;
    };
    GameStartCtrl.prototype.frame27 = function () {
        this.nummc = this._ui.getChildMovie("nummc");
        if (this.round < 1) {
            this.round = 1;
        }
        if (this.round > 5) {
            this.round = 5;
        }
        if (this.nummc) {
            this.nummc.gotoAndPlay("r" + this.round);
            SoundCtrl.I.playStartSound("l_" + this.round);
        }
        GameCtrl.I._renderTimeFrame = 0;
        GameCtrl.I.gameRunData.gameTime = GameCtrl.I.gameRunData.gameTimeMax;
        return;
    };
    GameStartCtrl.prototype.frame28 = function () {
        this.nummc = this._ui.getChildMovie("nummc");
        if (this.nummc) {
            var img = this.nummc.$children[0];
            img.setTexture(RES.getRes("round" + this.round + "num_png"));
        }
        // if (this.nummc) {
        //    this.nummc.gotoAndPlay("r" + this.round);
        // }
        return;
    };
    GameStartCtrl.prototype.frame53 = function () {
        this._ui.stop();
        this._ui.gotoAndStop("fight");
        GameUI.I.getUI()._startKOmcAnimate = true;
        SoundCtrl.I.playStartSound("l_108");
        //this._ui.gotoAndPlay("fight")
        //dispatchEvent(new flash.events.Event("fight_in"));
        return;
    };
    GameStartCtrl.prototype.frame58 = function () {
        GameEvent.dispatchEvent2("fight");
        //dispatchEvent(new flash.events.Event("fight"));
        return;
    };
    GameStartCtrl.prototype.frame88 = function () {
        this._ui.stop();
        //屏蔽
        //
        GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(true);
        GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(true);
        GameCtrl.I.gameRunData.isTimeRuning = true;
        // GameCtrl.I._renderTimeFrame = 0;
        // GameCtrl.I.gameRunData.gameTime = GameCtrl.I.gameRunData.gameTimeMax;
        console.log(GameCtrl.I.getRunid());
        //GameEvent.dispatchEvent2(egret.Event.COMPLETE)
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    };
    GameStartCtrl.prototype.frame139 = function () {
        this._ui.stop();
        this._ui.gotoAndStop("fight");
        GameUI.I.getUI()._startKOmcAnimate = true;
        SoundCtrl.I.playStartSound("l_108");
    };
    GameStartCtrl.prototype.frame190 = function () {
        this._ui.stop();
        GameUI.I.getUI().koBack();
        //GameEvent.dispatchEvent2(egret.Event.COMPLETE)
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    };
    GameStartCtrl.prototype.frame200 = function () {
        this.winnermc = this._ui.getChildMovie("winnermc");
        if (this.winnermc) {
            this.winnermc.x = this.winnerX;
            this.winnermc.y = this.winnerY;
            this.winnermc.isPerfect = this._ui.isPerfect;
            this.winnermc.addFrameScript(this, [0, this.wframe1, 26, this.wframe29, 55, this.wframe56]);
        }
        GameUI.I.getUI()._winnerAnimate = true;
        return;
    };
    GameStartCtrl.prototype.frame201 = function () {
        if (this.winnermc) {
            this.winnermc.x = this.winnerX;
            this.winnermc.y = this.winnerY;
            //this.winnermc.isPerfect = this.perfect;
        }
        return;
    };
    GameStartCtrl.prototype.frame210 = function () {
        var loc1;
        this._ui.stop();
        // this.winnermc.addEventListener(flash.events.Event.COMPLETE, function (arg1:flash.events.Event):void
        // {
        //     dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        //     return;
        // }, false, 0, true)
        return;
    };
    GameStartCtrl.prototype.frame263 = function () {
        this._ui.stop();
        GameUI.I.getUI().timeoverBack();
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    };
    GameStartCtrl.prototype.frame309 = function () {
        this._ui.stop();
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    };
    //winner 
    //winner 
    GameStartCtrl.prototype.wframe1 = function () {
        this.winnermc.isPerfect = this._ui.isPerfect;
        GameUI.I.getUI()._winnerAnimate = false;
        return;
    };
    GameStartCtrl.prototype.wframe29 = function () {
        if (!this.winnermc.isPerfect) {
            var curFrame = this.winnermc.getCurrFrame();
            this.winnermc.stop();
            this.winnermc.gotoAndStop(curFrame);
            //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        }
        return;
    };
    GameStartCtrl.prototype.wframe56 = function () {
        var curFrame = this.winnermc.getCurrFrame();
        this.winnermc.stop();
        this.winnermc.gotoAndStop(curFrame);
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    };
    return GameStartCtrl;
}());
__reflect(GameStartCtrl.prototype, "GameStartCtrl");
//# sourceMappingURL=GameStartCtrl.js.map