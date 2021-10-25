/*
*cbs子骨骼动画对应的帧事件
*/
namespace hero_kakashi{
    export class Timeline_11{
        private attacker_ctrler: FighterAttackerCtrler;
        private mc :zmovie.ZMovieClip;
        public _isHit:boolean;
        public  hitTarget;
        public  target;
    

        constructor(_attackerCtrl:FighterAttackerCtrler) {
            this.setAttackerCtrler(_attackerCtrl);
            this.mc = _attackerCtrl._attacker_mc;
            this.mc.addFrameScript(this,[0, this.frame1, 36, this.frame37, 40, this.frame41, 54, this.frame55]);;
        }

        public frame1()
        {
            this._isHit = false;
            return;
        }// end function

        public frame37()
        {
            if (this.attacker_ctrler.justHit("cbs1"))
            {
                this.target = this.attacker_ctrler.owner_fighter_ctrler.getTargetSP();
                if (this.target)
                {
                    this.hitTarget = this.target;
                    this.target.isApplyG = false;
                    this.target.getDisplay().visible = false;
                    this._isHit = true;
                }
            }
            return;
        }// end function

        public frame41()
        {
            if (!this._isHit)
            {
                this.attacker_ctrler.removeSelf();

            }
            return;
        }// end function

        public frame55()
        {
            if (this.hitTarget)
            {
                this.target.getDisplay().visible = true;
                this.target.isApplyG = true;
            }
            return;
        }// end function



        public setAttackerCtrler(param: FighterAttackerCtrler): void {
            this.attacker_ctrler = param;
        }
    }
}