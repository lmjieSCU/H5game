/*
*招1子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
namespace hero_sasuke_xz {

    export class Timeline_13 {
        private attacker_ctrler: FighterAttackerCtrler;
        private mc: zmovie.ZMovieClip;

        constructor(_attackerCtrl: FighterAttackerCtrler) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 35, this.frame36, 37, this.frame38, 47, this.frame48]);
        }

        public frame1() {
            return;
        }

        public frame2() {
            this.attacker_ctrler.move(8, 0);
            this.attacker_ctrler.setHitTarget("zh10atm", "hit");
            return;
        }

        public frame36() {
            this.attacker_ctrler.removeSelf();
            return;
        }

        public frame38() {
            this.attacker_ctrler.damping(10, 0);
            return;
        }

        public frame48() {
            this.attacker_ctrler.endAct();
            return;
        }


        public setAttackerCtrler(param: FighterAttackerCtrler): void {
            this.attacker_ctrler = param;
        }

    }
}