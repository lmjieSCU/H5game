class Ryu_a20744 {

    public _name: string;
    public MC: zmovie.ZMovieClip;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20744;
    public static instance_Second: Ryu_a20744;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20744 {
        if (Ryu_a20744.Firstowner == null) {
            Ryu_a20744.Firstowner = owner;
            Ryu_a20744.instance_First = new Ryu_a20744();
            _level0.instance_First.push(this);
            return Ryu_a20744.instance_First;
        } else if (Ryu_a20744.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20744.instance_First.firstCall = true;
            }
            return Ryu_a20744.instance_First;
        } else {
            if (Ryu_a20744.instance_Second == null) {
                Ryu_a20744.instance_Second = new Ryu_a20744();
            }
            if (firstCall) {
                Ryu_a20744.instance_Second.firstCall = true;
            }
            return Ryu_a20744.instance_Second;
        }
    }

    public static addEventa20744(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20744 = Ryu_a20744.getInstance(own_role, false);
        if (!a20744.firstCall) {
            return;
        }
        a20744.firstCall = false;
        Ryu_a20744.getInstance(own_role).MC = MC;
        MC.visible = false;
    }
}