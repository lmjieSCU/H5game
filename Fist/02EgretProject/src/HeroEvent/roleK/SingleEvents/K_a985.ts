/**生成特效 */
class K_a985 {

    public s_type: string;
    public f_time: number;
    public bgType: string;
    public roleName: string;
    public faceName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a985;
    public static instance_Second: K_a985;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a985 {
        if (K_a985.Firstowner == null) {
            K_a985.Firstowner = owner;
            K_a985.instance_First = new K_a985();
            _level0.instance_First.push(this);
            return K_a985.instance_First;
        } else if (K_a985.Firstowner == owner) {
            if (firstCall) {
                K_a985.instance_First.firstCall = true;
            }
            return K_a985.instance_First;
        } else {
            if (K_a985.instance_Second == null) {
                K_a985.instance_Second = new K_a985();
            }
            if (firstCall) {
                K_a985.instance_Second.firstCall = true;
            }
            return K_a985.instance_Second;
        }
    }

    public static addEventa985(MC: zmovie.ZMovieClip, own_role: Role) {
        let a985 = K_a985.getInstance(own_role, false);
        if (!a985.firstCall) {
            return;
        }
        a985.firstCall = false;
        MC.stop();
        MC.visible = false;
        let num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        let dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        let dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a985.s_type, a985.f_time, dx, dy, a985.bgType, a985.roleName, own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        //for testii
    }
}