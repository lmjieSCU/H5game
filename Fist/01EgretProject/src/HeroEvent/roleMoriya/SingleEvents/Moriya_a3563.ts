class Moriya_a3563 {

    public flag: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a3563;
    public static instance_Second: Moriya_a3563;

    constructor() {
        return;
    }
    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a3563 {
        if (Moriya_a3563.Firstowner == null) {
            Moriya_a3563.Firstowner = owner;
            Moriya_a3563.instance_First = new Moriya_a3563();
            _level0.instance_First.push(this);
            return Moriya_a3563.instance_First;
        } else if (Moriya_a3563.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3563.instance_First.firstCall = true;
            }
            return Moriya_a3563.instance_First;
        } else {
            if (Moriya_a3563.instance_Second == null) {
                Moriya_a3563.instance_Second = new Moriya_a3563();
            }
            if (firstCall) {
                Moriya_a3563.instance_Second.firstCall = true;
            }
            return Moriya_a3563.instance_Second;
        }
    }


    public static addEventa3563(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3563 = Moriya_a3563.getInstance(own_role, false);
        if (a3563.flag == null) {
            console.log("flag is null in a3563")
            return;
        }
        if (!a3563.firstCall) {
            return;
        }
        a3563.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a3563.flag);
        } // end if
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        return;
    }
}