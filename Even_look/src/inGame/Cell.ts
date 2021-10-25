/**供点击的水果单元 */
class Cell extends egret.MovieClip {
    private _dx: number;
    private _dy: number;
    private _typeid: number;
    public oldx: number;
    public oldy: number;



    constructor() {
        var data = RES.getRes("Fruit_json");
        var txtr = RES.getRes("Fruit_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        super(mcFactory.generateMovieClipData("Fruit"));
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.focusOn, this);
        this.$setTouchEnabled(true);
    }



    public init(dx: number = 0, dy: number = 0, typeid: number = 0): void {
        this._dx = dx;
        this._dy = dy;
        this._typeid = typeid;
        GameCtrl.I.setposition(this, dx, dy);
        this.gotoAndStop(this._typeid);
    }



    public getNPoint(): NPoint {
        return new NPoint(this._dx, this._dy);
    }

    public get dx(): number {
        return this._dx;
    }

    public set dx(x: number) {
        this._dx = x;
    }

    public get dy(): number {
        return this._dy;
    }

    public set dy(y: number) {
        this._dy = y;
    }

    public get typeid(): number {
        return this._typeid;
    }

    public focusOn(): void {
        if (this.stage == null) {
            return;
        }
        GameCtrl.I._gridCtrl.clickOneCell(this);
    }


}