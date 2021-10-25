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
/**游戏主界面 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    //
    function GameScene() {
        return _super.call(this) || this;
    }
    //
    GameScene.prototype.onEnter = function () {
        SoundCtrl.I.playbgSound("bgsound");
        this._GameState = new GameState();
        this._GameState.build();
        this.addChild(this._GameState);
    };
    GameScene.prototype.onExit = function () {
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map