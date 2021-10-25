class Chunli_a4188 {

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
    public static instance_First: Chunli_a4188;
    public static instance_Second: Chunli_a4188;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a4188 {
        if (Chunli_a4188.Firstowner == null) {
            Chunli_a4188.Firstowner = owner;
            Chunli_a4188.instance_First = new Chunli_a4188();
            _level0.instance_First.push(this);
            return Chunli_a4188.instance_First;
        } else if (Chunli_a4188.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4188.instance_First.firstCall = true;
            }
            return Chunli_a4188.instance_First;
        } else {
            if (Chunli_a4188.instance_Second == null) {
                Chunli_a4188.instance_Second = new Chunli_a4188();
            }
            if (firstCall) {
                Chunli_a4188.instance_Second.firstCall = true;
            }
            return Chunli_a4188.instance_Second;
        }
    }

    public static addEventa4188(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4188 = Chunli_a4188.getInstance(own_role, false);
        if (!a4188.firstCall) {
            return;
        }
        //a4188.firstCall = false;
        MC.visible = false;
        MC.stop();//OPP_A
        a4188.MC = MC;
        let _posObj = eval(a4188.posObj).getInstance(own_role);//opp_B"
        let hit = own_role.catch_oppPos2(a4188.MC, _posObj.MC, a4188.status_1, a4188.flag, a4188.land, a4188.hurt, a4188.downHit);
        if (hit) {
            if (a4188['func'] != null)
                a4188['func']();
        }
        else {
            FightMainRender.getInstance().Add(a4188, a4188.enterFrame, [own_role]);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }

    public enterFrame(own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        let a4188 = Chunli_a4188.getInstance(own_role);
        let _posObj = eval(a4188.posObj).getInstance(own_role);//opp_B
        let hit = own_role.catch_oppPos2(a4188.MC, _posObj.MC, a4188.status_1, a4188.flag, a4188.land, a4188.hurt, a4188.downHit);
        if (hit) {
            FightMainRender.getInstance().Remove(a4188, a4188.enterFrame);
            if (a4188['func'] != null)
                a4188['func']();
        }
        if (own_role.status_1 == "stand" || own_role.status_3 == "hurt") {
            FightMainRender.getInstance().Remove(a4188, a4188.enterFrame);
        }
    }


}