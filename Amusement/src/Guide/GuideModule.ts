class GuideModule extends BaseModule {
    public static _instance: GuideModule;

    public constructor() {
        super();
        return;
    }

    public dispose(): void {
        super.dispose();
        EventManager.removeEventListener(GameEvents.OPEN_GUIDE, this.doGuide);
        return;
    }

    public init(): void {
        super.init();
        EventManager.addEventListener(GameEvents.OPEN_GUIDE, this.doGuide, this);
        return;
    }

    public doGuide(e:egret.Event): void {
        let arg1 = e.data;
        var loc1 = Config.guideConfig.getGuideList(arg1);
        GuideManager.instance.reset();
        GameCtrl.I._gamestate.addChild(GuideManager.instance.container);
        GuideManager.instance.setUp(loc1);
        GuideManager.instance.start();
        return;
    }

    public static getInstance(): GuideModule {
        if (GuideModule._instance == null) {
            GuideModule._instance = new GuideModule();
        }
        return GuideModule._instance;
    }
}
