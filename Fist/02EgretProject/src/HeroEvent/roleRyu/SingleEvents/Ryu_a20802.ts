class Ryu_a20802 {

    public nohitFrame: string;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20802;
    public static instance_Second: Ryu_a20802;

    constructor() {
        return;
    }

    public static getInstance(owner: Role): Ryu_a20802 {
        if (Ryu_a20802.Firstowner == null) {
            Ryu_a20802.Firstowner = owner;
            Ryu_a20802.instance_First = new Ryu_a20802();
            _level0.instance_First.push(this);
            return Ryu_a20802.instance_First;
        } else if (Ryu_a20802.Firstowner == owner) {
            return Ryu_a20802.instance_First;
        } else {
            if (Ryu_a20802.instance_Second == null) {
                Ryu_a20802.instance_Second = new Ryu_a20802();
            }
            return Ryu_a20802.instance_Second;
        }
    }

    public static addEventa20802(MC: zmovie.ZMovieClip, own_role: Role) {
        MC.visible = false;
        let a20802 = Ryu_a20802.getInstance(own_role);
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            if(own_role.opp.status_3=="down"&& own_role.onHit == true){
                return;
            }
            own_role.bodyMC.gotoAndStop(a20802.nohitFrame);
        }
    }
}