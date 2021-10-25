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
var MenuModule = (function (_super) {
    __extends(MenuModule, _super);
    function MenuModule() {
        var _this = _super.call(this) || this;
        return _this;
    }
    MenuModule.getInstance = function () {
        if (MenuModule._instance == null) {
            MenuModule._instance = new MenuModule();
        }
        return MenuModule._instance;
    };
    MenuModule.prototype.init = function () {
        EventManager.addEventListener(GameEvents.OPEN_MENU_UI, this.openUI, this);
        return;
    };
    MenuModule.prototype.openUI = function () {
        SceneManager.getInstance().ChangeScene(new menuScene);
        return;
    };
    MenuModule.prototype.dispose = function () {
        MenuModule._instance = null;
        return;
    };
    return MenuModule;
}(BaseModule));
__reflect(MenuModule.prototype, "MenuModule");
//# sourceMappingURL=MenuModule.js.map