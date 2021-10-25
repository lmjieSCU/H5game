class BitmapFontLoader extends egret.DisplayObject
{
    private _urls:any;
    private _fontObj:Object;
    private _loadAmount:number;
    private _loadBack:Function;
    private _loadProcess:Function;

    public constructor()
    {
        super()
        return;
    }// end function

    public loadFonts(param1:any, param2:Function = null, param3:Function = null) : void
    {
        this._loadBack = param2;
        this._loadProcess = param3;
        this._urls = param1;
        this._loadAmount = param1.length;
        this._fontObj = {};
        this.loadNext();
        return;
    }// end function

    public getFont(param1:string) : egret.BitmapFont
    {
        return this._fontObj[param1];
    }// end function

    private loadComplete() : void
    {
        if (this._loadBack != null)
        {
            this._loadBack();
            this._loadBack = null;
        }
        this._loadProcess = null;
        return;
    }// end function

    private loadNext() : void
    {
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
    }// end function

    private loadBitmapData(param1:string, param2:any) : void
    {
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
    }// end function

}