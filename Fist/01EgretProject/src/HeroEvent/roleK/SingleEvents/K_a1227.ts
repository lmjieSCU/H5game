class K_a1227 {

    public nohitFrame: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a1227;
    public static instance_Second: K_a1227;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a1227 {
        if (K_a1227.Firstowner == null) {
            K_a1227.Firstowner = owner;
            K_a1227.instance_First = new K_a1227();
            _level0.instance_First.push(this);
            return K_a1227.instance_First;
        } else if (K_a1227.Firstowner == owner) {
            if (firstCall) {
                K_a1227.instance_First.firstCall = true;
            }
            return K_a1227.instance_First;
        } else {
            if (K_a1227.instance_Second == null) {
                K_a1227.instance_Second = new K_a1227();
            }
            if (firstCall) {
                K_a1227.instance_Second.firstCall = true;
            }
            return K_a1227.instance_Second;
        }
    }

    public static addEventa1227(MC: zmovie.ZMovieClip, own_role: Role) {
        let a1227 = K_a1227.getInstance(own_role, false);
        if (!a1227.firstCall) {
            return;
        }
        a1227.firstCall = false;
        MC.visible = false;
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            own_role.bodyMC.gotoAndStop(a1227.nohitFrame);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}