class K_a687 {

    public Vy: number;
    public end_status: string;
    public firstCall: boolean = true;
    public Vx: number;
    public static Firstowner: Role;
    public static instance_First: K_a687;
    public static instance_Second: K_a687;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a687 {
        if (K_a687.Firstowner == null) {
            K_a687.Firstowner = owner;
            K_a687.instance_First = new K_a687();
            _level0.instance_First.push(this);
            return K_a687.instance_First;
        } else if (K_a687.Firstowner == owner) {
            if (firstCall) {
                K_a687.instance_First.firstCall = true;
            }
            return K_a687.instance_First;
        } else {
            if (K_a687.instance_Second == null) {
                K_a687.instance_Second = new K_a687();
            }
            if (firstCall) {
                K_a687.instance_Second.firstCall = true;
            }
            return K_a687.instance_Second;
        }
    }

    public static addEventa687(MC: zmovie.ZMovieClip, own_role: Role) {
        let a687 = K_a687.getInstance(own_role, false);
        if (!a687.firstCall) {
            return;
        }
        a687.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a687.Vx, a687.Vy, a687.end_status);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }


}