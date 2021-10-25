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
var ResUtils = (function (_super) {
    __extends(ResUtils, _super);
    function ResUtils() {
        var _this = _super.call(this) || this;
        return _this;
    } // end function
    ResUtils.prototype.initalize = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        var _loc_8 = null;
        var _loc_3 = null;
        var _loc_7 = null;
        if (this._initing) {
            //throw new this.error("正在初始化过程中，不能再次初始化！");
        }
        if (this._inited) {
            if (param1 != null) {
                param1();
            }
            return;
        }
        this._inited = true;
        this._initing = true;
        //this._swfPool = new Dictionary();
        this._initBack = param1;
        this._initError = param2;
        //var _loc_5 = this.describeType(this);
        //var _loc_4 = {};
        // for each (_loc_6 in _loc_5.variable)
        // {
        //     _loc_8 = (_loc_6).@name;
        //     _loc_3 = this[_loc_8];
        //     _loc_7 = new InsSwf(_loc_3);
        //     _loc_7.this.ready = swfReadyBack;
        //     _loc_7.this.error = swfErrorBack;
        //     this._swfPool[_loc_3] = _loc_7;
        // }
        return;
    }; // end function
    ResUtils.prototype.swfReadyBack = function (param1) {
        // for each (_loc_2 in this._swfPool)
        // {
        //     if (!_loc_2.this.isReady)
        //     {
        //         return;
        //     }
        // }
        // finish();
        return;
    }; // end function
    ResUtils.prototype.swfErrorBack = function (param1) {
        if (this._initError != null) {
            this._initError();
        }
        return;
    }; // end function
    ResUtils.prototype.finish = function () {
        this._initing = false;
        if (this._initBack != null) {
            this._initBack();
            this._initBack = null;
        }
        return;
    }; // end function
    ResUtils.prototype.createDisplayObject = function (param1, param2) {
        var _loc_3 = this.getItemClass(param1, param2);
        if (_loc_3) {
            return new _loc_3;
        }
        return;
    }; // end function
    ResUtils.prototype.createBitmapData = function (param1, param2, param3, param4) {
        var _loc_5 = this.getItemClass(param1, param2);
        if (!this.getItemClass(param1, param2)) {
            return null;
        }
        var _loc_6 = new _loc_5(param3, param4);
        return new _loc_5(param3, param4);
    }; // end function
    ResUtils.prototype.getItemClass = function (param1, param2) {
        // if (!this._swfPool)
        // {
        //     throw new this.error("未进行初始化！");
        // }
        // var _loc_3:* = this._swfPool[param1];
        // if (!_loc_3)
        // {
        //     throw new this.error("swf is undefined!");
        // }
        // return _loc_3.getClass(param2);
    }; // end function
    Object.defineProperty(ResUtils, "I", {
        get: function () {
            if (!this._i) {
                this._i = new ResUtils;
            }
            return this._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return ResUtils;
}(Object));
__reflect(ResUtils.prototype, "ResUtils");
var InsSwf = (function () {
    function InsSwf() {
    }
    return InsSwf;
}());
__reflect(InsSwf.prototype, "InsSwf");
//# sourceMappingURL=ResUtils.js.map