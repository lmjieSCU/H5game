class Terry_a7153 {

    public nohitFrame: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Terry_a7153;
    public static instance_Second: Terry_a7153;

    constructor() {
        return;
    }

public static getInstance(owner: Role, firstCall: boolean = true): Terry_a7153 {
        if (Terry_a7153.Firstowner == null) {
            Terry_a7153.Firstowner = owner;
            Terry_a7153.instance_First = new Terry_a7153();
            _level0.instance_First.push(this);
            return Terry_a7153.instance_First;
        } else if (Terry_a7153.Firstowner == owner) {
            if (firstCall) {
                Terry_a7153.instance_First.firstCall = true;
            }
            return Terry_a7153.instance_First;
        } else {
            if (Terry_a7153.instance_Second == null) {
                Terry_a7153.instance_Second = new Terry_a7153();
            }
            if (firstCall) {
                Terry_a7153.instance_Second.firstCall = true;
            }
            return Terry_a7153.instance_Second;
        }
    }

    public static addEventa7153(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7153 = Terry_a7153.getInstance(own_role, false);
        if (!a7153.firstCall) {
            return;
        }
        a7153.firstCall = false;
        MC.visible = false;
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt"){
            own_role.bodyMC.gotoAndStop(a7153.nohitFrame);
        }
    }
}