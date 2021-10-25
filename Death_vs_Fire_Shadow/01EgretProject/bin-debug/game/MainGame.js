var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MainGame = (function () {
    //public static I: MainGame;
    function MainGame() {
        this._fps = 60;
        //super();
        //MainGame.I = this;
        return;
    } // end
    Object.defineProperty(MainGame, "I", {
        get: function () {
            if (!MainGame._i) {
                MainGame._i = new MainGame();
            }
            return MainGame._i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainGame.prototype, "root", {
        get: function () {
            return this._rootSprite;
        } // end 
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainGame.prototype, "stage", {
        get: function () {
            return this._stage;
        } // end 
        ,
        enumerable: true,
        configurable: true
    });
    MainGame.prototype.initlize = function (param1, param2, param3, param4) {
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = null; }
        this._rootSprite = param1;
        this._stage = param2;
        var initBack = param3;
        var initFail = param4;
        var resInitBack = function () {
            GameLoger.log("res init ok");
            this._rootSprite = param1;
            this._stage = param2;
            GameLoger.log("init game render");
            GameRender.initlize(this.stage);
            GameLoger.log("init game inputer");
            GameInputer.initlize(this._stage);
            GameLoger.log("init game data");
            GameData.I.loadData();
            GameLoger.log("init config");
            GameData.I.config.applyConfig();
            GameLoger.log("init inputer config");
            GameInputer.updateConfig();
            GameLoger.log("init scroll");
            this._rootSprite.scrollRect = new egret.Rectangle(0, 0, GameConfig.GAME_SIZE.x, GameConfig.GAME_SIZE.y);
            GameLoger.log("init this._initing");
            this._initing = new KyoStageCtrl(this._rootSprite);
            GameLoger.log("init loading");
            var _loc_1 = new GameLoadingState();
            this.this._initing.goStage(_loc_1);
            _loc_1.loadGame(loadGameBack, initFail);
            return;
        } // end 
        ;
        var loadGameBack = function () {
            EffectModel.I.initlize();
            if (initBack != null) {
                initBack();
            }
            return;
        } // end 
        ;
        ResUtils.I.initalize(resInitBack, initFail);
        return;
    }; // end 
    MainGame.prototype.resetDefault = function () {
        GameCtrl.I.autoEndRoundAble = true;
        GameCtrl.I.autoStartAble = true;
        //SelectFighterStage.AUTO_FINISH = true;
        //LoadingState.AUTO_START_GAME = true;
        return;
    }; // end 
    MainGame.prototype.getFPS = function () {
        return this._fps;
    }; // end 
    MainGame.prototype.setFPS = function (param1) {
        this._fps = param1;
        this._stage.frameRate = param1;
        return;
    }; // end 
    MainGame.prototype.goLogo = function () {
        //MainGame._initing.goStage(new LogoState());
        this.setFPS(30);
        return;
    }; // end 
    MainGame.prototype.goMenu = function () {
        this.resetDefault();
        //this._initing.goStage(new MenuState());
        //setFPS(30);
        return;
    }; // end 
    MainGame.prototype.goHowToPlay = function () {
        //this._initing.goStage(new HowToPlayState());
        //setFPS(30);
        return;
    }; // end 
    MainGame.prototype.goSelect = function () {
        //this._initing.goStage(new SelectFighterStage());
        //setFPS(30);
        return;
    }; // end 
    MainGame.prototype.loadGame = function () {
        //var _loc_1 = new LoadingState();
        //this._initing.goStage(_loc_1, true);
        //setFPS(30);
        return;
    }; // end 
    MainGame.prototype.goGame = function () {
        // var _loc_1 = new GameState();
        // this._initing.goStage(_loc_1);
        // GameCtrl.I.startGame();
        // setFPS(GameConfig.FPS_GAME);
        return;
    }; // end 
    MainGame.prototype.goOption = function () {
        // this._initing.goStage(new SettingState());
        // setFPS(30);
        return;
    }; // end 
    MainGame.prototype.goContinue = function () {
        var _loc_1 = new GameOverState();
        _loc_1.showContinue();
        // MainGame._initing.goStage(_loc_1);
        //this.setFPS(30);
    }; // end 
    MainGame.prototype.goGameOver = function () {
        var _loc_1 = new GameOverState();
        _loc_1.showGameOver();
        // this._initing.goStage(_loc_1);
        // setFPS(30);
        return;
    }; // end 
    MainGame.prototype.goCredits = function () {
        // this._initing.goStage(new CreditsState());
        // setFPS(30);
        return;
    }; // end 
    MainGame.prototype.moreGames = function () {
        GameInterface.instance.moreGames();
        return;
    }; // end 
    MainGame.prototype.goCongratulations = function () {
        // this._initing.goStage(new CongratulateState());
        // setFPS(30);
        return;
    }; // end s
    MainGame.prototype.submitScore = function () {
        GameInterface.instance.submitScore(GameData.I.score);
        return;
    }; // end 
    MainGame.prototype.showRank = function () {
        GameInterface.instance.showRank();
        return;
    }; // end 
    MainGame.VERSION = "V3.1";
    MainGame.VERSION_DATE = "2018.1.1";
    return MainGame;
}());
__reflect(MainGame.prototype, "MainGame");
//# sourceMappingURL=MainGame.js.map