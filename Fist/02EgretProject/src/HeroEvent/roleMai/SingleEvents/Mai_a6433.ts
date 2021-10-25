class Mai_a6433 {

    public flag: string;
    public target: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a6433;
    public static instance_Second: Mai_a6433;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6433 {
        if (Mai_a6433.Firstowner == null) {
            Mai_a6433.Firstowner = owner;
            Mai_a6433.instance_First = new Mai_a6433();
            _level0.instance_First.push(this);
            return Mai_a6433.instance_First;
        } else if (Mai_a6433.Firstowner == owner) {
            if (firstCall) {
                Mai_a6433.instance_First.firstCall = true;
            }
            return Mai_a6433.instance_First;
        } else {
            if (Mai_a6433.instance_Second == null) {
                Mai_a6433.instance_Second = new Mai_a6433();
            }
            if (firstCall) {
                Mai_a6433.instance_Second.firstCall = true;
            }
            return Mai_a6433.instance_Second;
        }
    }

    public static addEventa6433(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6433 = Mai_a6433.getInstance(own_role, false);
        if(!a6433.firstCall){
            return;
        }
        //a6433.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a6433.Vx, a6433);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}