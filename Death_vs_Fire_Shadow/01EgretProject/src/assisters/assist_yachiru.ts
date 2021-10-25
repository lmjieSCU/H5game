class assist_yachiru  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:50, hitType:3, hitx:5, hity:-2, hurtTime:700, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 19, this.frame20, 35, this.frame36, 36, this.frame37, 51, this.frame52, 57, this.frame58, 62, this.frame63, 73, this.frame74]);
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

        frame37()
        {
            this._assisterCtrler.move(20, 0);
            this._assisterCtrler.setHitTarget("atmck", "攻击2");
            this._assisterCtrler.effect.shadow(200, -50, 100);
            return;
        }// end function

        frame52()
        {
            this._assisterCtrler.damping(2, 0);
            return;
        }// end function

        frame58()
        {
            this._assisterCtrler.finish(true);
            return;
        }// end function

        frame63()
        {
            this._assisterCtrler.effect.shine(9461864);
            this._assisterCtrler.setDirectToTarget();
            this._assisterCtrler.move(-10, 0);
            this._assisterCtrler.damping(2, 0);
            return;
        }// end function

        frame74()
        {
            this._assisterCtrler.endAct();
            this._assisterCtrler.effect.endShadow();
            return;
        }// end function

}
