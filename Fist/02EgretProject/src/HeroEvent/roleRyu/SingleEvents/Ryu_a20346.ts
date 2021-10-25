class Ryu_a20346 {

    public Vy: number;
    public end_status: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20346;
    public static instance_Second: Ryu_a20346;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20346 {
        if (Ryu_a20346.Firstowner == null) {
            Ryu_a20346.Firstowner = owner;
            Ryu_a20346.instance_First = new Ryu_a20346();
            _level0.instance_First.push(this);
            return Ryu_a20346.instance_First;
        } else if (Ryu_a20346.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20346.instance_First.firstCall = true;
            }
            return Ryu_a20346.instance_First;
        } else {
            if (Ryu_a20346.instance_Second == null) {
                Ryu_a20346.instance_Second = new Ryu_a20346();
            }
            if (firstCall) {
                Ryu_a20346.instance_Second.firstCall = true;
            }
            return Ryu_a20346.instance_Second;
        }
    }

    public static addEventa20346(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20346 = Ryu_a20346.getInstance(own_role, false);
        if (!a20346.firstCall) {
            return;
        }
        a20346.firstCall=false;
        MC.visible = false;
        own_role.hurtAway_self(a20346.Vx, a20346.Vy, a20346.end_status);
    }


}