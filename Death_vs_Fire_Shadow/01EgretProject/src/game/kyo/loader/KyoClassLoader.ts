class KyoClassLoader extends egret.EventDispatcher
{
    private _classes:Object;
    private _urls:any;
    private _defaultId:string;
    private _loadedAmount:number;
    private _loadLength:number;
   // private _directory:Dictionary;
    private _loading:boolean;

    public constructor()
    {
        super()
        this._classes = {};
     //   this._directory = new Dictionary();
        return;
    }// end function

    public getClass(param1:string, param2:string = null)
    {
        var className = param1;
        var swf = param2;
        swf = swf || this._defaultId;
        var app = this._classes[swf];
        if (!app)
        {
            throw new Error(swf + "未加载!");
        }
        try
        {
            return app.getDefinition(className);
        }
        catch (e)
        {
            throw new Error("在 " + swf + " 中找不到 " + className + " 的定义!");
            //trace("KyoClassLoader ::", e);
        }
        
    }// end function

    public get loadedAmount()
    {
        return this._loadedAmount;
    }// end function

    public load(param1:Object) : void
    {
        if (this._loading)
        {
            throw new Error("不可以在没完成加载时继续调用此方法!");
        }
        if (param1 instanceof String)
        {
            this._urls = [param1];
        }
        if (param1 instanceof Array)
        {
            this._urls = param1;
        }
        this._loadLength = this._urls.length;
        this._loadedAmount = 0;
        this.loadNext();
        this._loading = true;
        return;
    }// end function

    private  loadNext() : boolean
    {
        
        return true;
    }// end function

    private removeLoader() : void
    {
        return;
    }// end function

    private loadComplete() : void
    {
        return;
    }// end function

    private loadProgress() : void
    {
        return;
    }// end function

    private  loadError() : void
    {
        return;
    }// end function

    private checkComplete() : void
    {
        return;
    }// end function

}