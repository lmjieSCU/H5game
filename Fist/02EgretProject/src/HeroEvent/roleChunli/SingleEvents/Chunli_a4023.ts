class Chunli_a4023 {

    public Vx: number;
    public Vy: number;
    public Va: number;
    public Vg: number;
    public Vx_min: number;
    public posY2: string;
    public flag: string;
    public end_status: string;
    public firstCall: boolean = true
    public static Firstowner: Role;
    public static instance_First: Chunli_a4023;
    public static instance_Second: Chunli_a4023;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a4023 {
        if (Chunli_a4023.Firstowner == null) {
            Chunli_a4023.Firstowner = owner;
            Chunli_a4023.instance_First = new Chunli_a4023();
            _level0.instance_First.push(this);
            return Chunli_a4023.instance_First;
        } else if (Chunli_a4023.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4023.instance_First.firstCall = true;
            }
            return Chunli_a4023.instance_First;
        } else {
            if (Chunli_a4023.instance_Second == null) {
                Chunli_a4023.instance_Second = new Chunli_a4023();
            }
            if (firstCall) {
                Chunli_a4023.instance_Second.firstCall = true;
            }
            return Chunli_a4023.instance_Second;
        }
    }

    public static addEventa4023(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4023 = Chunli_a4023.getInstance(own_role, false);
        if (!a4023.firstCall) {
            return;
        }
        //a4023.firstCall = false;
        MC.visible = false;
        if (a4023.Vy != 0) {
            own_role.start_move_Y1(a4023.Vy, a4023.Vx, a4023.end_status, a4023.Vg);
        }
        else {
            own_role.start_move_X2(a4023.Vx);
        }

    }
}