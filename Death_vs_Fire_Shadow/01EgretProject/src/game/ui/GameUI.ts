class GameUI extends egret.DisplayObject
{
    private _ui:FightUI;
    private _renderAnimateGap:number;
    private _renderAnimateFrame:number = 0;
    public static I:GameUI;
    public static _i:GameUI;
    public static BITMAP_UI:boolean = true;
    public static SHOW_CN_TEXT:boolean = true;
    private static _confrimUI:ConfrimUI;
    private static _alertUI:AlertUI;

    public constructor()
    {
        super();
        this._renderAnimateFrame = 0;
        GameUI.I = this;
        this._renderAnimateGap = Math.ceil(GameConfig.FPS_GAME / 30) - 1;
        return;
    }// end function

    public getUI() : FightUI
    {
        return this._ui;
    }// end function

    public getUIDisplay() : egret.DisplayObject
    {
        return this._ui.getUI();
    }// end function

    public initFight(param1:GameRunFighterGroup, param2:GameRunFighterGroup) : void
    {
        if (this._ui)
        {
            if (this._ui instanceof FightUI == false)
            {
                this._ui.destory();
                this._ui = new FightUI();
            }
        }
        else
        {
            this._ui = new FightUI();
        }
        
        
        (this._ui as FightUI).initlize(param1, param2);
        
        return;
    }// end function

    public render() : void
    {
        if (!this._ui)
        {
            return;
        }
        this._ui.render();
        if (this.isRenderAnimate())
        {
            this.renderAnimate();
        }
        return;
    }// end function

    private renderAnimate() : void
    {
        if (this._ui)
        {
            this._ui.renderAnimate();
        }
        return;
    }// end function

    private isRenderAnimate() : boolean
    {
        if (this._renderAnimateGap > 0)
        {
            this._renderAnimateFrame = (this._renderAnimateFrame + 1);
            if (this._renderAnimateFrame >= this._renderAnimateGap)
            {
                this._renderAnimateFrame = 0;
                return true;
            }
            return false;
        }
        return true;
    }// end function

    public fadIn() : void
    {
        if (this._ui)
        {
            this._ui.fadIn(true)
        }
        return;
    }// end function

    public fadOut() : void
    {
        if (this._ui)
        {
            this._ui.fadIn(true);
        }
        return;
    }// end function

    public destory() : void
    {
        if (this._ui)
        {
            this._ui.destory();
        }
        return;
    }// end function

    public static showingDialog() : boolean
    {
        return GameUI._confrimUI != null || GameUI._alertUI != null;
    }// end function

    public static confrim(param1:string = null, param2:string = null, param3:Function = null, param4:Function = null) : void
    {
        let enMsg = param1;
        let cnMsg = param2;
        let yes = param3;
        let no = param4;
        let yesClose = function () : void
        {
            if (yes != null)
            {
                yes();
            }
            GameUI.closeConfrim();
            return;
        }// end function
        ;
        let noClose = function () : void
        {
            if (no != null)
            {
                no();
            }
            GameUI.closeConfrim();
            return;
        }// end function
        ;
        GameUI.closeConfrim();
        GameUI._confrimUI = new ConfrimUI();
        GameUI._confrimUI.setMsg(enMsg, cnMsg);
        GameUI._confrimUI.yesBack = yesClose;
        GameUI._confrimUI.noBack = noClose;
        MainGame.I.root.addChild(GameUI._confrimUI);
        return;
    }// end function

    public static alert(param1:string = null, param2:string = null, param3:Function = null) : void
    {
        let enMsg = param1;
        let cnMsg = param2;
        let close = param3;
        let closeBack = function () : void
        {
            if (close != null)
            {
                close();
            }
            GameUI.closeAlert();
            return;
        }// end function
        ;
        GameUI.closeAlert();
        GameUI._alertUI = new AlertUI();
        GameUI._alertUI.setMsg(enMsg, cnMsg);
        GameUI._alertUI.closeBack = closeBack;
        MainGame.I.root.addChild(GameUI._alertUI);
        return;
    }// end function

    public static closeAlert() : void
    {
        if (GameUI._alertUI)
        {
            try
            {
                MainGame.I.root.removeChild(GameUI._alertUI);
            }
            catch (e)
            {
            }
            GameUI._alertUI.destory();
            GameUI._alertUI = null;
        }
        return;
    }// end function

    public static closeConfrim() : void
    {
        if (GameUI._confrimUI)
        {
            try
            {
                MainGame.I.root.removeChild(GameUI._confrimUI);
            }
            catch (e)
            {
            }
            GameUI._confrimUI.destory();
            GameUI._confrimUI = null;
        }
        return;
    }// end function


}