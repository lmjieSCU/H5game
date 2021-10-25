/*
*必杀子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
namespace hero_sasuke_xz {

    export class Timeline_15 {
        private attacker_ctrler: FighterAttackerCtrler;
        private mc: zmovie.ZMovieClip;

        constructor(_attackerCtrl: FighterAttackerCtrler) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 22, this.frame23, 24, this.frame25, 27, this.frame28]);;
        }

        public frame1() {
            return;
        }

        public frame2() {
            this.attacker_ctrler.move(13, 0);
            this.attacker_ctrler.setHitTarget("mian", "hit");
            return;
        }

        public frame23() {
            this.attacker_ctrler.removeSelf();
            return;
        }

        public frame25() {
            this.attacker_ctrler.move(5, 0);
            this.attacker_ctrler.damping(0.1, 0);
            return;
        }

        public frame28() {
            this.attacker_ctrler.endAct();
            return;
        }

        public setAttackerCtrler(param: FighterAttackerCtrler): void {
            this.attacker_ctrler = param;
        }
    }
}
