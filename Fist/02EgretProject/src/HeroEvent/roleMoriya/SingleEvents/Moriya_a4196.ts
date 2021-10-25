/**火焰子骨骼 */

class Moriya_a4196 {


    public name: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a4196;
    public static instance_Second: Moriya_a4196;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a4196 {
        if (Moriya_a4196.Firstowner == null) {
            Moriya_a4196.Firstowner = owner;
            Moriya_a4196.instance_First = new Moriya_a4196();
            _level0.instance_First.push(this);
            return Moriya_a4196.instance_First;
        } else if (Moriya_a4196.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4196.instance_First.firstCall = true;
            }
            return Moriya_a4196.instance_First;
        } else {
            if (Moriya_a4196.instance_Second == null) {
                Moriya_a4196.instance_Second = new Moriya_a4196();
            }
            if (firstCall) {
                Moriya_a4196.instance_Second.firstCall = true;
            }
            return Moriya_a4196.instance_Second;
        }
    }


    public static addEventa4196(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4196 = Moriya_a4196.getInstance(own_role, false);
        if (!a4196.firstCall) {
            return;
        }
        a4196.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log(a4196.name);
        own_role.addSkill(a4196.name, MC, own_role.Vx, own_role.Va);
        EventUtil.printMC(MC, a4196.name + ":" + String(own_role.FrameEvent_change_location()));
    }
}