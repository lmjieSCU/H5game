class assist_ino  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:20, hitType:5, hitx:0, hity:0, hurtTime:2000, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 19, this.frame20, 35, this.frame36, 40, this.frame41, 44, this.frame45, 55, this.frame56]);
    }

    frame1()
        {
            //stop();
            return;
        }// end function

        frame20()
        {
            this._assisterCtrler.effect.bisha(false);
            return;
        }// end function

        frame36()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame41()
        {
            this._assisterCtrler.effect.shine();
            return;
        }// end function

        frame45()
        {
            this._assisterCtrler.effect.shine(9461816);
            return;
        }// end function

        frame56()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
