class assist_stake  extends Assister
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
       this._assisterCtrler.defineAction("atm1", {power:20, hitType:2, hitx:4, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:20, hitType:1, hitx:2, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm3", {power:100, hitType:5, hitx:10, hity:0, hurtTime:800, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 9, this.frame10, 20, this.frame21, 26, this.frame27, 33, this.frame34, 42, this.frame43, 73, this.frame74]);
    }

   frame1()
        {
            //stop();
            return;
        }// end function

        frame10()
        {
            this._assisterCtrler.effect.bisha(false);
            return;
        }// end function

        frame21()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame27()
        {
            this._assisterCtrler.moveToTarget(-50, 0, false);
            return;
        }// end function

        frame34()
        {
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame43()
        {
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame74()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
