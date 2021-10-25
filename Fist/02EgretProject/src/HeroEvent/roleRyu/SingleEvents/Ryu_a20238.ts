class Ryu_a20238 {

    public Vx: number;
    public Vy: number;
    public Va: number;
    public Vg: number;
    public Vx_min: number;
    public posY2: string;
    public flag: string;
    public end_status: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20238;
    public static instance_Second: Ryu_a20238;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20238 {
        if (Ryu_a20238.Firstowner == null) {
            Ryu_a20238.Firstowner = owner;
            Ryu_a20238.instance_First = new Ryu_a20238();
            _level0.instance_First.push(this);
            return Ryu_a20238.instance_First;
        } else if (Ryu_a20238.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20238.instance_First.firstCall = true;
            }
            return Ryu_a20238.instance_First;
        } else {
            if (Ryu_a20238.instance_Second == null) {
                Ryu_a20238.instance_Second = new Ryu_a20238();
            }
            if (firstCall) {
                Ryu_a20238.instance_Second.firstCall = true;
            }
            return Ryu_a20238.instance_Second;
        }
    }

    public static addEventa20238(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20238 = Ryu_a20238.getInstance(own_role, false);
        if (!a20238.firstCall) {
            return;
        }
        //a20238.firstCall = false;
        MC.visible = false;
        if (a20238.Vy != 0) {
            own_role.start_move_Y1(a20238.Vy, a20238.Vx, a20238.end_status, a20238.Vg);
        }
        else {
            own_role.start_move_X2(a20238.Vx);
        }
    }
}