/*
*cbs子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
namespace hero_lee {

    export class Timeline_22 {

        public mc: zmovie.ZMovieClip;

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [22, this.frame23]);
        }

        public frame23() {
            this.mc.stop();
            this.mc.parent.removeChild(this.mc);
            return;
        }
    }
}