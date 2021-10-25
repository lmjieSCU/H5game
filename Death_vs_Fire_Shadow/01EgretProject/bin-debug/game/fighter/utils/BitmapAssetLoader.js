var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BitmapAssetLoader = (function () {
    function BitmapAssetLoader() {
        //super()
        this._cacheObj = {};
        return;
    } // end function
    BitmapAssetLoader.prototype.getBitmap = function (param1) {
        var _loc_2 = this._cacheObj[param1];
        if (_loc_2 == null) {
            return null;
        }
        return new egret.Bitmap(_loc_2);
    }; // end function
    BitmapAssetLoader.prototype.loadQueue = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = null; }
        this._successBack = param2;
        this._processBack = param3;
        this._urls = param1.concat();
        this._queueLength = param1.length;
        this.loadNext();
        return;
    }; // end function
    BitmapAssetLoader.prototype.load = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = null; }
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
    }; // end function
    BitmapAssetLoader.prototype.cacheBitmap = function (param1, param2) {
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
    }; // end function
    BitmapAssetLoader.prototype.loadNext = function () {
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
    }; // end function
    return BitmapAssetLoader;
}());
__reflect(BitmapAssetLoader.prototype, "BitmapAssetLoader");
//# sourceMappingURL=BitmapAssetLoader.js.map