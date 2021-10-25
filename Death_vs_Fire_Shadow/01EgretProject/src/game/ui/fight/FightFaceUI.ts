class FightFaceUI extends egret.DisplayObject
{
    private _ui:zmovie.ZMovieClip;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        this._ui = param1;
        return;
    }// end function

    public setData(param1:FighterVO) : void
    {
        if (!param1)
        {
            this._ui.visible = false;
            return;
        }
        this._ui.visible = true;
        var _loc_2 = AssetManager.I.getFighterFaceBar(param1);
        if (_loc_2)
        {
            let template:egret.Bitmap = new egret.Bitmap(RES.getRes("fightui01_png"))
            this._ui.addChild(_loc_2);
            this._ui.addChild(template);
            _loc_2.mask = template
            // let template:egret.Bitmap = new egret.Bitmap(RES.getRes("fightui01_png"))
            // template.mask = _loc_2
            // let temp = this._ui.getChildMovie("ct")
            //this._ui.addChild(_loc_2)
            //this._ui.addChild(_loc_2);
            //_loc_2.mask = this._ui
        }
        return;
    }// end function

    public setDirect(param1:number) : void
    {
        return;
    }// end function

}