class Moriya_a3196 {

    public effName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a3196;
    public static instance_Second: Moriya_a3196;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a3196 {
        if (Moriya_a3196.Firstowner == null) {
            Moriya_a3196.Firstowner = owner;
            Moriya_a3196.instance_First = new Moriya_a3196();
            _level0.instance_First.push(this);
            return Moriya_a3196.instance_First;
        } else if (Moriya_a3196.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3196.instance_First.firstCall = true;
            }
            return Moriya_a3196.instance_First;
        } else {
            if (Moriya_a3196.instance_Second == null) {
                Moriya_a3196.instance_Second = new Moriya_a3196();
            }
            if (firstCall) {
                Moriya_a3196.instance_Second.firstCall = true;
            }
            return Moriya_a3196.instance_Second;
        }
    }

    public static addEventa3196(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3196 = Moriya_a3196.getInstance(own_role, false);
        if (!a3196.firstCall) {
            return;
        }
        a3196.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a3196.effName,own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}