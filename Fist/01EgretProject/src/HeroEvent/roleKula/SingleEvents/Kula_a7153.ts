class Kula_a7153 {

    public nohitFrame: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a7153;
    public static instance_Second: Kula_a7153;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a7153 {
        if (Kula_a7153.Firstowner == null) {
            Kula_a7153.Firstowner = owner;
            Kula_a7153.instance_First = new Kula_a7153();
            _level0.instance_First.push(this);
            return Kula_a7153.instance_First;
        } else if (Kula_a7153.Firstowner == owner) {
            if (firstCall) {
                Kula_a7153.instance_First.firstCall = true;
            }
            return Kula_a7153.instance_First;
        } else {
            if (Kula_a7153.instance_Second == null) {
                Kula_a7153.instance_Second = new Kula_a7153();
            }
            if (firstCall) {
                Kula_a7153.instance_Second.firstCall = true;
            }
            return Kula_a7153.instance_Second;
        }
    }

    public static addEventa7153(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7153 = Kula_a7153.getInstance(own_role, false);
        if (!a7153.firstCall) {
            return;
        }
        a7153.firstCall = false;
        MC.visible = false;
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            own_role.bodyMC.gotoAndStop(a7153.nohitFrame);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}