var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*游戏的起点，包含着如_startCtrl,_trainingCtrl等游戏控制器
*
*/
var GameCtrl = (function () {
    function GameCtrl() {
        this.actionEnable = false;
        this.autoStartAble = true;
        this.autoEndRoundAble = true;
        this._isRenderGame = true;
        this._renderTimeFrame = 0;
        this._renderAnimateGap = 0;
        this._renderAnimateFrame = 0;
        this._ready = 0;
        this._framememoryid = 0; //从第1帧开始存储
        this._framerunid = 1; //从第1帧开始执行
        this.gameRunData = new GameRunDataVO();
        this._teamMap = new TeamMap();
        this._renderTimeFrame = 0;
        this._renderAnimateFrame = 0;
        GameCtrl._i = this;
        return;
    } // end function
    GameCtrl.prototype.getRunid = function () {
        return this._framerunid;
    };
    GameCtrl.prototype.initlizeFrame = function () {
        this._framerunid = 1;
        this._framememoryid = 0;
    };
    GameCtrl.prototype.getAttacker = function (param1, param2, param3) {
        return this._fighterEventCtrl.getAttacker(param1, param2, param3);
    }; // end function
    GameCtrl.prototype.setRenderHit = function (param1) {
        if (this._mainLogicCtrl) {
            this._mainLogicCtrl.renderHit = param1;
        }
        return;
    }; // end function
    GameCtrl.prototype.initlize = function (param1) {
        this.gameState = param1;
        this._isPauseGame = false;
        this._isRenderGame = true;
        this._gameRunning = true;
        this._renderAnimateFrame = 0;
        this._fighterEventCtrl = new FighterEventCtrl();
        this._fighterEventCtrl.initlize();
        this._renderAnimateGap = Math.ceil(GameConfig.FPS_GAME / 30) - 1;
        return;
    }; // end function
    GameCtrl.prototype.renderPause = function () {
        if (this._startCtrl || this._endCtrl) {
            if (GameInputer.back(1) || GameInputer.select("MENU", 1)) {
                if (this._startCtrl) {
                    this._startCtrl.skip();
                }
                if (this._endCtrl) {
                    this._endCtrl.skip();
                }
            }
            return;
        }
        if (GameInputer.back(1)) {
            if (this._isPauseGame) {
                this.resume(true);
            }
            else {
                this.pause(true);
            }
        }
        return;
    }; // end function
    GameCtrl.prototype.destory = function () {
        GameRender.remove(this.renderfun);
        GameRender.destory();
        GameLogic.clear();
        if (this._fighterEventCtrl) {
            this._fighterEventCtrl.destory();
            this._fighterEventCtrl = null;
        }
        if (this._mainLogicCtrl) {
            this._mainLogicCtrl.destory();
            this._mainLogicCtrl = null;
        }
        if (this._trainingCtrl) {
            this._trainingCtrl.destory();
            this._trainingCtrl = null;
        }
        if (this._startCtrl) {
            this._startCtrl.destory();
            this._startCtrl = null;
        }
        if (this._endCtrl) {
            this._endCtrl.destory();
            this._endCtrl = null;
        }
        if (this.gameState) {
            this.gameState = null;
        }
        this.gameRunData.p1FighterGroup.destoryFighters(this.gameRunData.continueLoser);
        this.gameRunData.p2FighterGroup.destoryFighters(null);
        // if (this.gameRunData.continueLoser == null) {
        //     this.gameRunData.clear();
        //     GameLoader.dispose();
        // }
        this._gameRunning = false;
        return;
    }; // end function
    GameCtrl.prototype.getEnemyTeam = function (param1) {
        if (param1.getteam()) {
            switch (Number(param1.getteam().id) - 1) {
                case 0:
                    return this._teamMap.getTeam(2);
                case 1:
                    return this._teamMap.getTeam(1);
            }
        }
        return null;
    }; // end function
    GameCtrl.prototype.addGameSprite = function (param1, param2) {
        this.gameState.addGameSprite(param2);
        var _loc_3 = this._teamMap.getTeam(param1);
        if (_loc_3) {
            param2.setteam(_loc_3);
            _loc_3.addChild(param2);
            if (param2 instanceof FighterMain) {
                param2.targetTeams = this._teamMap.getOtherTeams(param1);
            }
        }
        else {
            // Debugger.log("GameCtrl.addGameSprite :: team is null!");
        }
        return;
    }; // end function
    GameCtrl.prototype.removeGameSprite = function (param1) {
        this.gameState.removeGameSprite(param1);
        var _loc_2 = param1.getteam();
        if (_loc_2) {
            _loc_2.removeChild(param1);
        }
        else {
            //Debugger.log("GameCtrl.removeGameSprite :: team is null!");
        }
        param1.destory(false);
        return;
    }; // end function
    GameCtrl.prototype.startGame = function () {
        if (!this.autoStartAble) {
            return;
        }
        this.fightFinished = false;
        //判断游戏模式
        // if (!GameMode.isVsCPU()) {
        //     //初始化任务
        //     MessionModel.I.reset();
        //     MessionModel.I.initMession();
        // } else {
        //     //手动选择
        //     // let p1 = GameLoader_lmj.loadFighter(1, "kakashi");
        //     // let p2 =GameLoader_lmj.loadFighter(2, "naruto");
        //     // GameLoader_lmj.LoadMap("muyecun");
        //     // GameLoader_lmj.loadAssister(1, "kon",p1);
        //     // GameLoader_lmj.loadAssister(2, "kon",p2);
        // }
        this.doStartGame();
        return;
    }; // end function
    GameCtrl.prototype.doStartGame = function () {
        this._isPauseGame = false;
        // GameInputer.enabled = true;
        this.gameRunData.reset();
        this.initTeam();
        this.buildGame();
        GameEvent.dispatchEvent2("GAME_START");
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE) {
            this.onRecvFrame();
            this.renderfun = new renderFun(this.Netrender, this);
        }
        else {
            this.renderfun = new renderFun(this.render, this);
        }
        GameRender.add(this.renderfun);
        return;
    }; // end function
    GameCtrl.prototype.buildGame = function () {
        var p1_currentF = this.gameRunData.p1FighterGroup.currentFighter;
        var p2_currentF = this.gameRunData.p2FighterGroup.currentFighter;
        p1_currentF.qi = 0;
        p2_currentF.qi = 0;
        if (GameMode.currentMode == GameMode.TRAINING) {
            this._trainingCtrl = new TrainingCtrler();
            this._trainingCtrl.initlize([p1_currentF, p2_currentF]);
            this.gameRunData.gameTimeMax = -1;
        }
        var _mapMain = this.gameRunData.map;
        if (!p1_currentF || !p2_currentF || !_mapMain) {
            // throw new Error("创建游戏失败");
            return;
        }
        this.addFighter(p2_currentF, 2);
        this.addFighter(p1_currentF, 1);
        _mapMain.initlize();
        this.gameState.initFight(this.gameRunData.p1FighterGroup, this.gameRunData.p2FighterGroup, _mapMain);
        GameLogic.initGameLogic(_mapMain, this.gameState.camera);
        this._mainLogicCtrl = new GameMainLogicCtrler();
        this._mainLogicCtrl.initlize(this.gameState, this._teamMap, _mapMain); //
        if (GameMode.currentMode == GameMode.TRAINING) {
            this.actionEnable = true;
            //if (GameMode.currentMode != GameMode.TRAINING)
            //  this.gameRunData.isTimeRuning  = true;
            GameUI.I.fadIn();
            SoundCtrl.I.playFightBGM("map");
        }
        else {
            this._startCtrl = new GameStartCtrl(this.gameState);
            this.actionEnable = false;
            this._startCtrl.start1v1(p1_currentF, p2_currentF);
        }
        // GameInterface.instance.afterBuildGame();     //zhushi by lmj in 2020-7-31
        return;
    }; // end function
    GameCtrl.prototype.addFighter = function (param1, param2) {
        var _loc3_ = null;
        if (!param1) {
            return;
        }
        switch (Number(param2) - 1) {
            case 0:
                if (!GameScene.instance._isMobile) {
                    _loc3_ = new FighterKeyCtrl_pack();
                }
                else {
                    _loc3_ = new btn_actionCtrl();
                }
                _loc3_.inputType = player1id;
                _loc3_.classicMode = GameData.I.config.keyInputMode == 1;
                break;
            case 1:
                if (GameMode.isVsCPU(false) || GameMode.isAcrade()) {
                    _loc3_ = new FighterAICtrl();
                    _loc3_.AILevel = 0;
                    _loc3_.fighter = param1;
                }
                else {
                    if (!GameScene.instance._isMobile) {
                        _loc3_ = new FighterKeyCtrl_pack();
                    }
                    else {
                        _loc3_ = new btn_actionCtrl();
                    }
                    _loc3_.inputType = player2id;
                    _loc3_.classicMode = GameData.I.config.keyInputMode == 1;
                }
                break;
        }
        _loc3_.setenabled(true);
        param1.initlize();
        param1.setActionCtrl(_loc3_);
        this.addGameSprite(param2, param1);
        param1.owerKeyBoardMode = _loc3_;
        return;
    };
    GameCtrl.prototype.removeFighter = function (param1) {
        if (!param1) {
            return;
        }
        this.removeGameSprite(param1);
        return;
    }; // end function
    GameCtrl.prototype.startNextRound = function () {
        this.doBuildNextRound(GameMode.isTeamMode());
        return;
    }; // end function
    GameCtrl.prototype.buildNextRound = function (param1) {
        this.doBuildNextRound(param1);
        return;
    }; // end function
    GameCtrl.prototype.doBuildNextRound = function (param1) {
        console.log("doBuildNextRound");
        var _loc_2 = 0;
        this.gameState.resetFight(this.gameRunData.p1FighterGroup, this.gameRunData.p2FighterGroup);
        this._startCtrl = new GameStartCtrl(this.gameState);
        if (param1) {
            if (this.gameRunData.lastWinner) {
                this.gameRunData.lastWinner.hp = this.gameRunData.lastWinnerHp;
            }
            _loc_2 = -1;
            if (this.gameRunData.lastWinnerTeam) {
                _loc_2 = this.gameRunData.lastWinnerTeam.id == 1 ? (2) : (1);
            }
            this._startCtrl.start1v1(this.gameRunData.p1FighterGroup.currentFighter, this.gameRunData.p2FighterGroup.currentFighter, _loc_2);
        }
        else {
            this._startCtrl.startNextRound();
        }
        this.gameRunData.isDrawGame = false;
        GameEvent.dispatchEvent2("ROUND_START");
        return;
    }; // end function
    GameCtrl.prototype.fightFinish = function () {
        this.gameRunData.isTimeRuning = false;
        this.fightFinished = true;
        if (GameMode.isAcrade()) {
            if (this.gameRunData.lastWinnerTeam.id == 1) {
                if (MessionModel.I.missionAllComplete()) {
                    //this.//console.log("通关！");
                    MainGame.I.goCongratulations();
                }
                else {
                    // GameCtrl.I.destory();
                    //this.//console.log("下一关");
                    GameScene.instance._GameState.removeChildren();
                    GameScene.instance._GameState = new GameState();
                    GameScene.instance._GameState.build();
                    GameScene.instance.addChildAt(GameScene.instance._GameState, 0);
                    GameScene.instance._BtnState.removeChildren();
                    this.gameRunData.reset();
                    //重置玩家1
                    if (!this.gameRunData.p1FighterGroup.fighter1) {
                        GameLoader_lmj.loadFighter(1, GameData.I.p1Select.fighter1);
                    }
                    if (!this.gameRunData.p1FighterGroup.fighter2) {
                        GameLoader_lmj.loadFighter(1, GameData.I.p1Select.fighter2);
                    }
                    if (!this.gameRunData.p1FighterGroup.fighter3) {
                        GameLoader_lmj.loadFighter(1, GameData.I.p1Select.fighter3);
                    }
                    this.gameRunData.p1FighterGroup.currentFighter = this.gameRunData.p1FighterGroup.fighter1;
                    MessionModel.I.messionComplete();
                    GameCtrl.I.doStartGame();
                    //MainGame.I.loadGame();
                }
            }
            else {
                // this.//console.log("跳转是否继续");
                if (this.gameRunData.p1Wins < this.gameRunData.p2Wins) {
                    this.gameRunData.continueLoser = this.gameRunData.p1FighterGroup.currentFighter;
                }
                else {
                    this.gameRunData.continueLoser = this.gameRunData.p2FighterGroup.currentFighter;
                }
                MainGame.I.goContinue();
            }
        }
        if (GameMode.isVsCPU() || GameMode.isVsPeople()) {
            // this.//console.log("返回选人");
            GameEvent.dispatchEvent2("GAME_END");
            if (this.gameRunData.p1Wins < this.gameRunData.p2Wins) {
                this.gameRunData.continueLoser = this.gameRunData.p1FighterGroup.currentFighter;
            }
            else {
                this.gameRunData.continueLoser = this.gameRunData.p2FighterGroup.currentFighter;
            }
            //MainGame.I.goSelect();
            // MainGame.I.goContinue()
            GameCtrl.I.destory();
            if (GameMode.currentMode == GameMode.SINGLE_VS_CPU && !player1id && !player2id) {
                // console.log("SINGLE_VS_CPU")
                if (this.gameRunData.continueLoser == this.gameRunData.p1FighterGroup.currentFighter) {
                    SceneManager.Instance.changeScene(new FightResultFailor());
                }
                else {
                    SceneManager.Instance.changeScene(new FightResultSuccess());
                }
            }
            else {
                // console.log("SINGLE_VS_PEOPLE")
                MatchLayer.FinishRoom();
                if (this.gameRunData.continueLoser.owerKeyBoardMode._inputType() == MGOBE.Player.id) {
                    SceneManager.Instance.changeScene(new FightResultFailor());
                }
                else {
                    SceneManager.Instance.changeScene(new FightResultSuccess());
                }
            }
        }
        return;
    }; // end function
    GameCtrl.prototype.initTeam = function () {
        this._teamMap.clear();
        var _loc_1 = GameMode.getTeams(); //[{id:1, name:"P1"}, {id:2, name:"P2"}]
        for (var _loc_2 in _loc_1) {
            this._teamMap.add(new TeamVO(_loc_1[_loc_2].id, _loc_1[_loc_2].name));
        }
        return;
    }; // end function
    GameCtrl.prototype.pause = function (param1) {
        if (param1 === void 0) { param1 = false; }
        if (!this._gameRunning) {
            return;
        }
        if (param1) {
            GameEvent.dispatchEvent2("PAUSE_GAME");
            this._isPauseGame = true;
            GameUI.I.getUI().pause();
        }
        this._isRenderGame = false;
        return;
    }; // end function
    GameCtrl.prototype.resume = function (param1) {
        if (param1 === void 0) { param1 = false; }
        if (!this._gameRunning) {
            return;
        }
        if (param1) {
            GameEvent.dispatchEvent2("RESUME_GAME");
            this._isPauseGame = false;
            GameUI.I.getUI().resume();
        }
        this._isRenderGame = true;
        return;
    }; // end function
    GameCtrl.prototype.gameEnd = function (param1, param2) {
        if (!this.autoEndRoundAble) {
            return;
        }
        if (this._endCtrl) {
            return;
        }
        this.doGameEnd(param1, param2);
        return;
    }; // end function
    GameCtrl.prototype.doGameEnd = function (param1, param2) {
        this.gameRunData.lastWinnerTeam = param1.team;
        this.gameRunData.lastWinner = param1;
        this.gameRunData.lastLoserData = param2.data;
        this.gameRunData.lastLoserQi = param2.qi;
        switch (Number(param1.team.id) - 1) {
            case 0:
                this.gameRunData.p1Wins++;
                if (param2.hp <= 0 && GameMode.isAcrade()) {
                    GameLogic.addScoreByKO();
                }
                break;
            case 1:
                this.gameRunData.p2Wins++;
        }
        this._endCtrl = new GameEndCtrl();
        this._endCtrl.initlize(param1, param2);
        this.actionEnable = false;
        GameEvent.dispatchEvent2("ROUND_END");
        return;
    }; // end function
    //补帧处理
    GameCtrl.prototype.requestFrame = function (begin, end) {
        var requestFramePara = {
            beginFrameId: begin,
            endFrameId: end,
        };
        if (MatchLayer.room) {
            console.log("requestFrame", requestFramePara);
            MatchLayer.room.requestFrame(requestFramePara, function (event) {
                if (event.code == 0) {
                    for (var i = 0; i < event.data.frames.length; i++) {
                        FromServer.I.CacheOperFromServer(event.data.frames[i].id, event.data.frames[i].items);
                        // console.log(event.data.frames.length, event.data.frames[i].id);
                    }
                    return;
                }
            });
        }
    };
    //存储服务端发来数据至缓存区
    GameCtrl.prototype.onRecvFrame = function () {
        var _this = this;
        if (MatchLayer.room) {
            MatchLayer.room.onRecvFrame = function (event) {
                // console.log(event.data.frame.id)
                // console.log("onRecvFrame");
                if (event.data.frame.id > _this._framememoryid + 1) {
                    _this.requestFrame(_this._framememoryid + 1, event.data.frame.id - 1);
                }
                _this._framememoryid = event.data.frame.id;
                FromServer.I.CacheOperFromServer(event.data.frame.id, event.data.frame.items); //帧数与对应的帧包
            };
        }
    };
    //离线判断
    // public OfflineTest() {
    //     if (MatchLayer.room) {
    //         MatchLayer.room.onChangePlayerNetworkState = event => {
    //             if (event.data.networkState == MGOBE.ENUM.NetworkState.COMMON_OFFLINE) {    //掉线
    //                 switch (ModeScene.matchNumStr.length) {
    //                     case 3:  //开房间模式
    //                         this.OffinPlayer();
    //                         break;
    //                     case 0:    //自由匹配
    //                         this.OffinRoom(event.data.changePlayerId);
    //                         break;
    //                 }
    //             }
    //         };
    //     }
    // }
    //离线处理--roomMatch
    // private OffinRoom(Offlineid: string) {
    //     // console.log("OffinRoom")
    //     if (!GameScene.instance._bgexittag) {           //游戏已开始
    //         SceneManager.Instance.pushScene(new TipsLayer("对方网络连接已断开,转为电脑"));
    //         let OfflineP = this.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode._inputType() == Offlineid
    //             ? this.gameRunData.p1FighterGroup.currentFighter : this.gameRunData.p2FighterGroup.currentFighter;
    //         let AICtrl = new FighterAICtrl();
    //         AICtrl.AILevel = 0;
    //         AICtrl.fighter = OfflineP;
    //         AICtrl.setenabled(OfflineP.owerKeyBoardMode.enabled());
    //         OfflineP.setActionCtrl(AICtrl);
    //         OfflineP.owerKeyBoardMode = AICtrl;
    //         // AICtrl.setenabled(false);
    //         // egret.setTimeout(function () { AICtrl.setenabled(true) }, this, 10000);
    //         MatchLayer.Destroy();
    //         GameMode.currentMode = GameMode.SINGLE_VS_CPU;
    //         GameRender.remove(this.renderfun);
    //         this.renderfun = new renderFun(this.render, this);
    //         GameRender.add(this.renderfun);
    //     } else {          //游戏未开始,仍在加载页面
    //         GameScene.instance.removeChild(GameScene.instance._bg);
    //         GameScene.instance.removeChild(GameScene.instance._background);
    //         GameScene.instance._bgexittag = false;
    //         SceneManager.Instance.pushScene(new TipsLayer("对方网络连接已断开,即将返回主页面"));
    //         egret.setTimeout(function (arg) {
    //             this.gameRunData.isTimeRuning = false;
    //             // console.log("返回");
    //             GameEvent.dispatchEvent2("GAME_END");
    //             GameCtrl.I.destory();
    //             MatchLayer.Destroy();
    //             SceneManager.Instance.changeScene(new FightResultSuccess());
    //         }, this, 2000);
    //     }
    // }
    //离线处理---matchPlayer
    // private OffinPlayer() {
    //     // console.log("OffinPlayer")
    //     if (GameScene.instance._bgexittag) {        //未开始
    //         GameScene.instance.removeChild(GameScene.instance._bg);
    //         GameScene.instance.removeChild(GameScene.instance._background);
    //         GameScene.instance._bgexittag = false;
    //     }
    //     SceneManager.Instance.pushScene(new TipsLayer("对方网络连接已断开,即将返回主页面"));
    //     egret.setTimeout(function (arg) {
    //         // console.log("返回");
    //         this.gameRunData.isTimeRuning = false;
    //         GameEvent.dispatchEvent2("GAME_END");
    //         GameCtrl.I.destory();
    //         MatchLayer.Destroy();
    //         SceneManager.Instance.changeScene(new FightResultSuccess());
    //     }, this, 2000);
    // }
    //拥塞检测,若包数量较多,则加速处理
    GameCtrl.prototype.CongestionTest = function () {
        var _addnum = 1;
        switch (FromServer.I._length() > 5) {
            case true:
                _addnum = 4;
                break;
            case false:
                _addnum = 1;
                break;
        }
        return _addnum;
    };
    //网络驱动模式
    GameCtrl.prototype.Netrender = function () {
        //-------------------由于网络问题,新包未到达,此时停止本地的render,stop render 
        // if (FromServer.I._length() <= 0 || this._framerunid > this._framememoryid) {
        if (this._framerunid > this._framememoryid) {
            // console.log("this._framerunid > this._framememoryid");
            return;
        }
        //-------------------for循环执行包,SetValueFromServer,若网络拥塞则一帧执行2个包
        var _addnum = this.CongestionTest();
        for (var param = 0; param < _addnum; param++) {
            var order = FromServer.I.GetOperFromServer(this._framerunid);
            if (!order) {
                console.log("seconde return :,runid: " + this._framerunid + ",memoryid: " + this._framememoryid);
                return;
            }
            for (var i = 0; i < order.length; i++) {
                var FighterGroup = order[i].playerId == player1id ? this.gameRunData.p1FighterGroup : this.gameRunData.p2FighterGroup;
                if (GameScene.instance._isMobile) {
                    FighterGroup.currentFighter.owerKeyBoardMode.setvalue(order[i].data);
                }
                else {
                    FighterGroup.currentFighter.owerKeyBoardMode.setvalue(order[i].data);
                }
                // if (order[i].data) {
                //     console.log(this._framerunid, "p1", this.gameRunData.p1FighterGroup.currentFighter.x, this.gameRunData.p1FighterGroup.currentFighter.y,
                //         " p2: ", this.gameRunData.p2FighterGroup.currentFighter.x, this.gameRunData.p2FighterGroup.currentFighter.y);
                // }
            }
            this.render();
        }
    };
    //本地驱动模式
    GameCtrl.prototype.render = function () {
        this._framerunid++;
        // if (this._framerunid % 30 == 0) {
        //     console.log("runid:" + this._framerunid, "memoryid:" + this._framememoryid, "gameTime:" + this.gameRunData.gameTime, "TimeFrame:" + this._renderTimeFrame);
        // }
        var _loc_2 = false;
        var _loc_1 = false;
        //   zhushi by lmj because no pause in 2020-7-31
        // this.renderPause();
        // if (this._isPauseGame) {
        //     return;
        // }
        EffectCtrl.I.render();
        this.gameState.render(); //包括ui
        //   zhushi by lmj 
        // if (!this._isRenderGame) {
        //     return;
        // }
        this.checkRenderAnimate();
        if (this._mainLogicCtrl) {
            this._mainLogicCtrl.render();
        }
        if (this._startCtrl) {
            this._startCtrl.render();
            if (this._startCtrl._uiPlaying) {
                this._startCtrl.destory();
                this._startCtrl = null;
            }
        }
        if (this._endCtrl) {
            this._endCtrl.render();
            if (!this._endCtrl._isRender) {
                this._endCtrl.destory();
                this._endCtrl = null;
                this.runNext();
                this.gameRunData.setAllowLoseHP(true);
            }
        }
        if (this._trainingCtrl) {
            this._trainingCtrl.render();
        }
        return;
    }; // end function
    GameCtrl.prototype.checkRenderAnimate = function () {
        // console.log("runid: " + this._framerunid, "AnimateGap :" + this._renderAnimateGap, "slowDownFrame: " + EffectCtrl.I.slowDownFrame)
        if (this._renderAnimateGap > 0) {
            this._renderAnimateFrame = this._renderAnimateFrame + 1;
            if (this._renderAnimateFrame >= this._renderAnimateGap) {
                this._renderAnimateFrame = 0;
                this.renderAnimate();
            }
        }
        else {
            this.renderAnimate();
        }
        return;
    }; // end function
    GameCtrl.prototype.renderAnimate = function () {
        if (this._mainLogicCtrl) {
            this._mainLogicCtrl.renderAnimate();
        }
        //if (this.actionEnable && !this._startCtrl && !this._endCtrl) {//orig
        if (this.gameRunData.isTimeRuning) {
            this.renderGameTime(); //zhushi by lmj for testing
        }
        return;
    }; // end function
    GameCtrl.prototype.renderGameTime = function () {
        if (this.gameRunData.gameTimeMax != -1) {
            this._renderTimeFrame = (this._renderTimeFrame + 1);
            if ((this._renderTimeFrame + 1) > 30) {
                this._renderTimeFrame = 0;
                this.gameRunData.gameTime = (this.gameRunData.gameTime - 1);
                if (this.gameRunData.gameTime <= 0) {
                    this.timeover();
                }
            }
        }
        return;
    }; // end function
    GameCtrl.prototype.timeover = function () {
        GameCtrl.I.gameRunData.isTimeRuning = false;
        this.actionEnable = false;
        var _loc_1 = this.gameRunData.p1FighterGroup.currentFighter;
        var _loc_2 = this.gameRunData.p2FighterGroup.currentFighter;
        this.gameRunData.isTimerOver = true;
        if (_loc_1.hp == _loc_2.hp) {
            this.drawGame();
            return;
        }
        if (_loc_1.hp > _loc_2.hp) {
            this.gameEnd(_loc_1, _loc_2);
        }
        else {
            this.gameEnd(_loc_2, _loc_1);
        }
        return;
    }; // end function
    GameCtrl.prototype.drawGame = function () {
        if (this._endCtrl) {
            return;
        }
        this.gameRunData.lastWinnerTeam = null;
        this.gameRunData.lastWinner = null;
        this.gameRunData.isDrawGame = true;
        this._endCtrl = new GameEndCtrl();
        this._endCtrl.drawGame();
        this.actionEnable = false;
        return;
    }; // end function
    GameCtrl.prototype.runNext = function () {
        this.gameRunData.nextRound();
        if (GameMode.isTeamMode()) {
            if (this.startNextTeamFight()) {
                this.buildNextRound(true);
                this.gameRunData.lastWinner = null;
                return;
            }
        }
        if (GameMode.isSingleMode()) {
            if (this.gameRunData.p1Wins < 2 && this.gameRunData.p2Wins < 2) {
                this.buildNextRound(false);
                this.gameRunData.lastWinner = null;
                return;
            }
        }
        this.fightFinish();
        return;
    }; // end function
    GameCtrl.prototype.startNextTeamFight = function () {
        var _loc1_ = null;
        var _loc2_ = null;
        if (this.gameRunData.isDrawGame) {
            _loc1_ = this.gameRunData.p1FighterGroup.getNextFighter();
            _loc2_ = this.gameRunData.p2FighterGroup.getNextFighter();
            if (!_loc1_ && !_loc2_) {
                return true;
            }
            if (_loc1_ && !_loc2_) {
                this.gameRunData.lastWinnerTeam = this.gameRunData.p1FighterGroup.currentFighter.team;
                return false;
            }
            if (!_loc1_ && _loc2_) {
                this.gameRunData.lastWinnerTeam = this.gameRunData.p2FighterGroup.currentFighter.team;
                return false;
            }
            this.nextFighter(this.gameRunData.p1FighterGroup);
            this.nextFighter(this.gameRunData.p2FighterGroup);
            return true;
        }
        switch (Number(this.gameRunData.lastWinnerTeam.id) - 1) {
            case 0:
                return this.nextFighter(this.gameRunData.p2FighterGroup);
            case 1:
                return this.nextFighter(this.gameRunData.p1FighterGroup);
        }
        return;
    }; // end function
    GameCtrl.prototype.nextFighter = function (param1) {
        if (!param1) {
            return false;
        }
        var _loc_2 = param1.currentFighter.team;
        var _loc_3 = param1.getNextFighter();
        if (!_loc_3) {
            return false;
        }
        if (this.gameRunData.lastLoserData) {
            if (this.gameRunData.lastLoserData.comicType == _loc_3.data.comicType) {
                _loc_3.qi = this.gameRunData.lastLoserQi + 100;
                if (_loc_3.qi > 300) {
                    _loc_3.qi = 300;
                }
            }
        }
        this.removeFighter(param1.currentFighter);
        param1.removeCurrentFighter();
        //移除按钮
        if (_loc_2.id == 1) {
            GameScene.instance._BtnState.removeChildren();
        }
        param1.currentFighter = _loc_3;
        this.addFighter(param1.currentFighter, _loc_2.id);
        return true;
    }; // end function
    GameCtrl.prototype.slow = function (param1) {
        // console.log("slow")
        var _loc_2 = 30 / param1;
        this.setAnimateFPS(_loc_2);
        this._mainLogicCtrl.setSpeedPlus(GameConfig.SPEED_PLUS_DEFAULT / param1);
        this.gameState.camera.tweenSpd = 2.5 * param1;
        return;
    }; // end function
    GameCtrl.prototype.slowResume = function () {
        // console.log("slowResume")
        this.setAnimateFPS(30);
        this._mainLogicCtrl.setSpeedPlus(GameConfig.SPEED_PLUS_DEFAULT);
        this.gameState.camera.tweenSpd = 2.5;
        return;
    }; // end function
    GameCtrl.prototype.setAnimateFPS = function (param1) {
        this._renderAnimateGap = Math.ceil(GameConfig.FPS_GAME / param1) - 1;
        this._renderAnimateFrame = 0;
        // console.log(this._framerunid, "setAnimateFPS: " + this._renderAnimateGap)
        return;
    }; // end function
    Object.defineProperty(GameCtrl, "I", {
        get: function () {
            if (!GameCtrl._i) {
                new GameCtrl();
            }
            return GameCtrl._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return GameCtrl;
}());
__reflect(GameCtrl.prototype, "GameCtrl");
//# sourceMappingURL=GameCtrl.js.map