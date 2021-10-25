class assist_ichigo_padipata  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:150, hitType:5, hitx:5, hity:0, hurtTime:500, hurtType:1, isBreakDef:true});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 14, this.frame15, 28, this.frame29, 59, this.frame60]);
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

        frame29()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame60()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
