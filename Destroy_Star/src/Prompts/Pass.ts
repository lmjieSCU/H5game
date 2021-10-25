class Pass {
    private renderfun: Function;
    private renderFrame: number = 0;
    private speedX: number = 0;
    public mc: egret.Bitmap;

    constructor() {
        this.speedX = UI.WINSIZE_W / 40;
        this.mc = new egret.Bitmap;
        this.mc.texture = RES.getRes("tongguo_png");
        UI.setXandY(this.mc, UI.WINSIZE_W, UI.WINSIZE_H / 3);
        UI.setscalXandY(this.mc, 2, 2)
    }

    public play(): void {
        this.renderfun = this.render.bind(this);
        this.mc.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);


    }

    private render(): void {
        this.renderFrame++;
        if (this.renderFrame > 130) {
            this.mc.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
            this.renderfun = null;
            this.renderFrame = 0;
            this.mc.parent.removeChild(this.mc);
            return;
        }
        if (this.renderFrame < 30 || this.renderFrame > 100) {
            this.mc.x = this.mc.x - this.speedX;
        }
    }
}