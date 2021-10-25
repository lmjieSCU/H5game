class Kula_a19498 {

    public flag: string;
    public obj_level: number;
    public defendSuper: any;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a19498;
    public static instance_Second: Kula_a19498;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19498 {
        if (Kula_a19498.Firstowner == null) {
            Kula_a19498.Firstowner = owner;
            Kula_a19498.instance_First = new Kula_a19498();
            _level0.instance_First.push(this);
            return Kula_a19498.instance_First;
        } else if (Kula_a19498.Firstowner == owner) {
            if (firstCall) {
                Kula_a19498.instance_First.firstCall = true;
            }
            return Kula_a19498.instance_First;
        } else {
            if (Kula_a19498.instance_Second == null) {
                Kula_a19498.instance_Second = new Kula_a19498();
            }
            if (firstCall) {
                Kula_a19498.instance_Second.firstCall = true;
            }
            return Kula_a19498.instance_Second;
        }
    }

    public static addEventa19498(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19498 = Kula_a19498.getInstance(own_role, false);
        if (!a19498.firstCall) {
            return;
        }
        a19498.firstCall = false;
        MC.visible = false;
        MC.stop();
        if (a19498.defendSuper == false) {
            //if(own_role.opp.superSkill || own_role.opp.inBurstSkill)
            if (own_role.opp.superSkill) {
                return undefined;
            }
        }
        if (own_role.do_hitTest(MC)) {
            MC.gotoAndStop(a19498.flag);
        }
        FightMainRender.getInstance().Add(a19498, a19498.onEnterFrame, [MC, own_role]);

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