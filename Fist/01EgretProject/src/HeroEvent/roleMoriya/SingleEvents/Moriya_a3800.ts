class Moriya_a3800 {

    public keyArray: Array<string>;
    public holdFunc: Function;
    public releaseFunc: Function;
    public endFunc: Function;
    public onUnload: Function;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a3800;
    public static instance_Second: Moriya_a3800;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a3800 {
        if (Moriya_a3800.Firstowner == null) {
            Moriya_a3800.Firstowner = owner;
            Moriya_a3800.instance_First = new Moriya_a3800();
            _level0.instance_First.push(this);
            return Moriya_a3800.instance_First;
        } else if (Moriya_a3800.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3800.instance_First.firstCall = true;
            }
            return Moriya_a3800.instance_First;
        } else {
            if (Moriya_a3800.instance_Second == null) {
                Moriya_a3800.instance_Second = new Moriya_a3800();
            }
            if (firstCall) {
                Moriya_a3800.instance_Second.firstCall = true;
            }
            return Moriya_a3800.instance_Second;
        }
    }

    public static addEventa3800(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3800 = Moriya_a3800.getInstance(own_role, false);
        if (!a3800.firstCall) {
            return;
        }
        a3800.firstCall = false;
        MC.stop();
        a3800.onUnload = a3800.endFunc;
        MC['own_role'] = own_role;
        FightMainRender.getInstance().Add(a3800, a3800.enterFrame, [MC, own_role]);
    }



    public enterFrame(MC: zmovie.ZMovieClip, own_role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        let isnotDown: boolean = true;
        if (MC._mcName != "a3800" || MC.parent == null) {
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