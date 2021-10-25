class Ryu_a20745 {

    public status_1: string;
    public flag: number | string;
    public hurt: boolean;
    public land: boolean;
    public downHit: boolean
    public func: Function;
    public posObj: string;
    public MC: zmovie.ZMovieClip;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20745;
    public static instance_Second: Ryu_a20745;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20745 {
        if (Ryu_a20745.Firstowner == null) {
            Ryu_a20745.Firstowner = owner;
            Ryu_a20745.instance_First = new Ryu_a20745();
            _level0.instance_First.push(this);
            return Ryu_a20745.instance_First;
        } else if (Ryu_a20745.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20745.instance_First.firstCall = true;
            }
            return Ryu_a20745.instance_First;
        } else {
            if (Ryu_a20745.instance_Second == null) {
                Ryu_a20745.instance_Second = new Ryu_a20745();
            }
            if (firstCall) {
                Ryu_a20745.instance_Second.firstCall = true;
            }
            return Ryu_a20745.instance_Second;
        }
    }

    public static addEventa20745(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20745 = Ryu_a20745.getInstance(own_role, false);
        if (!a20745.firstCall) {
            return;
        }
        a20745.firstCall = false;
        MC.visible = false;
        MC.stop();//OPP_A
        a20745.MC = MC;
        let _posObj = eval(a20745.posObj).getInstance(own_role);//opp_B
        let hit = own_role.catch_oppPos2(a20745.MC, _posObj.MC, a20745.status_1, a20745.flag, a20745.land, a20745.hurt, a20745.downHit);
        if (hit) {
            if (a20745['func'] != null)
                a20745['func']();
        }
        else {
            FightMainRender.getInstance().Add(a20745, a20745.enterFrame, [own_role]);
        }
    }

    public enterFrame(own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        let a20745 = Ryu_a20745.getInstance(own_role);
        let _posObj = eval(a20745.posObj).getInstance(own_role);//opp_B
        let hit = own_role.catch_oppPos2(a20745.MC, _posObj.MC, a20745.status_1, a20745.flag, a20745.land, a20745.hurt, a20745.downHit);
        if (hit) {
            FightMainRender.getInstance().Remove(a20745, a20745.enterFrame);
            if (a20745['func'] != null)
                a20745['func']();
        }
        if (own_role.status_1 == "stand" || own_role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(a20745, a20745.enterFrame);
        }
    }
}