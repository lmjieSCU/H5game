class FighterHpBar extends egret.DisplayObject
{
    private _ui:zmovie.ZMovieClip;
    private _bar:egret.DisplayObject;
    private _redbar:egret.DisplayObject;
    private _fighter:FighterMain;
    private _hprate:number = 1;
    private _redbarMoving:boolean;
    private _redbarMoveDelay:number;
    private _justHurtFly:boolean;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        this._ui = param1;
        this._bar = this._ui.getChildMovie("bar");
        this._redbar = this._ui.getChildMovie("redbar");
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
        return;
    }// end function

    public render() : void
    {
        var _loc_2 = NaN;
        var _loc_4 = NaN;
        var _loc_1 = this._fighter.hp / this._fighter.hpMax;
        if (this._redbarMoving && _loc_1 != this._hprate)
        {
            this._redbar.scaleX = this._hprate;
            this._redbarMoving = false;
        }
        this._hprate = _loc_1;
        var _loc_3 = this._hprate - this._bar.scaleX;
        var _loc_5 = _loc_3 < 0 ? (0.4) : (0.04);
        if (Math.abs(_loc_3) < 0.01)
        {
            this._bar.scaleX = this._hprate;
        }
        else
        {
            this._bar.scaleX = this._bar.scaleX + _loc_3 * _loc_5;
        }
        //switch(this._fighter.actionState - 21) branch count is:<2>[14, 27, 27] default offset is:<95>;
        this._redbarMoveDelay = 100;
        
        if (this._redbarMoveDelay > 0)
        {
            if (!this._justHurtFly)
            {
                this._redbarMoveDelay = 1.5 * GameConfig.FPS_GAME;
                this._justHurtFly = true;
            }
            else if (this._redbarMoveDelay > 0)
            {
                (this._redbarMoveDelay - 1);
            }
        }
        ;
        this._redbarMoveDelay = 0;
        this._justHurtFly = false;
        if (this._redbarMoveDelay <= 0)
        {
            _loc_2 = this._hprate - this._redbar.scaleX;
            _loc_4 = _loc_2 < 0 ? (0.1) : (0.02);
            if (Math.abs(_loc_2) < 0.01)
            {
                this._redbar.scaleX = this._hprate;
                this._redbarMoving = false;
            }
            else
            {
                this._redbar.scaleX = this._redbar.scaleX + _loc_2 * _loc_4;
                this._redbarMoving = true;
            }
        }
        return;
    }// end function

}