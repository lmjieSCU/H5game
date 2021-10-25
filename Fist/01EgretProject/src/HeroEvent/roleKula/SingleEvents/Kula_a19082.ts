class Kula_a19082 {

    public Vy: number;
    public end_status: string;
    public firstCall: boolean = true;
    public Vx: number;
    public static Firstowner: Role;
    public static instance_First: Kula_a19082;
    public static instance_Second: Kula_a19082;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19082 {
        if (Kula_a19082.Firstowner == null) {
            Kula_a19082.Firstowner = owner;
            Kula_a19082.instance_First = new Kula_a19082();
            _level0.instance_First.push(this);
            return Kula_a19082.instance_First;
        } else if (Kula_a19082.Firstowner == owner) {
            if (firstCall) {
                Kula_a19082.instance_First.firstCall = true;
            }
            return Kula_a19082.instance_First;
        } else {
            if (Kula_a19082.instance_Second == null) {
                Kula_a19082.instance_Second = new Kula_a19082();
            }
            if (firstCall) {
                Kula_a19082.instance_Second.firstCall = true;
            }
            return Kula_a19082.instance_Second;
        }
    }

    public static addEventa19082(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19082 = Kula_a19082.getInstance(own_role, false);
        if (!a19082.firstCall) {
            return;
        }
        a19082.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a19082.Vx, a19082.Vy, a19082.end_status);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }


}