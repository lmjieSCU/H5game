class Moriya_a4185 {

    public Vx: number;
    public Vy: number;
    public Va: number;
    public S: number;
    public dis: number;
    public attFrame: string;
    public endFrame: string;
    public target: string;
    public nohit_status: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a4185;
    public static instance_Second: Moriya_a4185;
    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a4185 {
        if (Moriya_a4185.Firstowner == null) {
            Moriya_a4185.Firstowner = owner;
            Moriya_a4185.instance_First = new Moriya_a4185();
            _level0.instance_First.push(this);
            return Moriya_a4185.instance_First;
        } else if (Moriya_a4185.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4185.instance_First.firstCall = true;
            }
            return Moriya_a4185.instance_First;
        } else {
            if (Moriya_a4185.instance_Second == null) {
                Moriya_a4185.instance_Second = new Moriya_a4185();
            }
            if (firstCall) {
                Moriya_a4185.instance_Second.firstCall = true;
            }
            return Moriya_a4185.instance_Second;
        }
    }

    public static addEventa4185(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4185 = Moriya_a4185.getInstance(own_role, false);
        if (!a4185.firstCall) {
            return;
        }
        a4185.firstCall = false;
        MC.visible = false;
        own_role.move_HitTest(MC, a4185.attFrame, a4185.endFrame, a4185.S, a4185.Vx);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }
}