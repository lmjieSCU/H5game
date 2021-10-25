class SetBtn extends egret.Sprite
{
    public optionKey:string;
    public onSelect:Function;
    private _label:BitmapFontText;
    private _options:any;
    private _optionIndex:number;
    private _optionTxt:BitmapFontText;
    private _prevArrow:zmovie.ZMovieClip;
    private _nextArrow:zmovie.ZMovieClip;
    private _line:SetBtnLine;
    private _cn:string;

    private buttonMode:any;

    public constructor(param1:string, param2:string)
    {
        super()
        this.buttonMode = true;
        this._label = new BitmapFontText(AssetManager.I.getFont("font1"));
        this._label._text = param1;
        this._cn = param2;
        this._line = new SetBtnLine();
        this._line.y = this._label.height;
        this._line.hide();
        GameScene.instance.addChild(this._line);
        GameScene.instance.addChild(this._label);
        return;
    }// end function

    public get label() : string
    {
        return this._label._text;
    }// end function

    public destory() : void
    {
        if (this._label)
        {
            this._label.dispose();
        }
        return;
    }// end function

    public hover() : void
    {
        this.updateLine();
        GameScene.instance.addChild(this._line);
        return;
    }// end function

    private updateLine() : void
    {
        var _loc_1 = this.getOption();
        if (_loc_1)
        {
            this._line.show(UI.WINSIZE_W, this._cn + " - " + _loc_1.cn);
        }
        else
        {
            this._line.show(UI.WINSIZE_W, this._cn);
        }
        return;
    }// end function

    public hoverOut() : void
    {
        this._line.hide();
        try
        {
            GameScene.instance.removeChild(this._line);
        }
        catch (e)
        {
        }
        return;
    }// end function

    public select() : void
    {
        var _loc_1 = new SetBtnEvent("SELECT");
        _loc_1.selectedLabel = this.label;
        //dispatchEvent(_loc_1);
        //SoundCtrl.I.sndConfrim();
        return;
    }// end function

    public setOption(param1:any) : void
    {
        this._options = param1;
        this._prevArrow = new zmovie.ZMovieClip(["score_num_json"],RES.getRes("fightui_json"),"root");
        this._nextArrow = new zmovie.ZMovieClip(["score_num_json"],RES.getRes("fightui_json"),"root");
        this._prevArrow.name = "prevArrow";
        this._nextArrow.name = "nextArrow";
        this._nextArrow.scaleX = -1;
        var _loc_2 = 17;
        this._nextArrow.y = 17;
        this._prevArrow.y = _loc_2;
        this._optionTxt = new BitmapFontText(AssetManager.I.getFont("font1"));
        GameScene.instance.addChild(this._prevArrow);
        GameScene.instance.addChild(this._nextArrow);
        GameScene.instance.addChild(this._optionTxt);
        this.updateOption();
        return;
    }// end function

    public getOption()
    {
        if (!this._options)
        {
            return null;
        }
        return this._options[this._optionIndex];
    }// end function

    public nextOption() : void
    {
        if (!this._options)
        {
            return;
        }
        var _loc_1 = this._optionIndex + 1;
        if (_loc_1 > (this._options.length - 1))
        {
            _loc_1 = 0;
        }
        this.changeOption(_loc_1);
        //SoundCtrl.I.sndSelect();
        return;
    }// end function

    public prevOption() : void
    {
        if (!this._options)
        {
            return;
        }
        var _loc_1 = this._optionIndex - 1;
        if (_loc_1 < 0)
        {
            _loc_1 = this._options.length - 1;
        }
        this.changeOption(_loc_1);
        //SoundCtrl.I.sndSelect();
        return;
    }// end function

    public setOptionByValue(param1:Object) : void
    {
        var _loc_3 = 0;
        var _loc_2 = null;
        while (_loc_3 < this._options.length)
        {
            
            _loc_2 = this._options[_loc_3];
            if (_loc_2.value == param1)
            {
                this.changeOption(_loc_3, false);
                return;
            }
            _loc_3++;
        }
        return;
    }// end function

    private changeOption(param1:number, param2:boolean = true) : void
    {
        var _loc_3 = null;
        var _loc_4 = null;
        this._optionIndex = param1;
        this.updateOption();
        this.updateLine();
        if (param2)
        {
            _loc_3 = new SetBtnEvent("OPTION_CHANGE");
            _loc_4 = this.getOption();
            if (_loc_4)
            {
                _loc_3.this.optionKey = this.optionKey;
                _loc_3.optionValue = _loc_4.value;
                dispatchEvent(_loc_3);
            }
        }
        return;
    }// end function

    private updateOption() : void
    {
        var _loc_1 = this.getOption().label;
        this._optionTxt._text = _loc_1;
        this._prevArrow.x = this._label.x + this._label.width + 50;
        this._optionTxt.x = this._prevArrow.x + 10;
        this._nextArrow.x = this._optionTxt.x + this._optionTxt.width + 10;
        return;
    }// end function

}