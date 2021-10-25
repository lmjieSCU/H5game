class Kula_a7155 {

    public _name: string;
    public MC: zmovie.ZMovieClip;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a7155;
    public static instance_Second: Kula_a7155;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a7155 {
        if (Kula_a7155.Firstowner == null) {
            Kula_a7155.Firstowner = owner;
            Kula_a7155.instance_First = new Kula_a7155();
            _level0.instance_First.push(this);
            return Kula_a7155.instance_First;
        } else if (Kula_a7155.Firstowner == owner) {
            if (firstCall) {
                Kula_a7155.instance_First.firstCall = true;
            }
            return Kula_a7155.instance_First;
        } else {
            if (Kula_a7155.instance_Second == null) {
                Kula_a7155.instance_Second = new Kula_a7155();
            }
            if (firstCall) {
                Kula_a7155.instance_Second.firstCall = true;
            }
            return Kula_a7155.instance_Second;
        }
    }

    public static addEventa7155(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7155 = Kula_a7155.getInstance(own_role,false);
        if (!a7155.firstCall) {
            return;
        }
        //a7155.firstCall = false;
        a7155.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));      
    }
}