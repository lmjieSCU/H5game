class Chunli_a3395 {

    public flag: string;
    public target: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a3395;
    public static instance_Second: Chunli_a3395;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a3395 {
        if (Chunli_a3395.Firstowner == null) {
            Chunli_a3395.Firstowner = owner;
            Chunli_a3395.instance_First = new Chunli_a3395();
            _level0.instance_First.push(this);
            return Chunli_a3395.instance_First;
        } else if (Chunli_a3395.Firstowner == owner) {
            if (firstCall) {
                Chunli_a3395.instance_First.firstCall = true;
            }
            return Chunli_a3395.instance_First;
        } else {
            if (Chunli_a3395.instance_Second == null) {
                Chunli_a3395.instance_Second = new Chunli_a3395();
            }
            if (firstCall) {
                Chunli_a3395.instance_Second.firstCall = true;
            }
            return Chunli_a3395.instance_Second;
        }
    }

    public static addEventa3395(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3395 = Chunli_a3395.getInstance(own_role, false);
        if (!a3395.firstCall) {
            return;
        }
        //a3395.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(Chunli_a3395.getInstance(own_role).Vx, this);
    }

}