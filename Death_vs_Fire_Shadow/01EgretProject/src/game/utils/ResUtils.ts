class ResUtils extends Object
{
    public common_ui:any;
    public fight:any;
    public gameover:any;
    public howtoplay:any;
    public loading:any;
    public select:any;
    public setting:any;
    public title:any;
    //private _swfPool: Dictionary;
    private _initBack:Function;
    private _initError:Function;
    private _inited:boolean;
    private _initing:boolean;
    private static _i:ResUtils;

    public constructor()
    {
        super();
        // this.common_ui = common_ui_swf$a3bf7921c1ba01403bf4dfe7a7fe5c9e1164926403;
        // this.fight = fight_swf$9ccdf9d2a37e1fb6b6f0df6717a547941873914523;
        // this.gameover = gameover_swf$284eb874265c7eb53b81fbe601ecf04c-712060857;
        // this.howtoplay = howtoplay_swf$d10d084cfcec7c2d33e8c028a67fd274-539314070;
        // this.loading = loading_swf$7f39eada5ad885643203a9108b753eb3-531490057;
        // this.select = select_swf$f2bee00124a9f488c4c58f35b18af2d9-2023338167;
        // this.setting = setting_swf$4adf08ab3774d57fd0d989297cc4a7d7-103244389;
        // this.title = title_swf$528f79a0143139adcd9aaf069b4879b7-1105035181;
        return;
    }// end function

    public initalize(param1:Function = null, param2:Function = null) : void
    {
        var _loc_8 = null;
        var _loc_3 = null;
        var _loc_7 = null;
        if (this._initing)
        {
            //throw new this.error("正在初始化过程中，不能再次初始化！");
        }
        if (this._inited)
        {
            if (param1 != null)
            {
                param1();
            }
            return;
        }
        this._inited = true;
        this._initing = true;
        //this._swfPool = new Dictionary();
        this._initBack = param1;
        this._initError = param2;
        //var _loc_5 = this.describeType(this);
        //var _loc_4 = {};
        // for each (_loc_6 in _loc_5.variable)
        // {
            
        //     _loc_8 = (_loc_6).@name;
        //     _loc_3 = this[_loc_8];
        //     _loc_7 = new InsSwf(_loc_3);
        //     _loc_7.this.ready = swfReadyBack;
        //     _loc_7.this.error = swfErrorBack;
        //     this._swfPool[_loc_3] = _loc_7;
        // }
        return;
    }// end function

    private swfReadyBack(param1:InsSwf) : void
    {
        // for each (_loc_2 in this._swfPool)
        // {
            
        //     if (!_loc_2.this.isReady)
        //     {
        //         return;
        //     }
        // }
        // finish();
        return;
    }// end function

    private swfErrorBack(param1:string) : void
    {
        if (this._initError != null)
        {
            this._initError();
        }
        return;
    }// end function

    private finish() : void
    {
        this._initing = false;
        if (this._initBack != null)
        {
            this._initBack();
            this._initBack = null;
        }
        return;
    }// end function

    public createDisplayObject(param1:any, param2:string)
    {
        var _loc_3 = this.getItemClass(param1, param2);
        if (_loc_3)
        {
            return new _loc_3;
        }
        return;
    }// end function

    public createBitmapData(param1:any, param2:string, param3:number, param4:number) : egret.BitmapData
    {
        var _loc_5 = this.getItemClass(param1, param2);
        if (!this.getItemClass(param1, param2))
        {
            return null;
        }
        var _loc_6 = new _loc_5(param3, param4);
        return new _loc_5(param3, param4);
    }// end function

    public  getItemClass(param1:any, param2:string) : any
    {
        // if (!this._swfPool)
        // {
        //     throw new this.error("未进行初始化！");
        // }
        // var _loc_3:* = this._swfPool[param1];
        // if (!_loc_3)
        // {
        //     throw new this.error("swf is undefined!");
        // }
        // return _loc_3.getClass(param2);
    }// end function

    public static get I():ResUtils
    {
        if (!this._i)
        {
            this._i = new ResUtils;
        }
        return this._i;
    }// end function


}

class InsSwf
{
    // private _swf:Object;
    // private _domain:ApplicationDomain;
    // public isReady:Boolean;
    // public ready:Function;
    // public error:Function;

    // function InsSwf(param1:Class)
    // {
    //     this._swf = new param1;
    //     var _loc_2:* = this._swf.movieClipData;
    //     if (!_loc_2)
    //     {
    //         this.this.error("未发现swf的movieClipData!");
    //         throw new this.error("未发现swf的movieClipData!");
    //     }
    //     var _loc_3:* = new Loader();
    //     _loc_3.contentLoaderInfo.addEventListener("complete", loadComplete, false, 0, true);
    //     var _loc_4:* = new LoaderContext(false, ApplicationDomain.currentDomain);
    //     _loc_4.allowCodeImport = true;
    //     _loc_3.loadBytes(_loc_2, _loc_4);
    //     return;
    // }// end function

    // public function getClass(param1:String) : Class
    // {
    //     return this._domain.getDefinition(param1) as Class;
    // }// end function

    // private function loadComplete(event:Event) : void
    // {
    //     var _loc_2:* = event.currentTarget as LoaderInfo;
    //     this._domain = _loc_2.applicationDomain;
    //     this.isReady = true;
    //     if (this.ready != null)
    //     {
    //         this.this.ready(this);
    //         this.ready = null;
    //     }
    //     return;
    // }// end function

}