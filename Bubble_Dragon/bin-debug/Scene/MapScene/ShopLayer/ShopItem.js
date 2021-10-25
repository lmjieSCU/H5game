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
var ShopItem = (function (_super) {
    __extends(ShopItem, _super);
    function ShopItem() {
        var _this = _super.call(this) || this;
        _this.initItem();
        return _this;
    }
    ShopItem.prototype.setData = function (arg1) {
        this.nameLabel.text = arg1.name_ch;
        this.descLabel.text = arg1.desc_ch;
        this.moneyLabel.text = String(arg1.price);
        this.moneyLabel2.text = String(arg1.price);
        UI.FreshLocation(this.moneyLabel);
        UI.FreshLocation(this.moneyLabel2);
        this.cfg = arg1;
        this.updateInfo();
        UI.addPic("res.prop_" + arg1.id, true, this, -25);
        return;
    };
    ShopItem.prototype.updateInfo = function () {
        var loc1 = Model.levelModel.buyProps;
        if (loc1.indexOf(this.cfg.id) == -1) {
            this.hasBuy.visible = false;
            if (this.cfg.price <= Model.diamondModel.diamond) {
                this.buy_btn.visible = true;
                this.buy_gray.visible = false;
                this.moneyLabel2.visible = false;
                this.moneyLabel.visible = true;
            }
            else {
                this.buy_btn.visible = false;
                this.buy_gray.visible = true;
                this.moneyLabel2.visible = true;
                this.moneyLabel.visible = false;
            }
        }
        else {
            this.hasBuy.visible = true;
            this.buy_btn.visible = false;
            this.buy_gray.visible = false;
            this.moneyLabel2.visible = false;
            this.moneyLabel.visible = false;
        }
        return;
    };
    ShopItem.prototype.initItem = function () {
        this.buy_btn = UI.addPic("res.buy_btn", true, this, 360, 0);
        UI.addClickAction(this, this.buy_btn, this.onBuyBtnTouch);
        this.buy_gray = UI.addPic("res.buy_gray", true, this, 360, 0);
        this.hasBuy = UI.addPic("hasBuy", true, this, 200, 0);
        // com.popchan.debug.Debug.debugToBrowser("初始化文本之前");
        this.nameLabel = UI.addText(this, "", true, "left", 10, -45);
        this.descLabel = UI.addText(this, "", true, "left", 10, -10);
        // com.popchan.debug.Debug.debugToBrowser("初始化文本之后");
        this.moneyLabel = UI.addBitText(this, "", "info_fnt", false, 370, 0);
        this.moneyLabel.textAlign = "left";
        this.moneyLabel2 = UI.addBitText(this, "", "info_fnt", false, 370, 0);
        this.moneyLabel2.textAlign = "left";
        return;
    };
    ShopItem.prototype.updateGold = function () {
        return;
    };
    ShopItem.prototype.onBuyBtnTouch = function (arg1) {
        SoundCtrl.getInstance().playmusic("anniu");
        if (this.cfg.price <= Model.diamondModel.diamond) {
            Model.levelModel.buyProps.push(this.cfg.id);
            Model.diamondModel.diamond = Model.diamondModel.diamond - this.cfg.price;
            var loc1 = this.parent.parent;
            if (loc1) {
                loc1.updateInfo();
            }
        }
        return;
    };
    return ShopItem;
}(Elements));
__reflect(ShopItem.prototype, "ShopItem");
//# sourceMappingURL=ShopItem.js.map