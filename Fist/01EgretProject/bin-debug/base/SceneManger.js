/**实现各场景的切换,资源的释放
 * 单例
 * Scene:切换
 * Layer:添加
 * */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    };
    SceneManager.prototype.ChangeRoot = function (root) {
        this.rootScene = root;
        return;
    };
    SceneManager.prototype.ChangeScene = function (scene) {
        if (this.currScene != null) {
            this.rootScene.removeChild(this.currScene);
        }
        this.currScene = scene;
        this.rootScene.addChild(scene);
        return;
    };
    SceneManager.prototype.AddLayer = function (layer) {
        if (this.currScene == null) {
            return;
        }
        this.currScene.addChild(layer);
        return;
    };
    SceneManager.prototype.RemoveLayer = function (layer) {
        if (this.currScene == null) {
            return;
        }
        if (layer.parent == this.currScene) {
            this.currScene.removeChild(layer);
            return;
        }
        else {
            layer.parent.removeChild(layer);
            return;
        }
    };
    SceneManager.instance = null;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManger.js.map