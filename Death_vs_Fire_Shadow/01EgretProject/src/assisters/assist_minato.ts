class assist_minato  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:20, hitType:5, hitx:0, hity:20, hurtTime:0, hurtType:1, isBreakDef:false});
            this._assisterCtrler.defineAction("atm3", {power:20, hitType:3, hitx:5, hity:-10, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm5", {power:5, hitType:4, hitx:0, hity:20, hurtTime:300, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:20, hitType:3, hitx:5, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm4", {power:20, hitType:6, hitx:-4, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});;
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 2, this.frame3, 24, this.frame25, 30, this.frame31, 34, this.frame35, 39, this.frame40, 49, this.frame50, 59, this.frame60, 69, this.frame70, 84, this.frame85, 90, this.frame91, 91, this.frame92, 98, this.frame99, 133, this.frame134, 138, this.frame139, 163, this.frame164, 169, this.frame170]);
    }

    frame1()
        {
            //stop();
            return;
        }// end function

        frame3()
        {
            this._assisterCtrler.effect.bisha(false);
            return;
        }// end function

        frame25()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame31()
        {
            this._assisterCtrler.moveToTarget(-100, 0, false);
            this._assisterCtrler.move(15, 0);
            this._assisterCtrler.damping(0.5, 0);
            this._assisterCtrler.effect.shadow(200, 200, 0);
            return;
        }// end function

        frame35()
        {
            this._assisterCtrler.effect.shine();
            this._assisterCtrler.effect.shine(1069248);
            return;
        }// end function

        frame40()
        {
            this._assisterCtrler.effect.endShadow();
            return;
        }// end function

        frame50()
        {
            this._assisterCtrler.justHit("atm2", "attack2", false);
            return;
        }// end function

        frame60()
        {
            this._assisterCtrler.gotoAndPlay("atm");
            return;
        }// end function

        frame70()
        {
            this._assisterCtrler.moveToTarget(10, 0, false);
            return;
        }// end function

        frame85()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

        frame91()
        {
            this._assisterCtrler.finish(false);
            return;
        }// end function

        frame92()
        {
            this._assisterCtrler.effect.shine();
            this._assisterCtrler.effect.shine(1069248);
            return;
        }// end function

        frame99()
        {
            this._assisterCtrler.moveToTarget(40, 0, true);
            return;
        }// end function

        frame134()
        {
            this._assisterCtrler.moveToTarget(-20, -200, false);
            this._assisterCtrler.move(0, 20);
            this._assisterCtrler.effect.shadow(200, 200, 0);
            return;
        }// end function

        frame139()
        {
            this._assisterCtrler.effect.endShadow();
            return;
        }// end function

        frame164()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

        frame170()
        {
            this._assisterCtrler.finish(false);
            return;
        }// end function

}
