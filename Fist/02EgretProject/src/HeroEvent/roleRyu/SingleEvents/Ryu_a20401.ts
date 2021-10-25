class Ryu_a20401 {

    public flag: string;
    public target: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20401;
    public static instance_Second: Ryu_a20401;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20401 {
        if (Ryu_a20401.Firstowner == null) {
            Ryu_a20401.Firstowner = owner;
            Ryu_a20401.instance_First = new Ryu_a20401();
            _level0.instance_First.push(this);
            return Ryu_a20401.instance_First;
        } else if (Ryu_a20401.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20401.instance_First.firstCall = true;
            }
            return Ryu_a20401.instance_First;
        } else {
            if (Ryu_a20401.instance_Second == null) {
                Ryu_a20401.instance_Second = new Ryu_a20401();
            }
            if (firstCall) {
                Ryu_a20401.instance_Second.firstCall = true;
            }
            return Ryu_a20401.instance_Second;
        }
    }

    public static addEventa20401(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20401 = Ryu_a20401.getInstance(own_role, false);
        if(!a20401.firstCall){
            return;
        }
        //a20401.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a20401.Vx, a20401);
    }

}