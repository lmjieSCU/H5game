/**生成特效2 */
class Kula_a19868 {

    public lastObj: string = "";
    public i: number = 0;
    public num: number = 0;
    public dx: number = 0;
    public dy: number = 0;
    public intvalFrame: number;
    public numMax: number;
    public name: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a19868;
    public static instance_Second: Kula_a19868;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19868 {
        if (Kula_a19868.Firstowner == null) {
            Kula_a19868.Firstowner = owner;
            Kula_a19868.instance_First = new Kula_a19868();
            _level0.instance_First.push(this);
            return Kula_a19868.instance_First;
        } else if (Kula_a19868.Firstowner == owner) {
            if (firstCall) {
                Kula_a19868.instance_First.firstCall = true;
            }
            return Kula_a19868.instance_First;
        } else {
            if (Kula_a19868.instance_Second == null) {
                Kula_a19868.instance_Second = new Kula_a19868();
            }
            if (firstCall) {
                Kula_a19868.instance_Second.firstCall = true;
            }
            return Kula_a19868.instance_Second;
        }
    }

    public static addEventa19868(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19868 = Kula_a19868.getInstance(own_role, false);
        if (!a19868.firstCall) {
            return;
        }
        a19868.firstCall = false;
        MC.stop();
        MC.visible = false;
        let pt = own_role.localToGlobal(MC.x, MC.y);
        a19868.i = 0;
        a19868.num = 0;
        a19868.dx = 0;
        a19868.dy = 0;
        //let px=pt.x - _level0.char_mc._x;
        own_role.addSkill_m(name, this, pt.x, pt.y);
        a19868.num++;
        FightMainRender.getInstance().Add(a19868, a19868.onEnterFrame, [MC, own_role]);
    }
    public onEnterFrame(mc: zmovie.ZMovieClip, own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_level0.inFreeze) {
            return undefined;
        }
        this.i++;
        if (this.i == this.intvalFrame) {
            this.i = 0;
            this.num++;
            if (this.num == this.numMax) {
                if (this.lastObj != "") {
                    this.name = this.lastObj;
                }
                own_role.addSkill_m(this.name, mc, own_role.Vx, own_role.Va);
                FightMainRender.getInstance().Remove(this, this.onEnterFrame);
                // this.removeMovieClip();
                mc.parent.removeChild(mc);
            }
            //own_role.addSkill(this.name, mc, own_role.Vx, own_role.Va);
        }
    }
}