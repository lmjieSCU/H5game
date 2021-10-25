class assist_uryuu  extends Assister
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
       this._assisterCtrler.defineAction("atm1", {power:80, hitType:5, hitx:3, hity:10, hurtTime:500, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 16, this.frame17, 19, this.frame20, 38, this.frame39, 40, this.frame41, 46, this.frame47]);
    }

    frame1()
        {
            //stop();
            return;
        }// end function

        frame17()
        {
            this._assisterCtrler.moveToTarget(0, -100);
            this._assisterCtrler.setApplyG(false);
            return;
        }// end function

        frame20()
        {
            this._assisterCtrler.effect.bisha(false);
            return;
        }// end function

        frame39()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame41()
        {
            this._assisterCtrler.effect.shine();
            this._assisterCtrler.effect.shine(7329791);
            this._assisterCtrler.move(0, -5);
            this._assisterCtrler.damping(0, 0.5);
            return;
        }// end function

        frame47()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
