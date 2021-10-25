var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**游戏逻辑控制器 */
var GameCtrl = (function () {
    function GameCtrl() {
        this._running = false;
    }
    Object.defineProperty(GameCtrl, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new GameCtrl();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameCtrl.prototype, "running", {
        get: function () {
            return this._running;
        },
        set: function (isrun) {
            this._running = isrun;
        },
        enumerable: true,
        configurable: true
    });
    GameCtrl.prototype.initlize = function (gamestate) {
        this._gamestate = gamestate;
        this._startCtrl = new GameStartCtrl();
        this._endCtrl = new GameEndCtrl();
        this._fightCtrl = new FightCtrl();
        GameRender.I.Add(this, this.render);
        this.GameStart();
    };
    GameCtrl.prototype.render = function () {
        EffectCtrl.I.render();
        if (!this._running) {
            return;
        }
        if (this._fightCtrl.newGamed) {
            this._fightCtrl.render();
        }
    };
    GameCtrl.prototype.GameStart = function (isnewlevel) {
        if (isnewlevel === void 0) { isnewlevel = true; }
        this._running = true;
        this._fightCtrl.reset();
        this._startCtrl.dostartGame();
    };
    GameCtrl.prototype.GameEnd = function () {
        this._running = false;
        this._endCtrl.doGameEnd();
    };
    GameCtrl.prototype.addGameSprite = function (param1) {
        this._gamestate.addGameSprite(param1);
    };
    GameCtrl.prototype.removeGameSprite = function (param1) {
        this._gamestate.removeGameSprite(param1);
    };
    GameCtrl.prototype.freshTextFieldAnchorOff = function (field) {
        field.anchorOffsetX = field.width / 2;
        field.anchorOffsetY = field.height / 2;
    };
    return GameCtrl;
}());
__reflect(GameCtrl.prototype, "GameCtrl");
//# sourceMappingURL=GameCtrl.js.map