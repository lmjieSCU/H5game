namespace hero_Asuna{
    export class Timeline_1356{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2]);
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
            this.attacker_ctrler.endAct();
            return;
        }// end function
    }
}
