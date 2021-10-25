abstract class Scene extends egret.DisplayObjectContainer implements egret.DisplayObject {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);;
    }

    protected abstract onEnter();
    protected abstract onExit();
}