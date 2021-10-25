class BitmapFontText extends egret.Bitmap
{
    private _font:egret.BitmapFont;
    public _text:string;
    private _orgBitmapData:egret.BitmapData;

    public constructor(param1:egret.BitmapFont)
    {
        super()
        this._font = param1;
        return;
    }// end function

    public gettext() : string
    {
        return this._text;
    }// end function

    public settext(param1:string) : void
    {
        this._text = param1;
        //bitmapData = this._font.translate(param1);
        //smoothing = true;
        //width = bitmapData.width;
        return null;
    }// end function

    public colorTransform(param1:ColorTransform) : void
    {
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
    }// end function

    public dispose() : void
    {
        if (this._orgBitmapData)
        {
            //this.this._orgBitmapData.dispose();
            this._orgBitmapData = null;
        }
        //bitmapData.dispose();
        return;
    }// end function

}