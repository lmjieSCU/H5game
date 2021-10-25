namespace hero_karin{
    export class Timeline_15{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;
        public yy : number;
        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [ 1, this.frame2, 3, this.frame4, 4, this.frame5, 5, this.frame5, 23, this.frame24]);
            return;
        }// end function
        
        public setAttackerCtrler(param1):void{
            this.attacker_ctrler = param1;
            return;
        }// end function

        frame2()
        {
            this.attacker_ctrler.move(25, 0);
            this.attacker_ctrler.setHitTarget("hitmc", "hit");
            this.attacker_ctrler.setCrossMap(true);
            this.yy = this.mc.y;

            this.mc.checkAtmAnchor = true;
		    this.mc.addUIFrameScript(this, [0, this.updateYY])
            return;
        }// end function

        frame4()
        {
            this.attacker_ctrler.stop();
            //this.attacker_ctrler.gotoAndPlay("hit");
            return;
        }// end function

        frame5()
        {
            this.attacker_ctrler.move(0, 0);
            this.attacker_ctrler.moveToTarget(0);
            return;
        }// end function

         frame24()
        {
             SoundCtrl.I.playZmovieSound("hero_karin","l_67")
        }



        
        updateYY()
        {
            this.mc.y = this.yy;
        }


    }
}
