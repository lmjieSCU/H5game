/**进度条 */
class HProgressBar extends Elements {

    public rect: egret.Rectangle;

    public progressBg: egret.Bitmap;

    public progressBar: egret.Bitmap;

    public _ratio: number;

    public constructor() {
        super();
        this.progressBar = UI.addPic("res.progressBar", true, this);
        this.progressBg = UI.addPic("res.progressBg", true, this);
        this._ratio = 0;
        this.rect = new egret.Rectangle(0, 0, this.progressBar.width, this.progressBar.height);
        return;
    }

    public get ratio(): number {
        return this._ratio;
    }

    public set ratio(arg1: number) {
        if (arg1 > 1) {
            arg1 = 1;
        }
        this._ratio = arg1;
        this.rect.x = (arg1 - 1) * this.rect.width;
        this.progressBar.mask = this.rect;
        return;
    }

    public dispose(): void {
        this.rect = null;
        this.removeChildren();
        return;
    }

}
