class assist_kon  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:10, hitType:2, hitx:1, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 14, this.frame15, 29, this.frame30, 66, this.frame67, 68, this.frame69]);
    }

    frame1()
    {
        return;
    }// end function

    frame15()
    {
        this._assisterCtrler.effect.bisha(false);
        return;
    }// end function

    frame30()
    {
        this._assisterCtrler.effect.endBisha();
        return;
    }// end function

    frame67()
    {
        this._assisterCtrler.endAct();
        return;
    }// end function

    frame69()
    {
        this.target = this._assisterCtrler.getTarget();
        if (this.target instanceof FighterMain)
        {
            try
            {
                (<FighterMain>this.target).qi = (<FighterMain>this.target).qi - 50;
            }
            catch (e)
            {
            }
        }
        return;
    }// end function

}
