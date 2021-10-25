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
var BitmapFontLoader = (function (_super) {
    __extends(BitmapFontLoader, _super);
    function BitmapFontLoader() {
        var _this = _super.call(this) || this;
        return _this;
    } // end function
    BitmapFontLoader.prototype.loadFonts = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = null; }
        this._loadBack = param2;
        this._loadProcess = param3;
        this._urls = param1;
        this._loadAmount = param1.length;
        this._fontObj = {};
        this.loadNext();
        return;
    }; // end function
    BitmapFontLoader.prototype.getFont = function (param1) {
        return this._fontObj[param1];
    }; // end function
    BitmapFontLoader.prototype.loadComplete = function () {
        if (this._loadBack != null) {
            this._loadBack();
            this._loadBack = null;
        }
        this._loadProcess = null;
        return;
    }; // end function
    BitmapFontLoader.prototype.loadNext = function () {
        // var url:string;
        // var loadXMLFin:Function;
        // var loadXMLFail:Function;
        // var cur:number;
        // loadXMLFin = function (param1:String) : void
        // {
        //     var _loc_2:* = new XML(param1);
        //     var _loc_3:* = _loc_2.pages.page.@file;
        //     var _loc_4:* = url.substr(0, (url.lastIndexOf("/") + 1));
        //     var _loc_5:* = url.substr(0, (url.lastIndexOf("/") + 1)) + _loc_3;
        //     loadBitmapData(_loc_5, _loc_2);
        //     return;
        // }// end function
        // ;
        // loadXMLFail = function () : void
        // {
        //     trace("BitmapFontLoader.loadXMLFail::" + url);
        //     loadNext();
        //     return;
        // }// end function
        // ;
        // if (this._loadProcess != null)
        // {
        //     cur = this._loadAmount - this._urls.length;
        //     this._loadProcess(cur / this._loadAmount);
        // }
        // if (this._urls.length < 1)
        // {
        //     this.loadComplete();
        //     return;
        // }
        // url = this._urls.shift();
        // KyoURLoader.load(url, loadXMLFin, loadXMLFail);
        return;
    }; // end function
    BitmapFontLoader.prototype.loadBitmapData = function (param1, param2) {
        // var fontid:String;
        // var loadBpComplete:Function;
        // var loadBpFail:Function;
        // var bpurl = param1;
        // var xml = param2;
        // loadBpComplete = function (param1:Bitmap) : void
        // {
        //     this._fontObj[fontid] = new BitmapFont(xml, param1.bitmapData);
        //     loadNext();
        //     return;
        // }// end function
        // ;
        // loadBpFail = function (event:Event) : void
        // {
        //     trace("BitmapFontLoader.loadBpFail::" + bpurl);
        //     loadNext();
        //     return;
        // }// end function
        // ;
        // fontid = xml.info.@face;
        // var loader:* = new BitmapLoader();
        // loader.load(bpurl, loadBpComplete, loadBpFail);
        return;
    }; // end function
    return BitmapFontLoader;
}(egret.DisplayObject));
__reflect(BitmapFontLoader.prototype, "BitmapFontLoader");
//# sourceMappingURL=BitmapFontLoader.js.map