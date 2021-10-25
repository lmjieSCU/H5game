/**生成特效 */
class Kula_a19530 {

    public s_type: string;
    public f_time: number;
    public bgType: string;
    public roleName: string;
    public faceName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a19530;
    public static instance_Second: Kula_a19530;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19530 {
        if (Kula_a19530.Firstowner == null) {
            Kula_a19530.Firstowner = owner;
            Kula_a19530.instance_First = new Kula_a19530();
            _level0.instance_First.push(this);
            return Kula_a19530.instance_First;
        } else if (Kula_a19530.Firstowner == owner) {
            if (firstCall) {
                Kula_a19530.instance_First.firstCall = true;
            }
            return Kula_a19530.instance_First;
        } else {
            if (Kula_a19530.instance_Second == null) {
                Kula_a19530.instance_Second = new Kula_a19530();
            }
            if (firstCall) {
                Kula_a19530.instance_Second.firstCall = true;
            }
            return Kula_a19530.instance_Second;
        }
    }

    public static addEventa19530(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19530 = Kula_a19530.getInstance(own_role, false);
        if (!a19530.firstCall) {
            return;
        }
        a19530.firstCall = false;
        MC.stop();
        MC.visible = false;
        let num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        let dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        let dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a19530.s_type, a19530.f_time, dx, dy, a19530.bgType, a19530.roleName, own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        //for testii
    }
}