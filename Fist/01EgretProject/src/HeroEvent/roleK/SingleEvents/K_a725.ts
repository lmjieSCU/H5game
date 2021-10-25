class K_a725 {

    public s_type: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a725;
    public static instance_Second: K_a725;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a725 {
        if (K_a725.Firstowner == null) {
            K_a725.Firstowner = owner;
            K_a725.instance_First = new K_a725();
            _level0.instance_First.push(this);
            return K_a725.instance_First;
        } else if (K_a725.Firstowner == owner) {
            if (firstCall) {
                K_a725.instance_First.firstCall = true;
            }
            return K_a725.instance_First;
        } else {
            if (K_a725.instance_Second == null) {
                K_a725.instance_Second = new K_a725();
            }
            if (firstCall) {
                K_a725.instance_Second.firstCall = true;
            }
            return K_a725.instance_Second;
        }
    }


    public static addEventa725(MC: zmovie.ZMovieClip, own_role: Role) {
        let a725 = K_a725.getInstance(own_role, false);
        if (!a725.firstCall) {
            return;
        }
        a725.firstCall = false;
        MC.stop();
        MC.visible = false;
        let dx = own_role.x + MC.x * own_role.dir;
        let dy = own_role.y + MC.y;
        let f_time = 10;
        let bgType = "0";
        _level0.effect_mc.superStart(a725.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}