class QiBar extends egret.DisplayObject
{
    private _ui:zmovie.ZMovieClip;
    private _fighter:FighterMain;
    private _bar:InsBar;
    private _fzBar:InsFzBar;
    private _fzReadyMc:zmovie.ZMovieClip;
    private _qiRate:number = 0;
    private _fzRate:number = 0;
    private _orgPose:egret.Point;
    private _tweenSpd:number = 0.5;
    private _moveFin:boolean = true;
    private _moveType:number = 0;
    private _isFadIn:boolean;
    private _isRenderAnimate:Boolean;
    private _faceBp:egret.Bitmap;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        //param1.visible = false
        this._ui = param1;
        this._bar = new InsBar(this._ui.getChildMovie("barmc"));
        this._fzBar = new InsFzBar(this._ui.getChildMovie("fzqibar"));
        this._fzReadyMc = this._ui.getChildMovie("readymc");
        this._orgPose = new egret.Point(this._ui.x, this._ui.y);
        this._ui.addEventListener("complete", this.uiPlayComplete,this);
        // this._ui.x = 100
        // this._ui.y = 50;
        if (GameUI.I.getUI())
        {
            //this._ui.gotoAndStop("fadin_fin");
            this._ui.visible = false;
        }
        return;
    }// end function

    public destory() : void
    {
        if (this._ui)
        {
            this._ui.removeEventListener("complete", this.uiPlayComplete,this);
            this._ui.gotoAndStop("destory");
            this._ui = null;
        }
        if (this._faceBp)
        {
            //this._faceBp.bitmapData.dispose();
            this._faceBp = null;
        }
        this._fighter = null;
        return;
    }// end function

    private uiPlayComplete(event:Event) : void
    {
        if (this._isFadIn)
        {
            this._ui.visible = true;
            this.setCacheBitmap(true);
        }
        else
        {
            this._ui.visible = false;
        }
        return;
    }// end function

    public setFighter(param1:FighterMain, param2:Assister = null) : void
    {
        var _loc_3 = new egret.Bitmap();
        this._fighter = param1;
        if (param2 && param2.data)
        {
            _loc_3 = AssetManager.I.getFighterFace(param2.data);
            if (_loc_3)
            {
                let template:egret.Bitmap = new egret.Bitmap(RES.getRes("fightui01_png"))
                this._ui.getChildMovie("facemc").getChildMovie("ct").addChild(_loc_3);
                this._ui.getChildMovie("facemc").getChildMovie("ct").addChild(template);
                
                //_loc_3.mask = template
               // GameScene.instance.addChild(_loc_3)
                //GameScene.instance.addChild(template)
                
                

                _loc_3.mask = template
            }
        }
        if (GameUI.I.getUI())
        {
            this._faceBp = KyoUtils.drawDisplay(this._ui.getChildMovie("facemc"));
            this._ui.addChild(this._faceBp);
            this._faceBp.x = this._ui.getChildMovie("facemc").x;
            this._faceBp.y = this._ui.getChildMovie("facemc").y;
            try
            {
                //this._ui.removeChild(this._ui.getChildMovie("facemc"));
            }
            catch (e)
            {

            }
            this._ui.addChild(this._ui.getChildMovie("readymc"));
        }
        this._fzReadyMc.getChildMovie("mc").play();
        return;
    }// end function

    private setCacheBitmap(param1:boolean) : void
    {
        if (GameUI.I.getUI())
        {
            return;
        }
        this._ui.getChildMovie("facemc").cacheAsBitmap = param1;
        return;
    }// end function

    public setDirect(param1:number) : void
    {
        this._bar.setDirect(param1);
        this._fzReadyMc.getChildMovie("mc").scaleX = param1 > 0 ? (1) : (-1);
        return;
    }// end function

    public render() : void
    {
        
        this._qiRate = this._fighter.qi / 100;
        if (this._qiRate > 3)
        {
            this._qiRate = 3;
        }
        var _loc_1 = this._bar.getProcess();
        var _loc_2 = this._qiRate - _loc_1;
        if (Math.abs(_loc_2) < 0.01)
        {
            this._bar.setProcess(this._qiRate);
        }
        else
        {
            this._bar.setProcess(_loc_1 + _loc_2 * 0.4);
        }
        this._fzBar.setProcess(this._fighter.fzqi / 100);
        var _loc_3 = this._qiRate >= 1;
        this._ui.getChildMovie("barmc").getChildMovie("bar").play()
        if(this._fighter.fzqi >= 100){
            this._fzReadyMc.getChildMovie("mc").visible = true
        }
        else{
            this._fzReadyMc.getChildMovie("mc").visible = false
        }
        return;
    }// end function
    
    public renderAnimate() : void
    {
        if (!this._isRenderAnimate)
        {
            return;
        }
        var _loc_1 = this._ui.getCurrPlayLabel;
        if (_loc_1.toString() == "fadin_fin" || _loc_1.toString() == "fadout_fin")
        {
            this._isRenderAnimate = false;
            return;
        }
        this._ui.nextFrame();
        return;
    }// end function

    public fadIn(param1:boolean = true) : void
    {
        if (this._isFadIn)
        {
            return;
        }
        this._isFadIn = true;
        this._ui.visible = true;
        if (GameUI.I.getUI())
        {
            return;
        }
        if (param1)
        {
            this.setCacheBitmap(false);
            this._ui.gotoAndStop("fadin");
            this._isRenderAnimate = true;
        }
        else
        {
            this._ui.gotoAndStop("fadin_fin");
            this.setCacheBitmap(true);
        }
        return;
    }// end function

    public fadOut(param1:boolean = true) : void
    {
        if (!this._isFadIn)
        {
            return;
        }
        this._isFadIn = false;
        if (GameUI.I.getUI())
        {
            this._ui.visible = false;
            return;
        }
        if (param1)
        {
            this._ui.gotoAndPlay("fadout");
            this._isRenderAnimate = true;
            //this.setCacheBitmap(false);
        }
        else
        {
            this._ui.visible = false;
        }
        return;
    }// end function

    public moveTo(param1:number, param2:number, param3:number) : void
    {
        if (this._moveType == 1)
        {
            if (this._moveFin)
            {
                return;
            }
        }
        else
        {
            this._moveType = 1;
            this._moveFin = false;
        }
        this.moving(param1, param2, param3);
        return;
    }// end function

    public moveResume() : void
    {
        if (this._moveType == 0)
        {
            if (this._moveFin)
            {
                return;
            }
        }
        else
        {
            this._moveType = 0;
            this._moveFin = false;
        }
        this.moving(this._orgPose.x, this._orgPose.y, 1);
        return;
    }// end function

    private moving(param1:number, param2:number, param3:number) : void
    {
        if (Math.abs(param1 - this._ui.x) < 2 && Math.abs(param2 - this._ui.y) < 2 && Math.abs(param3 - this._ui.scaleX) < 0.2)
        {
            this._ui.x = param1;
            this._ui.y = param2;
            var _loc_4 = param3;
            this._ui.scaleY = param3;
            this._ui.scaleX = _loc_4;
            this._moveFin = true;
        }
        this._ui.x = this._ui.x + (param1 - this._ui.x) * this._tweenSpd;
        this._ui.y = this._ui.y + (param2 - this._ui.y) * this._tweenSpd;
        this._ui.scaleX = this._ui.scaleX + (param3 - this._ui.scaleX) * this._tweenSpd;
        this._ui.scaleY = this._ui.scaleX;
        return;
    }// end function

    public setPosAndScale(param1:number, param2:number, param3:number) : void
    {
        this._ui.x = param1;
        this._ui.y = param2;
        this._ui.scaleX = param3;
        this._ui.scaleY = param3;
        return;
    }// end function

}


