class Mai_a6637 {

    public flag: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a6637;
    public static instance_Second: Mai_a6637;

    constructor() {
        return;
    }



    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6637 {
        if (Mai_a6637.Firstowner == null) {
            Mai_a6637.Firstowner = owner;
            Mai_a6637.instance_First = new Mai_a6637();
            _level0.instance_First.push(this);
            return Mai_a6637.instance_First;
        } else if (Mai_a6637.Firstowner == owner) {
            if (firstCall) {
                Mai_a6637.instance_First.firstCall = true;
            }
            return Mai_a6637.instance_First;
        } else {
            if (Mai_a6637.instance_Second == null) {
                Mai_a6637.instance_Second = new Mai_a6637();
            }
            if (firstCall) {
                Mai_a6637.instance_Second.firstCall = true;
            }
            return Mai_a6637.instance_Second;
        }
    }


    public static addEventa6637(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6637 = Mai_a6637.getInstance(own_role, false);
        if (a6637.flag == null) {
            console.log("flag is null in a6637")
            return;
        }
        if (!a6637.firstCall) {
            return;
        }
        a6637.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a6637.flag);
        } // end if
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        return;
    }
}