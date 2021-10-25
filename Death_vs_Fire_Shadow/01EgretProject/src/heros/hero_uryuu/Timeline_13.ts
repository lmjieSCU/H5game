namespace hero_uryuu{
    export class Timeline_13{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 1, this.frame2, 2, this.frame3, 5, this.frame6, 6, this.frame7, 12, this.frame13]);
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
            this.attacker_ctrler.move(0, 30);
            return;
        }// end function

        frame3()
        {
            this.attacker_ctrler.setTouchFloor("击地");
            return;
        }// end function

        frame6()
        {
            this.attacker_ctrler.stop();
            return;
        }// end function

        frame7()
        {
            this.attacker_ctrler.effect.shake(0, 3);
            return;
        }// end function

        frame13()
        {
            this.attacker_ctrler.endAct();
            return;
        }// end function

    }
}
