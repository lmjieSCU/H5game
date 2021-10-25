class Terry_a6557 {

    public Vy: number;
    public end_status: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Terry_a6557;
    public static instance_Second: Terry_a6557;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a6557 {
        if (Terry_a6557.Firstowner == null) {
            Terry_a6557.Firstowner = owner;
            Terry_a6557.instance_First = new Terry_a6557();
            _level0.instance_First.push(this);
            return Terry_a6557.instance_First;
        } else if (Terry_a6557.Firstowner == owner) {
            if (firstCall) {
                Terry_a6557.instance_First.firstCall = true;
            }
            return Terry_a6557.instance_First;
        } else {
            if (Terry_a6557.instance_Second == null) {
                Terry_a6557.instance_Second = new Terry_a6557();
            }
            if (firstCall) {
                Terry_a6557.instance_Second.firstCall = true;
            }
            return Terry_a6557.instance_Second;
        }
    }

    public static addEventa6557(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6557 = Terry_a6557.getInstance(own_role, false);
        if (!a6557.firstCall) {
            return;
        }
        a6557.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a6557.Vx, a6557.Vy, a6557.end_status);
    }


}