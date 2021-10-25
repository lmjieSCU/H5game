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
var GameModule = (function (_super) {
    __extends(GameModule, _super);
    function GameModule() {
        var _this = _super.call(this) || this;
        return _this;
    }
    GameModule.prototype.init = function () {
        EventManager.addEventListener(GameEvents.OPEN_GAME_UI, this.openGameUI, this);
        EventManager.addEventListener(GameEvents.OPEN_TIP_UI, this.openTIPUI, this);
        EventManager.addEventListener(GameEvents.OPEN_PAUSE_UI, this.openPauseUI, this);
        return;
    };
    GameModule.prototype.dispose = function () {
        GameModule._instance = null;
        return;
    };
    GameModule.prototype.openPauseUI = function () {
        SceneManager.getInstance().AddLayer(new PauseLayer);
        return;
    };
    GameModule.prototype.openTIPUI = function () {
        SceneManager.getInstance().AddLayer(new GameTipLayer);
        return;
    };
    GameModule.prototype.openGameUI = function () {
        SceneManager.getInstance().ChangeScene(new GameScene);
        return;
    };
    GameModule.getInstance = function () {
        if (GameModule._instance == null) {
            GameModule._instance = new GameModule();
        }
        return GameModule._instance;
    };
    return GameModule;
}(BaseModule));
__reflect(GameModule.prototype, "GameModule");
//# sourceMappingURL=GameModule.js.map