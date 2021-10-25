/**糖果阴影背景 */
class TileBg extends Elements {

    public static pool: BasePool = new BasePool(TileBg, 81);
    public img: egret.Bitmap;

    public constructor() {
        super();
        this.img = UI.addPic("cube_png", true, this);
        return;
    }

    public reset(): void {
        return;
    }
}
