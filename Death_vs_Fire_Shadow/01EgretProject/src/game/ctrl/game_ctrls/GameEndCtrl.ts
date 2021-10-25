class GameEndCtrl {
    private _winner: FighterMain;
    private _loser: FighterMain;
    private _step: number;
    public _isRender: boolean;
    private _holdFrame: number;
    private _drawGame: boolean;

    public constructor() {
        return;
    }// end function

    public initlize(param1: FighterMain, param2: FighterMain): void {
        GameCtrl.I.gameRunData.setAllowLoseHP(false);
        this._winner = param1;
        this._loser = param2;
        this._step = 0;
        this._isRender = true;
        return;
    }// end function

    public drawGame(): void {
        GameCtrl.I.gameRunData.setAllowLoseHP(false);
        this._drawGame = true;
        this._step = 0;
        this._isRender = true;
        return;
    }// end function

    public destory(): void {
        this._winner = null;
        this._loser = null;
        return;
    }// end function

    public render(): boolean {
        if (!this._isRender) {
            return false;
        }
        this._holdFrame = (this._holdFrame - 4);
        if (this._holdFrame > 0) {
            return false;
        }
        //屏蔽
        GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        if (this._drawGame) {
            return this.renderDrawGame();
        }
        return this.renderEND();
    }// end function

    private renderDrawGame(): boolean {
        switch (Number(this._step)) {
            case 0:
                GameUI.I.getUI().showEnd((e) => { this._holdFrame = 0 }, { "drawGame": true });
                this._step = 1;
                this._holdFrame = 15 * GameConfig.FPS_GAME;
                break;
            case 1:
                this._isRender = false;
                GameUI.I.getUI().clearStartAndEnd();
                break;
        }
        return true;
    }// end function

    private renderEND(): boolean {  
        console.log("renderEND:  ",this._step)
        switch (Number(this._step)) {
            //UI提示time over / ko,只会执行一次
            case 0:
                GameUI.I.getUI().showEnd((e) => { this._holdFrame = 0 }, {
                    "winner": this._winner,
                    "loser": this._loser
                });
                this._step = 1;
                this._holdFrame = 15 * GameConfig.FPS_GAME;
                break;
            //胜者造型
            case 1:
                if (!FighterActionState.isAllowWinState(this._winner.actionState)) {
                    return false;
                }
                this._winner.win();
                this._holdFrame = 3 * GameConfig.FPS_GAME;
                this._step = 2;
                var rundata: GameRunDataVO = GameCtrl.I.gameRunData;
                var winner: FighterMain = rundata.lastWinner;
                if (GameMode.isTeamMode() || GameMode.currentMode == GameMode.SURVIVOR) {
                    var timeRate: number = rundata.gameTime == -1 ? 1 : Number(rundata.gameTime / rundata.gameTimeMax);
                    var addHPMax: number = winner.hpMax * 0.2;
                    var addHP: number = addHPMax * timeRate;
                    if (addHP < winner.hpMax * 0.05) {
                        addHP = winner.hpMax * 0.05;
                    }
                    winner.hp = winner.hp + addHP;
                }
                rundata.lastWinnerHp = winner.hp;
                break;
            case 2:
                this._step = 22;
                this._winner = null;
                this._loser = null;
                this._step = 3;
                StateCtrl.I.transIn(function (): void {
                    this._step = 3;
                }, false);
                break;
            case 3:
                this._isRender = false;
                GameUI.I.getUI().clearStartAndEnd();
                GameUI.I.getUI().fadOut(false);
                break;
        }
    }// end function

    public skip(): void {
        if (this._step == 2) {
            this._holdFrame = 0;
        }
        return;
    }// end function

}
