class assist_kenpachi  extends Assister
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
         this._assisterCtrler.defineAction("atm1", {power:100, hitType:5, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:true});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 15, this.frame16, 54, this.frame55, 64, this.frame65, 80, this.frame81]);
    }

    frame1()
        {
            //stop();
            return;
        }// end function

        frame16()
        {
            this._assisterCtrler.effect.bisha(false);
            return;
        }// end function

        frame55()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame65()
        {
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame81()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
