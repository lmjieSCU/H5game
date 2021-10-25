class Kula_a19418 {

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
    public static instance_First: Kula_a19418;
    public static instance_Second: Kula_a19418;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19418 {
        if (Kula_a19418.Firstowner == null) {
            Kula_a19418.Firstowner = owner;
            Kula_a19418.instance_First = new Kula_a19418();
            _level0.instance_First.push(this);
            if (!firstCall) {
                Kula_a19418.instance_First.firstCall = false;
            }
            return Kula_a19418.instance_First;
        } else if (Kula_a19418.Firstowner == owner) {
            if (firstCall) {
                Kula_a19418.instance_First.firstCall = true;
            }
            return Kula_a19418.instance_First;
        } else {
            if (Kula_a19418.instance_Second == null) {
                Kula_a19418.instance_Second = new Kula_a19418();
                if (!firstCall) {
                    Kula_a19418.instance_Second.firstCall = false;
                }
            }
            if (firstCall) {
                Kula_a19418.instance_Second.firstCall = true;
            }
            return Kula_a19418.instance_Second;
        }
    }

    public static addEventa19418(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19418 = Kula_a19418.getInstance(own_role, false);
        if (!a19418.firstCall) {
            return;
        }
        //a19418.firstCall = false;
        MC.visible = false;
        if (a19418.Vy != 0) {
            own_role.start_move_Y1(a19418.Vy, a19418.Vx, a19418.end_status, a19418.Vg);
        }
        else {
            own_role.start_move_X2(a19418.Vx);
        }
    }
}