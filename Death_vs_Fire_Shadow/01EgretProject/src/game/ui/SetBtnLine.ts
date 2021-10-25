class SetBtnLine extends egret.Sprite
{
    private _txt:egret.TextField ; 
    private _line:egret.Sprite;

    public SetBtnLine()
    {
        var mouseEnabled = false;
        var mouseChildren = false;
        this._line = new egret.Sprite();
        GameScene.instance.addChild(this._line);
        if (GameUI.SHOW_CN_TEXT)
        {
            this._txt = new egret.TextField();
            UIUtils.formatText(this._txt, {color:16641381, size:20, font:"楷体", align:"right"});
            this._txt.y = 4;
            GameScene.instance.addChild(this._txt);
        }
        return;
    }// end function

    public show(param1:number, param2:string) : void
    {
        this._line.graphics.clear();
        this._line.graphics.lineStyle(1, 16641381, 1);
        this._line.graphics.lineTo(param1, 0);
        this._line.scaleX = 0.1;
        egret.Tween.get(this._line).to({scaleX:1},300)
        //TweenLite.to(this._line, 0.3, {scaleX:1});
        this.visible = true;
        if (this._txt)
        {
            this._txt.width = param1;
            this._txt.text = param2;
        }
        return;
    }// end function

    public hide() : void
    {
        this.visible = false;
        if (this._txt)
        {
            this._txt.text = "";
        }
        return;
    }// end function

}