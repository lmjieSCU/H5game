class Moriya_a4116 {
    public freeze: boolean = false;
    public flag: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a4116;
    public static instance_Second: Moriya_a4116;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a4116 {
        if (Moriya_a4116.Firstowner == null) {
            Moriya_a4116.Firstowner = owner;
            Moriya_a4116.instance_First = new Moriya_a4116();
            _level0.instance_First.push(this);
            return Moriya_a4116.instance_First;
        } else if (Moriya_a4116.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4116.instance_First.firstCall = true;
            }
            return Moriya_a4116.instance_First;
        } else {
            if (Moriya_a4116.instance_Second == null) {
                Moriya_a4116.instance_Second = new Moriya_a4116();
            }
            if (firstCall) {
                Moriya_a4116.instance_Second.firstCall = true;
            }
            return Moriya_a4116.instance_Second;
        }
    }

    public static addEventa4116(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4116 = Moriya_a4116.getInstance(own_role, false);
        if (!a4116.firstCall) {
            return;
        }
        a4116.firstCall = false;
        MC.visible = false;
        MC.stop();
        FightMainRender.getInstance().Add(a4116, a4116.onEnterFrame,[own_role]);
        a4116.checkCounter(own_role);
    }
    public checkCounter(role: Role) {
        if (role.inCount && role.opp.status_3 == "attack") {
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
            //onHit();
            this.waitFrame(role);
        }
    }
    public onEnterFrame(role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (role.inCount && role.opp.status_3 == "attack") {
            FightMainRender.getInstance().Remove(this, this.onEnterFrame);
            //onHit();
            this.waitFrame(role);
        }
        if(role.status_3==""||role.status_3=="stand"||role.status_3=="hurt"){
             FightMainRender.getInstance().Remove(this, this.onEnterFrame);
        }
    }
    public waitFrame(role: Role) {
        if (this.freeze == false) {
            role.bodyMC.gotoAndStop(this.flag);
            return undefined;
        }
        FightMainRender.getInstance().Add(this, this.onEnterFrame2,[role]);
    }
    public onEnterFrame2(role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (role.inFreeze == false) {
            role.bodyMC.gotoAndStop(this.flag);
            FightMainRender.getInstance().Remove(this, this.onEnterFrame2);
        }
        if(role.status_3==""||role.status_3=="stand"||role.status_3=="hurt"){
             FightMainRender.getInstance().Remove(this, this.onEnterFrame2);
        }
    }
}