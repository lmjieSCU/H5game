class Terry_a7078 {

    public s_type: string;
    public f_time: number;
    public bgType: string;
    public roleName: string;
    public faceName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Terry_a7078;
    public static instance_Second: Terry_a7078;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a7078 {
        if (Terry_a7078.Firstowner == null) {
            Terry_a7078.Firstowner = owner;
            Terry_a7078.instance_First = new Terry_a7078();
            _level0.instance_First.push(this);
            return Terry_a7078.instance_First;
        } else if (Terry_a7078.Firstowner == owner) {
            if (firstCall) {
                Terry_a7078.instance_First.firstCall = true;
            }
            return Terry_a7078.instance_First;
        } else {
            if (Terry_a7078.instance_Second == null) {
                Terry_a7078.instance_Second = new Terry_a7078();
            }
            if (firstCall) {
                Terry_a7078.instance_Second.firstCall = true;
            }
            return Terry_a7078.instance_Second;
        }
    }

    public static addEventa7078(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7078 = Terry_a7078.getInstance(own_role, false);
        if (!a7078.firstCall) {
            return;
        }
        a7078.firstCall = false;
        MC.visible = false;
        MC.stop();
        MC.visible = false;
        let num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        let dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        let dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a7078.s_type, a7078.f_time, dx, dy, a7078.bgType, a7078.roleName, own_role.dir, this, own_role);
    }
}