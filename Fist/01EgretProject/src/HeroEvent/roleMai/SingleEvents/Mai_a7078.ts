/**生成特效 */
class Mai_a7078 {

    public s_type: string;
    public f_time: number;
    public bgType: string;
    public roleName: string;
    public faceName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a7078;
    public static instance_Second: Mai_a7078;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a7078 {
        if (Mai_a7078.Firstowner == null) {
            Mai_a7078.Firstowner = owner;
            Mai_a7078.instance_First = new Mai_a7078();
            _level0.instance_First.push(this);
            return Mai_a7078.instance_First;
        } else if (Mai_a7078.Firstowner == owner) {
            if (firstCall) {
                Mai_a7078.instance_First.firstCall = true;
            }
            return Mai_a7078.instance_First;
        } else {
            if (Mai_a7078.instance_Second == null) {
                Mai_a7078.instance_Second = new Mai_a7078();
            }
            if (firstCall) {
                Mai_a7078.instance_Second.firstCall = true;
            }
            return Mai_a7078.instance_Second;
        }
    }

    public static addEventa7078(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7078 = Mai_a7078.getInstance(own_role, false);
        if (!a7078.firstCall) {
            return;
        }
        a7078.firstCall = false;
        MC.stop();
        MC.visible = false;
        let num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        let dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        let dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a7078.s_type, a7078.f_time, dx, dy, a7078.bgType, a7078.roleName, own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        //for testii
    }
}