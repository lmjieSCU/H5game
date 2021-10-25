class Mai_a7159 {

    public effName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a7159;
    public static instance_Second: Mai_a7159;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a7159 {
        if (Mai_a7159.Firstowner == null) {
            Mai_a7159.Firstowner = owner;
            Mai_a7159.instance_First = new Mai_a7159();
            _level0.instance_First.push(this);
            return Mai_a7159.instance_First;
        } else if (Mai_a7159.Firstowner == owner) {
            if (firstCall) {
                Mai_a7159.instance_First.firstCall = true;
            }
            return Mai_a7159.instance_First;
        } else {
            if (Mai_a7159.instance_Second == null) {
                Mai_a7159.instance_Second = new Mai_a7159();
            }
            if (firstCall) {
                Mai_a7159.instance_Second.firstCall = true;
            }
            return Mai_a7159.instance_Second;
        }
    }

    public static addEventa7159(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7159 = Mai_a7159.getInstance(own_role, false);
        if (!a7159.firstCall) {
            return;
        }
        a7159.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a7159.effName,own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}