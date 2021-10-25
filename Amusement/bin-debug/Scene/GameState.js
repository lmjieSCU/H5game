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
/**游戏舞台,显示对象加载至此处 */
var GameState = (function (_super) {
    __extends(GameState, _super);
    function GameState() {
        var _this = _super.call(this) || this;
        _this._playerLayer = new egret.DisplayObjectContainer();
        _this._gameSprites = new Array();
        _this.addChild(_this._playerLayer);
        return _this;
    }
    GameState.prototype.build = function () {
        EffectCtrl.I.initlize(this, this._playerLayer);
        GameCtrl.I.initlize(this);
    };
    GameState.prototype.getGameSprites = function () {
        return this._gameSprites;
    }; // end function
    GameState.prototype.addGameSprite = function (param1) {
        if (this._gameSprites.indexOf(param1) != -1) {
            return;
        }
        this._gameSprites.push(param1);
        this._playerLayer.addChild(param1);
        return;
    }; // end function
    GameState.prototype.removeGameSprite = function (param1) {
        var _loc_2 = this._gameSprites.indexOf(param1);
        if (_loc_2 == -1) {
            return;
        }
        this._gameSprites.splice(_loc_2, 1);
        try {
            this._playerLayer.removeChild(param1);
        }
        catch (e) {
        }
        return;
    }; // end function
    return GameState;
}(egret.DisplayObjectContainer));
__reflect(GameState.prototype, "GameState");
//# sourceMappingURL=GameState.js.map