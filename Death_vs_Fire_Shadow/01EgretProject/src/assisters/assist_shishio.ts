class assist_shishio  extends Assister
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
         this._assisterCtrler.defineAction("atm1", {power:10, hitType:11, hitx:0, hity:0, hurtTime:500, hurtType:0, isBreakDef:true});
            this._assisterCtrler.defineAction("atm3", {power:50, hitType:1, hitx:0, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:50, hitType:7, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 15, this.frame16, 34, this.frame35, 35, this.frame36, 54, this.frame55, 56, this.frame57, 59, this.frame60, 65, this.frame66, 80, this.frame81, 95, this.frame96]);
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

        frame35()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame36()
        {
            this._assisterCtrler.effect.dash();
            this._assisterCtrler.move(15, 0);
            this._assisterCtrler.setHitTarget("ckmc", "攻击2");
            this._assisterCtrler.effect.shadow(0, 0, 200);
            return;
        }// end function

        frame55()
        {
            this._assisterCtrler.effect.endShadow();
            return;
        }// end function

        frame57()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

        frame60()
        {
            this._assisterCtrler.finish();
            return;
        }// end function

        frame66()
        {
            this._assisterCtrler.effect.shine(9461864);
            this._assisterCtrler.move(0, 0);
            this._assisterCtrler.effect.endShadow();
            return;
        }// end function

        frame81()
        {
            this._assisterCtrler.effect.shine(16281600);
            return;
        }// end function

        frame96()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function
        return;
    }// end function

