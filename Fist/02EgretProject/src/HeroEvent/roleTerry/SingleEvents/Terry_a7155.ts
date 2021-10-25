class Terry_a7155 {
    public firstCall: boolean = true;
    public _name: string;
    public MC: zmovie.ZMovieClip;
    public static Firstowner: Role;
    public static instance_First: Terry_a7155;
    public static instance_Second: Terry_a7155;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a7155 {
        if (Terry_a7155.Firstowner == null) {
            Terry_a7155.Firstowner = owner;
            Terry_a7155.instance_First = new Terry_a7155();
            _level0.instance_First.push(this);
            return Terry_a7155.instance_First;
        } else if (Terry_a7155.Firstowner == owner) {
            if (firstCall) {
                Terry_a7155.instance_First.firstCall = true;
            }
            return Terry_a7155.instance_First;
        } else {
            if (Terry_a7155.instance_Second == null) {
                Terry_a7155.instance_Second = new Terry_a7155();
            }
            if (firstCall) {
                Terry_a7155.instance_Second.firstCall = true;
            }
            return Terry_a7155.instance_Second;
        }
    }

    public static addEventa7155(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7155 = Terry_a7155.getInstance(own_role, false);
        if (!a7155.firstCall) {
            return;
        }
        a7155.firstCall = false;
        a7155.MC = MC;
        MC.visible = false;
    }
}