class GameLoadingState implements Istage
{
    private _ui:zmovie.ZMovieClip;
    private _initBack:Function;
    private _initFail:Function;

    public GameLoadingState()
    {
        return;
    }// end function

    public display() : zmovie.ZMovieClip
    {
        return this._ui;
    }// end function

    public build() : void
    {
        //this._ui = ResUtils.I.createDisplayObject(ResUtils.I.loading, "loading_cover_mc");
        return;
    }// end function

    public loadGame(param1:Function, param2:Function) : void
    {
        this._initBack = param1;
        this._initFail = param2;
        //GameData.I.loadConfig(loadConfigBack, loadConfigFail);
        //msg("游戏初始化：正在加载配置文件");
        return;
    }// end function

    private loadConfigFail(param1:String) : void
    {
        //Debugger.log("游戏初始化失败：加载配置文件失败：", param1);
        //msg("游戏初始化失败：加载配置文件失败!");
        if (this._initFail != null)
        {
            this._initFail(param1);
        }
        return;
    }// end function

    private loadConfigBack() : void
    {
        //AssetManager.I.loadBasic(loadAssetBack, loadAssetProcess);
        //msg("游戏初始化：正在加载游戏资源");
        return;
    }// end function

    private loadAssetProcess(param1:number, param2:string, param3:number, param4:number) : void
    {
        if (param1 > 1)
        {
            //this.trace(param2 + "::进度超过100%");
            param1 = 1;
        }
        //this._ui.bar.bar.scaleX = param1;
        //msg("游戏初始化：正在加载" + param2 + "资源(" + param3 + "/" + param4 + ")");
        return;
    }// end function

    private loadAssetBack() : void
    {
        if (this._initBack != null)
        {
            this._initBack();
            this._initBack = null;
        }
        this._initFail = null;
        return;
    }// end function

    public afterBuild() : void
    {
        return;
    }// end function

    public destory(param1:Function = null) : void
    {
        return;
    }// end function

    private msg(param1:string) : void
    {
        //this._ui.bar.txt.text = param1;
        return;
    }// end function

}