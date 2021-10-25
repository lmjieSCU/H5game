class K_a825 {

    public _name: string;
    public MC: zmovie.ZMovieClip;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a825;
    public static instance_Second: K_a825;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a825 {
        if (K_a825.Firstowner == null) {
            K_a825.Firstowner = owner;
            K_a825.instance_First = new K_a825();
            _level0.instance_First.push(this);
            return K_a825.instance_First;
        } else if (K_a825.Firstowner == owner) {
            if (firstCall) {
                K_a825.instance_First.firstCall = true;
            }
            return K_a825.instance_First;
        } else {
            if (K_a825.instance_Second == null) {
                K_a825.instance_Second = new K_a825();
            }
            if (firstCall) {
                K_a825.instance_Second.firstCall = true;
            }
            return K_a825.instance_Second;
        }
    }

    public static addEventa825(MC: zmovie.ZMovieClip, own_role: Role) {
        let a825 = K_a825.getInstance(own_role,false);
        if (!a825.firstCall) {
            return;
        }
        //a825.firstCall = false;
        a825.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));      
    }
}