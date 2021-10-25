class Terry_a6433 {

    public flag: string;
    public target: string;
    public Vx: number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Terry_a6433;
    public static instance_Second: Terry_a6433;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a6433 {
        if (Terry_a6433.Firstowner == null) {
            Terry_a6433.Firstowner = owner;
            Terry_a6433.instance_First = new Terry_a6433();
            _level0.instance_First.push(this);
            return Terry_a6433.instance_First;
        } else if (Terry_a6433.Firstowner == owner) {
            if (firstCall) {
                Terry_a6433.instance_First.firstCall = true;
            }
            return Terry_a6433.instance_First;
        } else {
            if (Terry_a6433.instance_Second == null) {
                Terry_a6433.instance_Second = new Terry_a6433();
            }
            if (firstCall) {
                Terry_a6433.instance_Second.firstCall = true;
            }
            return Terry_a6433.instance_Second;
        }
    }

    public static addEventa6433(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6433 = Terry_a6433.getInstance(own_role, false);
        if (!a6433.firstCall) {
            return;
        }
        //a6433.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(Terry_a6433.getInstance(own_role).Vx, this);   
    }

}