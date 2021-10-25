class MoveListSp extends egret.Sprite
{
    private _picClass:any;
    private _pic:egret.Bitmap;
    private _btns:SetBtnGroup;
    public onBackSelect:Function;

    public constructor()
    {
        super()
        //this._picClass = movelist_jpg$3c22acb3cd853a5c0e8a636f154cc1bd-1736392622;
        this._pic = new this._picClass();
        this._pic.width = GameConfig.GAME_SIZE.x;
        this._pic.height = GameConfig.GAME_SIZE.y;
        GameScene.instance.addChild(this._pic);
        this._btns = new SetBtnGroup();
        this._btns.setBtnData([{label:"BACK", cn:"返回"}]);
        this._btns.addEventListener("SELECT", this.onSelect,this);
        this._btns.x = 250;
        this._btns.y = GameConfig.GAME_SIZE.y - 130;
        GameScene.instance.addChild(this._btns);
        return;
    }// end function

    public destory() : void
    {
        if (this._btns)
        {
            this._btns.removeEventListener("SELECT", this.onSelect,false);
            this._btns.destory();
            this._btns = null;
        }
        return;
    }// end function

    public show() : void
    {
        this.visible = true;
        return;
    }// end function

    public hide() : void
    {
        this._btns.keyEnable = false;
        this.visible = false;
        return;
    }// end function

    private onSelect(event:any) : void
    {
        if (this.onBackSelect != null)
        {
            this.onBackSelect();
        }
        return;
    }// end function

}