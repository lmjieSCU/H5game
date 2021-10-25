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
var GameLoger = (function (_super) {
    __extends(GameLoger, _super);
    function GameLoger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameLoger.prototype.GameLoger = function () {
        return;
    }; // end function
    GameLoger.setLoger = function (param1) {
        this._loger = param1;
        return;
    }; // end function
    GameLoger.log = function (param1) {
        if (this._loger) {
            //_loger.log(param1);
        }
        else {
            //GameLoger.trace(param1);
        }
        return;
    }; // end function
    return GameLoger;
}(egret.DisplayObject));
__reflect(GameLoger.prototype, "GameLoger");
//# sourceMappingURL=GameLoger.js.map