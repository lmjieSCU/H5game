class assist_harribel  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:110, hitType:5, hitx:10, hity:0, hurtTime:500, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 15, this.frame16, 29, this.frame30, 31, this.frame32, 32, this.frame33, 42, this.frame43, 54, this.frame55]);
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

        frame30()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame32()
        {
            this._assisterCtrler.move(30, 0);
            return;
        }// end function

        frame33()
        {
            this._assisterCtrler.effect.shine(9461864);
            return;
        }// end function

        frame43()
        {
            this._assisterCtrler.damping(3, 0);
            return;
        }// end function

        frame55()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
