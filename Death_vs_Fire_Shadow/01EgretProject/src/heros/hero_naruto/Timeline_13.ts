/*
*sbs子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
namespace hero_naruto {

    export class Timeline_13 {
        private attacker_ctrler: FighterAttackerCtrler;
        private mc: zmovie.ZMovieClip;

        constructor(_attackerCtrl: FighterAttackerCtrler) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 50, this.frame51]);
        }

        public frame1() {
            return;
        }

        public frame51()
        {
            this.attacker_ctrler.endAct();
            return;
        }// end function


        public setAttackerCtrler(param: FighterAttackerCtrler): void {
            this.attacker_ctrler = param;
        }

    }
}