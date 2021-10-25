class Ryu_a20393{

    public s_type: string;
    public static Firstowner: Role;
    public firstCall: boolean = true;
    public static instance_First: Ryu_a20393;
    public static instance_Second: Ryu_a20393;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20393 {
        if (Ryu_a20393.Firstowner == null) {
            Ryu_a20393.Firstowner = owner;
            Ryu_a20393.instance_First = new Ryu_a20393();
            _level0.instance_First.push(this);
            return Ryu_a20393.instance_First;
        } else if (Ryu_a20393.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20393.instance_First.firstCall = true;
            }
            return Ryu_a20393.instance_First;
        } else {
            if (Ryu_a20393.instance_Second == null) {
                Ryu_a20393.instance_Second = new Ryu_a20393();
            }
            if (firstCall) {
                Ryu_a20393.instance_Second.firstCall = true;
            }
            return Ryu_a20393.instance_Second;
        }
    }


    public static addEventa20393(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20393 = Ryu_a20393.getInstance(own_role, false);
        if (!a20393.firstCall) {
            return;
        }
        a20393.firstCall = false;
        MC.stop();
        MC.visible = false;
        let dx = own_role.x + MC.x * own_role.dir;
        let dy = own_role.y + MC.y;
        let f_time = 10;
        let bgType = "0";
        _level0.effect_mc.superStart(a20393.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}