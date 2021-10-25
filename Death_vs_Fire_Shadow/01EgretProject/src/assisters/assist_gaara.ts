class assist_gaara  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:50, hitType:5, hitx:0, hity:0, hurtTime:2000, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 15, this.frame16, 37, this.frame38, 43, this.frame44]);
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

        frame38()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame44()
        {
            this._assisterCtrler.effect.shine(9461816);
            this._assisterCtrler.addAttacker("atmmc", {x:{moveToTarget:true, offset:0}, applyG:false});
            return;
        }// end function

}
