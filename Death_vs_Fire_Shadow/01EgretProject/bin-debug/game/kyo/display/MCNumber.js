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
var MCNumber = (function (_super) {
    __extends(MCNumber, _super);
    function MCNumber(param1, param2, param3, param4, param5) {
        if (param3 === void 0) { param3 = 1; }
        if (param4 === void 0) { param4 = -1; }
        if (param5 === void 0) { param5 = 0; }
        var _this = _super.call(this) || this;
        _this.mcWidth = -1;
        _this._mcs = [];
        _this._mc = param1;
        _this._bits = param5;
        _this.startFrame = param3;
        _this.mcWidth = param4;
        _this._number = param2;
        return _this;
    } // end function
    Object.defineProperty(MCNumber.prototype, "number", {
        get: function () {
            return this._number;
        } // end function
        ,
        set: function (param1) {
            var _loc_2 = null;
            var _loc_3 = null;
            var _loc_5 = 0;
            var _loc_6 = null;
            var _loc_7 = null;
            this._number = param1;
            // for each (_loc_2 in this._mcs)
            // {
            //     removeChild(_loc_2);
            // }
            //this._mcs.removeChildren()
            this._mcs = [];
            _loc_3 = param1.toString();
            while (_loc_3.length < this._bits) {
                _loc_3 = "0" + _loc_3;
            }
            var _loc_4 = 0;
            while (_loc_5 < _loc_3.length) {
                _loc_6 = _loc_3.charAt(_loc_5);
                _loc_7 = this.createNum(Number(_loc_6));
                _loc_7.x = _loc_4;
                _loc_4 = _loc_4 + (this.mcWidth == -1 ? (_loc_7.width) : (this.mcWidth));
                _loc_5 = _loc_5 + 1;
            }
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    MCNumber.prototype.createNum = function (param1) {
        var _loc_2 = this._mc;
        _loc_2.gotoAndStop(this.startFrame + param1);
        GameScene.instance.addChild(_loc_2);
        this._mcs.push(_loc_2);
        return _loc_2;
    }; // end function
    return MCNumber;
}(egret.Sprite));
__reflect(MCNumber.prototype, "MCNumber");
//# sourceMappingURL=MCNumber.js.map