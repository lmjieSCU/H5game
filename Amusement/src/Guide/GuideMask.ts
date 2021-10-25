/**阴影mask*/
class GuideMask extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        return;
    }

    public createMask(arg1: Array<egret.Point>): void {
        let sp: egret.Sprite = new egret.Sprite();
        sp.graphics.beginFill(0xff0000);
        for (let loc in arg1) {
            let pos = GameCtrl.I._fightCtrl.getCandyPosition(arg1[loc].x, arg1[loc].y);
            sp.graphics.drawRect(pos.x - GameConst.CARD_W / 2, pos.y - GameConst.CARD_W / 2, GameConst.CARD_W, GameConst.CARD_W);
        }
        sp.graphics.endFill();
        this.addChild(sp);
        this.init(sp);

        return;
    }


    public clear() {
        this.removeChildren();
    }


    public init(dp: egret.DisplayObject): void {
        let container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        let bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0x000000, 0.8);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();

        container.addChild(bg);

        container.addChild(dp);

        dp.blendMode = egret.BlendMode.ERASE;

        let renderTexture: egret.RenderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(container);

        let bitmap: egret.Bitmap = new egret.Bitmap(renderTexture);
        this.addChild(bitmap);
        bitmap.touchEnabled = true;  //允许点击
        bitmap.pixelHitTest = true;  //镂空区域不响应点击，这样可以穿透点击到下面的背景
    }


}
