class EnergyBar extends egret.DisplayObject
{
    private _ui:zmovie.ZMovieClip;
    private _fighter:FighterMain;
    private _bar:InsBar;
    private _txt:InsTxt;
    private _renderFlash:boolean;
    private _renderFlashInt:number;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        this._ui = param1;
        this._bar = new InsBar(this._ui.getChildMovie("barmc").getChildMovie("bar"));
        this._txt = new InsTxt(this._ui.getChildMovie("txtmc"));
        this._ui.getChildMovie("barmc").getChildMovie("bar").gotoAndStop(1)
        return;
    }// end function

    public getui() : egret.DisplayObject
    {
        return this._ui;
    }// end function

    public destory() : void
    {
        this._fighter = null;
        return;
    }// end function

    public setFighter(param1:FighterMain) : void
    {
        this._fighter = param1;
        if (param1.data)
        {
            this._txt.setType(param1.data.comicType);
        }
        return;
    }// end function

    public setDirect(param1:number) : void
    {
        this._txt.setDirect(param1);
        return;
    }// end function

    public render() : void
    {
        this._bar.rate = this._fighter.energy / this._fighter.energyMax;
        if (this._fighter.energyOverLoad)
        {
            this._bar.overLoad();
            this._txt.overLoad();
        }
        else if (this._bar.rate < 0.3)
        {
            this._bar.flash();
            this._txt.flash();
        }
        else
        {
           this._bar.normal();
            this._txt.normal();
        }
        this._bar.render();
        this._txt.render();
        return;
    }// end function

}


class InsTxt extends egret.DisplayObject
{
    private _mc:zmovie.ZMovieClip;
    private _isOverLoad:boolean;
    private _isFlash:boolean;
    private _renderFlashInt:number;
    private _renderFlashFrame:number;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        this._mc = param1;
        return;
    }// end function

    public setDirect(param1:number) : void
    {
        this._mc.scaleX = param1 > 0 ? (1) : (-1);
        return;
    }// end function

    public setType(param1:number) : void
    {
        //switch(param1) branch count is:<1>[11, 24] default offset is:<33>;
        this._mc.gotoAndStop(1);
        //this._mc.gotoAndStop(2);
        return;
    }// end function

    public render() : void
    {
        if (this._isFlash)
        {
            this.renderFlash();
        }
        return;
    }// end function

    private renderFlash() : void
    {
        if (!this._mc.getChildMovie("mc"))
        {
            return;
        }
        (this._renderFlashInt + 1);
        if ((this._renderFlashInt + 1) > 2)
        {
            this._renderFlashInt = 0;
            this._mc.getChildMovie("mc").gotoAndStop(this._renderFlashFrame);
            this._renderFlashFrame = this._renderFlashFrame == 1 ? (2) : (1);
        }
        return;
    }// end function

    public normal() : void
    {
        if (!this._isOverLoad && !this._isFlash)
        {
            return;
        }
        this._isOverLoad = false;
        this._isFlash = false;
        if (this._mc.getChildMovie("mc"))
        {
            this._mc.getChildMovie("mc").gotoAndStop(1);
        }
        return;
    }// end function

    public flash() : void
    {
        if (this._isFlash)
        {
            return;
        }
        this._isFlash = true;
        this._renderFlashInt = 0;
        this._renderFlashFrame = 2;
        return;
    }// end function

    public overLoad() : void
    {
        if (this._isOverLoad)
        {
            return;
        }
        this._isOverLoad = true;
        this._isFlash = false;
        if (this._mc.getChildMovie("mc"))
        {
            this._mc.getChildMovie("mc").gotoAndStop(2);
        }
        return;
    }// end function
}