class GameModule extends BaseModule {

    public static _instance: GameModule;

    public constructor() {
        super();
        return;
    }

    public dispose(): void {
        super.dispose();
        return;
    }

    public init(): void {
        EventManager.addEventListener(GameEvents.OPEN_GAME_UI, this.openGameUI, this);
        EventManager.addEventListener(GameEvents.OPEN_MISSION_UI, this.openMissionUI, this);
        EventManager.addEventListener(GameEvents.OPEN_PAUSE_UI, this.openPauseUI, this);
        return;
    }

    public openPauseUI(): void {
        let pausePanel = new PausePanel();
        GameCtrl.I._gamestate.addChild(pausePanel);
        pausePanel.init();
        return;
    }

    public openMissionUI(): void {
        let missonPanel = new MissonPanel();
        GameCtrl.I._gamestate.addChild(missonPanel);
        missonPanel.init();
        return;
    }

    public openGameUI(): void {
        SceneManager.I.ChangeScene(new GameScene)
        return;
    }

    public static getInstance(): GameModule {
        if (GameModule._instance == null) {
            GameModule._instance = new GameModule();
        }
        return GameModule._instance;
    }
}
