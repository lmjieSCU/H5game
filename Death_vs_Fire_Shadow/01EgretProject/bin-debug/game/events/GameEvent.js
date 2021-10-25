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
var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(param1, param2, param3, param4) {
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = false; }
        if (param4 === void 0) { param4 = false; }
        var _this = _super.call(this, param1, param3, param4) || this;
        _this.param = param2;
        return _this;
    } // end function
    GameEvent.dispatchEvent2 = function (param1, param2, param3, param4) {
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = false; }
        if (param4 === void 0) { param4 = false; }
        GameEvent._dispatcher.dispatchEvent(new GameEvent(param1, param2, param3, param4));
        return;
    }; // end function
    GameEvent.addEventListener = function (param1, param2, param3, param4, param5) {
        if (param3 === void 0) { param3 = false; }
        if (param4 === void 0) { param4 = 0; }
        if (param5 === void 0) { param5 = false; }
        GameEvent._dispatcher.addEventListener(param1, param2, param3, param5, param4);
        return;
    }; // end function
    GameEvent.removeEventListener = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = false; }
        GameEvent._dispatcher.removeEventListener(param1, param2, param3);
        return;
    }; // end function
    GameEvent.SCORE_UPDATE = "SCORE_UPDATE";
    GameEvent.PAUSE_GAME = "PAUSE_GAME";
    GameEvent.RESUME_GAME = "RESUME_GAME";
    GameEvent.LOAD_GAME_COMPLETE = "LOAD_GAME_COMPLETE";
    GameEvent.GAME_START = "GAME_START";
    GameEvent.ROUND_START = "ROUND_START";
    GameEvent.ROUND_END = "ROUND_END";
    GameEvent.GAME_END = "GAME_END";
    GameEvent.GAME_OVER = "GAME_OVER";
    GameEvent.GAME_PASS_ALL = "GAME_PASS_ALL";
    GameEvent.SELECT_FIGHTER_STEP = "SELECT_FIGHTER_STEP";
    GameEvent.SELECT_FIGHTER_FINISH = "SELECT_FIGHTER_FINISH";
    GameEvent.SELECT_FIGHTER_INDEX = "SELECT_FIGHTER_INDEX";
    GameEvent._dispatcher = new egret.EventDispatcher();
    return GameEvent;
}(egret.Event));
__reflect(GameEvent.prototype, "GameEvent");
//# sourceMappingURL=GameEvent.js.map