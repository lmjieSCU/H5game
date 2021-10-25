class Kula_a19125 {

    public s_type: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a19125;
    public static instance_Second: Kula_a19125;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19125 {
        if (Kula_a19125.Firstowner == null) {
            Kula_a19125.Firstowner = owner;
            Kula_a19125.instance_First = new Kula_a19125();
            _level0.instance_First.push(this);
            return Kula_a19125.instance_First;
        } else if (Kula_a19125.Firstowner == owner) {
            if (firstCall) {
                Kula_a19125.instance_First.firstCall = true;
            }
            return Kula_a19125.instance_First;
        } else {
            if (Kula_a19125.instance_Second == null) {
                Kula_a19125.instance_Second = new Kula_a19125();
            }
            if (firstCall) {
                Kula_a19125.instance_Second.firstCall = true;
            }
            return Kula_a19125.instance_Second;
        }
    }


    public static addEventa19125(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19125 = Kula_a19125.getInstance(own_role, false);
        if (!a19125.firstCall) {
            return;
        }
        a19125.firstCall = false;
        MC.stop();
        MC.visible = false;
        let dx = own_role.x + MC.x * own_role.dir;
        let dy = own_role.y + MC.y;
        let f_time = 10;
        let bgType = "0";
        _level0.effect_mc.superStart(a19125.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}