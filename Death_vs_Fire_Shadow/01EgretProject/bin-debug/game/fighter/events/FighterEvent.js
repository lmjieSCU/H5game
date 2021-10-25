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
var FighterEvent = (function (_super) {
    __extends(FighterEvent, _super);
    function FighterEvent(param1, param2, param3) {
        if (param2 === void 0) { param2 = false; }
        if (param3 === void 0) { param3 = false; }
        var _this = _super.call(this, param1, param2, param3) || this;
        return _this;
    } // end function
    FighterEvent.FIRE_BULLET = "FIRE_BULLET";
    FighterEvent.ADD_ATTACKER = "ADD_ATTACKER";
    FighterEvent.ADD_ASSISTER = "ADD_ASSISTER";
    FighterEvent.HIT_TARGET = "HIT_TARGET";
    FighterEvent.HURT_RESUME = "HURT_RESUME";
    FighterEvent.HURT_DOWN = "HURT_DOWN";
    FighterEvent.DIE = "DIE";
    FighterEvent.DO_ACTION = "DO_ACTION";
    return FighterEvent;
}(egret.Event));
__reflect(FighterEvent.prototype, "FighterEvent");
//# sourceMappingURL=FighterEvent.js.map