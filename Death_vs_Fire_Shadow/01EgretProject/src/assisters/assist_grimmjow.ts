class assist_grimmjow  extends Assister
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
       this._assisterCtrler.defineAction("atm1", {power:20, hitType:2, hitx:3, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm2", {power:5, hitType:1, hitx:0, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm3", {power:50, hitType:6, hitx:5, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 19, this.frame20, 35, this.frame36, 36, this.frame37, 40, this.frame41, 44, this.frame45, 107, this.frame108]);
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
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(0.5, 0);
            return;
        }// end function

        frame41()
        {
            this._assisterCtrler.moveToTarget(-50, 0, false);
            return;
        }// end function

        frame45()
        {
            this._assisterCtrler.effect.shine(9461864);
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame108()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
