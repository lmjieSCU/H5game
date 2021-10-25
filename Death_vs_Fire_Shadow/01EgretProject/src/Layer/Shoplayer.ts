class ShopLayer extends Scene{
    public static instance : ShopLayer;
    public _nav:Array<egret.Bitmap> = [];//选项选中变亮
    public _navButton:Array<egret.Bitmap> = [];//选项按钮
    public _goods:egret.DisplayObjectContainer;//商品容器
    public _goodsScrollView:egret.ScrollView;//商品滑动
    public _good:Array<egret.Bitmap> = [];//商品数组
    public _choose:Array<egret.Bitmap> = [];//商品选中变亮
    public _discount:egret.Bitmap;//折扣图
    public _purchase:egret.Bitmap;
    public _gx:number = UI.WINSIZE_W / 2-422;
    public _gy:number = UI.WINSIZE_H / 2-65;
    public _dx:number = UI.WINSIZE_W / 2-501;
    public _dy:number = UI.WINSIZE_H / 2-110;
    public _cx:Array<number> = [UI.WINSIZE_W / 2-424];
    public _cy:Array<number> = [UI.WINSIZE_H / 2-71];
    public static _gJuge:number;//上一个点击的商品
    public static _gFlag:boolean = true;//是否第一次点击商品
    public _freeHome:egret.DisplayObjectContainer;
    public _free:Array<egret.Bitmap> = [];
    public _freeBtn:Array<egret.Bitmap> = [];
    public _freeShdow:Array<egret.Bitmap> = [];
    public _freeBtnShdow:Array<egret.Bitmap> = [];
    public _arrowhead:Array<egret.Bitmap> = [];
    public _trade:Array<egret.Bitmap> = [];
    public _tradeBtn:Array<egret.Bitmap> = [];
    public _goldHome:egret.DisplayObjectContainer;
    public _gold:Array<egret.Bitmap> = [];
    public _diamondHome:egret.DisplayObjectContainer;
    public _diamond:Array<egret.Bitmap> = [];
    public _getBtn:Array<egret.Bitmap> = [];

    public constructor(){
        super();
    }

    public onEnter(){
        ShopLayer.instance = this;

        //背景
        UI.addPic(this, "assignment_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);

     
        //---------------------------------------------------------------------------------------超值礼包
        this._goods = new egret.DisplayObjectContainer();
        this.addChild(this._goods);
        for(let i = 0; i < 10; i++){
            if(i % 2 == 0){
                if(i > 1){
                    this._cx[i] = this._cx[i-2]+253;
                }
                this._cy[i] = this._cy[0];
            }else{
                this._cx[i] = this._cx[i-1];
                this._cy[i] = UI.WINSIZE_H / 2+94;
            }
            this._good[i] = UI.addBtn(this._goods, "shop_buybox_png", this._gx, this._gy, true, function(arg){//购买钻石按钮
                if(ShopLayer._gFlag == false){
                    ShopLayer.instance._choose[ShopLayer._gJuge].visible = false;
                }
                ShopLayer.instance._choose[i] = UI.addPic(ShopLayer.instance._goods, "shop_buybox_shadow_png", ShopLayer.instance._cx[i], ShopLayer.instance._cy[i], true);
                ShopLayer._gJuge = i;
                ShopLayer._gFlag = false;
            });
            this._discount = UI.addPic(this._goods, "shop_stripe_png", this._dx, this._dy, true);
            if(i % 2 == 0){
                this._gy = UI.WINSIZE_H / 2+100;
                this._dy = UI.WINSIZE_H / 2+53;
            }else{
                this._gx += 253;
                this._gy = UI.WINSIZE_H / 2-65;
                this._dx += 253;
                this._dy = UI.WINSIZE_H / 2-110;
            }
        }
        this._goodsScrollView = new egret.ScrollView();
        this._goodsScrollView.setContent(this._goods);
        this._goodsScrollView.width = UI.WINSIZE_W - 200;
        this._goodsScrollView.height = UI.WINSIZE_H - 50;
        this._goodsScrollView.x = UI.WINSIZE_W / 2+120;
        this._goodsScrollView.y = UI.WINSIZE_H / 2-30;
        this._goodsScrollView.anchorOffsetX = this._goodsScrollView.width / 2;
        this._goodsScrollView.anchorOffsetY = this._goodsScrollView.height / 2;
        this.addChild(this._goodsScrollView);
        this._goodsScrollView.verticalScrollPolicy = "off";
        this._goodsScrollView.horizontalScrollPolicy = "on";
        this._purchase = UI.addBtn(this, "shop_button_buy_png", UI.WINSIZE_W-130, UI.WINSIZE_H / 2+197, true,function(arg){//购买按钮

        });

        //---------------------------------------------------------------------------------------金币兑换
        this._goldHome = new egret.DisplayObjectContainer();
        this.addChild(this._goldHome);
        this._goldHome.visible = false;
        this._gold[0] = UI.addPic(this._goldHome, "shop_packcoin_free_png", UI.WINSIZE_W / 2-335, UI.WINSIZE_H / 2-143);
        this._getBtn[0] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2-200, UI.WINSIZE_H / 2, true,function(arg){//购买按钮

        });
        this._gold[1] = UI.addPic(this._goldHome, "shop_packcoin_png", UI.WINSIZE_W / 2-53, UI.WINSIZE_H / 2-143);
        this._getBtn[1] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2+85, UI.WINSIZE_H / 2, true,function(arg){//购买按钮

        });
        this._gold[2] = UI.addPic(this._goldHome, "shop_packcoin2_png", UI.WINSIZE_W / 2+228, UI.WINSIZE_H / 2-143);
        this._getBtn[2] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2+365, UI.WINSIZE_H / 2, true,function(arg){//购买按钮

        });
        this._gold[3] = UI.addPic(this._goldHome, "shop_packcoin_ads_png", UI.WINSIZE_W / 2-335, UI.WINSIZE_H / 2+30);
        this._getBtn[3] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2-200, UI.WINSIZE_H / 2+178, true,function(arg){//购买按钮

        });
        this._gold[4] = UI.addPic(this._goldHome, "shop_packcoin3_png", UI.WINSIZE_W / 2-53, UI.WINSIZE_H / 2+30);
        this._getBtn[4] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2+85, UI.WINSIZE_H / 2+178, true,function(arg){//购买按钮

        });
        this._gold[5] = UI.addPic(this._goldHome, "shop_packcoin4_png", UI.WINSIZE_W / 2+228, UI.WINSIZE_H / 2+30);
        this._getBtn[5] = UI.addBtn(this._goldHome, "shop_button_buy_png", UI.WINSIZE_W / 2+365, UI.WINSIZE_H / 2+178, true,function(arg){//购买按钮

        });

        //---------------------------------------------------------------------------------------钻石兑换
        this._diamondHome = new egret.DisplayObjectContainer();
        this.addChild(this._diamondHome);
        this._diamondHome.visible = false;
        this._diamond[0] = UI.addPic(this._diamondHome, "shop_packgem_free_png", UI.WINSIZE_W / 2-335, UI.WINSIZE_H / 2-143);
        this._getBtn[6] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2-200, UI.WINSIZE_H / 2, true,function(arg){//购买按钮

        });
        this._diamond[1] = UI.addPic(this._diamondHome, "shop_packgem1_png", UI.WINSIZE_W / 2-53, UI.WINSIZE_H / 2-143);
        this._getBtn[7] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2+85, UI.WINSIZE_H / 2, true,function(arg){//购买按钮

        });
        this._gold[2] = UI.addPic(this._diamondHome, "shop_packgem2_png", UI.WINSIZE_W / 2+228, UI.WINSIZE_H / 2-143);
        this._getBtn[8] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2+365, UI.WINSIZE_H / 2, true,function(arg){//购买按钮

        });
        this._diamond[3] = UI.addPic(this._diamondHome, "shop_pkgem_ads_png", UI.WINSIZE_W / 2-335, UI.WINSIZE_H / 2+30);
        this._getBtn[9] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2-200, UI.WINSIZE_H / 2+178, true,function(arg){//购买按钮

        });
        this._diamond[4] = UI.addPic(this._diamondHome, "shop_packgem3_png", UI.WINSIZE_W / 2-53, UI.WINSIZE_H / 2+30);
        this._getBtn[10] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2+85, UI.WINSIZE_H / 2+178, true,function(arg){//购买按钮

        });
        this._diamond[5] = UI.addPic(this._diamondHome, "shop_packgem4_png", UI.WINSIZE_W / 2+228, UI.WINSIZE_H / 2+30);
        this._getBtn[11] = UI.addBtn(this._diamondHome, "shop_button_buy_png", UI.WINSIZE_W / 2+365, UI.WINSIZE_H / 2+178, true,function(arg){//购买按钮

        });


        //---------------------------------------------------------------------------------------免费领取
        this._freeHome = new egret.DisplayObjectContainer();
        this.addChild(this._freeHome);
        UI.addPic(this._freeHome, "free_titlefree_png", UI.WINSIZE_W / 2+65, UI.WINSIZE_H / 2-140, true);//免费领取标题
        UI.addPic(this._freeHome, "free_titledaily_png", UI.WINSIZE_W / 2+65, UI.WINSIZE_H / 2+52, true);//每日交易标题
        this._freeHome.visible = false;
        this._free[0] = UI.addPic(this._freeHome, "free_box01_png", UI.WINSIZE_W / 2-210, UI.WINSIZE_H / 2-43, true);
        this._freeBtn[0] =  UI.addBtn(this._freeHome, "free_button_get_png", UI.WINSIZE_W / 2-210, UI.WINSIZE_H / 2+7, true,function(arg){//领取按钮

        });
        this._arrowhead[0] = UI.addPic(this._freeHome, "free_arrow_png", UI.WINSIZE_W / 2-63, UI.WINSIZE_H / 2-43, true);
        this._freeShdow[1] = UI.addPic(this._freeHome, "free_box02_shadow_png", UI.WINSIZE_W / 2+82, UI.WINSIZE_H / 2-43, true);
        this._freeBtnShdow[1] = UI.addPic(this._freeHome, "free_button_getshadow_png", UI.WINSIZE_W / 2+82, UI.WINSIZE_H / 2+7, true);
        this._arrowhead[1] = UI.addPic(this._freeHome, "free_arrow_png", UI.WINSIZE_W / 2+225, UI.WINSIZE_H / 2-43, true);
        this._freeShdow[2] = UI.addPic(this._freeHome, "free_box03_shadow_png", UI.WINSIZE_W / 2+370, UI.WINSIZE_H / 2-43, true);
        this._freeBtnShdow[2] = UI.addPic(this._freeHome, "free_button_getshadow_png", UI.WINSIZE_W / 2+370, UI.WINSIZE_H / 2+7, true);

        this._trade[0] = UI.addPic(this._freeHome, "free_box01_png", UI.WINSIZE_W / 2-210, UI.WINSIZE_H / 2+150, true);
        this._tradeBtn[0] =  UI.addBtn(this._freeHome, "free_button_get_png", UI.WINSIZE_W / 2-210, UI.WINSIZE_H / 2+201, true,function(arg){//领取按钮

        });
        this._trade[1] = UI.addPic(this._freeHome, "free_box02_png", UI.WINSIZE_W / 2+82, UI.WINSIZE_H / 2+150, true);
        this._tradeBtn[1] =  UI.addBtn(this._freeHome, "free_button_moneyget_png", UI.WINSIZE_W / 2+82, UI.WINSIZE_H / 2+207, true,function(arg){//领取按钮

        });
        this._trade[2] = UI.addPic(this._freeHome, "free_box03_png", UI.WINSIZE_W / 2+370, UI.WINSIZE_H / 2+150, true);
        this._tradeBtn[2] =  UI.addBtn(this._freeHome, "free_button_goldget_png", UI.WINSIZE_W / 2+370, UI.WINSIZE_H / 2+207, true,function(arg){//领取按钮

        });
        
        //侧边导航
        UI.addPic(this, "shop_leftbox_png", 83, UI.WINSIZE_H / 2+25, true);
        this._nav[0] = UI.addPic(this, "shop_leftbox_shadow_png", 79, UI.WINSIZE_H / 2-104, true);
        this._nav[1] = UI.addPic(this, "shop_leftbox_shadow_png", 79, UI.WINSIZE_H / 2-39, true);
        this._nav[2] = UI.addPic(this, "shop_leftbox_shadow_png", 79, UI.WINSIZE_H / 2+26, true);
        this._nav[3] = UI.addPic(this, "shop_leftbox_shadow_png", 79, UI.WINSIZE_H / 2+93, true);
        this._nav[1].visible = false;
        this._nav[2].visible = false;
        this._nav[3].visible = false;
        this._navButton[0] = UI.addBtn(this, "shop_bag_shadow_png", 77, UI.WINSIZE_H / 2-104, true, function(arg){
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
        this._navButton[1] = UI.addBtn(this, "shop_goldExchange_shadow_png", 77, UI.WINSIZE_H / 2-39, true, function(arg){
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
        this._navButton[2] = UI.addBtn(this, "shop_diamondsExchange_shadow_png", 77, UI.WINSIZE_H / 2+26, true, function(arg){
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
        this._navButton[3] = UI.addBtn(this, "shop_freeget_shadow_png", 77, UI.WINSIZE_H / 2+93, true, function(arg){
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
        let goldLayer: GoldDiamondLayer =  new GoldDiamondLayer(this);
        this.addChild(goldLayer);
        goldLayer.addReturn(function(arg){
             SceneManager.Instance.changeScene(new TownScene);
        })
    }

    public onExit(){

    }
}