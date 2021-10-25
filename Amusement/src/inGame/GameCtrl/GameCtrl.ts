/**游戏逻辑控制器 */
class GameCtrl {
    public static instance: GameCtrl;
    public _gamestate: GameState;
    public _startCtrl: GameStartCtrl;
    public _endCtrl: GameEndCtrl;
    public _fightCtrl: FightCtrl;
    private _running: boolean = false;

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



    public initlize(gamestate: GameState) {
        this._gamestate = gamestate;
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
        if (this._fightCtrl.newGamed) {
            this._fightCtrl.render();
        }
    }

    public GameStart(isnewlevel: boolean = true) {
        this._running = true;
        this._fightCtrl.reset();
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


    public freshTextFieldAnchorOff(field: any) {
        field.anchorOffsetX = field.width / 2;
        field.anchorOffsetY = field.height / 2;
    }

}