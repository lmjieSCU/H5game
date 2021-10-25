var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**初始化工作
 * 游戏的起点
 * 负责各个单例初始化以及加载游戏进度
 */
var initScene = (function (_super) {
    __extends(initScene, _super);
    function initScene() {
        var _this = _super.call(this) || this;
        return _this;
    }
    initScene.prototype.onEnter = function () {
        // egret.localStorage.clear();
        Model.init();
        GameModule.getInstance().init();
        EndModule.getInstance().init();
        MapModule.getInstance().init();
        MenuModule.getInstance().init();
        ShopModule.getInstance().init();
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MENU_UI)); //初始化成功,打开菜单
    };
    initScene.prototype.onExit = function () {
    };
    return initScene;
}(Scene));
__reflect(initScene.prototype, "initScene");
//# sourceMappingURL=initScene.js.map