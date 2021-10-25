class TransUI 
{
    public ui:any;
    private _renderAnimateGap:number = 0;
    private _renderAnimateFrame:number = 0;
    private _fadInBack:Function;
    private _fadOutBack:Function;
    private _rendering:boolean = true;

    public constructor()
    {
        this.ui = new zmovie.ZMovieClip(["score_num_json"],RES.getRes("fightui_json"),"root");
        return;
    }// end function

    public destory() : void
    {
        GameRender.remove(this.render);
        return;
    }// end function

    private startRender() : void
    {
        this._renderAnimateGap = Math.ceil(MainGame.I.getFPS() / 30) - 1;
        this._renderAnimateFrame = 0;
        this._rendering = true;
        GameRender.add(this.render);
        return;
    }// end function

    private stopRender() : void
    {
        this._rendering = false;
        GameRender.remove(this.render);
        return;
    }// end function

    private render() : void
    {
        if (!this._rendering)
        {
            return;
        }
        if (this._renderAnimateGap > 0)
        {
            this._renderAnimateFrame  = this._renderAnimateFrame+ 1;
            if (this._renderAnimateFrame >= this._renderAnimateGap)
            {
                this._renderAnimateFrame = 0;
                this.renderAnimate();
            }
        }
        else
        {
            this.renderAnimate();
        }
        return;
    }// end function

    private  renderAnimate() : void
    {
        if (this.ui.currentFrameLabel == "stop")
        {
            if (this._fadInBack != null)
            {
                this._fadInBack(); //  call this
                this._fadInBack = null;
                return;
            }
            if (this._fadOutBack != null)
            {
                this._fadOutBack(); //  call this
                this._fadOutBack = null;
                return;
            }
            this.stopRender();
            return;
        }
        this.ui.nextFrame();
        return;
    }// end function

    public  fadIn(param1:Function = null) : void
    {
        this._fadOutBack = null;
        this._fadInBack = param1;
        this.ui.gotoAndStop("fadin");
        this.startRender();
        return;
    }// end function

    public  fadOut(param1:Function = null) : void
    {
        this._fadInBack = null;
        this._fadOutBack = param1;
        this.ui.gotoAndStop("fadout");
        this.startRender();
        return;
    }// end function

}

