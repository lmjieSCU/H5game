/*
*砍技2,第二个分身子动画对应的帧事件,以该attacker对象为参数找寻attackerctrl和对应zmovie.ZMovieClip
*/
namespace hero_naruto {

    export class Timeline_8 {
        private attacker_ctrler: FighterAttackerCtrler;
        private mc: zmovie.ZMovieClip;

        constructor(_attackerCtrl: FighterAttackerCtrler) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 14, this.frame15, 21, this.frame22]);
        }

        public frame1() {
            return;
        }

         public frame2()
        {
            this.attacker_ctrler.move(25);
            return;
        }// end function

        public frame15()
        {
            this.attacker_ctrler.damping(4);
            return;
        }// end function

        public frame22()
        {
            this.attacker_ctrler.endAct();
            return;
        }// end function

        public setAttackerCtrler(param: FighterAttackerCtrler): void {
            this.attacker_ctrler = param;
        }

    }
}