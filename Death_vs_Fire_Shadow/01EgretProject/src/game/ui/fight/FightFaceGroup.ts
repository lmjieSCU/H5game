class FightFaceGroup extends egret.DisplayObject
{
    private _ui:zmovie.ZMovieClip;
    private _face1:FightFaceUI;
    private _face2:FightFaceUI;
    private _face3:FightFaceUI;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        this._ui = param1;
        this._ui.cacheAsBitmap = true;
        this._face1 = new FightFaceUI(this._ui.getChildMovie("face"));
        this._face2 = new FightFaceUI(this._ui.getChildMovie("face2"));
        this._face3 = new FightFaceUI(this._ui.getChildMovie("face3"));
        //----
        this._ui.getChildMovie("face").visible = false
        this._ui.getChildMovie("face2").visible = false
        this._ui.getChildMovie("face3").visible = false
        return;
    }// end function

    public getui() : egret.DisplayObject
    {
        return this._ui;
    }// end function

    public setFighter(param1:GameRunFighterGroup = null) : void
    {
        this._ui.cacheAsBitmap = false;
        if (param1.currentFighter)
        {
            this._face1.setData(param1.currentFighter.data);
        }
        var _loc_2 = param1.currentFighter;
        this._face2.setData(param1.fighter2 ? (param1.fighter2.data) : (null));
        this._face3.setData(param1.fighter3 ? (param1.fighter3.data) : (null));
        if(!param1.fighter1){
            this._face2.setData(param1.fighter3.data);
            this._face3.setData(null);
        }
        if(!param1.fighter2){
            this._face2.setData(null);
            this._face3.setData(null);
        }
        // while (param1.fighter1 === _loc_2)
        // {
            
        //     this._face2.setData(param1.fighter2 ? (param1.fighter2.data) : (null));
        //     this._face3.setData(param1.fighter3 ? (param1.fighter3.data) : (null));
        //     do
        //     {
                
        //         this._face2.setData(param1.fighter3 ? (param1.fighter3.data) : (null));
        //         this._face3.setData(null);
        //         do
        //         {
        //             this._face2.setData(null);
        //             this._face3.setData(null);
        //             break;
        //         }while (param1.fighter2 === _loc_2)
        //     }while (param1.fighter3 === _loc_2)
        // this._ui.cacheAsBitmap = true;
        // return;
        // }// end function
    }

    public setDirect(param1:number) : void
    {
        this._face1.setDirect(param1);
        this._face2.setDirect(param1);
        this._face3.setDirect(param1);
        return;
    }// end function

}