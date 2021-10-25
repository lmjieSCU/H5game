class K_a5755 {

    public effName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a5755;
    public static instance_Second: K_a5755;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a5755 {
        if (K_a5755.Firstowner == null) {
            K_a5755.Firstowner = owner;
            K_a5755.instance_First = new K_a5755();
            _level0.instance_First.push(this);
            return K_a5755.instance_First;
        } else if (K_a5755.Firstowner == owner) {
            if (firstCall) {
                K_a5755.instance_First.firstCall = true;
            }
            return K_a5755.instance_First;
        } else {
            if (K_a5755.instance_Second == null) {
                K_a5755.instance_Second = new K_a5755();
            }
            if (firstCall) {
                K_a5755.instance_Second.firstCall = true;
            }
            return K_a5755.instance_Second;
        }
    }

    public static addEventa5755(MC: zmovie.ZMovieClip, own_role: Role) {
        let a5755 = K_a5755.getInstance(own_role, false);
        if (!a5755.firstCall) {
            return;
        }
        a5755.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a5755.effName,own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}