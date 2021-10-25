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
var GameEvents = (function (_super) {
    __extends(GameEvents, _super);
    function GameEvents(type, data, bubbles, cancelable) {
        if (data === void 0) { data = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.data = data;
        return _this;
    }
    GameEvents.OPEN_GAME_UI = "OPEN_GAME_UI";
    GameEvents.OPEN_PAUSE_UI = "OPEN_PAUSE_UI";
    GameEvents.OPEN_MENU_UI = "OPEN_MENU_UI";
    GameEvents.OPEN_MAP_UI = "OPEN_MAP_UI";
    GameEvents.OPEN_SELECT_LEVEL_UI = "OPEN_SELECT_LEVEL_UI";
    GameEvents.OPEN_VICTORY_UI = "OPEN_VICTORY_UI";
    GameEvents.OPEN_FAILED_UI = "OPEN_FAILED_UI";
    GameEvents.OPEN_GAME_END_UI = "OPEN_GAME_END_UI";
    GameEvents.OPEN_TIP_UI = "OPEN_TIP_UI";
    GameEvents.SCORE_CHANGE = "SCORE_CHANGE";
    GameEvents.STEP_CHANGE = "STEP_CHANGE";
    GameEvents.AIMS_CHANGE = "AIMS_CHANGE";
    GameEvents.TIME_CHANGE = "TIME_CHANGE";
    GameEvents.OPEN_GUIDE = "OPEN_GUIDE";
    return GameEvents;
}(egret.Event));
__reflect(GameEvents.prototype, "GameEvents");
//# sourceMappingURL=GameEvents.js.map