namespace hero_juggo{
    export class Timeline_11{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 4, this.frame5, 5, this.frame6]);
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
            this.attacker_ctrler.move(30, 0);
            this.attacker_ctrler.setHitTarget("hitmc", "hit");
            this.attacker_ctrler.setCrossMap(true);
            return;
        }// end function

        frame5()
        {
            this.attacker_ctrler.stop();
            return;
        }// end function

        frame6()
        {
            if (this.attacker_ctrler.owner_mc_ctrler)
            {
                let tu = this.attacker_ctrler.owner_mc_ctrler.getAttacker("tu");
                if (tu)
                {
                    tu.gotoAndPlay("bow");
                }
            }
            this.attacker_ctrler.move(0, 0);
            return;
        }// end function

    }
}
