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
var KyoClassLoader = (function (_super) {
    __extends(KyoClassLoader, _super);
    function KyoClassLoader() {
        var _this = _super.call(this) || this;
        _this._classes = {};
        return _this;
    } // end function
    KyoClassLoader.prototype.getClass = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var className = param1;
        var swf = param2;
        swf = swf || this._defaultId;
        var app = this._classes[swf];
        if (!app) {
            throw new Error(swf + "未加载!");
        }
        try {
            return app.getDefinition(className);
        }
        catch (e) {
            throw new Error("在 " + swf + " 中找不到 " + className + " 的定义!");
            //trace("KyoClassLoader ::", e);
        }
    }; // end function
    Object.defineProperty(KyoClassLoader.prototype, "loadedAmount", {
        get: function () {
            return this._loadedAmount;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    KyoClassLoader.prototype.load = function (param1) {
        if (this._loading) {
            throw new Error("不可以在没完成加载时继续调用此方法!");
        }
        if (param1 instanceof String) {
            this._urls = [param1];
        }
        if (param1 instanceof Array) {
            this._urls = param1;
        }
        this._loadLength = this._urls.length;
        this._loadedAmount = 0;
        this.loadNext();
        this._loading = true;
        return;
    }; // end function
    KyoClassLoader.prototype.loadNext = function () {
        return true;
    }; // end function
    KyoClassLoader.prototype.removeLoader = function () {
        return;
    }; // end function
    KyoClassLoader.prototype.loadComplete = function () {
        return;
    }; // end function
    KyoClassLoader.prototype.loadProgress = function () {
        return;
    }; // end function
    KyoClassLoader.prototype.loadError = function () {
        return;
    }; // end function
    KyoClassLoader.prototype.checkComplete = function () {
        return;
    }; // end function
    return KyoClassLoader;
}(egret.EventDispatcher));
__reflect(KyoClassLoader.prototype, "KyoClassLoader");
//# sourceMappingURL=KyoClassLoader.js.map