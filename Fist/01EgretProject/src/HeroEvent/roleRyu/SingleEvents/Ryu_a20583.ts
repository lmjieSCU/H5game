class Ryu_a20583 {

    public hurt: boolean;
    public land: boolean;
    public downHit: boolean;
    public status_1:string;
    public flag :string;
    public firstCall:boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20583;
    public static instance_Second: Ryu_a20583;

    constructor() {
        return;
    }

     public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20583 {
        if (Ryu_a20583.Firstowner == null) {
            Ryu_a20583.Firstowner = owner;
            Ryu_a20583.instance_First = new Ryu_a20583();
            _level0.instance_First.push(this);
            return Ryu_a20583.instance_First;
        } else if (Ryu_a20583.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20583.instance_First.firstCall = true;
            }
            return Ryu_a20583.instance_First;
        } else {
            if (Ryu_a20583.instance_Second == null) {
                Ryu_a20583.instance_Second = new Ryu_a20583();
            }
            if (firstCall) {
                Ryu_a20583.instance_Second.firstCall = true;
            }
            return Ryu_a20583.instance_Second;
        }
    }

    public static addEventa20583(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20583 = Ryu_a20583.getInstance(own_role,false);
        if(!a20583.firstCall){
            return;
        }
        a20583.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC,a20583.status_1,a20583.flag,a20583.land,a20583.hurt,a20583.downHit);
    }

}