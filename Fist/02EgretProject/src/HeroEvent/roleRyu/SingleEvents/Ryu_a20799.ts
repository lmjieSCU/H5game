class Ryu_a20799 {

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
    public static instance_First: Ryu_a20799;
    public static instance_Second: Ryu_a20799;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20799 {
        if (Ryu_a20799.Firstowner == null) {
            Ryu_a20799.Firstowner = owner;
            Ryu_a20799.instance_First = new Ryu_a20799();
            _level0.instance_First.push(this);
            return Ryu_a20799.instance_First;
        } else if (Ryu_a20799.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20799.instance_First.firstCall = true;
            }
            return Ryu_a20799.instance_First;
        } else {
            if (Ryu_a20799.instance_Second == null) {
                Ryu_a20799.instance_Second = new Ryu_a20799();
            }
            if (firstCall) {
                Ryu_a20799.instance_Second.firstCall = true;
            }
            return Ryu_a20799.instance_Second;
        }
    }

    public static addEventa20799(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20799 = Ryu_a20799.getInstance(own_role, false);
        if (!a20799.firstCall) {
            return;
        }
        a20799.firstCall = false;
        MC.visible = false;
        own_role.move_HitTest(MC, a20799.attFrame, a20799.endFrame, a20799.S, a20799.Vx);
    }
}