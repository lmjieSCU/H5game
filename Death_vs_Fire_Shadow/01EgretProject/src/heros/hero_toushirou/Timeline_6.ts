namespace hero_toushirou{
    export class Timeline_6{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;
        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 86, this.frame87]);
            return;
        }// end function
//
        public  setAttackerCtrler(param1) : void
        {
            this.attacker_ctrler = param1;
            return;
        }// end function

         frame1()
        {
            return;
        }// end function

         frame87()
        {
            this.attacker_ctrler.effect.shine();
            return;
        }// end function

    }
}
