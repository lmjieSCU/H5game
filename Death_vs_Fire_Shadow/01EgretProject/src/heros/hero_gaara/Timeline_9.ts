namespace hero_gaara{
    export class Timeline_9{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;

        constructor(_attackerCtrl:FighterAttackerCtrler) 
        {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this, [0, this.frame1, 16, this.frame17, 61, this.frame62, 80, this.frame81, 85, this.frame86]);
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

        frame17()
        {
            return;
        }// end function

        frame62()
        {
            this.attacker_ctrler.removeSelf();
            return;
        }// end function

        frame81()
        {
            this.attacker_ctrler.stop();
            return;
        }// end function

        frame86()
        {
            let fighterCtrler:any = this.attacker_ctrler.owner_fighter_ctrler;
            if (fighterCtrler)
            {
                if (fighterCtrler.target)
                {
                    fighterCtrler.target.visible = true;
                }
            }
            return;
        }// end function

    }
}
