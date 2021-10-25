namespace hero_juggo{
    export class Symbol1_10{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 15, this.frame16, 55, this.frame56]);
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

        frame16()
        {
            if (this.attacker_ctrler.justHit("zh2") && this.attacker_ctrler.owner_mc_ctrler)
            {
                this.attacker_ctrler.owner_mc_ctrler.gotoAndPlay("招22");
            }
            else
            {
                this.attacker_ctrler.gotoAndPlay("miss");
            }
            return;
        }// end function

        frame56()
        {
            this.attacker_ctrler.removeSelf();
            return;
        }// end function

    }
}
