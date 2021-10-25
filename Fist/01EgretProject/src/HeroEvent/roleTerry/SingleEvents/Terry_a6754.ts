class Terry_a6754 {

    public hurt: boolean;
    public land: boolean;
    public downHit: boolean;
    public status_1:string;
    public flag :string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Terry_a6754;
    public static instance_Second: Terry_a6754;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a6754 {
        if (Terry_a6754.Firstowner == null) {
            Terry_a6754.Firstowner = owner;
            Terry_a6754.instance_First = new Terry_a6754();
            _level0.instance_First.push(this);
            return Terry_a6754.instance_First;
        } else if (Terry_a6754.Firstowner == owner) {
            if (firstCall) {
                Terry_a6754.instance_First.firstCall = true;
            }
            return Terry_a6754.instance_First;
        } else {
            if (Terry_a6754.instance_Second == null) {
                Terry_a6754.instance_Second = new Terry_a6754();
            }
            if (firstCall) {
                Terry_a6754.instance_Second.firstCall = true;
            }
            return Terry_a6754.instance_Second;
        }
    }

    public static addEventa6754(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6754 = Terry_a6754.getInstance(own_role, false);
        if (!a6754.firstCall) {
            return;
        }
        a6754.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC,a6754.status_1,a6754.flag,a6754.land,a6754.hurt,a6754.downHit);
    }

}