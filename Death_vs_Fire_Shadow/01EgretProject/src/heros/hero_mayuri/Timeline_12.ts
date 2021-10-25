namespace hero_mayuri{
    export class Timeline_12{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 39, this.frame40, 41, this.frame42, 54, this.frame55]);
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
            this.attacker_ctrler.move(10, 0);
            return;
        }// end function

        frame40()
        {
            this.attacker_ctrler.damping(2, 0);
            return;
        }// end function

        frame42()
        {
            this.attacker_ctrler.effect.shine(4580164);
            return;
        }// end function

        frame55()
        {
            this.attacker_ctrler.endAct();
            return;
        }// end function

    }
}
