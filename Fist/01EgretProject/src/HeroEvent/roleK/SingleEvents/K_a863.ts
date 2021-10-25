/**火焰子骨骼 */

class K_a863 {


    public name: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a863;
    public static instance_Second: K_a863;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a863 {
        if (K_a863.Firstowner == null) {
            K_a863.Firstowner = owner;
            K_a863.instance_First = new K_a863();
            _level0.instance_First.push(this);
            return K_a863.instance_First;
        } else if (K_a863.Firstowner == owner) {
            if (firstCall) {
                K_a863.instance_First.firstCall = true;
            }
            return K_a863.instance_First;
        } else {
            if (K_a863.instance_Second == null) {
                K_a863.instance_Second = new K_a863();
            }
            if (firstCall) {
                K_a863.instance_Second.firstCall = true;
            }
            return K_a863.instance_Second;
        }
    }


    public static addEventa863(MC: zmovie.ZMovieClip, own_role: Role) {
        let a863 = K_a863.getInstance(own_role, false);
        if (!a863.firstCall) {
            return;
        }
        a863.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log(a863.name);
        own_role.addSkill(a863.name, MC, own_role.Vx, own_role.Va);
        EventUtil.printMC(MC, a863.name + ":" + String(own_role.FrameEvent_change_location()));
    }
}