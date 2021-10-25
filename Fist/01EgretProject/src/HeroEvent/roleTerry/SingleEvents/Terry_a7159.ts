class Terry_a7159 {
    public effName:string;
    public static Firstowner: Role;
    public firstCall: boolean = true;
    public static instance_First: Terry_a7159;
    public static instance_Second: Terry_a7159;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a7159 {
        if (Terry_a7159.Firstowner == null) {
            Terry_a7159.Firstowner = owner;
            Terry_a7159.instance_First = new Terry_a7159();
            _level0.instance_First.push(this);
            return Terry_a7159.instance_First;
        } else if (Terry_a7159.Firstowner == owner) {
            if (firstCall) {
                Terry_a7159.instance_First.firstCall = true;
            }
            return Terry_a7159.instance_First;
        } else {
            if (Terry_a7159.instance_Second == null) {
                Terry_a7159.instance_Second = new Terry_a7159();
            }
            if (firstCall) {
                Terry_a7159.instance_Second.firstCall = true;
            }
            return Terry_a7159.instance_Second;
        }
    }


    public static addEventa7159(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7159 = Terry_a7159.getInstance(own_role, false);
        if (!a7159.firstCall) {
            return;
        }
        a7159.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a7159.effName,own_role);
    }
}