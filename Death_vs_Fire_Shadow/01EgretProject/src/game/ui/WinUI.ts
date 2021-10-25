
class WinUI 
{
    private  _ui:zmovie.ZMovieClip;
    private _team:number;

    constructor(param1:zmovie.ZMovieClip, param2:number)
    {
        this._ui = param1;
        this._team = param2;
        return;
    }// end function

    public  getui() : egret.DisplayObject
    {
        return this._ui;
    }// end function

    public  show(param1:FighterVO, param2:number) : void
    {
        let _loc_3 = null;
        if (!param1)
        {
            return;
        }
        switch((param2 - 1)){    // branch count is:<1>[11, 47] default offset is:<79>;
            case 0:
                _loc_3 = this._team == 1 ? (this._ui.getChildMovie("w1")) : (this._ui.getChildMovie("w2"));
                break;
            default:
                _loc_3 = this._team == 1 ? (this._ui.getChildMovie("w2")) : (this._ui.getChildMovie("w1"));
                break;
        }
        if (!_loc_3)
        {
            return;
        }
        switch(param1.comicType){ //branch count is:<1>[11, 23] default offset is:<31>;
            case 0:
                _loc_3.gotoAndPlay("in_bleach");
                break;
            default:
                _loc_3.gotoAndPlay("in_naruto");
                break;
        }
        return;
    }// end function
}
