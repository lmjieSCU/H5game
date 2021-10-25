class assist_yoruichi  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:80, hitType:5, hitx:5, hity:0, hurtTime:0, hurtType:1, isBreakDef:true});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 12, this.frame13, 41, this.frame42, 46, this.frame47, 57, this.frame58]);
    }

    frame1()
        {
            //stop();
            return;
        }// end function

        frame13()
        {
            this._assisterCtrler.effect.bisha();
            return;
        }// end function

        frame42()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame47()
        {
            this._assisterCtrler.effect.shine();
            this._assisterCtrler.effect.shine(1069248);
            return;
        }// end function

        frame58()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
