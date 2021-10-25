class ConfrimUI extends egret.Sprite
{
    private _enTxt:BitmapFontText;
    private _cnTxt:egret.TextField;
    private _btnGroup:SetBtnGroup;
    public yesBack:Function;
    public noBack:Function;

    public  constructor()
    {
        super()
        this.build();
        return;
    }// end function

    public destory() : void
    {
        if (this._enTxt)
        {
            this._enTxt.dispose();
            this._enTxt = null;
        }
        if (this._btnGroup)
        {
            this._btnGroup.removeEventListener("SELECT",this.selectHandler,false);
            this._btnGroup.destory();
            this._btnGroup = null;
        }
        return;
    }// end function

    private build() : void
    {
        var _loc_1 = new egret.Sprite();
        _loc_1.graphics.beginFill(0, 0.3);
        _loc_1.graphics.drawRect(0, 0, GameConfig.GAME_SIZE.x, GameConfig.GAME_SIZE.y);
        _loc_1.graphics.endFill();
        GameScene.instance.addChild(_loc_1);
        var _loc_2 = new Box(GameConfig.GAME_SIZE.x, 300, 0, 0.8);
        _loc_2.y = (GameConfig.GAME_SIZE.y - _loc_2.height) / 2;
        GameScene.instance.addChild(_loc_2);
        this._enTxt = new BitmapFontText(AssetManager.I.getFont("font1"));
        this._enTxt.y = 18;
        _loc_2.addChild(this._enTxt);
        if (GameUI.SHOW_CN_TEXT)
        {
            this._cnTxt = new egret.TextField();
            UIUtils.formatText(this._cnTxt, {color:16777215, size:20, align:"center"});
            this._cnTxt.y = this._enTxt.y + this._enTxt.height + 80;
            this._cnTxt.width = GameConfig.GAME_SIZE.x;
            this._cnTxt.height = 100;
            this._cnTxt.touchEnabled = false;
            _loc_2.addChild(this._cnTxt);
        }
        this._btnGroup = new SetBtnGroup();
        var _loc_4 = 0;
        this._btnGroup.startY = 0;
        this._btnGroup.startX = _loc_4;
        this._btnGroup.direct = 0;
        this._btnGroup.gap = 200;
        this._btnGroup.setBtnData([{label:"YES", cn:"是"}, {label:"NO", cn:"否"}], 1);
        this._btnGroup.addEventListener("SELECT", this.selectHandler,this);
        this._btnGroup.x = (GameConfig.GAME_SIZE.x - this._btnGroup.width) / 2 + 30;
        this._btnGroup.y = _loc_2.height - 80;
        _loc_2.addChild(this._btnGroup);
        var _loc_3 = _loc_2.y;
        _loc_2.y = GameConfig.GAME_SIZE.y;
        egret.Tween.get(_loc_2).to({y:_loc_3},200)
        //TweenLite.to(_loc_2, 0.2, {y:_loc_3});
        return;
    }// end function

    private selectHandler(event:SetBtnEvent) : void
    {
        var _loc_2 = event.selectedLabel;
        while (_loc_2 === "YES")
        {
            
            if (this.yesBack != null)
            {
                this.yesBack();
            }
            do
            {
                
                if (this.noBack != null)
                {
                    this.noBack();
                }
                break;
            }while (_loc_2 === "NO")
            return;
        }
    }// end function

    public setMsg(param1:string = null, param2:string = null) : void
    {
        this._enTxt._text = param1 ? (param1) : ("");
        this._enTxt.x = (GameConfig.GAME_SIZE.x - this._enTxt.width) / 2;
        if (this._cnTxt)
        {
            this._cnTxt.text = param2 ? (param2) : ("");
        }
        return;
    }// end function

}