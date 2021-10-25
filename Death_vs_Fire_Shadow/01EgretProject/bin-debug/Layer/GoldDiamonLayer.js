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
var GoldDiamondLayer = (function (_super) {
    __extends(GoldDiamondLayer, _super);
    function GoldDiamondLayer(param) {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        _this._parent = param;
        return _this;
    }
    GoldDiamondLayer.prototype.onEnter = function () {
        GoldDiamondLayer.instance = this;
        var xx = UI.WINSIZE_W - 380;
        var yy = 13;
        var pic2 = new egret.Bitmap(RES.getRes("home_head_png"));
        pic2.x = UI.WINSIZE_W;
        pic2.anchorOffsetX = 1068;
        this.addChild(pic2);
        var pic9 = new egret.Bitmap(RES.getRes("home_box_gold_png"));
        pic9.x = xx;
        pic9.y = yy;
        this.addChild(pic9);
        UI.addBtn(this, "home_button_add_png", xx + 100, yy + 1, false, function (arg) {
        });
        var pic8 = new egret.Bitmap(RES.getRes("home_Diamonds_png"));
        pic8.x = xx - 180;
        pic8.y = yy;
        this.addChild(pic8);
        UI.addBtn(this, "home_button_add_png", xx - 180 + 100, yy + 1, false, function (arg) {
        });
        //
        //设置
        UI.addBtn(this, "home_button_install_png", UI.WINSIZE_W - 80, 8, false, function (arg) {
        });
    };
    GoldDiamondLayer.prototype.addReturn = function (param) {
        this.func = param;
        UI.addBtn(this, "public_return_png", 0, 0, false, function (arg) {
            this.func.call(this._parent);
        });
    };
    GoldDiamondLayer.prototype.onExit = function () {
    };
    return GoldDiamondLayer;
}(egret.DisplayObjectContainer));
__reflect(GoldDiamondLayer.prototype, "GoldDiamondLayer", ["egret.DisplayObject"]);
//# sourceMappingURL=GoldDiamonLayer.js.map