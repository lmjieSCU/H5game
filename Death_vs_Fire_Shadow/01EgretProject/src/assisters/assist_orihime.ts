class assist_orihime  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:0, hitType:0, hitx:0, hity:0, hurtTime:0, hurtType:0, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[
             0, this.frame1, 15, this.frame16, 30, this.frame31, 34, this.frame35, 40, this.frame41, 45, this.frame46, 50, this.frame51, 55, this.frame56, 60, this.frame61, 83, this.frame84
             ]);
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

        frame31()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame35()
        {
            this._assisterCtrler.effect.shine(13443195);
            return;
        }// end function

        frame41()
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

        frame46()
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

        frame51()
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

        frame56()
        {
            try
            {
                if ( (<FighterMain>this._assisterCtrler.getOwner()) instanceof FighterMain){
                     (<FighterMain>(<FighterMain>this._assisterCtrler.getOwner())).hp =  (<FighterMain>(<FighterMain>this._assisterCtrler.getOwner())).hp + 20;
                }
            }
            catch (e)
            {
            }
            return;
        }// end function

        frame61()
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

        frame84()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
