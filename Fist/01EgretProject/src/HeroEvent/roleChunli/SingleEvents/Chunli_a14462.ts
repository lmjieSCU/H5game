class Chunli_a14462 {

    public flag: string;
    public obj_level: number;
    public defendSuper: any;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a14462;
    public static instance_Second: Chunli_a14462;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a14462 {
        if (Chunli_a14462.Firstowner == null) {
            Chunli_a14462.Firstowner = owner;
            Chunli_a14462.instance_First = new Chunli_a14462();
            _level0.instance_First.push(this);
            return Chunli_a14462.instance_First;
        } else if (Chunli_a14462.Firstowner == owner) {
            if (firstCall) {
                Chunli_a14462.instance_First.firstCall = true;
            }
            return Chunli_a14462.instance_First;
        } else {
            if (Chunli_a14462.instance_Second == null) {
                Chunli_a14462.instance_Second = new Chunli_a14462();
            }
            if (firstCall) {
                Chunli_a14462.instance_Second.firstCall = true;
            }
            return Chunli_a14462.instance_Second;
        }
    }

    public static addEventa14462(MC: zmovie.ZMovieClip, own_role: Role) {
        let a14462 = Chunli_a14462.getInstance(own_role, false);
        if (!a14462.firstCall) {
            return;
        }
        a14462.firstCall = false;
        MC.visible = false;
        MC.stop();
        if (a14462.defendSuper == false) {
            //if(own_role.opp.superSkill || own_role.opp.inBurstSkill)
            if (own_role.opp.superSkill) {
                return undefined;
            }
        }
        if (own_role.do_hitTest(MC)) {
            MC.gotoAndStop(a14462.flag);
        }
        FightMainRender.getInstance().Add(a14462, a14462.onEnterFrame, [MC, own_role]);

    }
    public onEnterFrame(MC: zmovie.ZMovieClip, own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (own_role.do_hitTest(MC)) {
            MC.gotoAndStop(this.flag);
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
        }
        if (own_role.status_3 == "stand") {
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
        }
    }
}