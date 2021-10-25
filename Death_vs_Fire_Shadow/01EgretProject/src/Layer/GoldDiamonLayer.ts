class GoldDiamondLayer extends egret.DisplayObjectContainer implements egret.DisplayObject{
    public static instance : GoldDiamondLayer;
    public func: Function;
    public _parent : any;
    public constructor(param:any){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onEnter,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onExit,this);
        this._parent = param;
    }

    protected onEnter(){
        GoldDiamondLayer.instance = this;
        let xx =  UI.WINSIZE_W-380;
        let yy = 13;
        let pic2 = new egret.Bitmap(RES.getRes("home_head_png"));
        pic2.x = UI.WINSIZE_W;
        pic2.anchorOffsetX =  1068;
        this.addChild(pic2);

        let pic9 = new egret.Bitmap(RES.getRes("home_box_gold_png"));
        pic9.x = xx;
        pic9.y = yy
        this.addChild(pic9); 
        UI.addBtn(this, "home_button_add_png", xx+100, yy+1, false, function(arg){

        });

        let pic8 = new egret.Bitmap(RES.getRes("home_Diamonds_png"));
        pic8.x = xx-180;
        pic8.y = yy
        this.addChild(pic8); 
        UI.addBtn(this, "home_button_add_png", xx-180+100, yy+1, false, function(arg){

        });

        //
          //设置
        UI.addBtn(this, "home_button_install_png", UI.WINSIZE_W - 80, 8, false, function(arg){

        });

    }

    public addReturn(param:Function ){
        this.func = param;
        UI.addBtn(this, "public_return_png", 0, 0, false, function(arg){
            this.func.call(this._parent);
        });
    }

    protected onExit(){
        
    }
}