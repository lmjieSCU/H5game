class Kula_a7159 {

    public effName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a7159;
    public static instance_Second: Kula_a7159;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a7159 {
        if (Kula_a7159.Firstowner == null) {
            Kula_a7159.Firstowner = owner;
            Kula_a7159.instance_First = new Kula_a7159();
            _level0.instance_First.push(this);
            return Kula_a7159.instance_First;
        } else if (Kula_a7159.Firstowner == owner) {
            if (firstCall) {
                Kula_a7159.instance_First.firstCall = true;
            }
            return Kula_a7159.instance_First;
        } else {
            if (Kula_a7159.instance_Second == null) {
                Kula_a7159.instance_Second = new Kula_a7159();
            }
            if (firstCall) {
                Kula_a7159.instance_Second.firstCall = true;
            }
            return Kula_a7159.instance_Second;
        }
    }

    public static addEventa7159(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7159 = Kula_a7159.getInstance(own_role, false);
        if (!a7159.firstCall) {
            return;
        }
        a7159.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a7159.effName,own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}