var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**游戏逻辑控制器 */
var GameCtrl = (function () {
    function GameCtrl() {
        this._running = false;
        this._timeover = false;
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
    Object.defineProperty(GameCtrl.prototype, "istimeover", {
        get: function () {
            return this._timeover;
        },
        enumerable: true,
        configurable: true
    });
    GameCtrl.prototype.timeover = function () {
        this._timeover = true;
        this._running = false;
        egret.setTimeout(this.GameEnd, this, 1000);
        return;
    };
    GameCtrl.prototype.initlize = function (gamestate) {
        this._gamestate = gamestate;
        this._gridCtrl = new GridCtrl();
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
        this._gridCtrl.render();
        this._fightCtrl.render();
    };
    GameCtrl.prototype.GameStart = function (isnewlevel) {
        if (isnewlevel === void 0) { isnewlevel = true; }
        this._running = false;
        this._timeover = false;
        this._fightCtrl.reset(isnewlevel);
        this._gridCtrl.reset(isnewlevel);
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
    GameCtrl.prototype.setposition = function (param, dx, dy, isCell) {
        if (isCell === void 0) { isCell = true; }
        var s = Math.min(UI.WINSIZE_W / 8, UI.WINSIZE_H / 8);
        param.x = s * (dy + 0.5);
        param.y = s * (dx + 3.5);
        if (isCell) {
            param.scaleX = s / param.width;
            param.scaleY = s / param.height;
        }
        return;
    };
    GameCtrl.prototype.freshTextFieldAnchorOff = function (field) {
        field.anchorOffsetX = field.width / 2;
        field.anchorOffsetY = field.height / 2;
    };
    return GameCtrl;
}());
__reflect(GameCtrl.prototype, "GameCtrl");
//# sourceMappingURL=GameCtrl.js.map