class Terry_a6617 {

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
    public static instance_First: Terry_a6617;
    public static instance_Second: Terry_a6617;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a6617 {
        if (Terry_a6617.Firstowner == null) {
            Terry_a6617.Firstowner = owner;
            Terry_a6617.instance_First = new Terry_a6617();
            _level0.instance_First.push(this);
            return Terry_a6617.instance_First;
        } else if (Terry_a6617.Firstowner == owner) {
            if (firstCall) {
                Terry_a6617.instance_First.firstCall = true;
            }
            return Terry_a6617.instance_First;
        } else {
            if (Terry_a6617.instance_Second == null) {
                Terry_a6617.instance_Second = new Terry_a6617();
            }
            if (firstCall) {
                Terry_a6617.instance_Second.firstCall = true;
            }
            return Terry_a6617.instance_Second;
        }
    }

    public static addEventa6617(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6617 = Terry_a6617.getInstance(own_role, false);
        if (!a6617.firstCall) {
            return;
        }
        //a6617.firstCall = false;
        MC.visible = false;
        if (a6617.Vy != 0) {
            own_role.start_move_Y1(a6617.Vy, a6617.Vx, a6617.end_status, a6617.Vg);
        }
        else {
            own_role.start_move_X2(a6617.Vx);
        }
    }
}