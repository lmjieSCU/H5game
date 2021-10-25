class Ryu_a20604 {

    public keyArray: Array<string>;
    public holdFunc: Function;
    public releaseFunc: Function;
    public endFunc: Function;
    public onUnload: Function;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20604;
    public static instance_Second: Ryu_a20604;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20604 {
        if (Ryu_a20604.Firstowner == null) {
            Ryu_a20604.Firstowner = owner;
            Ryu_a20604.instance_First = new Ryu_a20604();
            _level0.instance_First.push(this);
            return Ryu_a20604.instance_First;
        } else if (Ryu_a20604.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20604.instance_First.firstCall = true;
            }
            return Ryu_a20604.instance_First;
        } else {
            if (Ryu_a20604.instance_Second == null) {
                Ryu_a20604.instance_Second = new Ryu_a20604();
            }
            if (firstCall) {
                Ryu_a20604.instance_Second.firstCall = true;
            }
            return Ryu_a20604.instance_Second;
        }
    }

    public static addEventa20604(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20604 = Ryu_a20604.getInstance(own_role, false);
        if (!a20604.firstCall) {
            return;
        }
        a20604.firstCall = false;
        MC.stop();
        a20604.onUnload = a20604.endFunc;
        MC['own_role'] = own_role;
        FightMainRender.getInstance().Add(a20604, a20604.enterFrame, [MC, own_role]);
    }



    public enterFrame(MC: zmovie.ZMovieClip, own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        let isnotDown: boolean = true;
        if (MC._mcName != "a20604" || MC.parent == null) {
            this.onUnload(MC, own_role);
            FightMainRender.getInstance().Remove(this, this.enterFrame);
        }
        for (let key in this.keyArray) {
            if (own_role.keyCtrl && own_role.keyCtrl.key.isDown(this.keyArray[key])) {
                this.holdFunc();
                isnotDown = false;
                break;
            }
        }
        if (isnotDown) {
            this.releaseFunc(MC, own_role);
            FightMainRender.getInstance().Remove(this, this.enterFrame);
        }
    }

}