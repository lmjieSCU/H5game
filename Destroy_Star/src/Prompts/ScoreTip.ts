class ScoreTip extends egret.TextField {
    private speedx: number;
    private speedy: number;
    private renderfun: any;
    private renderFrame: number = 0;

    constructor() {
        super();
        this.renderFrame = 0;
        this.textColor = 0x1ffff1;
        this.size = 25;
    }

    public play() {
        this.speedx = (UI.WINSIZE_W * 2 / 5 - this.x) / 20;
        this.speedy = (UI.WINSIZE_H / 15 - this.y) / 20;
        this.renderfun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
    }

    private render() {
        if (this.renderFrame < 20) {
            this.x = this.x + this.speedx;
            this.y = this.y + this.speedy;
            this.renderFrame++;
        } else {
            this.destroy();
        }
    }

    public destroy() {
        this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
        this.parent.removeChild(this);

    }
}