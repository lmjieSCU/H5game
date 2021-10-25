namespace hero_pain{
    export class Timeline_7{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 2, this.frame3, 14, this.frame15, 24, this.frame25]);
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

        frame3()
        {
            this.attacker_ctrler.move(5, 0);
            return;
        }// end function

        frame15()
        {
            this.attacker_ctrler.damping(1, 0);
            return;
        }// end function

        frame25()
        {
            this.attacker_ctrler.move(8, 0);
            this.attacker_ctrler.damping(0.8, 0);
            return;
        }// end function

    }
}
