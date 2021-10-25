abstract class WindowLayer extends Scene {
    public constructor() {
        super();
    }

    onEnter() {
        let bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0x000000, 0.5);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        this.addChild(bg);
        UI.addClickAction(this, bg, () => {
            this.onClickBg();
        })
        bg.touchEnabled = true;
        this.onContent();
    }
    onExit() {

    }

    abstract onContent()

    abstract onClickBg()
}