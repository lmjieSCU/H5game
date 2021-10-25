/**初始化工作
 * 游戏的起点
 * 负责各个单例初始化以及加载游戏进度
 */
class initScene extends Scene {

    public constructor() {
        super();
        return;
    }

    public onEnter() {
        // egret.localStorage.clear();
        Model.init();
        GameModule.getInstance().init();
        EndModule.getInstance().init();
        MapModule.getInstance().init();
        MenuModule.getInstance().init();
        ShopModule.getInstance().init();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MENU_UI));    //初始化成功,打开菜单

    }

    public onExit() {
    }
}