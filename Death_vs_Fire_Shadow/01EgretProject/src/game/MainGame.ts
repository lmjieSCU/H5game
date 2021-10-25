
class MainGame {
    private _rootSprite: egret.DisplayObjectContainer;
    private _stage: egret.Stage;
    private _fps: number = 60;
    public static  VERSION: string = "V3.1";
    public static  VERSION_DATE: string = "2018.1.1";
    public static UPDATE_INFO: string;
    public static _initing: any;
    public static _i:MainGame;
    //public static I: MainGame;

    public constructor() {
        //super();
        //MainGame.I = this;
        return;
    }// end
    public static get I():MainGame{
        if(!MainGame._i){
           MainGame._i = new MainGame();
        }
        return MainGame._i;
    }

    public get root(): egret.DisplayObjectContainer {
        return this._rootSprite;
    }// end 

    public get stage(): egret.Stage {
        return this._stage;
    }// end 

    public initlize(param1: egret.DisplayObjectContainer, param2: egret.Stage, param3:Function  = null, param4:Function  = null) {
        this._rootSprite = param1;
        this._stage = param2;
        let initBack = param3;
        let initFail = param4;
        let resInitBack = function() {
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
        }// end 
            ;
       let loadGameBack =function() {
            EffectModel.I.initlize();
            if (initBack != null) {
                initBack();
            }
            return;
        }// end 
            ;
        ResUtils.I.initalize(resInitBack, initFail);
        return;
    }// end 
   
    private resetDefault() {
        
        GameCtrl.I.autoEndRoundAble = true;
        GameCtrl.I.autoStartAble = true;
        //SelectFighterStage.AUTO_FINISH = true;
        //LoadingState.AUTO_START_GAME = true;
        
        return;
    }// end 

    public getFPS(): number {
        return this._fps;
    }// end 

    public setFPS(param1: number) {
        this._fps = param1;
        this._stage.frameRate = param1;
        return;
    }// end 

    public goLogo() {
        //MainGame._initing.goStage(new LogoState());
        this.setFPS(30);
        return;
    }// end 

    public goMenu() {
        this.resetDefault();
        //this._initing.goStage(new MenuState());
        //setFPS(30);
        return;
    }// end 

    public goHowToPlay() {
        //this._initing.goStage(new HowToPlayState());
        //setFPS(30);
        return;
    }// end 

    public goSelect() {
        //this._initing.goStage(new SelectFighterStage());
        //setFPS(30);
        return;
    }// end 

    public loadGame() {
        //var _loc_1 = new LoadingState();
        //this._initing.goStage(_loc_1, true);
        //setFPS(30);
        return;
    }// end 

    public goGame() {
        // var _loc_1 = new GameState();
        // this._initing.goStage(_loc_1);
        // GameCtrl.I.startGame();
        // setFPS(GameConfig.FPS_GAME);
        return;
    }// end 

    public goOption() {
        // this._initing.goStage(new SettingState());
        // setFPS(30);
        return;
    }// end 

    public goContinue() {
        var _loc_1 = new GameOverState();
        _loc_1.showContinue();
       // MainGame._initing.goStage(_loc_1);
        //this.setFPS(30);
        
    }// end 

    public goGameOver() {
         var _loc_1 = new GameOverState();
         _loc_1.showGameOver();
        // this._initing.goStage(_loc_1);
        // setFPS(30);
        return;
    }// end 

    public goCredits() {
        // this._initing.goStage(new CreditsState());
        // setFPS(30);
        return;
    }// end 

    public moreGames() {
        GameInterface.instance.moreGames();
        return;
    }// end 

    public goCongratulations() {
        // this._initing.goStage(new CongratulateState());
        // setFPS(30);
        return;
    }// end s

    public submitScore() {
        GameInterface.instance.submitScore(GameData.I.score);
        return;
    }// end 

    public showRank() {
        GameInterface.instance.showRank();
        return;
    }// end 

}
