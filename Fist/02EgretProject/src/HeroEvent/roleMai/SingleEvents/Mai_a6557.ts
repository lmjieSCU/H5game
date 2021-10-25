class Mai_a6557 {

    public Vy: number;
    public end_status: string;
    public firstCall: boolean = true;
    public Vx: number;
    public static Firstowner: Role;
    public static instance_First: Mai_a6557;
    public static instance_Second: Mai_a6557;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6557 {
        if (Mai_a6557.Firstowner == null) {
            Mai_a6557.Firstowner = owner;
            Mai_a6557.instance_First = new Mai_a6557();
            _level0.instance_First.push(this);
            return Mai_a6557.instance_First;
        } else if (Mai_a6557.Firstowner == owner) {
            if (firstCall) {
                Mai_a6557.instance_First.firstCall = true;
            }
            return Mai_a6557.instance_First;
        } else {
            if (Mai_a6557.instance_Second == null) {
                Mai_a6557.instance_Second = new Mai_a6557();
            }
            if (firstCall) {
                Mai_a6557.instance_Second.firstCall = true;
            }
            return Mai_a6557.instance_Second;
        }
    }

    public static addEventa6557(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6557 = Mai_a6557.getInstance(own_role, false);
        if (!a6557.firstCall) {
            return;
        }
        a6557.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a6557.Vx, a6557.Vy, a6557.end_status);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}