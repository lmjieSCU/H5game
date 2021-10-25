class Mai_a7153 {

    public nohitFrame: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a7153;
    public static instance_Second: Mai_a7153;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a7153 {
        if (Mai_a7153.Firstowner == null) {
            Mai_a7153.Firstowner = owner;
            Mai_a7153.instance_First = new Mai_a7153();
            _level0.instance_First.push(this);
            return Mai_a7153.instance_First;
        } else if (Mai_a7153.Firstowner == owner) {
            if (firstCall) {
                Mai_a7153.instance_First.firstCall = true;
            }
            return Mai_a7153.instance_First;
        } else {
            if (Mai_a7153.instance_Second == null) {
                Mai_a7153.instance_Second = new Mai_a7153();
            }
            if (firstCall) {
                Mai_a7153.instance_Second.firstCall = true;
            }
            return Mai_a7153.instance_Second;
        }
    }

    public static addEventa7153(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7153 = Mai_a7153.getInstance(own_role, false);
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