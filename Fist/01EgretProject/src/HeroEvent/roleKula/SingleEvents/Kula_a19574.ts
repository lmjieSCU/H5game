/**生成特效2 */
class Kula_a19574 {

    public lastObj: string="";
    public i: number = 0;
    public num: number = 0;
    public intvalFrame: number;
    public numMax: number;
    public name: string;
    public coordinate_local:any;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a19574;
    public static instance_Second: Kula_a19574;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19574 {
        if (Kula_a19574.Firstowner == null) {
            Kula_a19574.Firstowner = owner;
            Kula_a19574.instance_First = new Kula_a19574();
            _level0.instance_First.push(this);
            return Kula_a19574.instance_First;
        } else if (Kula_a19574.Firstowner == owner) {
            if (firstCall) {
                Kula_a19574.instance_First.firstCall = true;
            }
            return Kula_a19574.instance_First;
        } else {
            if (Kula_a19574.instance_Second == null) {
                Kula_a19574.instance_Second = new Kula_a19574();
            }
            if (firstCall) {
                Kula_a19574.instance_Second.firstCall = true;
            }
            return Kula_a19574.instance_Second;
        }
    }

    public static addEventa19574(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19574 = Kula_a19574.getInstance(own_role, false);
        if (!a19574.firstCall) {
            return;
        }
        a19574.firstCall = false;
        MC.stop();
        MC.visible = false;
        a19574.i = 0;
        a19574.num = 0;
        FightMainRender.getInstance().Add(a19574, a19574.onEnterFrame, [MC,own_role]);
        let coordinate_stage = MC.parent.localToGlobal(MC.x, MC.y);
        a19574.coordinate_local = SplashScene.hero_layer.globalToLocal(coordinate_stage.x, coordinate_stage.y);
    }
    public onEnterFrame(mc: zmovie.ZMovieClip,own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        this.i++;
        if(this.i==this.intvalFrame){
            this.i=0;
            this.num++;
            if(this.num==this.numMax){
                if(this.lastObj!=""){
                    this.name=this.lastObj;
                }
            own_role.addSkill_Kula(this.name,this.coordinate_local);
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
            // this.removeMovieClip();
            //mc.parent.removeChild(mc);
            }
            own_role.addSkill_Kula(this.name,this.coordinate_local);
        }
    }
}