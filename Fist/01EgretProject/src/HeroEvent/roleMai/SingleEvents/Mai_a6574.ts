class Mai_a6754 {

    public hurt: boolean;
    public land: boolean;
    public downHit: boolean;
    public status_1:string;
    public flag :string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a6754;
    public static instance_Second: Mai_a6754;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6754 {
        if (Mai_a6754.Firstowner == null) {
            Mai_a6754.Firstowner = owner;
            Mai_a6754.instance_First = new Mai_a6754();
            _level0.instance_First.push(this);
            return Mai_a6754.instance_First;
        } else if (Mai_a6754.Firstowner == owner) {
            if (firstCall) {
                Mai_a6754.instance_First.firstCall = true;
            }
            return Mai_a6754.instance_First;
        } else {
            if (Mai_a6754.instance_Second == null) {
                Mai_a6754.instance_Second = new Mai_a6754();
            }
            if (firstCall) {
                Mai_a6754.instance_Second.firstCall = true;
            }
            return Mai_a6754.instance_Second;
        }
    }

    public static addEventa6574(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6754 = Mai_a6754.getInstance(own_role, false);
        if (!a6754.firstCall) {
            return;
        }
        a6754.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC,a6754.status_1,a6754.flag,a6754.land,a6754.hurt,a6754.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}