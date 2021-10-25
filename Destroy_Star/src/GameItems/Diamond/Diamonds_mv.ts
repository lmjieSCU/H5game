/**Diamonds的mv子动画帧事件 */
class Diamonds_mv {
    private mc: zmovie.ZMovieClip;
    private renderfun: any;
    private renderFrame: number = 0;
    private father: Diamonds;
    private label: string;



    constructor(_gz: Diamonds) {
        this.father = _gz;
        this.mc = this.father.getChildBymcName("mv");
        this.renderfun = null;
        this.mc.isLoop = false;
        this.mc.addFrameScript(this, [0, this.frame1, 3, this.frame4, 15, this.frame16, 32, this.frame33, 52, this.frame53]);
    }

    /**mv动画
     * @label:动画标签
     * 向右
     * 向下
     * 向左
     */
    public Animation(label: string) {
        this.label = label;
        this.mc.gotoAndStop(label);
        this.mc.getChildBymcName("mc").gotoAndStop(this.father.color);
        if (this.renderfun == null) {
            this.renderfun = this.render.bind(this);
            this.mc.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
        }
    }

    private render() {
        this.mc.nextFrame();
        this.mc.getChildBymcName("mc").gotoAndStop(this.father.color);
        this.father.mv_currframe = this.mc.currFrame + 1;
    }

    private stopAnimation(): void {
        if (this.renderfun != null) {
            this.mc.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
            this.renderfun = null;
            // this.father.x = (this.father.dx + 1) * UI.WINSIZE_W / 11;
            // this.father.y = (this.father.dy - 10) * UI.WINSIZE_W / 11 + UI.WINSIZE_H;
        }
    }

    private frame1(): void {
        this.father.mv_currframe = 1;
        this.mc.getChildBymcName("mc").gotoAndStop(this.father.color);
    }



    private frame4(): void {
        this.mc.stop();
    }

    private frame16(): void {
        this.stopAnimation();
        this.mc.gotoAndStop(1);
    }

    private frame33(): void {
        this.stopAnimation();
        this.mc.gotoAndStop(1);
    }

    private frame53(): void {
        this.stopAnimation();
        this.mc.gotoAndStop(1);
    }


}