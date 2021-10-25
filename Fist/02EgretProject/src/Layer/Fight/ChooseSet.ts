class ChooseSet extends Scene {
    public constructor(parent: ChooseScene) {
        super();
        this._parent = parent;
    }

    public _parent: ChooseScene;

    onEnter() {
        let bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff, 0.5);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        this.addChild(bg);

        bg.touchEnabled = true;
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SceneManager.getInstance().RemoveLayer(this);
        }, this)

        let chooseMap = new ChooseMap(this._parent.playInfo.map , UI.WINSIZE_W/2, UI.WINSIZE_H/2, 200, 200, (map) => {
            this._parent.playInfo.map = map;
        }, this)
        chooseMap.anchorOffsetX = chooseMap.width/2;
        chooseMap.anchorOffsetY = chooseMap.height/2;
        this.addChild(chooseMap);
    }

    onExit() {}
}