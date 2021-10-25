class K_a594 {

    public flag: string;
    public target: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a594;
    public static instance_Second: K_a594;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a594 {
        if (K_a594.Firstowner == null) {
            K_a594.Firstowner = owner;
            K_a594.instance_First = new K_a594();
            _level0.instance_First.push(this);
            return K_a594.instance_First;
        } else if (K_a594.Firstowner == owner) {
            if (firstCall) {
                K_a594.instance_First.firstCall = true;
            }
            return K_a594.instance_First;
        } else {
            if (K_a594.instance_Second == null) {
                K_a594.instance_Second = new K_a594();
            }
            if (firstCall) {
                K_a594.instance_Second.firstCall = true;
            }
            return K_a594.instance_Second;
        }
    }

    public static addEventa594(MC: zmovie.ZMovieClip, own_role: Role) {
        let a594 = K_a594.getInstance(own_role, false);
        if(!a594.firstCall){
            return;
        }
        //a594.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a594.Vx, a594);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}