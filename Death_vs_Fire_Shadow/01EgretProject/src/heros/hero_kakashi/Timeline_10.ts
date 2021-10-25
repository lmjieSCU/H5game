/*
*sbs子骨骼动画对应的帧事件
*/
namespace hero_kakashi {

    export class Timeline_10 {
        private attacker_ctrler: FighterAttackerCtrler;
        private mc: zmovie.ZMovieClip;

        constructor(_attackerCtrl: FighterAttackerCtrler) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2]);;
        }

        public frame1() {
            return;
        }// end function

        public frame2() {
            this.attacker_ctrler.move(20, 0);
            return;
        }// end function

        public setAttackerCtrler(param: FighterAttackerCtrler): void {
            this.attacker_ctrler = param;
        }
    }
}