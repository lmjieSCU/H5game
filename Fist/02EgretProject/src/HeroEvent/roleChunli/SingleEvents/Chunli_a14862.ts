class Chunli_a14862 {

    public hurt: boolean;
    public land: boolean;
    public downHit: boolean;
    public status_1:string;
    public flag :string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a14862;
    public static instance_Second: Chunli_a14862;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a14862 {
        if (Chunli_a14862.Firstowner == null) {
            Chunli_a14862.Firstowner = owner;
            Chunli_a14862.instance_First = new Chunli_a14862();
            _level0.instance_First.push(this);
            return Chunli_a14862.instance_First;
        } else if (Chunli_a14862.Firstowner == owner) {
            if (firstCall) {
                Chunli_a14862.instance_First.firstCall = true;
            }
            return Chunli_a14862.instance_First;
        } else {
            if (Chunli_a14862.instance_Second == null) {
                Chunli_a14862.instance_Second = new Chunli_a14862();
            }
            if (firstCall) {
                Chunli_a14862.instance_Second.firstCall = true;
            }
            return Chunli_a14862.instance_Second;
        }
    }

    public static addEventa14862(MC: zmovie.ZMovieClip, own_role: Role) {
        let a14862 = Chunli_a14862.getInstance(own_role, false);
        if (!a14862.firstCall) {
            return;
        }
        a14862.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC,a14862.status_1,a14862.flag,a14862.land,a14862.hurt,a14862.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

}