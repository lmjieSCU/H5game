class bi extends egret.Bitmap {
    private xspeed;
    private yspeed;
    private renderfun: Function;
    private renderFrame: number = 0;
    private index: number;
    private totalNum: number;


    constructor(index: number, totalNum: number) {
        super();
        this.index = index;
        this.totalNum = totalNum;
        this.texture = RES.getRes("bi_png");
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        UI.setXandY(this, UI.WINSIZE_W / (this.totalNum + 4) * (this.index + 1), UI.WINSIZE_H / 1.5);
        UI.setscalXandY(this, 2, 2);
        this.xspeed = (this.x - UI.WINSIZE_W) / 5;
        this.yspeed = (this.y - 20) / 5;
        this.renderFrame = 0;
    }

    public play(): void {
        this.renderfun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
    }

    private render(): void {
        if (this.renderFrame > 6) {
            GameModel.jinbi++;
            FinishScene.instance._jinbi.text = String(GameModel.jinbi);
            this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
            this.parent.removeChild(this);
            return;
        }
        this.x = this.x - this.xspeed;
        this.y = this.y - this.yspeed;
        this.renderFrame++;
        if (this.renderFrame == 4) {
            if (this.index < this.totalNum - 1) {
                FinishScene.instance.Arrb[this.index + 1].play();
            } else {
                FinishScene.instance.addBtn();
            }
        }
    }
}