class FightScoreUI extends egret.DisplayObject
{
    private _ui:zmovie.ZMovieClip;
    private _nummc:MCNumber;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        this._ui = param1;
        var _loc_2 = new zmovie.ZMovieClip(["score_num_json"],RES.getRes("fightui_json"),"root");
        this._nummc = new MCNumber(_loc_2, 0, 1, 10, 10);
        //this._ui.getChildMovie("ct").addChild(this._nummc);
        return;
    }// end function

    public setScore(param1:number) : void
    {
        this._nummc.number = param1;
        return;
    }// end function

}