class assist_soifong  extends Assister
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
      this._assisterCtrler.defineAction("atm1", {power:150, hitType:7, hitx:15, hity:-8, hurtTime:0, hurtType:1, isBreakDef:true});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 15, this.frame16, 44, this.frame45, 48, this.frame49, 75, this.frame76]);
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

        frame45()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame49()
        {
            this._assisterCtrler.effect.shine();
            this._assisterCtrler.fire("atm1", {x:{start:0, add:2, max:50}, hits:1, hold:5, hp:300});
            return;
        }// end function

        frame76()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
