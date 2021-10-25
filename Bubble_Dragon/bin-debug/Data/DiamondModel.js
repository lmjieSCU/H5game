var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//砖石数
var DiamondModel = (function () {
    function DiamondModel() {
        this._diamondnum = 0;
        return;
    }
    Object.defineProperty(DiamondModel.prototype, "diamond", {
        get: function () {
            return this._diamondnum;
        },
        set: function (num) {
            this._diamondnum = num;
            this.saveData();
            return;
        },
        enumerable: true,
        configurable: true
    });
    DiamondModel.prototype.loadData = function () {
        var loc2 = null;
        var loc3 = 0;
        var loc4 = null;
        var loc5 = null;
        var loc6 = null;
        var loc1 = egret.localStorage.getItem("diamondnum");
        if (loc1 == null) {
            this._diamondnum = 0;
            return;
        }
        this._diamondnum = Number(loc1);
        return;
    };
    //本地存储通关记录
    DiamondModel.prototype.saveData = function () {
        egret.localStorage.setItem("diamondnum", String(this._diamondnum));
        return;
    };
    return DiamondModel;
}());
__reflect(DiamondModel.prototype, "DiamondModel");
//# sourceMappingURL=DiamondModel.js.map