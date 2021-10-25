class ShopItem extends Elements {

    public buy_btn: egret.Bitmap;

    public buy_gray: egret.Bitmap;

    public hasBuy: egret.Bitmap;

    public nameLabel: egret.TextField;

    public descLabel: egret.TextField;

    public moneyLabel: egret.BitmapText;

    public moneyLabel2: egret.BitmapText;

    public cfg: PropCfg;

    public constructor() {
        super();
        this.initItem();
        return;
    }

    public setData(arg1: PropCfg): void {
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
    }

    public updateInfo(): void {
        let loc1 = Model.levelModel.buyProps;
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
    }

    public initItem(): void {
        this.buy_btn = UI.addPic("res.buy_btn", true, this, 360, 0);
        UI.addClickAction(this, this.buy_btn, this.onBuyBtnTouch);
        this.buy_gray = UI.addPic("res.buy_gray", true, this, 360, 0);
        this.hasBuy = UI.addPic("hasBuy", true, this, 200, 0);
        // com.popchan.debug.Debug.debugToBrowser("初始化文本之前");
        this.nameLabel = UI.addText(this, "", true, "left", 10, -45)
        this.descLabel = UI.addText(this, "", true, "left", 10, -10);
        // com.popchan.debug.Debug.debugToBrowser("初始化文本之后");
        this.moneyLabel = UI.addBitText(this, "", "info_fnt", false, 370, 0);
        this.moneyLabel.textAlign = "left";
        this.moneyLabel2 = UI.addBitText(this, "", "info_fnt", false, 370, 0);
        this.moneyLabel2.textAlign = "left";

        return;
    }

    public updateGold(): void {
        return;
    }



    public onBuyBtnTouch(arg1: egret.Event): void {
        SoundCtrl.getInstance().playmusic("anniu");
        if (this.cfg.price <= Model.diamondModel.diamond) {
            Model.levelModel.buyProps.push(this.cfg.id);
            Model.diamondModel.diamond = Model.diamondModel.diamond - this.cfg.price;
            let loc1 = this.parent.parent as ShopLayer;
            if (loc1) {
                loc1.updateInfo();
            }
        }
        return;
    }

}
