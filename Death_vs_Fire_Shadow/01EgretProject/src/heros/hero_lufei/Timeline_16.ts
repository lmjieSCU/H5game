namespace hero_lufei{
    export class Timeline_16{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;
        public yy : number;
        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [ 0, this.frame1, 26, this.frame27]);
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

        frame27()
        {
            this.attacker_ctrler.endAct();
            return;
        }// end function

    }
}
