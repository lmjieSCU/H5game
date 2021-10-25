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
        _this.shopInfo = [];
        _this.shopTimeInfo = [];
        return _this;
    }
    ShopLayer.prototype.onEnter = function () {
        var _this = this;
        var head = UI.addPic(this, "Shop_head_png", 0, 0);
        var back = UI.addBtn(this, "Button_back_png", 0, 0, false, function () {
            Home.instace.changeLayer(_this, new HomeLayer());
        });
        var bg = UI.addPic(this, "Shop_box02_png", head.width / 4 * 3, UI.WINSIZE_H / 2, true);
        bg.anchorOffsetX = 0;
        this.initNormalShop(bg.x, UI.WINSIZE_H / 3);
        this.initTimeShop();
        var reset = UI.addBtn(this, "Shop_button_Reset_png", bg.x + bg.width, bg.y + bg.height / 4, true, function () {
            _this.normalShop.removeChildren();
            _this.timeShop.removeChildren();
            _this.shopInfo = ShopData.getSkillList(true);
            _this.initNormalShop(bg.x, UI.WINSIZE_H / 3, _this.normalShop.visible);
            _this.initTimeShop(_this.timeShop.visible);
        });
        reset.x -= reset.width;
        var pic = UI.addPic(this, "Shop_pic_man_png", reset.x, reset.y - reset.height / 2, true);
        pic.y -= pic.height / 3 * 2;
        var normal = UI.addPic(this, "Shop_button_goods_png", bg.x + bg.width / 2, bg.y + bg.height / 2, true);
        normal.y += normal.height / 2;
        var time = UI.addPic(this, "Shop_button_exchangesoff_png", normal.x + normal.width / 2, bg.y + bg.height / 2, true);
        time.y += time.height / 2;
        time.x += time.width / 2;
        UI.addClickAction(this, normal, function () {
            _this.timeShop.$setVisible(false);
            _this.normalShop.$setVisible(true);
            normal.$setTexture(RES.getRes('Shop_button_goods_png'));
            time.$setTexture(RES.getRes('Shop_button_exchangesoff_png'));
            time.y = bg.y + bg.height / 2 + time.height / 2;
            normal.y = bg.y + bg.height / 2 + normal.height / 2;
        });
        UI.addClickAction(this, time, function () {
            _this.timeShop.$setVisible(true);
            _this.normalShop.$setVisible(false);
            normal.$setTexture(RES.getRes('Shop_button_goodsoff_png'));
            time.$setTexture(RES.getRes('Shop_button_exchanges_png'));
            time.y = bg.y + bg.height / 2 + time.height / 2;
            normal.y = bg.y + bg.height / 2 + normal.height / 2;
        });
    };
    ShopLayer.prototype.onExit = function () { };
    ShopLayer.prototype.initNormalShop = function (x, y, visible) {
        var _this = this;
        if (visible === void 0) { visible = true; }
        this.normalShop = new egret.DisplayObjectContainer();
        this.normalShop.x = x;
        this.normalShop.y = y;
        this.addChild(this.normalShop);
        this.shopInfo = ShopData.getSkillList();
        this.shopInfo.map(function (data, index) {
            var shop = _this.createShop(data, index);
            shop.x = 75 + 100 * (index % 3);
            shop.y = Math.floor(index / 3) * 150;
            _this.normalShop.addChild(shop);
        });
        this.normalShop.$setVisible(visible);
    };
    ShopLayer.prototype.initTimeShop = function (visible) {
        var _this = this;
        if (visible === void 0) { visible = false; }
        this.timeShop = new egret.DisplayObjectContainer();
        this.timeShop.x = this.normalShop.x;
        this.timeShop.y = this.normalShop.y;
        this.addChild(this.timeShop);
        this.timeShop.$setVisible(visible);
        this.shopTimeInfo = ShopData.getTimeShop();
        if (this.shopTimeInfo)
            this.shopTimeInfo.map(function (data, index) {
                var shop = _this.createShop(data, index, 'time');
                shop.x = 75 + 100 * index;
                _this.timeShop.addChild(shop);
            });
        else
            UI.addText(this.timeShop, "当前限时商店未开启", 0, 0);
    };
    ShopLayer.prototype.getPrice = function (price) {
        var money = new egret.DisplayObjectContainer();
        var num = [];
        while (price > 0) {
            var i = price % 10;
            price = (price - i) / 10;
            num.unshift(i);
        }
        num.map(function (data, index) {
            var pic = UI.addPic(money, "Shop_number0" + data + "_png", money.width + 2, 0);
            // pic.x = index*pic.width;
        });
        return money;
    };
    ShopLayer.prototype.createShop = function (data, index, type) {
        var _this = this;
        if (type === void 0) { type = 'normal'; }
        var shop = new egret.DisplayObjectContainer();
        var info = UI.addPic(shop, "Shop_skill0" + (index + 1) + "_png", 0, 0, true);
        var btn = new egret.DisplayObjectContainer();
        var moneyBg = UI.addPic(btn, "Shop_button" + (data.isShoping ? '' : 'put') + "_buy_png", 0, info.y + info.height / 2, true);
        var money = this.getPrice(data.payNum);
        money.anchorOffsetX = money.width;
        money.x = moneyBg.x + moneyBg.width * 0.15;
        money.y = moneyBg.y - money.height / 2;
        btn.addChild(money);
        shop.addChild(btn);
        if (data.isShoping)
            UI.addClickAction(this, btn, function () {
                if ((type == 'time' && !_this.shopTimeInfo[index].isShoping) || (type == 'normal' && !_this.shopInfo[index].isShoping)) {
                    console.log("已售完");
                    return;
                }
                //    if(PropData.getPorp(data.payId) < data.payNum) return
                //    PropData.setProp(data.payId, -data.payNum);
                var reward = {
                    type: data.shopId,
                    num: data.shopNum
                };
                console.log(reward);
                ShopData.cancelShop(index + 7);
                (type == 'time') ? _this.shopTimeInfo[index].isShoping = false : _this.shopInfo[index].isShoping = false;
                moneyBg.$setTexture(RES.getRes("Shop_buttonput_buy_png"));
                btn.touchEnabled = false;
            });
        return shop;
    };
    ShopLayer.prototype.reset = function () {
    };
    return ShopLayer;
}(Scene));
__reflect(ShopLayer.prototype, "ShopLayer");
//# sourceMappingURL=ShopLayer.js.map