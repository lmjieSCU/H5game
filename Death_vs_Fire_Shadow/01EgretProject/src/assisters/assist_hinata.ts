class assist_hinata  extends Assister
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
       this._assisterCtrler.defineAction("atm1", {power:20, hitType:4, hitx:5, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 12, this.frame13, 27, this.frame28, 29, this.frame30, 48, this.frame49]);
    }

    frame1()
        {
            //stop();
            return;
        }// end function

        frame13()
        {
            this._assisterCtrler.effect.bisha(false);
            return;
        }// end function

        frame28()
        {
            this._assisterCtrler.effect.endBisha();
            this._assisterCtrler.move(5, 0);
            this._assisterCtrler.damping(0.5, 0);
            return;
        }// end function

        frame30()
        {
            this._assisterCtrler.effect.shine();
            return;
        }// end function

        frame49()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
