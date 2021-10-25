namespace hero_sakura{
    export class Timeline_6{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 5, this.frame6, 9, this.frame10, 14, this.frame15, 24, this.frame25]);
            return;
        }// end function
        
        public setAttackerCtrler(param1):void{
            this.attacker_ctrler = param1;
            return;
        }// end function

        frame1()
        {
            return;
        }// end function

        frame2()
        {
            this.attacker_ctrler.move(12, -7);
            this.attacker_ctrler.damping(0, 1);
            return;
        }// end function

        frame6()
        {
            this.attacker_ctrler.setTouchFloor("touchfloor");
            return;
        }// end function

        frame10()
        {
            this.attacker_ctrler.stop();
            return;
        }// end function

        frame15()
        {
            this.attacker_ctrler.move(0, 0);
            this.attacker_ctrler.effect.shake(0, 3);
            return;
        }// end function

        frame25()
        {
            this.attacker_ctrler.endAct();
            return;
        }// end function

    }
}
