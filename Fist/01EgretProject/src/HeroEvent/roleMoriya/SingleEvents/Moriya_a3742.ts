class Moriya_a3742 {

    public hurt: boolean;
    public land: boolean;
    public downHit: boolean;
    public status_1:string;
    public flag :string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a3742;
    public static instance_Second: Moriya_a3742;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a3742 {
        if (Moriya_a3742.Firstowner == null) {
            Moriya_a3742.Firstowner = owner;
            Moriya_a3742.instance_First = new Moriya_a3742();
            _level0.instance_First.push(this);
            return Moriya_a3742.instance_First;
        } else if (Moriya_a3742.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3742.instance_First.firstCall = true;
            }
            return Moriya_a3742.instance_First;
        } else {
            if (Moriya_a3742.instance_Second == null) {
                Moriya_a3742.instance_Second = new Moriya_a3742();
            }
            if (firstCall) {
                Moriya_a3742.instance_Second.firstCall = true;
            }
            return Moriya_a3742.instance_Second;
        }
    }

    public static addEventa3742(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3742 = Moriya_a3742.getInstance(own_role, false);
        if (!a3742.firstCall) {
            return;
        }
        a3742.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC,a3742.status_1,a3742.flag,a3742.land,a3742.hurt,a3742.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}