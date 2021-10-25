/**实现各场景的切换,资源的释放 
 * 单例*/

class SceneManager {
    private static instance: SceneManager = null;
    public currScene: Scene;
    public rootLayer: egret.DisplayObjectContainer;//起始场景

    private constructor() {
    }

    public static get I() {
        if (this.instance == null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    }

    public ChangeRoot(root: egret.DisplayObjectContainer) {
        this.rootLayer = root;
    }

    public ChangeScene(scene: Scene) {
        if (this.currScene != null) {
            this.rootLayer.removeChild(this.currScene);
        }
        this.rootLayer.addChild(scene);
        this.currScene = scene;
    }
}