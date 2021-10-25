class EndModule extends BaseModule {

    public static _instance: EndModule;

    public constructor() {
        super();
        return;
    }

    public dispose(): void {
        super.dispose();
        return;
    }

    public init(): void {
        super.init();
        EventManager.addEventListener(GameEvents.OPEN_GAME_END_UI, this.showGameEndView, this);
        return;
    }

    public showGameEndView(e: egret.Event): void {
        let gameEndPanel = new GameEndPanel();
        GameCtrl.I.addGameSprite(gameEndPanel);
        return;
    }


    public static getInstance(): EndModule {
        if (EndModule._instance == null) {
            EndModule._instance = new EndModule();
        }
        return EndModule._instance;
    }

}
