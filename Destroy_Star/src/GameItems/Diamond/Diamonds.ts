/**星星*/
class Diamonds extends zmovie.ZMovieClip {
    public dx: number;      //10*10棋盘二维坐标x
    public dy: number;      //10*10棋盘二维坐标y
    public color: number;      //颜色
    public dj: number;
    public died: boolean;         //死亡    
    public jg: number;
    public parent: any;
    private mvAnimation: Diamonds_mv;
    public mv_currframe: number = 1;
    private renderSci: renderFrameScript;
    constructor(imgArr: any, libObj: any, mcName: string = null, scale_: number = 1, _name: string = "") {
        super(imgArr, libObj, mcName, scale_, _name);
        this.isLoop = false;

    }

    public initlize(dx: number, dy: number, color: number, dj: number, died: boolean, jg: number, parent: any) {
        this.mvAnimation = new Diamonds_mv(this);
        this.dx = dx; this.dy = dy; this.color = color; this.dj = dj;
        this.died = died; this.jg = jg; this.parent = parent;
        this.renderSci = null;
        this.addFrameScript(this, [2, this.frame3, 22, this.frame23, 42, this.frame43, 62, this.frame63,
            82, this.frame83, 99, this.frame100, 109, this.frame110]);
    }

    private frame() {
        this.getChildBymcName("mv").gotoAndStop(this.mv_currframe);
        this.getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(this.color);
    }

    public MVAnimation(label: string): void {
        this.mvAnimation.Animation(label);
    }




    public Animation(frame: number | string): void {
        this.gotoAndStop(frame);
        DiamondRender.AddDiamond(this, this.render);
        DiamondRender.Animation(this.stage);

    }

    //
    private render() {
        if (this.currFrame != 2) {
            this.nextFrame();
            this.getChildBymcName("mv").gotoAndStop(this.mv_currframe);
            this.getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(this.color);
        }else{
            this.checkCurrFrameFunc();
        }
    }


    private stopAnimation(): void {
        DiamondRender.RemoveDiamond(this);
    }


    private frame3() {
        if (this.jg <= 0) {
            this.gotoAndStop(this.parent.gh);
        }
        else {
            this.jg = this.jg - 1;
            // this.gotoAndStop(2);
        } // end else if
    }


    private frame23() {
        this.stopAnimation();
    }

    private frame43(): void {
        this.stopAnimation();
    }
    private frame63(): void {
        this.stopAnimation();
    }

    private frame83(): void {
        this.stopAnimation();
    }

    private frame100() {
        if (this.dj <= 0) {
            this.gotoAndStop("xc");
            // this.parent.fuzhixingxing(this.x, this.y, this.color);
        }
        else {
            this.dj = this.dj - 1;
            this.Animation("sp");
        } // end else if

    }

    private frame110(): void {
        this.stopAnimation();
    }

}
