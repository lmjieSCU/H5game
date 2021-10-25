/**生成特效 */
class Chunli_a4178 {

    public s_type: string;
    public f_time: number;
    public bgType: string;
    public roleName: string;
    public faceName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a4178;
    public static instance_Second: Chunli_a4178;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a4178 {
        if (Chunli_a4178.Firstowner == null) {
            Chunli_a4178.Firstowner = owner;
            Chunli_a4178.instance_First = new Chunli_a4178();
            _level0.instance_First.push(this);
            return Chunli_a4178.instance_First;
        } else if (Chunli_a4178.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4178.instance_First.firstCall = true;
            }
            return Chunli_a4178.instance_First;
        } else {
            if (Chunli_a4178.instance_Second == null) {
                Chunli_a4178.instance_Second = new Chunli_a4178();
            }
            if (firstCall) {
                Chunli_a4178.instance_Second.firstCall = true;
            }
            return Chunli_a4178.instance_Second;
        }
    }

    public static addEventa4178(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4178 = Chunli_a4178.getInstance(own_role, false);
        if (!a4178.firstCall) {
            return;
        }
        a4178.firstCall = false;
        MC.stop();
        MC.visible = false;
        let num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        let dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        let dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a4178.s_type, a4178.f_time, dx, dy, a4178.bgType, a4178.roleName, own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        //for testii
    }
}