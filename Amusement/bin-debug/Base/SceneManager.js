/**实现各场景的切换,资源的释放
 * 单例*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
    }
    Object.defineProperty(SceneManager, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new SceneManager();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.prototype.ChangeRoot = function (root) {
        this.rootLayer = root;
    };
    SceneManager.prototype.ChangeScene = function (scene) {
        if (this.currScene != null) {
            this.rootLayer.removeChild(this.currScene);
        }
        this.rootLayer.addChild(scene);
        this.currScene = scene;
    };
    SceneManager.instance = null;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map