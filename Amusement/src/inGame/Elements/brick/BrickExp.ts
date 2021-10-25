/**Brick掉落动画
 * brick移去时生成brickExp
*/
class BrickExp extends Elements {

    public img: egret.Bitmap;

    public texture: any;

    public _vx: number;

    public _vr: number;

    public _vy: number;

    public _count: number;

    public static pool: BasePool = new BasePool(BrickExp, 81);


    public constructor() {
        super();
        this.img = new egret.Bitmap();
        // com.popchan.framework.manager.Debug.log("创建BrickExp");
        return;
    }

    public setInfo(life: number, arg2: number): void {
        switch (life) {
            case 2:
                this.img.texture = RES.getRes("brick2_png");
                this.img.anchorOffsetX = this.img.width / 2;
                this.img.anchorOffsetY = this.img.height / 2;
                break;
            case 1:
                this.img.texture = RES.getRes("brick1_png");
                this.img.anchorOffsetX = this.img.width / 2;
                this.img.anchorOffsetY = this.img.height / 2;
                break;
        }
        this.addChild(this.img);
        this._vx = 6;
        this._vr = 0.1;
        if (arg2 == -1) {
            this._vx = -6;
            this._vr = -0.1;
        }
        this._count = 0;
        this._vy = Math.random() * -6;
        GameRender.I.Add(this, this.update);
        SoundCtrl.I.playmusic("brickthrow")
        return;
    }

    public update(): void {
        let loc = 0;
        while (loc < 2) {
            this.x = this.x + this._vx;
            this.y = this.y + this._vy;
            this._vy = this._vy + 0.5;
            this.rotation = this.rotation + this._vr;
            loc++;
        }
        this._count = this._count + 1;
        if (this._count > 60) {
            GameRender.I.Remove(this)
            BrickExp.pool.put(this);
            this.parent.removeChild(this);
        }
        return;
    }
}
