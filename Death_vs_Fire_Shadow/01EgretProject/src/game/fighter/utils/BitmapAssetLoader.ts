class BitmapAssetLoader
{
    private _queueLength:number;
    private _urls:any;
    private _cacheObj:Object;
    private _successBack:Function;
    private _processBack:Function;

    public constructor()
    {
        //super()
        this._cacheObj = {};
        return;
    }// end function

    public getBitmap(param1) : egret.Bitmap
    {
        var _loc_2 = this._cacheObj[param1];
        if (_loc_2 == null)
        {
            return null;
        }
        return new egret.Bitmap(_loc_2);
    }// end function

    public  loadQueue(param1:any, param2:Function, param3:Function = null) : void
    {
        this._successBack = param2;
        this._processBack = param3;
        this._urls = param1.concat();
        this._queueLength = param1.length;
        this.loadNext();
        return;
    }// end function

    private load(param1:string, param2:Function = null, param3:Function = null) : void
    {
        // url = param1;
        // back = param2;
        // process = param3;
        // loadCom = function (event:Event) : void
        // {
        //     loader.contentLoaderInfo.removeEventListener("complete", loadCom);
        //     loader.contentLoaderInfo.removeEventListener("ioError", loadFail);
        //     loader.contentLoaderInfo.removeEventListener("progress", loadProcess);
        //     cacheBitmap(url, loader);
        //     if (back != null)
        //     {
        //         null.back();
        //     }
        //     return;
        // }// end function
        // ;
        // loadFail = function (event:IOErrorEvent) : void
        // {
        //     null.trace("BitmapAssetLoader.loadFail::", event);
        //     loader.contentLoaderInfo.removeEventListener("complete", loadCom);
        //     loader.contentLoaderInfo.removeEventListener("ioError", loadFail);
        //     loader.contentLoaderInfo.removeEventListener("progress", loadProcess);
        //     if (back != null)
        //     {
        //         null.back();
        //     }
        //     return;
        // }// end function
        // ;
        // loadProcess = function (event:ProgressEvent) : void
        // {
        //     if (process != null)
        //     {
        //         null.process(event.bytesLoaded / event.bytesTotal);
        //     }
        //     return;
        // }// end function
        // ;
        // var loader:* = new Loader();
        // loader.load(new URLRequest(url));
        // loader.contentLoaderInfo.addEventListener("complete", loadCom);
        // loader.contentLoaderInfo.addEventListener("ioError", loadFail);
        // loader.contentLoaderInfo.addEventListener("progress", loadProcess);
        return;
    }// end function

    private cacheBitmap(param1:string, param2:any) : void
    {
        // var _loc_3:* = null;
        // var _loc_4:* = null;
        // try
        // {
        //     _loc_3 = param2.content as Bitmap;
        // }
        // catch (e)
        // {
        //     this.trace("BitmapAssetLoader.cacheBitmap::", e);
        // }
        // if (_loc_3)
        // {
        //     try
        //     {
        //         _loc_4 = _loc_3.bitmapData;
        //     }
        //     catch (e)
        //     {
        //         this.trace("BitmapAssetLoader.cacheBitmap::", e);
        //     }
        // }
        // if (_loc_4)
        // {
        //     this._cacheObj[param1] = _loc_4;
        // }
        // return;
    }// end function

    private loadNext() : void
    {
        // loadProcess = function (param1:Number) : void
        // {
        //     var _loc_3:* = NaN;
        //     var _loc_2:* = NaN;
        //     if (this._processBack != null)
        //     {
        //         _loc_3 = this._queueLength - this._urls.length - 1 + param1;
        //         _loc_2 = _loc_3 / this._queueLength;
        //         null.this._processBack(_loc_2);
        //     }
        //     return;
        // }// end function
        // ;
        // if (this._urls.length < 1)
        // {
        //     if (this._successBack != null)
        //     {
        //         this.this._successBack();
        //         this._successBack = null;
        //     }
        //     return;
        // }
        // var url:* = this._urls.shift();
        // load(url, loadNext, loadProcess);
        return;
    }// end function

}