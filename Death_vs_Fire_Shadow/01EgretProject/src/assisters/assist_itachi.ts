class assist_itachi  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:0, hitType:4, hitx:0, hity:0, hurtTime:2000, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:20, hitType:1, hitx:0, hity:0, hurtTime:600, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm3", {power:40, hitType:1, hitx:-3, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 23, this.frame24, 41, this.frame42, 46, this.frame47, 58, this.frame59, 60, this.frame61, 75, this.frame76, 91, this.frame92, 124, this.frame125, 127, this.frame128, 143, this.frame144, 159, this.frame160, 175, this.frame176, 180, this.frame181]);
    }

    frame1()
        {
            //stop();
            return;
        }// end function

        frame24()
        {
            this._assisterCtrler.effect.bisha(false);
            return;
        }// end function

        frame42()
        {
            this._assisterCtrler.effect.shine(0);
            return;
        }// end function

        frame47()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame59()
        {
            this._assisterCtrler.justHit("atm1", "攻击2", false);
            return;
        }// end function

        frame61()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

        frame76()
        {
            this._assisterCtrler.finish();
            return;
        }// end function

        frame92()
        {
            this._assisterCtrler.moveToTarget(0, null, false);
            return;
        }// end function

        frame125()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame128()
        {
            this._assisterCtrler.effect.shine(0);
            return;
        }// end function

        frame144()
        {
            this._assisterCtrler.effect.shine(0);
            return;
        }// end function

        frame160()
        {
            this._assisterCtrler.effect.shine(0);
            return;
        }// end function

        frame176()
        {
            this._assisterCtrler.effect.shine(0);
            return;
        }// end function

        frame181()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
