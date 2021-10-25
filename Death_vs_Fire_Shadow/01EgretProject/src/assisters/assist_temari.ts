class assist_temari  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:10, hitType:4, hitx:0.5, hity:-1, hurtTime:300, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 19, this.frame20, 35, this.frame36, 36, this.frame37, 37, this.frame38, 38, this.frame39, 68, this.frame69]);
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
            this._assisterCtrler.move(5, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame38()
        {
            this._assisterCtrler.fire("atm1", {x:{start:20, hit:1}, hits:-1});
            return;
        }// end function

        frame39()
        {
            this._assisterCtrler.effect.shine(9461864);
            return;
        }// end function

        frame69()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
