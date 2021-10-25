class Moriya_a3395 {

    public flag: string;
    public target: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a3395;
    public static instance_Second: Moriya_a3395;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a3395 {
        if (Moriya_a3395.Firstowner == null) {
            Moriya_a3395.Firstowner = owner;
            Moriya_a3395.instance_First = new Moriya_a3395();
            _level0.instance_First.push(this);
            return Moriya_a3395.instance_First;
        } else if (Moriya_a3395.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3395.instance_First.firstCall = true;
            }
            return Moriya_a3395.instance_First;
        } else {
            if (Moriya_a3395.instance_Second == null) {
                Moriya_a3395.instance_Second = new Moriya_a3395();
            }
            if (firstCall) {
                Moriya_a3395.instance_Second.firstCall = true;
            }
            return Moriya_a3395.instance_Second;
        }
    }

    public static addEventa3395(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3395 = Moriya_a3395.getInstance(own_role, false);
        if(!a3395.firstCall){
            return;
        }
        //a3395.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a3395.Vx, a3395);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}