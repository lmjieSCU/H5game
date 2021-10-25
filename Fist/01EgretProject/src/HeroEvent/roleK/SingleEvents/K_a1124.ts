class K_a1124 {

    public Vx: number;
    public Vy: number;
    public Va: number;
    public S: number;
    public dis: number;
    public attFrame: string;
    public endFrame: string;
    public target: string;
    public nohit_status: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a1124;
    public static instance_Second: K_a1124;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a1124 {
        if (K_a1124.Firstowner == null) {
            K_a1124.Firstowner = owner;
            K_a1124.instance_First = new K_a1124();
            _level0.instance_First.push(this);
            return K_a1124.instance_First;
        } else if (K_a1124.Firstowner == owner) {
            if (firstCall) {
                K_a1124.instance_First.firstCall = true;
            }
            return K_a1124.instance_First;
        } else {
            if (K_a1124.instance_Second == null) {
                K_a1124.instance_Second = new K_a1124();
            }
            if (firstCall) {
                K_a1124.instance_Second.firstCall = true;
            }
            return K_a1124.instance_Second;
        }
    }

    public static addEventa1124(MC: zmovie.ZMovieClip, own_role: Role) {
        let a1124 = K_a1124.getInstance(own_role, false);
        if (!a1124.firstCall) {
            return;
        }
        a1124.firstCall = false;
        MC.visible = false;
        own_role.move_HitTest(MC, a1124.attFrame, a1124.endFrame, a1124.S, a1124.Vx);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}