namespace hero_gaara{
    export class Timeline_11{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 9, this.frame10, 61, this.frame62, 108, this.frame109]);
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

        frame10()
        {
            this.attacker_ctrler.stop();
            return;
        }// end function

        frame62()
        {
            this.attacker_ctrler.owner_fighter_ctrler.setTargetVelocity(0, -0.1);
            this.attacker_ctrler.owner_fighter_ctrler.setTargetDamping(0, 0);
            return;
        }// end function

        frame109()
        {
            this.attacker_ctrler.gotoAndPlay("end");
            return;
        }// end function

    }
}
