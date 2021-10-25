class assist_sai  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:10, hitType:4, hitx:0, hity:-5, hurtTime:800, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 14, this.frame15, 29, this.frame30, 31, this.frame32, 32, this.frame33, 53, this.frame54]);
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

        frame30()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame32()
        {
            this._assisterCtrler.addAttacker("atmmc", {x:{moveToTarget:true, offset:0}, applyG:false});
            return;
        }// end function

        frame33()
        {
            this._assisterCtrler.effect.shine(0);
            return;
        }// end function

        frame54()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
