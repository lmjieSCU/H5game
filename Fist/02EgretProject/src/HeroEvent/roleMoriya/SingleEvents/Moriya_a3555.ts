class Moriya_a3555 {

    public s_type: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a3555;
    public static instance_Second: Moriya_a3555;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a3555 {
        if (Moriya_a3555.Firstowner == null) {
            Moriya_a3555.Firstowner = owner;
            Moriya_a3555.instance_First = new Moriya_a3555();
            _level0.instance_First.push(this);
            return Moriya_a3555.instance_First;
        } else if (Moriya_a3555.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3555.instance_First.firstCall = true;
            }
            return Moriya_a3555.instance_First;
        } else {
            if (Moriya_a3555.instance_Second == null) {
                Moriya_a3555.instance_Second = new Moriya_a3555();
            }
            if (firstCall) {
                Moriya_a3555.instance_Second.firstCall = true;
            }
            return Moriya_a3555.instance_Second;
        }
    }


    public static addEventa3555(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3555 = Moriya_a3555.getInstance(own_role, false);
        if (!a3555.firstCall) {
            return;
        }
        a3555.firstCall = false;
        MC.stop();
        MC.visible = false;
        let dx = own_role.x + MC.x * own_role.dir;
        let dy = own_role.y + MC.y;
        let f_time = 10;
        let bgType = "0";
        _level0.effect_mc.superStart(a3555.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}