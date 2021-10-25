class Ryu_a20717 {

    public s_type: string;
    public f_time: number;
    public bgType: string;
    public roleName: string;
    public faceName: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20717;
    public static instance_Second: Ryu_a20717;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20717 {
        if (Ryu_a20717.Firstowner == null) {
            Ryu_a20717.Firstowner = owner;
            Ryu_a20717.instance_First = new Ryu_a20717();
            _level0.instance_First.push(this);
            return Ryu_a20717.instance_First;
        } else if (Ryu_a20717.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20717.instance_First.firstCall = true;
            }
            return Ryu_a20717.instance_First;
        } else {
            if (Ryu_a20717.instance_Second == null) {
                Ryu_a20717.instance_Second = new Ryu_a20717();
            }
            if (firstCall) {
                Ryu_a20717.instance_Second.firstCall = true;
            }
            return Ryu_a20717.instance_Second;
        }
    }

    public static addEventa20717(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20717 = Ryu_a20717.getInstance(own_role, false);
        if (!a20717.firstCall) {
            return;
        }
        a20717.firstCall = false;
        MC.stop();
        MC.visible = false;
        let num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        let dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        let dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a20717.s_type,a20717.f_time,dx,dy,a20717.bgType,a20717.roleName,own_role.dir,this,own_role);
    }
}