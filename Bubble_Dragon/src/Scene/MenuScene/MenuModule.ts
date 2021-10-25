class MenuModule extends BaseModule {

    public static _instance: MenuModule;

    public constructor() {
        super();
        return;
    }

    public static getInstance(): MenuModule {
        if (MenuModule._instance == null) {
            MenuModule._instance = new MenuModule();
        }
        return MenuModule._instance;
    }



    public init(): void {
        EventManager.addEventListener(GameEvents.OPEN_MENU_UI, this.openUI, this);
        return;
    }

    public openUI(): void {
        SceneManager.getInstance().ChangeScene(new menuScene);
        return;
    }

    public dispose(): void {
        MenuModule._instance = null;
        return;
    }
}
