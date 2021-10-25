class K_a742 {

    public flag: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a742;
    public static instance_Second: K_a742;

    constructor() {
        return;
    }



    public static getInstance(owner: Role, firstCall: boolean = true): K_a742 {
        if (K_a742.Firstowner == null) {
            K_a742.Firstowner = owner;
            K_a742.instance_First = new K_a742();
            _level0.instance_First.push(this);
            return K_a742.instance_First;
        } else if (K_a742.Firstowner == owner) {
            if (firstCall) {
                K_a742.instance_First.firstCall = true;
            }
            return K_a742.instance_First;
        } else {
            if (K_a742.instance_Second == null) {
                K_a742.instance_Second = new K_a742();
            }
            if (firstCall) {
                K_a742.instance_Second.firstCall = true;
            }
            return K_a742.instance_Second;
        }
    }


    public static addEventa742(MC: zmovie.ZMovieClip, own_role: Role) {
        let a742 = K_a742.getInstance(own_role, false);
        if (a742.flag == null) {
            console.log("flag is null in a742")
            return;
        }
        if (!a742.firstCall) {
            return;
        }
        a742.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a742.flag);
        } // end if
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        return;
    }
}