class ExpEffect extends Elements {

    public imgs: Array<egret.Bitmap>;

    public scale: Array<number>;

    public vx: Array<number>;

    public vy: Array<number>;

    public speed: number;

    public renderFrame: number;

    constructor() {
        super();
        this.scale = [0.1, 0.2, 0.1, 0.1, 0.2, 0.2, 0.3, 0.3];
        this.vx = [1, 1, 2, 1, 2, 1, 0.5, 2];
        this.vy = [0.5, 2, 1, 2, 1, 0.6, 2, 1];
        this.speed = 7;
        this.renderFrame = 0;
        this.imgs = [];
        for (let i = 0; i < 16; i++) {
            this.imgs[i] = UI.addPic("res.exp1_res", true, this);
            UI.setscalXandY(this.imgs[i], this.scale[i % 8] * 3, this.scale[i % 8] * 3);
        }
        this.Animation();
        return;
    }


    public Animation() {
        GameRender.I.Add(this, this.render);
        return;
    }


    public render() {
        this.renderFrame = this.renderFrame + 1;
        if (this.renderFrame >= 10) {
            GameRender.I.Remove(this);
            this.parent.removeChild(this);
        }
        for (let i = 0; i < 16; i++) {
            this.imgs[i].x = this.imgs[i].x + Math.cos(i / 8 * Math.PI) * this.speed * this.vx[i%8];
            this.imgs[i].y = this.imgs[i].y + Math.sin(i / 8 * Math.PI) * this.speed * this.vy[i%8];
        }
    }
}