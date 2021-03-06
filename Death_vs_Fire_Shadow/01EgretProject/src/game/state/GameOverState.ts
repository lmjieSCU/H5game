class GameOverState implements Istage
{
    private _ui:zmovie.ZMovieClip;
    private _arrow:any;
    private _arrowSelected:String;
    private _keyInited:Boolean;
    private _keyEnabled:Boolean = true;
    private _char:FighterMain;
    private _map = new egret.Bitmap()
    public constructor()
    {
        //StateCtrl.I.clearTrans();
        this._ui = new zmovie.ZMovieClip(["fightuiresult0_json"],RES.getRes("fightuiresult_json"),"root").getChildAt(0) as zmovie.ZMovieClip;
        this._ui.gotoAndStop(1);
        this._ui.addFrameScript(this,[49, this.frame50, 84, this.frame85, 123, this.frame124, 237, this.frame238]);
        
        return;
    }// end function

    public showContinue() : void
    {
        GameScene.instance.removeChildren();
        //this._ui.addEventListener("complete", showContinueComplete, false, 0, true);
        this._ui.scaleX = this._ui.scaleY = 0.75
        this._ui.anchorOffsetX = this._ui.width / 2
        this._ui.anchorOffsetY = this._ui.height / 2
        this._ui.x = 0
        this._ui.y = 0
        this._map.texture = RES.getRes("fighuiresult_failor_bg_png")
        this._ui.gotoAndPlay("continue");
        this.addChar();
        GameScene.instance.addChild(this._map)
        GameScene.instance.addChild(this._ui)
        
        //SoundCtrl.I.BGM(AssetManager.I.getSound("continue"));
        return;
    }// end function

    private showContinueComplete() : void
    {
        //this._ui.removeEventListener("complete", showContinueComplete);
        this.initArrow("btn_yes");
        return;
    }// end function

    private render() : void
    {
        if (!this._keyEnabled)
        {
            return;
        }
        if (GameInputer.left("MENU", 1))
        {
            this.setArrow("btn_yes");
        }
        if (GameInputer.right("MENU", 1))
        {
            this.setArrow("btn_no");
        }
        if (GameInputer.select("MENU", 1))
        {
            this.selectHandler();
        }
        return;
    }// end function

    private selectHandler() :void
    {
        var _loc_1 = this._arrowSelected;
        while (_loc_1 === "btn_yes")
        {
            this.showContYes();
            do
            {
                
                this.showContNo();
                do
                {
                    
                    MainGame.I.goLogo();
                    break;
                }while (_loc_1 === "btn_no")
            }while (_loc_1 === "btn_back")
            SoundCtrl.I.sndConfrim();
            return;
        }
    }// end function

    private initArrow(param1:string = null) : void
    {
        if (!this._arrow)
        {
            this._arrow = ResUtils.I.createDisplayObject(ResUtils.I.common_ui, "select_arrow_mc");
            this._ui.addChild(this._arrow);
        }
        if (param1)
        {
            this.setArrow(param1);
        }
        GameRender.add(this.render);
        GameInputer.focus();
        this._keyEnabled = true;
        return;
    }// end function

    private removeArrow() : void
    {
        // if (this._arrow)
        // {
        //     try
        //     {
        //         this._ui.removeChild(this._arrow);
        //     }
        //     catch (e)
        //     {
        //     }
        //     this._arrow = null;
        // }
        if(this._ui && this._map){
            GameScene.instance.removeChild(this._map)
            GameScene.instance.removeChild(this._ui)
        }
        this._keyEnabled = false;
        return;
    }// end function

    private setArrow(param1:string) : void
    {
        this._arrowSelected = param1;
        var _loc_2 = this._ui.getChildByName(param1);
        if (_loc_2)
        {
            this._arrow.x = _loc_2.x;
            this._arrow.y = _loc_2.y;
            SoundCtrl.I.sndSelect();
        }
        return;
    }// end function

    private addChar() : void
    {
        var _loc_1:FighterMain = null;
        // var _loc_2 = this._ui.getChildMovie("ct_char");
        // if (_loc_2)
        // {
            try
            {
                _loc_1 = GameCtrl.I.gameRunData.continueLoser;
                if (_loc_1)
                {
                    _loc_1.scale = 3;
                    _loc_1.x = UI.WINSIZE_W / 2 ;
                    _loc_1.y = UI.WINSIZE_H / 2 ;
                    _loc_1.setVelocity(0, 0);
                    _loc_1.setVec2(0, 0);
                    //_loc_1.mc.getChildAt(0).gotoAndPlay("??????");
                    _loc_1.lose();
                    _loc_1.renderSelf();
                    this._ui.addChild(_loc_1.mc);
                    this._char = _loc_1;
                }
            }
            catch (e)
            {
                //this.trace(e);
            }
        // }
        // else
        // {
        //     //this.setFrameOut(addChar, 2, _loc_2);
        // }
        return;
    }// end function

    private showContYes() : void
    {
        //this._ui.addEventListener("complete", showContYesComplete, false, 0, true);
        this._ui.gotoAndPlay("continue_yes");
        this._keyEnabled = false;
        if (this._char)
        {
            this._char.idle();
        }
        
        return;
    }// end function

    private showContYesComplete() : void
    {
        //this._ui.removeEventListener("complete", showContYesComplete);
        GameLogic.loseScoreByContinue();
        MainGame.I.goSelect();
        return;
    }// end function

    private showContNo() : void
    {
        //this._ui.addEventListener("complete", showContNoComplete, false, 0, true);
        this._ui.gotoAndPlay("continue_no");
        
        return;
    }// end function

    private showContNoComplete() : void
    {
        //this._ui.removeEventListener("complete", showContNoComplete);
        this.showGameOver();
        return;
    }// end function

    public showGameOver() : void
    {
        this._map.texture = RES.getRes("fighuiresult_success_bg_png")
        //this._ui.addEventListener("complete", gameOverComplete, false, 0, true);
        this._ui.gotoAndPlay("gameover");
        //SoundCtrl.I.playSwcSound(snd_gameover);
        SoundCtrl.I.BGM(null);
        this.addScore();
        return;
    }// end function

    private addScore() : void
    {
        var _loc_1 = null;
        // var _loc_2 = this._ui.getChildByName("ct_score") as egret.Sprite;
        // if (_loc_2)
        // {
            //??????
            let scoreSpace = new egret.Sprite();
            let index = 0
            // console.log(GameData.I.score)
            while(GameData.I.score){
                let num = Math.floor(GameData.I.score % 10)
                let bitmap = new egret.Bitmap( RES.getRes("score_num_json").getTexture("txtmc_score_" + (num + 1)));
                bitmap.x = index * 10
                index--
                GameData.I.score = Math.floor(GameData.I.score / 10)
                // console.log(GameData.I.score)
                scoreSpace.addChild(bitmap)
            }
            scoreSpace.x = UI.WINSIZE_W/2 + 50
            scoreSpace.y = UI.WINSIZE_H/2 + 100
            this._ui.addChild(scoreSpace)
             //= RES.getRes("score_num_json").getTexture("time_txtmc_" + (firstNum + 1));
            // _loc_1.text = "SCORE " + GameData.I.score;
            // _loc_1.x = UI.WINSIZE_W / 2
            // _loc_1.y = UI.WINSIZE_H / 2
            // this._ui.addChild(_loc_1);
        //}
        // else
        // {
        //     //this.setFrameOut(addScore, 1, _loc_2);
        // }
        return;
    }// end function

    private gameOverComplete() : void
    {
        //this._ui.removeEventListener("complete", gameOverComplete);
        //GameEvent.dispatchEvent("GAME_OVER");
        this.initArrow("btn_back");
        return;
    }// end function

    public  display() : egret.DisplayObject
    {
        return this._ui;
    }// end function

    public build() : void
    {
        return;
    }// end function

    public afterBuild() : void
    {
        return;
    }// end function

    public destory(param1:Function = null) : void
    {
        GameRender.remove(this.render);
        if (this._char)
        {
            try
            {
                this._char.mc.parent.removeChild(this._char.mc);
            }
            catch (e)
            {
            }
            this._char = null;
        }
        GameCtrl.I.gameRunData.continueLoser = null;
        GameCtrl.I.destory();
        return;
    }// end function

    public frame50()
    {
        let curframe = this._ui.getCurrFrame()
        this._ui.stop();
        this._ui.gotoAndStop(curframe)
        //????????????
        this._ui.getChildMovie("btn_yes").touchEnabled = true;
        this._ui.getChildMovie("btn_no").touchEnabled = true;
        this._ui.getChildMovie("btn_yes").addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showContYes,this);
        this._ui.getChildMovie("btn_no").addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showContNo,this)
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }

    public frame85()
    {
        this._ui.stop();
        //??????
        this.showContNoComplete()
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }
    //yes end
    public frame124()
    {
        this._ui.stop();
        this.removeArrow();
        //??????
        GameCtrl.I.gameRunData.reset()
        GameCtrl.I.runNext()
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }

    public frame238()
    {
        let curframe = this._ui.getCurrFrame()
        this._ui.stop();
        this._ui.gotoAndStop(curframe)
        this._ui.getChildMovie("btn_back").touchEnabled = true
        this._ui.getChildMovie("btn_back").addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
            this.removeArrow()
            //??????
            GameCtrl.I.gameRunData.reset()
            GameCtrl.I.runNext()
        },this)
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }

}