class Mai_a6594 {

    public s_type: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a6594;
    public static instance_Second: Mai_a6594;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6594 {
        if (Mai_a6594.Firstowner == null) {
            Mai_a6594.Firstowner = owner;
            Mai_a6594.instance_First = new Mai_a6594();
            _level0.instance_First.push(this);
            return Mai_a6594.instance_First;
        } else if (Mai_a6594.Firstowner == owner) {
            if (firstCall) {
                Mai_a6594.instance_First.firstCall = true;
            }
            return Mai_a6594.instance_First;
        } else {
            if (Mai_a6594.instance_Second == null) {
                Mai_a6594.instance_Second = new Mai_a6594();
            }
            if (firstCall) {
                Mai_a6594.instance_Second.firstCall = true;
            }
            return Mai_a6594.instance_Second;
        }
    }


    public static addEventa6954(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6594 = Mai_a6594.getInstance(own_role, false);
        if (!a6594.firstCall) {
            return;
        }
        a6594.firstCall = false;
        MC.stop();
        MC.visible = false;
        let dx = own_role.x + MC.x * own_role.dir;
        let dy = own_role.y + MC.y;
        let f_time = 10;
        let bgType = "0";
        _level0.effect_mc.superStart(a6594.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}