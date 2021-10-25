class K_a804 {

    public status_1: string;
    public flag: string;
    public hurt: boolean;
    public land: boolean;
    public downHit: boolean
    public func: Function;
    public posObj: string;
    public MC: zmovie.ZMovieClip;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a804;
    public static instance_Second: K_a804;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a804 {
        if (K_a804.Firstowner == null) {
            K_a804.Firstowner = owner;
            K_a804.instance_First = new K_a804();
            _level0.instance_First.push(this);
            return K_a804.instance_First;
        } else if (K_a804.Firstowner == owner) {
            if (firstCall) {
                K_a804.instance_First.firstCall = true;
            }
            return K_a804.instance_First;
        } else {
            if (K_a804.instance_Second == null) {
                K_a804.instance_Second = new K_a804();
            }
            if (firstCall) {
                K_a804.instance_Second.firstCall = true;
            }
            return K_a804.instance_Second;
        }
    }

    public static addEventa804(MC: zmovie.ZMovieClip, own_role: Role) {
        let a804 = K_a804.getInstance(own_role, false);
        if (!a804.firstCall) {
            return;
        }
        //a804.firstCall = false;
        MC.visible = false;
        MC.stop();//OPP_A
        a804.MC = MC;
        let _posObj = eval(a804.posObj).getInstance(own_role);//opp_B"
        let hit = own_role.catch_oppPos2(a804.MC, _posObj.MC, a804.status_1, a804.flag, a804.land, a804.hurt, a804.downHit);
        if (hit) {
            if (a804['func'] != null)
                a804['func']();
        }
        else {
            FightMainRender.getInstance().Add(a804, a804.enterFrame, [own_role]);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

    public enterFrame(own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        let a804 = K_a804.getInstance(own_role);
        let _posObj = eval(a804.posObj).getInstance(own_role);//opp_B
        let hit = own_role.catch_oppPos2(a804.MC, _posObj.MC, a804.status_1, a804.flag, a804.land, a804.hurt, a804.downHit);
        if (hit) {
            FightMainRender.getInstance().Remove(a804, a804.enterFrame);
            if (a804['func'] != null)
                a804['func']();
        }
        if (own_role.status_1 == "stand" || own_role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(a804, a804.enterFrame);
        }
    }


}