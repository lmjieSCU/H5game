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
var GameData = (function (_super) {
    __extends(GameData, _super);
    function GameData() {
        var _this = _super.call(this) || this;
        _this.score = 0;
        _this.isFristRun = true;
        _this.SAVE_ID = "bvn3.01";
        _this.config = new ConfigVO();
        _this.p1Select = new SelectVO();
        _this.p2Select = new SelectVO();
        return _this;
    } // end function
    GameData.prototype.loadConfig = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        return;
    }; // end function
    GameData.prototype.saveData = function () {
        return;
    }; // end function
    GameData.prototype.loadData = function () {
        return;
    }; // end function
    Object.defineProperty(GameData, "I", {
        get: function () {
            if (!GameData._i) {
                GameData._i = new GameData();
            }
            return GameData._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return GameData;
}(Object));
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map