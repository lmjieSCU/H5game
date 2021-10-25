class FightTimeUI extends egret.DisplayObject
{
    public _ui:zmovie.ZMovieClip;
    private _numMc:MCNumber;
    private _renderTime:boolean;
    public dot:egret.Bitmap = new egret.Bitmap();
    public dot2:egret.Bitmap = new egret.Bitmap();

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        var _loc_3 = null;
        this._ui = param1;
        var _loc_2 = GameCtrl.I.gameRunData.gameTimeMax;
        if (_loc_2 == -1)
        {
            this._renderTime = false;
            this._ui.getChildMovie("wuxian").visible = true;
        }
        else
        {
            // this._renderTime = true;
            // _loc_3 = new zmovie.ZMovieClip(["score_num_json"],RES.getRes("fightui_json"),"root");
            // this._numMc = new MCNumber(_loc_3, 0, 1, 20, 2);
            // this._numMc.x = -22;
            // this._numMc.y = -15;
            // this._ui.addChild(this._numMc._mc);
            
            // this._numMc.number = _loc_2;
            this._renderTime = true
            let firstNum = _loc_2 / 10;
            let secondNum = _loc_2 % 10;

            this._ui.getChildMovie("wuxian").visible = false;
            
            this.dot.texture = RES.getRes("score_num_json").getTexture("time_txtmc_" + (firstNum + 1));
            this.dot.anchorOffsetX = this.dot.width / 2;
            this.dot.anchorOffsetY = this.dot.height / 2;
            this.dot.x = -10;
            this.dot.y = 0;
            this._ui.addChild(this.dot)
            
            this.dot2.texture = RES.getRes("score_num_json").getTexture("time_txtmc_" + (secondNum + 1));
            this.dot2.anchorOffsetX = this.dot.width / 2;
            this.dot2.anchorOffsetY = this.dot.height / 2;
            this.dot2.x = 10;
            this.dot2.y = 0;
            this._ui.addChild(this.dot2)
        }
        return;
    }// end function

    public  get timeUI() : egret.DisplayObject
    {
        return this._ui;
    }// end function

    public render() : void
    {
        if (!this._renderTime)
        {
            return;
        }
        var _loc_1 = GameCtrl.I.gameRunData.gameTime;
        //this._numMc.number = _loc_1;

        let firstNum = Math.floor(_loc_1 / 10);
        let secondNum = Math.floor(_loc_1 % 10);

        this.dot.texture = RES.getRes("score_num_json").getTexture("time_txtmc_" + (firstNum + 1));
        this.dot2.texture = RES.getRes("score_num_json").getTexture("time_txtmc_" + (secondNum + 1));
        return;
    }// end function

}