class Eat extends Elements {

    public row: number;

    public col: number;

    public _vx: number;

    public _vr: number;

    public _vy: number;

    public _count: number;

    public static pool: BasePool = new BasePool(Eat, 10);

    public constructor() {
        super();
        UI.addPic("eat_png", true, this);
        return;
    }

    public doAnimation(): void {
        let loc1 = -1;
        if (this.col >= 4) {
            loc1 = 1;
        }
        this._vx = 3;
        this._vr = 0.1;
        if (loc1 == -1) {
            this._vx = -3;
            this._vr = -0.1;
        }
        this._count = 0;
        this._vy = Math.random() * -4;
        GameRender.I.Add(this, this.update)
        SoundCtrl.I.playmusic("brickthrow");
        return;
    }

    public zoom(): void {
        return;
    }

    public zoomOutIn(): void {
        this.scaleX = 0;
        this.scaleY = 0;
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 100);
        return;
    }

    public zoomIn(): void {
        this.scaleX = 0;
        this.scaleY = 0;
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 200);
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
            GameRender.I.Remove(this);
            Eat.pool.put(this);
            this.parent.removeChild(this);
        }
        return;
    }

    public reset(): void {
        this.rotation = 0;
        return;
    }


}
