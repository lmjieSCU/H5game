class K_a5537 {

    public hurt: boolean;
    public land: boolean;
    public downHit: boolean;
    public status_1:string;
    public flag :string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a5537;
    public static instance_Second: K_a5537;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a5537 {
        if (K_a5537.Firstowner == null) {
            K_a5537.Firstowner = owner;
            K_a5537.instance_First = new K_a5537();
            _level0.instance_First.push(this);
            return K_a5537.instance_First;
        } else if (K_a5537.Firstowner == owner) {
            if (firstCall) {
                K_a5537.instance_First.firstCall = true;
            }
            return K_a5537.instance_First;
        } else {
            if (K_a5537.instance_Second == null) {
                K_a5537.instance_Second = new K_a5537();
            }
            if (firstCall) {
                K_a5537.instance_Second.firstCall = true;
            }
            return K_a5537.instance_Second;
        }
    }

    public static addEventa5537(MC: zmovie.ZMovieClip, own_role: Role) {
        let a5537 = K_a5537.getInstance(own_role, false);
        if (!a5537.firstCall) {
            return;
        }
        a5537.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC,a5537.status_1,a5537.flag,a5537.land,a5537.hurt,a5537.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}