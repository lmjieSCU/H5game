/**火焰子骨骼 */

class Kula_a19439 {


    public name: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a19439;
    public static instance_Second: Kula_a19439;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19439 {
        if (Kula_a19439.Firstowner == null) {
            Kula_a19439.Firstowner = owner;
            Kula_a19439.instance_First = new Kula_a19439();
            _level0.instance_First.push(this);
            return Kula_a19439.instance_First;
        } else if (Kula_a19439.Firstowner == owner) {
            if (firstCall) {
                Kula_a19439.instance_First.firstCall = true;
            }
            return Kula_a19439.instance_First;
        } else {
            if (Kula_a19439.instance_Second == null) {
                Kula_a19439.instance_Second = new Kula_a19439();
            }
            if (firstCall) {
                Kula_a19439.instance_Second.firstCall = true;
            }
            return Kula_a19439.instance_Second;
        }
    }


    public static addEventa19439(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19439 = Kula_a19439.getInstance(own_role, false);
        if (!a19439.firstCall) {
            return;
        }
        a19439.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log("特效:"+a19439.name);
        own_role.addSkill(a19439.name, MC, own_role.Vx, own_role.Va);
        EventUtil.printMC(MC, a19439.name + ":" + String(own_role.FrameEvent_change_location()));
    }
}