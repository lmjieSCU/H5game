class assist_tenten  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:10, hitType:1, hitx:2, hity:0, hurtTime:800, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:50, hitType:6, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 15, this.frame16, 37, this.frame38, 39, this.frame40, 45, this.frame46, 51, this.frame52, 57, this.frame58, 63, this.frame64, 77, this.frame78, 113, this.frame114]);
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

        frame40()
        {
            this._assisterCtrler.fire("atm1", {x:20, hits:1});
            return;
        }// end function

        frame46()
        {
            this._assisterCtrler.fire("atm1", {x:20, hits:1});
            return;
        }// end function

        frame52()
        {
            this._assisterCtrler.fire("atm1", {x:20, hits:1});
            return;
        }// end function

        frame58()
        {
            this._assisterCtrler.fire("atm1", {x:20, hits:1});
            return;
        }// end function

        frame64()
        {
            this._assisterCtrler.fire("atm1", {x:20, hits:1});
            return;
        }// end function

        frame78()
        {
            this._assisterCtrler.fire("atm2", {x:30, hits:1});
            return;
        }// end function

        frame114()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
