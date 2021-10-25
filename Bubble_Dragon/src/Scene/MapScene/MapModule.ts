/**负责监听Map事件
 * 创建MapScene实例
 */
class MapModule extends BaseModule {

    public static _instance: MapModule;

    public constructor() {
        super();
        return;
    }

    public dispose(): void {
        MapModule._instance = null;
        return;
    }

    public init(): void {
        super.init();
        EventManager.addEventListener(GameEvents.OPEN_MAP_UI, this.openMapUI, this);
        return;
    }

    public openMapUI(): void {
        SceneManager.getInstance().ChangeScene(new MapScene);
        return;
    }

    public static getInstance(): MapModule {
        if (MapModule._instance == null) {
            MapModule._instance = new MapModule();
        }
        return MapModule._instance;
    }

}
