/**游戏逻辑控制器 */
class GameCtrl {
    public static instance: GameCtrl;
    public _gamestate: GameState;
    public _gridCtrl: GridCtrl;
    public _startCtrl: GameStartCtrl;
    public _endCtrl: GameEndCtrl;
    public _fightCtrl: FightCtrl;
    private _running: boolean = false;
    private _timeover: boolean = false;

    private constructor() {
    }


    public static get I(): GameCtrl {
        if (this.instance == null) {
            this.instance = new GameCtrl();
        }
        return this.instance;
    }


    public get running(): boolean {
        return this._running;
    }

    public set running(isrun: boolean) {
        this._running = isrun;
    }

    public get istimeover(): boolean {
        return this._timeover;
    }


    public timeover(): void {
        this._timeover = true;
        this._running = false;
        egret.setTimeout(this.GameEnd, this, 1000);
        return;
    }


    public initlize(gamestate: GameState) {
        this._gamestate = gamestate;
        this._gridCtrl = new GridCtrl();
        this._startCtrl = new GameStartCtrl();
        this._endCtrl = new GameEndCtrl();
        this._fightCtrl = new FightCtrl();
        GameRender.I.Add(this, this.render);
        this.GameStart();
    }

    public render() {
        EffectCtrl.I.render();
        if (!this._running) {
            return;
        }
        this._gridCtrl.render();
        this._fightCtrl.render();
    }

    public GameStart(isnewlevel: boolean = true) {
        this._running = false;
        this._timeover = false;
        this._fightCtrl.reset(isnewlevel);
        this._gridCtrl.reset(isnewlevel);
        this._startCtrl.dostartGame();
    }

    public GameEnd() {
        this._running = false;
        this._endCtrl.doGameEnd();
    }


    public addGameSprite(param1: egret.DisplayObject) {
        this._gamestate.addGameSprite(param1);
    }

    public removeGameSprite(param1: egret.DisplayObject) {
        this._gamestate.removeGameSprite(param1);
    }

    public setposition(param: egret.DisplayObject, dx: number, dy: number, isCell: boolean = true) {
        let s = Math.min(UI.WINSIZE_W / 8, UI.WINSIZE_H / 8);
        param.x = s * (dy + 0.5);
        param.y = s * (dx + 3.5);
        if (isCell) {
            param.scaleX = s / param.width;
            param.scaleY = s / param.height;
        }
        return;
    }

    public freshTextFieldAnchorOff(field: egret.TextField) {
        field.anchorOffsetX = field.width / 2;
        field.anchorOffsetY = field.height / 2;
    }

}