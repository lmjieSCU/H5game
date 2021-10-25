class K_a5740 {

    public key: string;
    public holdFunc: Function;
    public releaseFunc: Function;
    public endFunc: Function;
    public onUnload: Function;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: K_a5740;
    public static instance_Second: K_a5740;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a5740 {
        if (K_a5740.Firstowner == null) {
            K_a5740.Firstowner = owner;
            K_a5740.instance_First = new K_a5740();
            _level0.instance_First.push(this);
            return K_a5740.instance_First;
        } else if (K_a5740.Firstowner == owner) {
            if (firstCall) {
                K_a5740.instance_First.firstCall = true;
            }
            return K_a5740.instance_First;
        } else {
            if (K_a5740.instance_Second == null) {
                K_a5740.instance_Second = new K_a5740();
            }
            if (firstCall) {
                K_a5740.instance_Second.firstCall = true;
            }
            return K_a5740.instance_Second;
        }
    }

    public static addEventa5740(MC: zmovie.ZMovieClip, own_role: Role) {
        let a5740 = K_a5740.getInstance(own_role, false);
        if (!a5740.firstCall) {
            return;
        }
        a5740.firstCall = false;
        MC.stop();
        a5740.onUnload = a5740.endFunc;
        MC['own_role']=own_role;
        FightMainRender.getInstance().Add(a5740, a5740.enterFrame, [MC, own_role]);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    }



    public enterFrame(mc: zmovie.ZMovieClip, role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (mc._mcName != "a5740" || mc.parent == null) {
            this.onUnload(mc, role);
            FightMainRender.getInstance().Remove(this, this.enterFrame);
        }
        if (role.keyCtrl && role.keyCtrl.key.isDown(this.key)) {
            this.holdFunc();
        }
        else {
            this.releaseFunc(mc, role);
            FightMainRender.getInstance().Remove(this, this.enterFrame);
        }
    }

}