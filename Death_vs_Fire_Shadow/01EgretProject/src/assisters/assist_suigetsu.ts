class assist_suigetsu  extends Assister
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
       this._assisterCtrler.defineAction("atm1", {power:20, hitType:1, hitx:3, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:50, hitType:6, hitx:5, hity:-5, hurtTime:600, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 12, this.frame13, 27, this.frame28, 34, this.frame35, 43, this.frame44, 52, this.frame53, 63, this.frame64]);
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
            return;
        }// end function

        frame35()
        {
            this._assisterCtrler.moveToTarget(80, null, true);
            this._assisterCtrler.effect.slowDown(0.5);
            return;
        }// end function

        frame44()
        {
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame53()
        {
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame64()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
