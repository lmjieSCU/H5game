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
var BitmapFontText = (function (_super) {
    __extends(BitmapFontText, _super);
    function BitmapFontText(param1) {
        var _this = _super.call(this) || this;
        _this._font = param1;
        return _this;
    } // end function
    BitmapFontText.prototype.gettext = function () {
        return this._text;
    }; // end function
    BitmapFontText.prototype.settext = function (param1) {
        this._text = param1;
        //bitmapData = this._font.translate(param1);
        //smoothing = true;
        //width = bitmapData.width;
        return null;
    }; // end function
    BitmapFontText.prototype.colorTransform = function (param1) {
        // if (param1 == null)
        // {
        //     if (this._orgBitmapData)
        //     {
        //         //bitmapData.dispose();
        //         //bitmapData = this.this._orgBitmapData.clone();
        //     }
        //     return;
        // }
        // if (!this.this._orgBitmapData)
        // {
        //     this.this._orgBitmapData = bitmapData.clone();
        // }
        //bitmapData.colorTransform(new Rectangle(0, 0, bitmapData.width, bitmapData.height), param1);
        return;
    }; // end function
    BitmapFontText.prototype.dispose = function () {
        if (this._orgBitmapData) {
            //this.this._orgBitmapData.dispose();
            this._orgBitmapData = null;
        }
        //bitmapData.dispose();
        return;
    }; // end function
    return BitmapFontText;
}(egret.Bitmap));
__reflect(BitmapFontText.prototype, "BitmapFontText");
//# sourceMappingURL=BitmapFontText.js.map