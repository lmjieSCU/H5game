class assist_madara  extends Assister
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
        this._assisterCtrler.defineAction("atm1", {power:20, hitType:3, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._assisterCtrler.defineAction("atm2", {power:10, hitType:4, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._assisterCtrler.defineAction("atm3", {power:100, hitType:7, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
        return;
    }// end function

    public ADDMainTimeline(){
         this._mainMc.addFrameScript(this,[0, this.frame1, 14, this.frame15, 30, this.frame31, 35, this.frame36, 36, this.frame37, 65, this.frame66]);
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

        frame31()
        {
            this._assisterCtrler.effect.endBisha();
            return;
        }// end function

        frame36()
        {
            let shuilong_mc = this._assisterCtrler.addAttacker("smc", { x: { moveToTarget: true, offset: -20 }, applyG: false });
            if (!shuilong_mc) {
                 return;
            }
           let shuilong = new assist_madara_Timeline_2(this._assisterCtrler.getAttacker("smc", this._assisterCtrler._fighter.team.id,shuilong_mc.hashCode))
            
            return;
        }// end function

        frame37()
        {
            this._assisterCtrler.effect.shine(9461864);
            return;
        }// end function

        frame66()
        {
            this._assisterCtrler.endAct();
            return;
        }// end function

}
