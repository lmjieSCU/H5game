class Moriya_a3511 {

    public Vy: number;
    public end_status: string;
    public firstCall: boolean = true;
    public Vx: number;
    public static Firstowner: Role;
    public static instance_First: Moriya_a3511;
    public static instance_Second: Moriya_a3511;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a3511 {
        if (Moriya_a3511.Firstowner == null) {
            Moriya_a3511.Firstowner = owner;
            Moriya_a3511.instance_First = new Moriya_a3511();
            _level0.instance_First.push(this);
            return Moriya_a3511.instance_First;
        } else if (Moriya_a3511.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3511.instance_First.firstCall = true;
            }
            return Moriya_a3511.instance_First;
        } else {
            if (Moriya_a3511.instance_Second == null) {
                Moriya_a3511.instance_Second = new Moriya_a3511();
            }
            if (firstCall) {
                Moriya_a3511.instance_Second.firstCall = true;
            }
            return Moriya_a3511.instance_Second;
        }
    }

    public static addEventa3511(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3511 = Moriya_a3511.getInstance(own_role, false);
        if (!a3511.firstCall) {
            return;
        }
        a3511.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a3511.Vx, a3511.Vy, a3511.end_status);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }


}