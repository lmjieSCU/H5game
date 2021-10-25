class Mai_a6617 {

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
    public static instance_First: Mai_a6617;
    public static instance_Second: Mai_a6617;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6617 {
        if (Mai_a6617.Firstowner == null) {
            Mai_a6617.Firstowner = owner;
            Mai_a6617.instance_First = new Mai_a6617();
            _level0.instance_First.push(this);
            if (!firstCall) {
                Mai_a6617.instance_First.firstCall = false;
            }
            return Mai_a6617.instance_First;
        } else if (Mai_a6617.Firstowner == owner) {
            if (firstCall) {
                Mai_a6617.instance_First.firstCall = true;
            }
            return Mai_a6617.instance_First;
        } else {
            if (Mai_a6617.instance_Second == null) {
                Mai_a6617.instance_Second = new Mai_a6617();
                if (!firstCall) {
                    Mai_a6617.instance_Second.firstCall = false;
                }
            }
            if (firstCall) {
                Mai_a6617.instance_Second.firstCall = true;
            }
            return Mai_a6617.instance_Second;
        }
    }

    public static addEventa6617(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6617 = Mai_a6617.getInstance(own_role, false);
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
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location())); 

    }
}