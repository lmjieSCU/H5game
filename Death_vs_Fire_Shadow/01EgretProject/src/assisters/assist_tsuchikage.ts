class assist_tsuchikage  extends Assister
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
       this._assisterCtrler.defineAction("atm1", {power:20, hitType:2, hitx:5, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:50, hitType:1, hitx:10, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm3", {power:100, hitType:3, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 15, this.frame16, 29, this.frame30, 35, this.frame36, 61, this.frame62]);
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

        frame36()
        {
            this._assisterCtrler.effect.shine(9461816);
            return;
        }// end function

        frame62()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
