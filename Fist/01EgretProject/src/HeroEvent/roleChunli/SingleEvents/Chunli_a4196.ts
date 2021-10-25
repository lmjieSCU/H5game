/**火焰子骨骼 */

class Chunli_a4196 {


    public name: string;
    public suspend:boolean=false;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a4196;
    public static instance_Second: Chunli_a4196;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a4196 {
        if (Chunli_a4196.Firstowner == null) {
            Chunli_a4196.Firstowner = owner;
            Chunli_a4196.instance_First = new Chunli_a4196();
            _level0.instance_First.push(this);
            return Chunli_a4196.instance_First;
        } else if (Chunli_a4196.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4196.instance_First.firstCall = true;
            }
            return Chunli_a4196.instance_First;
        } else {
            if (Chunli_a4196.instance_Second == null) {
                Chunli_a4196.instance_Second = new Chunli_a4196();
            }
            if (firstCall) {
                Chunli_a4196.instance_Second.firstCall = true;
            }
            return Chunli_a4196.instance_Second;
        }
    }


    public static addEventa4196(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4196 = Chunli_a4196.getInstance(own_role, false);
        if (!a4196.firstCall) {
            return;
        }
        a4196.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log(a4196.name);
        own_role.addSkill(a4196.name, MC, own_role.Vx, own_role.Va,a4196.suspend);
        if(a4196.suspend){
            a4196.suspend=false;
        }
        EventUtil.printMC(MC, a4196.name + ":" + String(own_role.FrameEvent_change_location()));
    }
}