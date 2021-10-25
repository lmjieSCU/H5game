
     class assist_madara_Timeline_2{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 11, this.frame12, 34, this.frame35]);
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

        frame12()
        {
            if (!this.attacker_ctrler.justHit("atm1"))
            {
                this.attacker_ctrler.gotoAndPlay("miss");
            }
            return;
        }// end function

        frame35()
        {
            //this.attacker_ctrler.removeSelf();
            return;
        }// end function

    }
