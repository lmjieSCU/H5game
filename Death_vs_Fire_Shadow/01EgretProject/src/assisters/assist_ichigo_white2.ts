class assist_ichigo_white2  extends Assister
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
       this._assisterCtrler.defineAction("atm1", {power:30, hitType:1, hitx:10, hity:-10, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:10, hitType:1, hitx:5, hity:-5, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm3", {power:50, hitType:5, hitx:10, hity:10, hurtTime:0, hurtType:1, isBreakDef:true});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 14, this.frame15, 28, this.frame29, 31, this.frame32, 43, this.frame44, 54, this.frame55, 61, this.frame62, 62, this.frame63, 69, this.frame70, 89, this.frame90, 92, this.frame93]);
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

        frame29()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame32()
        {
            this._assisterCtrler.moveToTarget(50, 0, true);
            this._assisterCtrler.effect.slowDown(0.5);
            return;
        }// end function

        frame44()
        {
            this._assisterCtrler.justHit("atm1", "act1", false);
            return;
        }// end function

        frame55()
        {
            this._assisterCtrler.finish(true);
            return;
        }// end function

        frame62()
        {
            this._assisterCtrler.moveToTarget(10, 0, true);
            return;
        }// end function

        frame63()
        {
            this._assisterCtrler.effect.shine();
            return;
        }// end function

        frame70()
        {
            this._assisterCtrler.moveToTarget(-30, -50, false);
            this._assisterCtrler.move(1, -1);
            return;
        }// end function

        frame90()
        {
            this._assisterCtrler.move(0, 0);
            return;
        }// end function

        frame93()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
