class GameModule extends BaseModule {

    public static _instance: GameModule;

    public constructor() {
        super();
        return;
    }



    public init(): void {
        EventManager.addEventListener(GameEvents.OPEN_GAME_UI, this.openGameUI, this);
        EventManager.addEventListener(GameEvents.OPEN_TIP_UI, this.openTIPUI, this);
        EventManager.addEventListener(GameEvents.OPEN_PAUSE_UI, this.openPauseUI, this);
        return;
    }

    public dispose(): void {
        GameModule._instance = null;
        return;
    }

    public openPauseUI(): void {
        SceneManager.getInstance().AddLayer(new PauseLayer);
        return;
    }

    public openTIPUI(): void {
        SceneManager.getInstance().AddLayer(new GameTipLayer);
        return;
    }

    public openGameUI(): void {
        SceneManager.getInstance().ChangeScene(new GameScene);
        return;
    }

    public static getInstance(): GameModule {
        if (GameModule._instance == null) {
            GameModule._instance = new GameModule();
        }
        return GameModule._instance;
    }
}
