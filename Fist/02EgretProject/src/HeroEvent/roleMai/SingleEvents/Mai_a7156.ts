class Mai_a7156 {

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
    public static instance_First: Mai_a7156;
    public static instance_Second: Mai_a7156;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a7156 {
        if (Mai_a7156.Firstowner == null) {
            Mai_a7156.Firstowner = owner;
            Mai_a7156.instance_First = new Mai_a7156();
            _level0.instance_First.push(this);
            return Mai_a7156.instance_First;
        } else if (Mai_a7156.Firstowner == owner) {
            if (firstCall) {
                Mai_a7156.instance_First.firstCall = true;
            }
            return Mai_a7156.instance_First;
        } else {
            if (Mai_a7156.instance_Second == null) {
                Mai_a7156.instance_Second = new Mai_a7156();
            }
            if (firstCall) {
                Mai_a7156.instance_Second.firstCall = true;
            }
            return Mai_a7156.instance_Second;
        }
    }

    public static addEventa7156(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7156 = Mai_a7156.getInstance(own_role, false);
        if (!a7156.firstCall) {
            return;
        }
        //a7156.firstCall = false;
        MC.visible = false;
        MC.stop();//OPP_A
        a7156.MC = MC;
        let _posObj = eval(a7156.posObj).getInstance(own_role);//opp_B"
        let hit = own_role.catch_oppPos2(a7156.MC, _posObj.MC, a7156.status_1, a7156.flag, a7156.land, a7156.hurt, a7156.downHit);
        if (hit) {
            if (a7156['func'] != null)
                a7156['func']();
        }
        else {
            FightMainRender.getInstance().Add(a7156, a7156.enterFrame, [own_role]);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

    public enterFrame(own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        let a7156 = Mai_a7156.getInstance(own_role);
        let _posObj = eval(a7156.posObj).getInstance(own_role);//opp_B
        let hit = own_role.catch_oppPos2(a7156.MC, _posObj.MC, a7156.status_1, a7156.flag, a7156.land, a7156.hurt, a7156.downHit);
        if (hit) {
            FightMainRender.getInstance().Remove(a7156, a7156.enterFrame);
            if (a7156['func'] != null)
                a7156['func']();
        }
        if (own_role.status_1 == "stand" || own_role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(a7156, a7156.enterFrame);
        }
    }


}