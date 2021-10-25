namespace hero_obito{
    export class Timeline_6{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 58, this.frame59]);
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

        frame59()
        {
            if (this.attacker_ctrler.owner_fighter_ctrler.target)
            {
                this.attacker_ctrler.owner_fighter_ctrler.target.visible = true;
            }
            return;
        }// end function

    }
}
