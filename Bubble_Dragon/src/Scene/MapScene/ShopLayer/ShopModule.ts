class ShopModule extends BaseModule {

    public static _instance: ShopModule;

    constructor() {
        super();
        return;
    }

    public init(): void {
        EventManager.addEventListener(GameEvents.OPEN_SHOP_UI, this.openShopUI, this);
        return;
    }

    public dispose(): void {
        ShopModule._instance = null;
        return;
    }

    public openShopUI() {
        SceneManager.getInstance().AddLayer(new ShopLayer);
        return;
    }

    public static getInstance(): ShopModule {
        if (ShopModule._instance == null) {
            ShopModule._instance = new ShopModule();
        }
        return ShopModule._instance;
    }

}