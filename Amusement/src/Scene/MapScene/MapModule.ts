class MapModule extends BaseModule {

    public static _instance: MapModule;

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
        EventManager.addEventListener(GameEvents.OPEN_MAP_UI, this.openMapUI, this);
        return;
    }

    public openMapUI(): void {
        console.log("openMapUI")
        SceneManager.I.ChangeScene(new MapScene)
        return;
    }

    public static getInstance(): MapModule {
        if (MapModule._instance == null) {
            MapModule._instance = new MapModule();
        }
        return MapModule._instance;
    }

}
