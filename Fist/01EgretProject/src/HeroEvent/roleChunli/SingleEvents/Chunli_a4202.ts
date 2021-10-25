class Chunli_a4202 {

    public nohitFrame: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a4202;
    public static instance_Second: Chunli_a4202;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a4202 {
        if (Chunli_a4202.Firstowner == null) {
            Chunli_a4202.Firstowner = owner;
            Chunli_a4202.instance_First = new Chunli_a4202();
            _level0.instance_First.push(this);
            return Chunli_a4202.instance_First;
        } else if (Chunli_a4202.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4202.instance_First.firstCall = true;
            }
            return Chunli_a4202.instance_First;
        } else {
            if (Chunli_a4202.instance_Second == null) {
                Chunli_a4202.instance_Second = new Chunli_a4202();
            }
            if (firstCall) {
                Chunli_a4202.instance_Second.firstCall = true;
            }
            return Chunli_a4202.instance_Second;
        }
    }

    public static addEventa4202(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4202 = Chunli_a4202.getInstance(own_role, false);
        if (!a4202.firstCall) {
            return;
        }
        a4202.firstCall = false;
        MC.visible = false;
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            own_role.bodyMC.gotoAndStop(a4202.nohitFrame);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}