class assist_kimimaro  extends Assister
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
         this._assisterCtrler.defineAction("atm1", {power:15, hitType:1, hitx:0, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 15, this.frame16, 29, this.frame30, 33, this.frame34, 49, this.frame50, 64, this.frame65, 69, this.frame70, 100, this.frame101]);
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

        frame34()
        {
            this._assisterCtrler.move(20, 0);
            this._assisterCtrler.setHitTarget("atm0", "动作2");
            this._assisterCtrler.effect.dash();
            return;
        }// end function

        frame50()
        {
            this._assisterCtrler.endAct();
            this._assisterCtrler.damping(2, 0);
            return;
        }// end function

        frame65()
        {
            this._assisterCtrler.finish();
            return;
        }// end function

        frame70()
        {
            this._assisterCtrler.damping(4, 0);
            return;
        }// end function

        frame101()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function


}
