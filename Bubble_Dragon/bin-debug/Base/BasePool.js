var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BasePool = (function () {
    function BasePool(arg1, arg2, arg3) {
        if (arg3 === void 0) { arg3 = null; }
        this._storeList = new Array();
        this._cacheClass = arg1;
        this._maxCacheNum = arg2;
        this._params = arg3;
        return;
    }
    BasePool.prototype.take = function () {
        if (this._storeList.length > 0) {
            return this._storeList.shift();
        }
        var loc1 = new this._cacheClass();
        return loc1;
    };
    BasePool.prototype.put = function (arg1) {
        if (arg1 == null) {
            return false;
        }
        if (this._storeList.length > this._maxCacheNum) {
            return false;
        }
        if (this._storeList.indexOf(arg1) > 0) {
            return false;
        }
        this._storeList.push(arg1);
        return true;
    };
    BasePool.prototype.isEmpty = function () {
        return this._storeList.length == 0;
    };
    Object.defineProperty(BasePool.prototype, "size", {
        get: function () {
            return this._storeList.length;
        },
        enumerable: true,
        configurable: true
    });
    BasePool.prototype.dispose = function () {
        this._storeList = null;
        return;
    };
    return BasePool;
}());
__reflect(BasePool.prototype, "BasePool");
//# sourceMappingURL=BasePool.js.map