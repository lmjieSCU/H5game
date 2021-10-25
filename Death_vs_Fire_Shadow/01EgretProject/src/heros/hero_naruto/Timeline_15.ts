/*
*cbs子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
namespace hero_naruto {

    export class Timeline_15 {
        private attacker_ctrler: FighterAttackerCtrler;
        private mc: zmovie.ZMovieClip;

        constructor(_attackerCtrl: FighterAttackerCtrler) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 39, this.frame40]);
        }

        public frame1() {
            return;
        }

        public frame40()
        {
            this.attacker_ctrler.removeSelf();
            return;
        }// end function


        public setAttackerCtrler(param: FighterAttackerCtrler): void {
            this.attacker_ctrler = param;
        }

    }
}