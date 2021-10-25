/**实现各场景的切换,资源的释放 
 * 单例
 * Scene:切换
 * Layer:添加
 * */

class SceneManager {
    private static instance: SceneManager = null;
    public currScene: Scene;
    public rootScene: egret.DisplayObjectContainer;//起始场景

    private constructor() {
    }

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new SceneManager();
        }
        return this.instance;
    }

    public ChangeRoot(root: egret.DisplayObjectContainer) {
        this.rootScene = root;
        return;
    }

    public ChangeScene(scene: Scene) {
        if (this.currScene != null) {
            this.rootScene.removeChild(this.currScene);
        }
        this.currScene = scene;
        this.rootScene.addChild(scene);

        return;
    }


    public AddLayer(layer: Scene) {
        if (this.currScene == null) {
            return;
        }
        this.currScene.addChild(layer);
        return;
    }

    public RemoveLayer(layer: Scene) {
        if (this.currScene == null) {
            return;
        }
        if (layer.parent == this.currScene) {
            this.currScene.removeChild(layer);
            return;
        } else {
            layer.parent.removeChild(layer);
            return;
        }
    }




}