class Chunli_a3196 {

    public effName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a3196;
    public static instance_Second: Chunli_a3196;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a3196 {
        if (Chunli_a3196.Firstowner == null) {
            Chunli_a3196.Firstowner = owner;
            Chunli_a3196.instance_First = new Chunli_a3196();
            _level0.instance_First.push(this);
            return Chunli_a3196.instance_First;
        } else if (Chunli_a3196.Firstowner == owner) {
            if (firstCall) {
                Chunli_a3196.instance_First.firstCall = true;
            }
            return Chunli_a3196.instance_First;
        } else {
            if (Chunli_a3196.instance_Second == null) {
                Chunli_a3196.instance_Second = new Chunli_a3196();
            }
            if (firstCall) {
                Chunli_a3196.instance_Second.firstCall = true;
            }
            return Chunli_a3196.instance_Second;
        }
    }

    public static addEventa3196(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3196 = Chunli_a3196.getInstance(own_role, false);
        if (!a3196.firstCall) {
            return;
        }
        a3196.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a3196.effName,own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}