var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var McAreaCacher = (function () {
    function McAreaCacher(param1) {
        this._idCache = {};
        this._frameCache = {};
        this.name = param1;
        return;
    } // end function
    McAreaCacher.prototype.getframe = function () {
        return this._frameCache;
    };
    McAreaCacher.prototype.destory = function () {
        this._idCache = null;
        this._frameCache = null;
        return;
    }; // end function
    McAreaCacher.prototype.areaFrameDefined = function (param1) {
        return this._frameCache[param1] != undefined;
    }; // end function
    McAreaCacher.prototype.getAreaByFrame = function (param1) {
        return this._frameCache[param1];
    }; // end function
    McAreaCacher.prototype.cacheAreaByFrame = function (param1, param2) {
        this._frameCache[param1] = param2;
        return;
    }; // end function
    McAreaCacher.prototype.getAreaByDisplay = function (param1) {
        var _loc_2 = this.getDisplayCacheId(param1);
        if (this._idCache[_loc_2]) {
            return this._idCache[_loc_2];
        }
        return null;
    }; // end function
    ;
    McAreaCacher.prototype.cacheAreaByDisplay = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = null; }
        var _loc_4 = this.getDisplayCacheId(param1);
        var _loc_5 = param1.name;
        var _loc_7 = {};
        _loc_7["name"] = _loc_5; //bdmn
        _loc_7["area"] = param2; //Rectangle
        if (param3) {
            for (var _loc_6 in param3) {
                // _loc_7[param3[_loc_6]] = param3[param3[_loc_6]];
                _loc_7[_loc_6] = param3[_loc_6];
            }
        }
        this._idCache[_loc_4] = _loc_7;
        return _loc_7;
    }; // end function
    McAreaCacher.prototype.getDisplayCacheId = function (param1) {
        return param1.name + "_" + param1.x + "," + param1.y + "," + param1.scaleX + "," + param1.scaleY + "," + param1.rotation;
    }; // end function
    return McAreaCacher;
}());
__reflect(McAreaCacher.prototype, "McAreaCacher");
//# sourceMappingURL=McAreaCacher.js.map