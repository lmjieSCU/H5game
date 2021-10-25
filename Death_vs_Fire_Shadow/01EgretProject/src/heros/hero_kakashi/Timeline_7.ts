/*
*招2子骨骼动画对应的帧事件
*/
namespace hero_kakashi {
    export class Timeline_7 {
        private attacker_ctrler: FighterAttackerCtrler;
        private mc: zmovie.ZMovieClip;


        constructor(_attackerCtrl: FighterAttackerCtrler) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 9, this.frame10, 16, this.frame17, 29, this.frame30, 39, this.frame40, 61, this.frame62, 62, this.frame63]);
        }

        public frame1() {
            return;
        }// end function

        public frame10() {
            this.attacker_ctrler.move(20, 0);
            this.attacker_ctrler.setHitTarget("zh20atm", "hit");
            return;
        }// end function

        public frame17() {
            this.attacker_ctrler.damping(5, 0);
            return;
        }// end function

        public frame30() {
            this.attacker_ctrler.move(15, 0);
            return;
        }// end function

        public frame40() {
            this.attacker_ctrler.damping(5, 0);
            return;
        }// end function

        public frame62() {
            this.attacker_ctrler.removeSelf();
            return;
        }// end function

        public frame63() {
            this.attacker_ctrler.damping(5, 0);
            return;
        }// end function

        public setAttackerCtrler(param: FighterAttackerCtrler): void {
            this.attacker_ctrler = param;
        }
    }
}