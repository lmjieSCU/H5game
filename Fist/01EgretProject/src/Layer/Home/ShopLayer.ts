class ShopLayer extends Scene {
    public constructor() {
        super();
    }

    public shopInfo: ShopInfo[] = [];
    public normalShop: egret.DisplayObjectContainer;
    public timeShop: egret.DisplayObjectContainer;
    public shopTimeInfo: ShopInfo[] = [];

    onEnter() {

        let head = UI.addPic(this, "Shop_head_png", 0, 0);
        let back = UI.addBtn(this, "Button_back_png", 0, 0, false, () => {
            Home.instace.changeLayer(this, new HomeLayer());
        })
        let bg: egret.Bitmap = UI.addPic(this, "Shop_box02_png", head.width/4*3, UI.WINSIZE_H/2, true);
        bg.anchorOffsetX = 0;

        this.initNormalShop(bg.x, UI.WINSIZE_H/3);
        this.initTimeShop();

        
        let reset: egret.Bitmap = UI.addBtn(this, "Shop_button_Reset_png", bg.x + bg.width, bg.y + bg.height/4, true, () => {
            this.normalShop.removeChildren();
            this.timeShop.removeChildren();
            this.shopInfo =  ShopData.getSkillList(true);
            this.initNormalShop(bg.x, UI.WINSIZE_H/3,this.normalShop.visible);
            this.initTimeShop(this.timeShop.visible);
        })
        reset.x -= reset.width;
        let pic: egret.Bitmap = UI.addPic(this, "Shop_pic_man_png", reset.x , reset.y - reset.height/2, true);
        pic.y -= pic.height/3*2;

        let normal: egret.Bitmap = UI.addPic(this, "Shop_button_goods_png", bg.x + bg.width/2, bg.y + bg.height/2, true);
        normal.y += normal.height/2;
        let time: egret.Bitmap = UI.addPic(this, "Shop_button_exchangesoff_png", normal.x + normal.width/2, bg.y + bg.height/2, true);
        time.y += time.height/2;
        time.x += time.width/2;
        UI.addClickAction(this, normal, () => {
            this.timeShop.$setVisible(false);
            this.normalShop.$setVisible(true);
            normal.$setTexture(RES.getRes('Shop_button_goods_png'));
            time.$setTexture(RES.getRes('Shop_button_exchangesoff_png'));
            time.y = bg.y + bg.height/2 + time.height/2;
            normal.y = bg.y + bg.height/2 + normal.height/2;
        })

        UI.addClickAction(this, time, () => {
            this.timeShop.$setVisible(true);
            this.normalShop.$setVisible(false);
            normal.$setTexture(RES.getRes('Shop_button_goodsoff_png'));
            time.$setTexture(RES.getRes('Shop_button_exchanges_png'));
            time.y = bg.y + bg.height/2 + time.height/2;
            normal.y = bg.y + bg.height/2 + normal.height/2;
        })
    }

    onExit() {}
    public initNormalShop(x: number, y: number, visible: boolean = true) {
        this.normalShop = new egret.DisplayObjectContainer();
        this.normalShop.x = x;
        this.normalShop.y = y;
        this.addChild(this.normalShop);
        this.shopInfo = ShopData.getSkillList();
        this.shopInfo.map((data,index) => {
            let shop = this.createShop(data, index);
            shop.x = 75 + 100*(index%3);
            shop.y = Math.floor(index/3)*150;
            this.normalShop.addChild(shop);
        })
        this.normalShop.$setVisible(visible);
    }

    public initTimeShop(visible: boolean = false) {
        this.timeShop = new egret.DisplayObjectContainer();
        this.timeShop.x = this.normalShop.x;
        this.timeShop.y = this.normalShop.y;
        this.addChild(this.timeShop);
        this.timeShop.$setVisible(visible);
        this.shopTimeInfo = ShopData.getTimeShop();

        if(this.shopTimeInfo) this.shopTimeInfo.map((data,index) => {
            let shop = this.createShop(data, index, 'time');
            shop.x = 75 + 100*index
            this.timeShop.addChild(shop);
        })
        else UI.addText(this.timeShop, "???????????????????????????", 0, 0);
    }

    public getPrice(price: number) {
        let money: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        let num: number[] = []
        while(price>0) {
            let i = price%10;
            price = (price-i)/10;
            num.unshift(i);
        }
        num.map((data, index) => {
            let pic: egret.Bitmap = UI.addPic(money, `Shop_number0${data}_png`, money.width + 2, 0);
            // pic.x = index*pic.width;
        })
        return money;
    }
    
    public createShop(data: ShopInfo, index: number, type: string = 'normal') {
        let shop = new egret.DisplayObjectContainer();
        let info: egret.Bitmap = UI.addPic(shop, `Shop_skill0${index+1}_png`, 0, 0, true);
        let btn = new egret.DisplayObjectContainer();
        let moneyBg: egret.Bitmap = UI.addPic(btn, `Shop_button${data.isShoping?'':'put'}_buy_png`, 0, info.y+info.height/2, true)
        let money = this.getPrice(data.payNum);
        money.anchorOffsetX = money.width;
        money.x = moneyBg.x + moneyBg.width*0.15;
        money.y = moneyBg.y - money.height/2;
        btn.addChild(money);
        shop.addChild(btn);
        if(data.isShoping)  
            UI.addClickAction(this, btn, () => {
                if((type == 'time' && !this.shopTimeInfo[index].isShoping) || (type == 'normal' && !this.shopInfo[index].isShoping)) {
                        console.log("?????????");
                        return
                    }
                //    if(PropData.getPorp(data.payId) < data.payNum) return
                //    PropData.setProp(data.payId, -data.payNum);
                let reward: Reward = {
                    type: data.shopId,
                    num: data.shopNum
                };
                console.log(reward);
                ShopData.cancelShop(index+7);
                (type == 'time')?this.shopTimeInfo[index].isShoping = false:this.shopInfo[index].isShoping = false;
                moneyBg.$setTexture(RES.getRes("Shop_buttonput_buy_png"));
                btn.touchEnabled = false;
            })
        return shop;
    }

    public reset() {

    }
}