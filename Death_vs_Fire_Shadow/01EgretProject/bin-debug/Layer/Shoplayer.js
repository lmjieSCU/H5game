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
var ShopLayer = (function (_super) {
    __extends(ShopLayer, _super);
    function ShopLayer() {
        var _this = _super.call(this) || this;
        _this._nav = []; //选项选中变亮
        _this._navButton = []; //选项按钮
        _this._good = []; //商品数组
        _this._choose = []; //商品选中变亮
        _this._gx = UI.WINSIZE_W / 2 - 422;
        _this._gy = UI.WINSIZE_H / 2 - 65;
        _this._dx = UI.WINSIZE_W / 2 - 501;
        _this._dy = UI.WINSIZE_H / 2 - 110;
        _this._cx = [UI.WINSIZE_W / 2 - 424];
        _this._cy = [UI.WINSIZE_H / 2 - 71];
        _this._free = [];
        _this._freeBtn = [];
        _this._freeShdow = [];
        _this._freeBtnShdow = [];
        _this._arrowhead = [];
        _this._trade = [];
        _this._tradeBtn = [];
        _this._gold = [];
        _this._diamond = [];
        _this._getBtn = [];
        return _this;
    }
    ShopLayer.prototype.onEnter = function () {
        ShopLayer.instance = this;
        //背景
        UI.addPic(this, "assignment_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        //---------------------------------------------------------------------------------------超值礼包
        this._goods = new egret.DisplayObjectContainer();
        this.addChild(this._goods);
        var _loop_1 = function (i) {
            if (i % 2 == 0) {
                if (i > 1) {
                    this_1._cx[i] = this_1._cx[i - 2] + 253;
                }
                this_1._cy[i] = this_1._cy[0];
            }
            else {
                this_1._cx[i] = this_1._cx[i - 1];
                this_1._cy[i] = UI.WINSIZE_H / 2 + 94;
            }
            this_1._good[i] = UI.addBtn(this_1._goods, "shop_buybox_png", this_1._gx, this_1._gy, true, function (arg) {
                if (ShopLayer._gFlag == false) {
                    ShopLayer.instance._choose[ShopLayer._gJuge].visible = false;
                }
                ShopLayer.instance._choose[i] = UI.addPic(ShopLayer.instance._goods, "shop_buybox_shadow_png", ShopLayer.instance._cx[i], ShopLayer.instance._cy[i], true);
                ShopLayer._gJuge = i;
                ShopLayer._gFlag = false;
            });
            this_1._discount = UI.addPic(this_1._goods, "shop_stripe_png", this_1._dx, this_1._dy, true);
            if (i % 2 == 0) {
                this_1._gy = UI.WINSIZE_H / 2 + 100;
                this_1._dy = UI.WINSIZE_H / 2 + 53;
            }
            else {
                this_1._gx += 253;
                this_1._gy = UI.WINSIZE_H / 2 - 65;
                this_1._dx += 253;
                this_1._dy = UI.WINSIZE_H / 2 - 110;
            }
        };
        var this_1 = this;
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
        this._goodsScrollView = new egret.ScrollView();
        this._goodsScrollView.setContent(this._goods);
        this._goodsScrollView.width = UI.WINSIZE_W - 200;
        this._goodsScrollView.height = UI.WINSIZE_H - 50;
        this._goodsScrollView.x = UI.WINSIZE_W / 2 + 120;
        this._goodsScrollView.y = UI.WINSIZE_H / 2 - 30;
        this._goodsScrollView.anchorOffsetX = this._goodsScrollView.width / 2;
        this._goodsScrollView.anchorOffsetY = this._goodsScrollView.height / 2;
        this.addChild(this._goodsScrollView);
        this._goodsScrollView.verticalScrollPolicy = "off";
        this._goodsScrollView.horizontalScrollPolicy = "on";
        this._purchase = UI.addBtn(this, "shop_button_buy_png", UI.WINSIZE_W - 130, UI.WINSIZE_H / 2 + 197, true, function (arg) {
        });
        //---------------------------------------------------------------------------------------金币兑换
        this._goldHome = new egret.DisplayObjectContainer();
        this.addChild(this._goldHome);
        this._goldHome.visible = false;
        this._gold[0] = UI.addPic(this._goldHome, "shop_packcoin_free_png", UI.WINSIZE_W / 2 - 335, UI.WINSIZE_H / 2 - 143);
        this._getBtn[0] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2 - 200, UI.WINSIZE_H / 2, true, function (arg) {
        });
        this._gold[1] = UI.addPic(this._goldHome, "shop_packcoin_png", UI.WINSIZE_W / 2 - 53, UI.WINSIZE_H / 2 - 143);
        this._getBtn[1] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2 + 85, UI.WINSIZE_H / 2, true, function (arg) {
        });
        this._gold[2] = UI.addPic(this._goldHome, "shop_packcoin2_png", UI.WINSIZE_W / 2 + 228, UI.WINSIZE_H / 2 - 143);
        this._getBtn[2] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2 + 365, UI.WINSIZE_H / 2, true, function (arg) {
        });
        this._gold[3] = UI.addPic(this._goldHome, "shop_packcoin_ads_png", UI.WINSIZE_W / 2 - 335, UI.WINSIZE_H / 2 + 30);
        this._getBtn[3] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2 - 200, UI.WINSIZE_H / 2 + 178, true, function (arg) {
        });
        this._gold[4] = UI.addPic(this._goldHome, "shop_packcoin3_png", UI.WINSIZE_W / 2 - 53, UI.WINSIZE_H / 2 + 30);
        this._getBtn[4] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2 + 85, UI.WINSIZE_H / 2 + 178, true, function (arg) {
        });
        this._gold[5] = UI.addPic(this._goldHome, "shop_packcoin4_png", UI.WINSIZE_W / 2 + 228, UI.WINSIZE_H / 2 + 30);
        this._getBtn[5] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2 + 365, UI.WINSIZE_H / 2 + 178, true, function (arg) {
        });
        //---------------------------------------------------------------------------------------钻石兑换
        this._diamondHome = new egret.DisplayObjectContainer();
        this.addChild(this._diamondHome);
        this._diamondHome.visible = false;
        this._diamond[0] = UI.addPic(this._diamondHome, "shop_packgem_free_png", UI.WINSIZE_W / 2 - 335, UI.WINSIZE_H / 2 - 143);
        this._getBtn[6] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2 - 200, UI.WINSIZE_H / 2, true, function (arg) {
        });
        this._diamond[1] = UI.addPic(this._diamondHome, "shop_packgem1_png", UI.WINSIZE_W / 2 - 53, UI.WINSIZE_H / 2 - 143);
        this._getBtn[7] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2 + 85, UI.WINSIZE_H / 2, true, function (arg) {
        });
        this._gold[2] = UI.addPic(this._diamondHome, "shop_packgem2_png", UI.WINSIZE_W / 2 + 228, UI.WINSIZE_H / 2 - 143);
        this._getBtn[8] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2 + 365, UI.WINSIZE_H / 2, true, function (arg) {
        });
        this._diamond[3] = UI.addPic(this._diamondHome, "shop_pkgem_ads_png", UI.WINSIZE_W / 2 - 335, UI.WINSIZE_H / 2 + 30);
        this._getBtn[9] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2 - 200, UI.WINSIZE_H / 2 + 178, true, function (arg) {
        });
        this._diamond[4] = UI.addPic(this._diamondHome, "shop_packgem3_png", UI.WINSIZE_W / 2 - 53, UI.WINSIZE_H / 2 + 30);
        this._getBtn[10] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2 + 85, UI.WINSIZE_H / 2 + 178, true, function (arg) {
        });
        this._diamond[5] = UI.addPic(this._diamondHome, "shop_packgem4_png", UI.WINSIZE_W / 2 + 228, UI.WINSIZE_H / 2 + 30);
        this._getBtn[11] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2 + 365, UI.WINSIZE_H / 2 + 178, true, function (arg) {
        });
        //---------------------------------------------------------------------------------------免费领取
        this._freeHome = new egret.DisplayObjectContainer();
        this.addChild(this._freeHome);
        UI.addPic(this._freeHome, "free_titlefree_png", UI.WINSIZE_W / 2 + 65, UI.WINSIZE_H / 2 - 140, true); //免费领取标题
        UI.addPic(this._freeHome, "free_titledaily_png", UI.WINSIZE_W / 2 + 65, UI.WINSIZE_H / 2 + 52, true); //每日交易标题
        this._freeHome.visible = false;
        this._free[0] = UI.addPic(this._freeHome, "free_box01_png", UI.WINSIZE_W / 2 - 210, UI.WINSIZE_H / 2 - 43, true);
        this._freeBtn[0] = UI.addBtn(this._freeHome, "free_button_get_png", UI.WINSIZE_W / 2 - 210, UI.WINSIZE_H / 2 + 7, true, function (arg) {
        });
        this._arrowhead[0] = UI.addPic(this._freeHome, "free_arrow_png", UI.WINSIZE_W / 2 - 63, UI.WINSIZE_H / 2 - 43, true);
        this._freeShdow[1] = UI.addPic(this._freeHome, "free_box02_shadow_png", UI.WINSIZE_W / 2 + 82, UI.WINSIZE_H / 2 - 43, true);
        this._freeBtnShdow[1] = UI.addPic(this._freeHome, "free_button_getshadow_png", UI.WINSIZE_W / 2 + 82, UI.WINSIZE_H / 2 + 7, true);
        this._arrowhead[1] = UI.addPic(this._freeHome, "free_arrow_png", UI.WINSIZE_W / 2 + 225, UI.WINSIZE_H / 2 - 43, true);
        this._freeShdow[2] = UI.addPic(this._freeHome, "free_box03_shadow_png", UI.WINSIZE_W / 2 + 370, UI.WINSIZE_H / 2 - 43, true);
        this._freeBtnShdow[2] = UI.addPic(this._freeHome, "free_button_getshadow_png", UI.WINSIZE_W / 2 + 370, UI.WINSIZE_H / 2 + 7, true);
        this._trade[0] = UI.addPic(this._freeHome, "free_box01_png", UI.WINSIZE_W / 2 - 210, UI.WINSIZE_H / 2 + 150, true);
        this._tradeBtn[0] = UI.addBtn(this._freeHome, "free_button_get_png", UI.WINSIZE_W / 2 - 210, UI.WINSIZE_H / 2 + 201, true, function (arg) {
        });
        this._trade[1] = UI.addPic(this._freeHome, "free_box02_png", UI.WINSIZE_W / 2 + 82, UI.WINSIZE_H / 2 + 150, true);
        this._tradeBtn[1] = UI.addBtn(this._freeHome, "free_button_moneyget_png", UI.WINSIZE_W / 2 + 82, UI.WINSIZE_H / 2 + 207, true, function (arg) {
        });
        this._trade[2] = UI.addPic(this._freeHome, "free_box03_png", UI.WINSIZE_W / 2 + 370, UI.WINSIZE_H / 2 + 150, true);
        this._tradeBtn[2] = UI.addBtn(this._freeHome, "free_button_goldget_png", UI.WINSIZE_W / 2 + 370, UI.WINSIZE_H / 2 + 207, true, function (arg) {
        });
        //侧边导航
        UI.addPic(this, "shop_leftbox_png", 83, UI.WINSIZE_H / 2 + 25, true);
        this._nav[0] = UI.addPic(this, "shop_leftbox_shadow_png", 79, UI.WINSIZE_H / 2 - 104, true);
        this._nav[1] = UI.addPic(this, "shop_leftbox_shadow_png", 79, UI.WINSIZE_H / 2 - 39, true);
        this._nav[2] = UI.addPic(this, "shop_leftbox_shadow_png", 79, UI.WINSIZE_H / 2 + 26, true);
        this._nav[3] = UI.addPic(this, "shop_leftbox_shadow_png", 79, UI.WINSIZE_H / 2 + 93, true);
        this._nav[1].visible = false;
        this._nav[2].visible = false;
        this._nav[3].visible = false;
        this._navButton[0] = UI.addBtn(this, "shop_bag_shadow_png", 77, UI.WINSIZE_H / 2 - 104, true, function (arg) {
            ShopLayer.instance._navButton[0].texture = RES.getRes("shop_bag_png");
            ShopLayer.instance._navButton[1].texture = RES.getRes("shop_goldExchange_shadow_png");
            ShopLayer.instance._navButton[2].texture = RES.getRes("shop_diamondsExchange_shadow_png");
            ShopLayer.instance._navButton[3].texture = RES.getRes("shop_freeget_shadow_png");
            ShopLayer.instance._nav[0].visible = true;
            ShopLayer.instance._nav[1].visible = false;
            ShopLayer.instance._nav[2].visible = false;
            ShopLayer.instance._nav[3].visible = false;
            ShopLayer.instance._goodsScrollView.visible = true;
            ShopLayer.instance._purchase.visible = true;
            ShopLayer.instance._freeHome.visible = false;
            ShopLayer.instance._goldHome.visible = false;
            ShopLayer.instance._diamondHome.visible = false;
        });
        this._navButton[1] = UI.addBtn(this, "shop_goldExchange_shadow_png", 77, UI.WINSIZE_H / 2 - 39, true, function (arg) {
            ShopLayer.instance._navButton[1].texture = RES.getRes("shop_goldExchange_png");
            ShopLayer.instance._navButton[0].texture = RES.getRes("shop_bag_shadow_png");
            ShopLayer.instance._navButton[2].texture = RES.getRes("shop_diamondsExchange_shadow_png");
            ShopLayer.instance._navButton[3].texture = RES.getRes("shop_freeget_shadow_png");
            ShopLayer.instance._nav[1].visible = true;
            ShopLayer.instance._nav[0].visible = false;
            ShopLayer.instance._nav[2].visible = false;
            ShopLayer.instance._nav[3].visible = false;
            ShopLayer.instance._goodsScrollView.visible = false;
            ShopLayer.instance._purchase.visible = false;
            ShopLayer.instance._freeHome.visible = false;
            ShopLayer.instance._goldHome.visible = true;
            ShopLayer.instance._diamondHome.visible = false;
        });
        this._navButton[2] = UI.addBtn(this, "shop_diamondsExchange_shadow_png", 77, UI.WINSIZE_H / 2 + 26, true, function (arg) {
            ShopLayer.instance._navButton[2].texture = RES.getRes("shop_diamondsExchange_png");
            ShopLayer.instance._navButton[1].texture = RES.getRes("shop_goldExchange_shadow_png");
            ShopLayer.instance._navButton[0].texture = RES.getRes("shop_bag_shadow_png");
            ShopLayer.instance._navButton[3].texture = RES.getRes("shop_freeget_shadow_png");
            ShopLayer.instance._nav[2].visible = true;
            ShopLayer.instance._nav[1].visible = false;
            ShopLayer.instance._nav[0].visible = false;
            ShopLayer.instance._nav[3].visible = false;
            ShopLayer.instance._goodsScrollView.visible = false;
            ShopLayer.instance._purchase.visible = false;
            ShopLayer.instance._freeHome.visible = false;
            ShopLayer.instance._goldHome.visible = false;
            ShopLayer.instance._diamondHome.visible = true;
        });
        this._navButton[3] = UI.addBtn(this, "shop_freeget_shadow_png", 77, UI.WINSIZE_H / 2 + 93, true, function (arg) {
            ShopLayer.instance._navButton[3].texture = RES.getRes("shop_freeget_png");
            ShopLayer.instance._navButton[1].texture = RES.getRes("shop_goldExchange_shadow_png");
            ShopLayer.instance._navButton[2].texture = RES.getRes("shop_diamondsExchange_shadow_png");
            ShopLayer.instance._navButton[0].texture = RES.getRes("shop_bag_shadow_png");
            ShopLayer.instance._nav[3].visible = true;
            ShopLayer.instance._nav[1].visible = false;
            ShopLayer.instance._nav[2].visible = false;
            ShopLayer.instance._nav[0].visible = false;
            ShopLayer.instance._goodsScrollView.visible = false;
            ShopLayer.instance._purchase.visible = false;
            ShopLayer.instance._freeHome.visible = true;
            ShopLayer.instance._goldHome.visible = false;
            ShopLayer.instance._diamondHome.visible = false;
        });
        //默认导航选项
        ShopLayer.instance._navButton[0].texture = RES.getRes("shop_bag_png");
        //
        var goldLayer = new GoldDiamondLayer(this);
        this.addChild(goldLayer);
        goldLayer.addReturn(function (arg) {
            SceneManager.Instance.changeScene(new TownScene);
        });
    };
    ShopLayer.prototype.onExit = function () {
    };
    ShopLayer._gFlag = true; //是否第一次点击商品
    return ShopLayer;
}(Scene));
__reflect(ShopLayer.prototype, "ShopLayer");
//# sourceMappingURL=Shoplayer.js.map