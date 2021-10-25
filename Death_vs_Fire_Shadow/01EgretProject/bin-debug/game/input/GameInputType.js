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
var GameInputType = (function (_super) {
    __extends(GameInputType, _super);
    function GameInputType() {
        var _this = _super.call(this) || this;
        return _this;
    } // end function
    GameInputType.MENU = "MENU";
    GameInputType.P1 = "P1";
    GameInputType.P2 = "P2";
    return GameInputType;
}(Object));
__reflect(GameInputType.prototype, "GameInputType");
//# sourceMappingURL=GameInputType.js.map