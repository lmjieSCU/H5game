class assist_tsunate  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:50, hitType:5, hitx:15, hity:0, hurtTime:500, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 16, this.frame17, 18, this.frame19, 20, this.frame21, 38, this.frame39, 44, this.frame45, 59, this.frame60]);
    }

   frame1()
        {
            //stop();
            return;
        }// end function

        frame17()
        {
            try
            {
                (<FighterMain>this._assisterCtrler.getOwner()).hp = (<FighterMain>this._assisterCtrler.getOwner()).hp + 20;
            }
            catch (e)
            {
            }
            return;
        }// end function

        frame19()
        {
            try
            {
                (<FighterMain>this._assisterCtrler.getOwner()).hp = (<FighterMain>this._assisterCtrler.getOwner()).hp + 20;
            }
            catch (e)
            {
            }
            return;
        }// end function

        frame21()
        {
            try
            {
                (<FighterMain>this._assisterCtrler.getOwner()).hp = (<FighterMain>this._assisterCtrler.getOwner()).hp + 20;
            }
            catch (e)
            {
            }
            return;
        }// end function

        frame39()
        {
            this._assisterCtrler.moveToTarget(-50, null, false);
            return;
        }// end function

        frame45()
        {
            this._assisterCtrler.move(10, 0);
            this._assisterCtrler.damping(1, 0);
            return;
        }// end function

        frame60()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
