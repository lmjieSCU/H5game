class Monster extends Elements {
    
    public row: number;

    public col: number;

    public _vx: number;

    public _vr: number;

    public _vy: number;

    public _count: number;

    public static pool: BasePool = new BasePool(Monster, 10);

    public constructor() {
        super();
        UI.addPic("moveable_png", true, this);
        return;
    }

    public doAnimation(): void {
        var loc1 = -1;
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
        GameRender.I.Add(this,this.update);
        SoundCtrl.I.playmusic("brickthrow");
        return;
    }

    public update(): void {
        this.x = this.x + this._vx;
        this.y = this.y + this._vy;
        this._vy = this._vy + 0.5;
        this.rotation = this.rotation + this._vr;
        this._count = this._count + 1;
        if (this._count > 60) {
            GameRender.I.Remove(this);
            Monster.pool.put(this);
            this.parent.removeChild(this);
        }
        return;
    }

    public reset(): void {
        this.rotation = 0;
        return;
    }

}