class InsBar extends egret.DisplayObject
{
    // private _ui:zmovie.ZMovieClip;
    // private _process:number = 0;

    public rate:number = 1;
    private _mc:zmovie.ZMovieClip;
    private _curRate:number = 1;
    private _isOverLoad:boolean;
    private _isFlash:boolean;
    private _renderFlashInt:number;
    private _renderFlashFrame:number = 2;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        this._mc = param1;
        try{
            this.setProcess(0); //设置进度值
        }catch(e){

        }
        return;
    }// end function

    public render() : void
   {
      var _loc1_:number = this.rate - this._mc.scaleX;
      if(Math.abs(_loc1_) < 0.01)
      {
         this._mc.scaleX = this.rate;
      }
      else
      {
         this._mc.scaleX = this._mc.scaleX + _loc1_ * 0.4;
      }
      if(this._isFlash)
      {
         this.renderFlash();
      }
   }

   private renderFlash() : void
   {
      this._renderFlashInt = this._renderFlashInt + 1;
      if(this._renderFlashInt + 1 > 2)
      {
         this._renderFlashInt = 0;
         this._mc.gotoAndStop(this._renderFlashFrame);
         this._renderFlashFrame = this._renderFlashFrame == 1?2:1;
      }
   }

   public normal() : void
   {
      if(!this._isOverLoad && !this._isFlash)
      {
         return;
      }
      this._isOverLoad = false;
      this._isFlash = false;
      this._mc.gotoAndStop(1);
   }

   public flash() : void
   {
      if(this._isFlash)
      {
         return;
      }
      this._isFlash = true;
      this._renderFlashInt = 0;
      this._renderFlashFrame = 2;
   }

   public overLoad() : void
   {
      if(this._isOverLoad)
      {
         return;
      }
      this._isOverLoad = true;
      this._isFlash = false;
      this._mc.gotoAndStop(2);
   }

    public get ui() : egret.DisplayObject
    {
        return this._mc;
    }// end function

    public getProcess() : number
    {
        return this.rate;
    }// end function

    public setProcess(param1:number) : void
    {
        this.rate = param1;
        this._mc.getChildMovie("bar").getChildMovie("bar1").visible = param1 > 0;
        this._mc.getChildMovie("bar").getChildMovie("bar2").visible = param1 > 1;
        this._mc.getChildMovie("bar").getChildMovie("bar3").visible = param1 > 2;
        this._mc.getChildMovie("bar").getChildMovie("bar4").visible = param1 >= 3;
        if (param1 > 2)
        {
            var _loc_3 = 1;
            this._mc.getChildMovie("bar").getChildMovie("bar2").scaleX = 1;
            this._mc.getChildMovie("bar").getChildMovie("bar1").scaleX = _loc_3;
            this._mc.getChildMovie("bar").getChildMovie("bar3").scaleX = param1 - 2;
        }
        else if (param1 > 1)
        {
            this._mc.getChildMovie("bar").getChildMovie("bar1").scaleX = 1;
            this._mc.getChildMovie("bar").getChildMovie("bar2").scaleX = param1 - 1;
        }
        else
        {
            this._mc.getChildMovie("bar").getChildMovie("bar1").scaleX = param1;
        }
        var _loc_2 = Math.floor( param1) + 1;
        this._mc.getChildMovie("txtmc").gotoAndStop(_loc_2);
        return;
    }// end function

    public setDirect(param1:number) : void
    {
        this._mc.getChildMovie("txtmc").scaleX = param1 > 0 ? (1) : (-1);
        return;
    }// end function

}


class InsFzBar extends egret.DisplayObject
{
    private _ui:zmovie.ZMovieClip;
    private _process:number = 0;
    private _scroll:egret.Rectangle;
    private _height:number;

    public constructor(param1:zmovie.ZMovieClip)
    {
        super()
        this._ui = param1;
        var _loc_2 = this._ui.getChildMovie("barmc").getBounds();
        this._scroll = new egret.Rectangle(0, 0, this._ui.getChildMovie("barmc").width, this._ui.getChildMovie("barmc").height);
        this._height = this._scroll.height;
        this._ui.getChildMovie("barmc").scaleY = -1;
        this._ui.getChildMovie("barmc").y = this._ui.getChildMovie("barmc").height;
        return;
    }// end function

    public get ui() : egret.DisplayObject
    {
        return this._ui;
    }// end function

    public getProcess() : number
    {
        return this._process;
    }// end function

    public setProcess(param1:number) : void
    {
        this._process = param1;
        this._scroll.height = param1 * this._height;
        this._ui.getChildMovie("barmc").scrollRect = this._scroll;
        return;
    }// end function

}