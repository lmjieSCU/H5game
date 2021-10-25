class NewDontPlay extends Scene {
    public constructor() {
        super();
    }

    public static titleNum = 0;

    public onEnter() {
        let text: egret.TextField = UI.addText(this, "请先进行3次对局胜利之后解锁该模式!!", UI.WINSIZE_W/2, UI.WINSIZE_H/4 + 50, true, 20, 0xffffff);
        egret.Tween.get(text).to({alpha: 0}, 2000, egret.Ease.sineIn).call(() => {
            SceneManager.getInstance().RemoveLayer(this);
        },this);
    }

    onExit() {}
}