/**小五角星 */
class FivepointStar extends zmovie.ZMovieClip {
    public color: number = 0;
    private dy: number = 0;
    public fun: any;


    constructor(imgArr: any, libObj: any, mcName: string = null, scale_: number = 1, _name: string = "",color:number) {
        super(imgArr, libObj, mcName, scale_, _name);
        this.addFrameScript(this, [59, this.frame60]);
        this.color = color;
        this.fun = this.Fun.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.fun, this);
    }

    private Fun() {
        this.getChildBymcName("mc_1").gotoAndStop(this.color);
        this.nextFrame();
        if (this.y < UI.WINSIZE_H * 3 / 5 || this.y > 50) {
            this.y = this.y + this.dy;
            this.dy = this.dy + 1;
        }
        else {
            this.destroy();
        } // end else if
    }

    private frame60() {
        // this.stop();
        this.destroy();
    }

    public destroy() {
        this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.fun, this);
        this.parent.removeChild(this);
    }
}