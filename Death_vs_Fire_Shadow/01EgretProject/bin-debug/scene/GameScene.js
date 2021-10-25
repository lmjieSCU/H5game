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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    //------------------------------------------------------
    function GameScene(param) {
        if (param === void 0) { param = false; }
        var _this = _super.call(this) || this;
        _this._tag = false;
        //------------------------------------------------------
        _this._isMobile = false;
        _this._bgexittag = true;
        _this._msgreceived = false;
        console.log("new GameScene");
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE) {
            _this._background = UI.addPic(_this, "background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
            _this._bg = UI.addPic(_this, "mask_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
            _this._bg.scaleX = 30;
            _this._bg.scaleY = 20;
        }
        return _this;
    }
    //
    GameScene.prototype.BuildConncet = function () {
        if (player1id == MGOBE.Player.id) {
            MatchLayer.StartFrame();
        }
        else {
            console.log("not player1id,waiting StartFrame");
        }
        if (GameScene.instance._bgexittag) {
            GameScene.instance.removeChild(GameScene.instance._bg);
            GameScene.instance.removeChild(GameScene.instance._background);
            GameScene.instance._bgexittag = false;
        }
    };
    GameScene.prototype.onEnter = function () {
        GameScene.instance = this;
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && MatchLayer.room) {
            this.BuildConncet();
            // GameCtrl.I.OfflineTest();
        }
        // else {
        // 	GameConfig.GAME_SIZE = new egret.Point(UI.WINSIZE_W, UI.WINSIZE_H);
        // 	GameScene.instance.doWork();
        // }
        GameConfig.GAME_SIZE = new egret.Point(UI.WINSIZE_W, UI.WINSIZE_H);
        GameScene.instance.doWork();
        this._logTxt = new egret.TextField();
        this._logTxt.x = 20;
        this._logTxt.y = 100;
        this._effectZmovie = new zmovie.ZMovieClip(["effect0_json", "effect1_json", "effect2_json", "effect3_json", "effect4_json", "effect5_json", "effect6_json"], RES.getRes("effect_json"), "XG_jump");
        this._effectZmovie.x = 200;
        this._effectZmovie.y = 200;
        this._effectZmovie.scaleX = 2.0;
        this._effectZmovie.scaleY = 2.0;
    };
    GameScene.prototype.addLog = function (str) {
        this._logTxt.text = str;
    };
    GameScene.prototype.doWork = function () {
        console.log("enter doWork");
        {
            GameRender.initlize(this.stage);
            this._GameState = new GameState();
            this._GameState.build();
            this.addChild(this._GameState);
            this._BtnState = new egret.Sprite();
            this.addChild(this._BtnState);
        }
        {
            GameLoader_lmj.LoadMap("liuhunjie"); //liuhunjie
            var p1 = GameLoader_lmj.loadFighter(1, "kakashi");
            var p2 = GameLoader_lmj.loadFighter(2, "sasuke_xz");
            GameLoader_lmj.loadAssister(1, "kon", p1);
            GameLoader_lmj.loadAssister(2, "kon", p2);
        }
        {
            GameCtrl.I.startGame();
        }
    };
    GameScene.prototype.GetGameState = function () {
        return this._GameState;
    };
    GameScene.prototype.onExit = function () {
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map