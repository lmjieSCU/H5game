class Terry_a8669 {

    public flag: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Terry_a8669;
    public static instance_Second: Terry_a8669;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a8669 {
        if (Terry_a8669.Firstowner == null) {
            Terry_a8669.Firstowner = owner;
            Terry_a8669.instance_First = new Terry_a8669();
            _level0.instance_First.push(this);
            return Terry_a8669.instance_First;
        } else if (Terry_a8669.Firstowner == owner) {
            if (firstCall) {
                Terry_a8669.instance_First.firstCall = true;
            }
            return Terry_a8669.instance_First;
        } else {
            if (Terry_a8669.instance_Second == null) {
                Terry_a8669.instance_Second = new Terry_a8669();
            }
            if (firstCall) {
                Terry_a8669.instance_Second.firstCall = true;
            }
            return Terry_a8669.instance_Second;
        }
    }


    public static addEventa8669(MC: zmovie.ZMovieClip, own_role: Role) {
        let a8669 = Terry_a8669.getInstance(own_role, false);
        if (!a8669.firstCall) {
            return;
        }
        a8669.firstCall = false;
        if (a8669.flag == null) {
            console.log("flag is null in a8669")
            return;
        }
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a8669.flag);
        } // end if
        return;
    }
}