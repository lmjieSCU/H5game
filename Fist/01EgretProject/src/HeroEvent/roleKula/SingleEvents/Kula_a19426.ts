class Kula_a19426 {

    public keyCode_dir: string;
    public keyCode: string;
    public onUnload:Function;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a19426;
    public static instance_Second: Kula_a19426;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19426 {
        if (Kula_a19426.Firstowner == null) {
            Kula_a19426.Firstowner = owner;
            Kula_a19426.instance_First = new Kula_a19426();
            _level0.instance_First.push(this);
            return Kula_a19426.instance_First;
        } else if (Kula_a19426.Firstowner == owner) {
            if (firstCall) {
                Kula_a19426.instance_First.firstCall = true;
            }
            return Kula_a19426.instance_First;
        } else {
            if (Kula_a19426.instance_Second == null) {
                Kula_a19426.instance_Second = new Kula_a19426();
            }
            if (firstCall) {
                Kula_a19426.instance_Second.firstCall = true;
            }
            return Kula_a19426.instance_Second;
        }
    }

    public static addEventa19426(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19426 = Kula_a19426.getInstance(own_role, false);
        if (!a19426.firstCall) {
            return;
        }
        a19426.firstCall = false;
        MC.visible = false;
        // this.onUnload = function () {
        //     endFunc();
        // };
    }
    // public getReverseDir(key) {
    //     var _loc2_ = undefined;
    //     if (this.keyCode_dir == _root.role_mc.f) {
    //         _loc2_ = _root.role_mc.b;
    //         return _loc2_;
    //     }
    //     if (_root.role_mc[key] == _root.role_mc.b) {
    //         _loc2_ = _root.role_mc.f;
    //         return _loc2_;
    //     }
    // }
    public onEnterFrame() {
        // if (_level0.inPause) {
        //     return undefined;
        // }
        // if (Key.isDown(_root.role_mc[keyCode])) {
        //     if (keyCode_dir != "") {
        //         if (Key.isDown(_root.role_mc[keyCode_dir]) && _root.role_mc.dir == 1 || Key.isDown(getReverseDir(keyCode_dir)) && _root.role_mc.dir == -1) {
        //             pressFunc();
        //             delete this.onEnterFrame;
        //         }
        //     }
        //     else {
        //         pressFunc();
        //         delete this.onEnterFrame;
        //     }
        // }
    }
}