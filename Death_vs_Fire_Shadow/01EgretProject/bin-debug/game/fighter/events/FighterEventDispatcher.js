var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterEventDispatcher = (function () {
    function FighterEventDispatcher() {
        return;
    } // end function
    FighterEventDispatcher.hasEventListener = function (param1) {
        return FighterEventDispatcher._addedEvents[param1] != null;
    }; // end function
    FighterEventDispatcher.addEventListener = function (param1, param2, param3, param4, param5) {
        if (param3 === void 0) { param3 = false; }
        if (param4 === void 0) { param4 = 0; }
        if (param5 === void 0) { param5 = false; }
        FighterEventDispatcher._addedEvents[param1] = param2;
        FighterEventDispatcher._dispatcher.addEventListener(param1, param2, param3, param5, param4);
        return;
    }; // end function
    FighterEventDispatcher.removeEventListener = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = false; }
        delete FighterEventDispatcher._addedEvents[param1];
        FighterEventDispatcher._dispatcher.removeEventListener(param1, param2, param3);
        return;
    }; // end function
    FighterEventDispatcher.removeAllListeners = function () {
        for (var _loc_1 in FighterEventDispatcher._addedEvents) {
            FighterEventDispatcher._dispatcher.removeEventListener(_loc_1, FighterEventDispatcher._addedEvents[_loc_1], true);
        }
        FighterEventDispatcher._addedEvents = {};
        return;
    }; // end function
    FighterEventDispatcher.dispatchEvent = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = null; }
        var _loc_4 = new FighterEvent(param2, false, false);
        _loc_4.fighter = param1;
        _loc_4.params = param3;
        FighterEventDispatcher._dispatcher.dispatchEvent(_loc_4);
        return;
    }; // end function
    FighterEventDispatcher._dispatcher = new egret.EventDispatcher();
    FighterEventDispatcher._addedEvents = {};
    return FighterEventDispatcher;
}());
__reflect(FighterEventDispatcher.prototype, "FighterEventDispatcher");
//# sourceMappingURL=FighterEventDispatcher.js.map