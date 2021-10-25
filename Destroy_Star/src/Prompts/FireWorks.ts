/**烟花 */
class FireWorks extends zmovie.ZMovieClip {

    private color: number;
    private renderfun: Function;


    constructor(imgArr: any, libObj: any, mcName: string = null, scale_: number = 1, _name: string = "", color: number) {
        super(imgArr, libObj, mcName, scale_, _name);
        this.addFrameScript(this, [109, this.frame120]);
        this.color = color;
        this.renderfun = this.render.bind(this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
    }

    private render() {
        this.nextFrame();
        this.nextFrame();
        (<zmovie.ZMovieClip>this.$children[0]).gotoAndStop(this.color);

    }

    private frame120(): void {
        this.stop();
        this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.renderfun, this);
        this.parent.removeChild(this);
    }
}