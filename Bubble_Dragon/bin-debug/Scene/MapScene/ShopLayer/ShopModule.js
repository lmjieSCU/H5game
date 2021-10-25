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
var ShopModule = (function (_super) {
    __extends(ShopModule, _super);
    function ShopModule() {
        var _this = _super.call(this) || this;
        return _this;
    }
    ShopModule.prototype.init = function () {
        EventManager.addEventListener(GameEvents.OPEN_SHOP_UI, this.openShopUI, this);
        return;
    };
    ShopModule.prototype.dispose = function () {
        ShopModule._instance = null;
        return;
    };
    ShopModule.prototype.openShopUI = function () {
        SceneManager.getInstance().AddLayer(new ShopLayer);
        return;
    };
    ShopModule.getInstance = function () {
        if (ShopModule._instance == null) {
            ShopModule._instance = new ShopModule();
        }
        return ShopModule._instance;
    };
    return ShopModule;
}(BaseModule));
__reflect(ShopModule.prototype, "ShopModule");
//# sourceMappingURL=ShopModule.js.map