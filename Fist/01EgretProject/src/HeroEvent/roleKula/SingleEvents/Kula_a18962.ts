class Kula_a18962 {

    public flag: string;
    public target: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a18962;
    public static instance_Second: Kula_a18962;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a18962 {
        if (Kula_a18962.Firstowner == null) {
            Kula_a18962.Firstowner = owner;
            Kula_a18962.instance_First = new Kula_a18962();
            _level0.instance_First.push(this);
            return Kula_a18962.instance_First;
        } else if (Kula_a18962.Firstowner == owner) {
            if (firstCall) {
                Kula_a18962.instance_First.firstCall = true;
            }
            return Kula_a18962.instance_First;
        } else {
            if (Kula_a18962.instance_Second == null) {
                Kula_a18962.instance_Second = new Kula_a18962();
            }
            if (firstCall) {
                Kula_a18962.instance_Second.firstCall = true;
            }
            return Kula_a18962.instance_Second;
        }
    }

    public static addEventa18962(MC: zmovie.ZMovieClip, own_role: Role) {
        let a18962 = Kula_a18962.getInstance(own_role, false);
        if(!a18962.firstCall){
            return;
        }
        //a18962.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a18962.Vx, a18962);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}