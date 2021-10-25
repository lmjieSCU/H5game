class K_a917 {

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
    public static instance_First: K_a917;
    public static instance_Second: K_a917;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a917 {
        if (K_a917.Firstowner == null) {
            K_a917.Firstowner = owner;
            K_a917.instance_First = new K_a917();
            _level0.instance_First.push(this);
            if (!firstCall) {
                K_a917.instance_First.firstCall = false;
            }
            return K_a917.instance_First;
        } else if (K_a917.Firstowner == owner) {
            if (firstCall) {
                K_a917.instance_First.firstCall = true;
            }
            return K_a917.instance_First;
        } else {
            if (K_a917.instance_Second == null) {
                K_a917.instance_Second = new K_a917();
                if (!firstCall) {
                    K_a917.instance_Second.firstCall = false;
                }
            }
            if (firstCall) {
                K_a917.instance_Second.firstCall = true;
            }
            return K_a917.instance_Second;
        }
    }

    public static addEventa917(MC: zmovie.ZMovieClip, own_role: Role) {
        let a917 = K_a917.getInstance(own_role, false);
        if (!a917.firstCall) {
            return;
        }
        //a917.firstCall = false;
        MC.visible = false;
        if (a917.Vy != 0) {
            own_role.start_move_Y1(a917.Vy, a917.Vx, a917.end_status, a917.Vg);
        }
        else {
            own_role.start_move_X2(a917.Vx);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location())); 

    }
}