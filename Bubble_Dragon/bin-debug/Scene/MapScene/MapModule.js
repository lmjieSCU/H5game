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
/**负责监听Map事件
 * 创建MapScene实例
 */
var MapModule = (function (_super) {
    __extends(MapModule, _super);
    function MapModule() {
        var _this = _super.call(this) || this;
        return _this;
    }
    MapModule.prototype.dispose = function () {
        MapModule._instance = null;
        return;
    };
    MapModule.prototype.init = function () {
        _super.prototype.init.call(this);
        EventManager.addEventListener(GameEvents.OPEN_MAP_UI, this.openMapUI, this);
        return;
    };
    MapModule.prototype.openMapUI = function () {
        SceneManager.getInstance().ChangeScene(new MapScene);
        return;
    };
    MapModule.getInstance = function () {
        if (MapModule._instance == null) {
            MapModule._instance = new MapModule();
        }
        return MapModule._instance;
    };
    return MapModule;
}(BaseModule));
__reflect(MapModule.prototype, "MapModule");
//# sourceMappingURL=MapModule.js.map