class assist_jiraiya  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:50, hitType:4, hitx:3, hity:0, hurtTime:800, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:50, hitType:5, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 9, this.frame10, 29, this.frame30, 30, this.frame31, 35, this.frame36, 47, this.frame48, 73, this.frame74]);
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

        frame30()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame31()
        {
            this._assisterCtrler.effect.dash();
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame36()
        {
            this._assisterCtrler.moveToTarget(-100, 0, false);
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(0.5, 0);
            return;
        }// end function

        frame48()
        {
            this._assisterCtrler.effect.shine();
            return;
        }// end function

        frame74()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
