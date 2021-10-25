/**游戏主界面 */
class GameScene extends Scene {
    public _GameState: GameState;
    //
    public constructor() {
        super();
    }
    //


    protected onEnter() {
        // SoundCtrl.I.playbgSound("bgsound");
        this._GameState = new GameState();
        this._GameState.build();
        this.addChild(this._GameState);
    }




    protected onExit() {
    }

}


