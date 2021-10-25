class Ryu_a20761 {

    public effName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20761;
    public static instance_Second: Ryu_a20761;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20761 {
        if (Ryu_a20761.Firstowner == null) {
            Ryu_a20761.Firstowner = owner;
            Ryu_a20761.instance_First = new Ryu_a20761();
            _level0.instance_First.push(this);
            return Ryu_a20761.instance_First;
        } else if (Ryu_a20761.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20761.instance_First.firstCall = true;
            }
            return Ryu_a20761.instance_First;
        } else {
            if (Ryu_a20761.instance_Second == null) {
                Ryu_a20761.instance_Second = new Ryu_a20761();
            }
            if (firstCall) {
                Ryu_a20761.instance_Second.firstCall = true;
            }
            return Ryu_a20761.instance_Second;
        }
    }

    public static addEventa20761(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20761 = Ryu_a20761.getInstance(own_role, false);
        if (!a20761.firstCall) {
            return;
        }
        a20761.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a20761.effName,own_role);
    }
}