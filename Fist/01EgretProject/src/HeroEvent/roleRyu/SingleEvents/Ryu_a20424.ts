class Ryu_a20424 {

    public flag: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20424;
    public static instance_Second: Ryu_a20424;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20424 {
        if (Ryu_a20424.Firstowner == null) {
            Ryu_a20424.Firstowner = owner;
            Ryu_a20424.instance_First = new Ryu_a20424();
            _level0.instance_First.push(this);
            return Ryu_a20424.instance_First;
        } else if (Ryu_a20424.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20424.instance_First.firstCall = true;
            }
            return Ryu_a20424.instance_First;
        } else {
            if (Ryu_a20424.instance_Second == null) {
                Ryu_a20424.instance_Second = new Ryu_a20424();
            }
            if (firstCall) {
                Ryu_a20424.instance_Second.firstCall = true;
            }
            return Ryu_a20424.instance_Second;
        }
    }


    public static addEventa20424(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20424 = Ryu_a20424.getInstance(own_role, false);
        if (a20424.flag == null) {
            console.log("flag is null in a20424")
            return;
        }
        if (!a20424.firstCall) {
            return;
        }
        a20424.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a20424.flag);
        } // end if
        return;
    }
}