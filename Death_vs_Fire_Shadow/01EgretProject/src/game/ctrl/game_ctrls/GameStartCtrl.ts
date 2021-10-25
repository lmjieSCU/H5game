class GameStartCtrl {
    private _state: GameState;
    private _p1: FighterMain;
    private _p2: FighterMain;
    private _isStart1v1: boolean;
    private _isStartNextRound: boolean;
    private _step: number;
    private _holdFrame: number;
    public _uiPlaying: boolean;
    private _introTeamId: number = -1;
    public _ui: zmovie.ZMovieClip;

    public nummc: zmovie.ZMovieClip;

    public winnermc: zmovie.ZMovieClip;

    public round: number = GameCtrl.I.gameRunData.round;

    public perfect: boolean;

    public winnerX: number;

    public winnerY: number;

    public constructor(param1: GameState) {
        // this._ui = (GameUI.I.getUI() as FightUI).getUI().getChildMovie("startKOmc")
        this._ui = GameUI.I.getUI()._startKOmc;
        this.nummc = this._ui.getChildMovie("nummc")
        this.winnermc = this._ui.getChildMovie("winnermc")
        //
        this._state = param1;
        this._ui.ClearFrameScript();
        let loop = [0, this.frame1, 26, this.frame27, 27, this.frame28, 52, this.frame53, 57, this.frame58, 86, this.frame88, 138, this.frame139, 188, this.frame190, 199, this.frame200, 200, this.frame201, 209, this.frame210, 261, this.frame263, 307, this.frame309];
        for (let i = 28; i < 52; i++) {
            loop.push(i);
            loop.push(this.frame28);
        }
        this._ui.addFrameScript(this, loop);
        return;
    }// end function

    public destory(): void {
        this._p1 = null;
        this._p2 = null;
        this._state = null;
        return;
    }// end function

    public render(): boolean {
        if (this._isStart1v1) {
            return this.renderStart1v1();
        }
        if (this._isStartNextRound) {
            return this.renderNextRound();
        }
        return false;
    }// end function

    public start1v1(param1: FighterMain, param2: FighterMain, param3: number = -1): void {
        this._p1 = param1;
        this._p2 = param2;
        //屏蔽
        this._p1.owerKeyBoardMode.setenabled(false);
        this._p2.owerKeyBoardMode.setenabled(false);
        GameUI.I.getUI().ui.visible = false;
        this._isStart1v1 = true;
        this._introTeamId = param3;
        switch (Number(param3) - 1) {
            case 0:
                SoundCtrl.I.playFightBGM(param1.data.id);
                break;
            case 1:
                SoundCtrl.I.playFightBGM(param2.data.id);
                break;
        }
        this.preRenderStart();
        return;
    }// end function

    private preRenderStart(): void {
        this._step = -1;
        var initStep: number;
        switch (Number(this._introTeamId) - -1) {
            case 0:
                initStep = 0;
                break;
            default:
                initStep = 0;
                break;
            case 2:
                this._state.cameraFocusOne(this._p1.getDisplay());
                initStep = 1;
                break;
            case 3:
                this._state.cameraFocusOne(this._p2.getDisplay());
                initStep = 2;
        }
        this._state.camera.updateNow();
        this._step = initStep;
        StateCtrl.I.transOut(function (): void {
            this._step = initStep;
            return;
        }// end function
            , true);
        return;
    }// end function

    private renderStart1v1(): boolean {
        if (this._uiPlaying) {
            return false;
        }
        if (this._p1.actionState == 60 || this._p2.actionState == 60) {
            return false;
        }
        this._holdFrame = this._holdFrame - 1;
        if (this._holdFrame > 0) {
            return false;
        }
        switch (Number(this._step)) {
            case 0:
                if (this._introTeamId == -1 || this._introTeamId == 1) {
                    this._state.cameraFocusOne(this._p1.getDisplay());
                    this._holdFrame = 0.5 * GameConfig.FPS_GAME;
                    this._step = 1;
                }
                else {
                    this._step = 2;
                }
                break;
            case 1:
                this._p1.sayIntro();
                this._holdFrame = 0.3 * GameConfig.FPS_GAME;
                this._step = 2;
                break;
            case 2:
                if (this._introTeamId == -1 || this._introTeamId == 2) {
                    this._state.cameraFocusOne(this._p2.getDisplay());
                    this._holdFrame = 0.5 * GameConfig.FPS_GAME;
                    this._step = 3;
                }
                else {
                    this._step = 4;
                }
                break;
            case 3:
                this._p2.sayIntro();
                this._holdFrame = 0.3 * GameConfig.FPS_GAME;
                this._step = 4;
                break;
            case 4:
                this._state.cameraResume();
                this._holdFrame = 0.1 * GameConfig.FPS_GAME;
                this._step = 5;
                break;
            case 5:
                this._uiPlaying = true;
                GameUI.I.getUI().showStart(function (): void {
                    this._uiPlaying = false;
                }, null);
                this._step = 6;
                break;
            case 6:
                this._p1 = null;
                this._p2 = null;
                break;
        }
    }// end function

    public startNextRound(): void {
        this._isStartNextRound = true;
        this._uiPlaying = true;
        StateCtrl.I.transOut(null, true);
        GameUI.I.getUI().showStart(function () {    //ui.round X
            this._uiPlaying = false;
            return;
        }, null);
        return;
    }// end function

    public skip(): void {
        if (this._isStart1v1) {
            if (this._step < 5) {
                StateCtrl.I.quickTrans();
                this._state.cameraResume();
                this._uiPlaying = false;
                this._step = 6;
                this._state.gameUI.getUI().fadIn(true);
                this._p1.idle();
                this._p2.idle();
                this._holdFrame = 0.5 * GameConfig.FPS_GAME;
            }
        }
        if (this._isStartNextRound) {
        }
        return;
    }// end function

    private renderNextRound(): boolean {
        return this._uiPlaying == false;
    }// end function

    public frame1() {
        this.round = 1;
        this.perfect = false;
        this.winnerX = 30;
        this.winnerY = 90;
        GameUI.I.getUI()._startKOmcAnimate = false;
        //this._ui.stop();
        return;
    }

    public frame27() {
        this.nummc = this._ui.getChildMovie("nummc")
        if (this.round < 1) {
            this.round = 1;
        }
        if (this.round > 5) {
            this.round = 5;
        }
        if (this.nummc) {
            this.nummc.gotoAndPlay("r" + this.round);
            SoundCtrl.I.playStartSound("l_" + this.round);
        }
        GameCtrl.I._renderTimeFrame = 0;
        GameCtrl.I.gameRunData.gameTime = GameCtrl.I.gameRunData.gameTimeMax;
        return;
    }

    public frame28() {
        this.nummc = this._ui.getChildMovie("nummc")
        if (this.nummc) {
            let img: zmovie.ZImage = <zmovie.ZImage>this.nummc.$children[0];
            img.setTexture(RES.getRes("round" + this.round + "num_png"));
        }
        // if (this.nummc) {
        //    this.nummc.gotoAndPlay("r" + this.round);
        // }
        return;
    }

    public frame53() {
        this._ui.stop()
        this._ui.gotoAndStop("fight");
        GameUI.I.getUI()._startKOmcAnimate = true;
        SoundCtrl.I.playStartSound("l_108")
        //this._ui.gotoAndPlay("fight")
        //dispatchEvent(new flash.events.Event("fight_in"));

        return;
    }

    public frame58() {
        GameEvent.dispatchEvent2("fight")
        //dispatchEvent(new flash.events.Event("fight"));
        return;
    }

    public frame88() {
        this._ui.stop();
        //屏蔽
        //
        GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(true);
        GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(true);
        GameCtrl.I.gameRunData.isTimeRuning = true;
        // GameCtrl.I._renderTimeFrame = 0;
        // GameCtrl.I.gameRunData.gameTime = GameCtrl.I.gameRunData.gameTimeMax;
        console.log(GameCtrl.I.getRunid());
        //GameEvent.dispatchEvent2(egret.Event.COMPLETE)
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }

    public frame139() {
        this._ui.stop();
        this._ui.gotoAndStop("fight");
        GameUI.I.getUI()._startKOmcAnimate = true;
        SoundCtrl.I.playStartSound("l_108")
    }

    public frame190() {
        this._ui.stop();
        GameUI.I.getUI().koBack()
        //GameEvent.dispatchEvent2(egret.Event.COMPLETE)
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }

    public frame200() {
        this.winnermc = this._ui.getChildMovie("winnermc")
        if (this.winnermc) {
            this.winnermc.x = this.winnerX;
            this.winnermc.y = this.winnerY;
            this.winnermc.isPerfect = this._ui.isPerfect;
            this.winnermc.addFrameScript(this, [0, this.wframe1, 26, this.wframe29, 55, this.wframe56])
        }
        GameUI.I.getUI()._winnerAnimate = true;
        return;
    }

    public frame201() {
        if (this.winnermc) {
            this.winnermc.x = this.winnerX;
            this.winnermc.y = this.winnerY;
            //this.winnermc.isPerfect = this.perfect;
        }
        return;
    }

    public frame210() {
        var loc1;
        this._ui.stop();
        // this.winnermc.addEventListener(flash.events.Event.COMPLETE, function (arg1:flash.events.Event):void
        // {
        //     dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        //     return;
        // }, false, 0, true)
        return;
    }

    public frame263() {
        this._ui.stop();
        GameUI.I.getUI().timeoverBack()

        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }

    public frame309() {
        this._ui.stop();
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }

    //winner 
    //winner 
    public wframe1() {
        this.winnermc.isPerfect = this._ui.isPerfect;
        GameUI.I.getUI()._winnerAnimate = false;
        return;
    }

    public wframe29() {
        if (!this.winnermc.isPerfect) {
            let curFrame = this.winnermc.getCurrFrame()
            this.winnermc.stop();
            this.winnermc.gotoAndStop(curFrame)
            //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        }
        return;
    }

    public wframe56() {
        let curFrame = this.winnermc.getCurrFrame()
        this.winnermc.stop();
        this.winnermc.gotoAndStop(curFrame)
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    }

}
