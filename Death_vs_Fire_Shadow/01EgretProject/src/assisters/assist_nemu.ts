class assist_nemu  extends Assister
{
    public  _assisterCtrler:AssisiterCtrler;
    public  target:IGameSprite;

    constructor(param1:zmovie.ZMovieClip,param2:FighterMain) 
    {
        super(param1,param2);
        this.ADDMainTimeline();
        return;
    }// end function


    public  setAssistCtrler(param1) : void
    {
        this._assisterCtrler = param1;
        this.defineActions();
        return;
    }// end function

    public  defineActions() : void
    {
       this._assisterCtrler.defineAction("atm1", {power:20, hitType:2, hitx:3, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:40, hitType:3, hitx:10, hity:0, hurtTime:500, hurtType:0, isBreakDef:true});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 14, this.frame15, 30, this.frame31, 31, this.frame32, 50, this.frame51, 56, this.frame57, 64, this.frame65, 71, this.frame72, 74, this.frame75, 81, this.frame82, 92, this.frame93]);
    }

    frame1()
        {
            //stop();
            return;
        }// end function

        frame15()
        {
            this._assisterCtrler.effect.bisha(false);
            return;
        }// end function

        frame31()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame32()
        {
            this._assisterCtrler.move(20, 0);
            this._assisterCtrler.setHitTarget("ckm", "攻击2");
            this._assisterCtrler.effect.shadow(100, -50, 100);
            return;
        }// end function

        frame51()
        {
            this._assisterCtrler.effect.shine(9461864);
            this._assisterCtrler.move(5, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame57()
        {
            this._assisterCtrler.move(5, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame65()
        {
            this._assisterCtrler.justHit("atm1", "attack2", false);
            return;
        }// end function

        frame72()
        {
            this._assisterCtrler.finish(true);
            return;
        }// end function

        frame75()
        {
            this._assisterCtrler.move(13, 0);
            this._assisterCtrler.damping(0.5, 0);
            return;
        }// end function

        frame82()
        {
            this._assisterCtrler.setDirectToTarget();
            this._assisterCtrler.effect.endShadow();
            return;
        }// end function

        frame93()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
