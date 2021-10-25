/**铁丝 */
class IronWire extends Elements {

    public row: number;

    public col: number;

    public _dir: number;

    public img1: egret.Bitmap;

    public img2: egret.Bitmap;

    public static pool: BasePool = new BasePool(IronWire, 20);

    public constructor() {
        super();
        this.img1 = UI.addPic("ironWire_png", true, this);
        UI.setXandY(this.img1, -37, -24);
        this.img2 = UI.addPic("ironWire_png2", true, this);
        UI.setXandY(this.img2, -32, 30);
        // this.img1 = com.popchan.framework.utils.ToolKit.createImage(this, com.popchan.framework.core.Core.texturesManager.getTexture("ironWire"), -37, -24);
        // this.img2 = com.popchan.framework.utils.ToolKit.createImage(this, com.popchan.framework.core.Core.texturesManager.getTexture("ironWire2"), -32, 30);
        return;
    }

    public get dir(): number {
        return this._dir;
    }

    public set dir(arg1: number) {
        this._dir = arg1;
        this.img1.visible = arg1 == 1;
        this.img2.visible = arg1 == 2;
        return;
    }
}
