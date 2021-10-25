class Kula_a8669 {

    public flag: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a8669;
    public static instance_Second: Kula_a8669;

    constructor() {
        return;
    }



    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a8669 {
        if (Kula_a8669.Firstowner == null) {
            Kula_a8669.Firstowner = owner;
            Kula_a8669.instance_First = new Kula_a8669();
            _level0.instance_First.push(this);
            return Kula_a8669.instance_First;
        } else if (Kula_a8669.Firstowner == owner) {
            if (firstCall) {
                Kula_a8669.instance_First.firstCall = true;
            }
            return Kula_a8669.instance_First;
        } else {
            if (Kula_a8669.instance_Second == null) {
                Kula_a8669.instance_Second = new Kula_a8669();
            }
            if (firstCall) {
                Kula_a8669.instance_Second.firstCall = true;
            }
            return Kula_a8669.instance_Second;
        }
    }


    public static addEventa8669(MC: zmovie.ZMovieClip, own_role: Role) {
        let a8669 = Kula_a8669.getInstance(own_role, false);
        if (a8669.flag == null) {
            console.log("flag is null in a8669")
            return;
        }
        if (!a8669.firstCall) {
            return;
        }
        a8669.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a8669.flag);
        } // end if
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        return;
    }
}