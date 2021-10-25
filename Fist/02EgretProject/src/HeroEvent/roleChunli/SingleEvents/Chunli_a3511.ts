class Chunli_a3511 {

    public Vy: number;
    public end_status: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a3511;
    public static instance_Second: Chunli_a3511;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a3511 {
        if (Chunli_a3511.Firstowner == null) {
            Chunli_a3511.Firstowner = owner;
            Chunli_a3511.instance_First = new Chunli_a3511();
            _level0.instance_First.push(this);
            return Chunli_a3511.instance_First;
        } else if (Chunli_a3511.Firstowner == owner) {
            if (firstCall) {
                Chunli_a3511.instance_First.firstCall = true;
            }
            return Chunli_a3511.instance_First;
        } else {
            if (Chunli_a3511.instance_Second == null) {
                Chunli_a3511.instance_Second = new Chunli_a3511();
            }
            if (firstCall) {
                Chunli_a3511.instance_Second.firstCall = true;
            }
            return Chunli_a3511.instance_Second;
        }
    }

    public static addEventa3511(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3511 = Chunli_a3511.getInstance(own_role, false);
        if (!a3511.firstCall) {
            return;
        }
        a3511.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a3511.Vx, a3511.Vy, a3511.end_status);
    }
}