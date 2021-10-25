var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a19426 = (function () {
    function Kula_a19426() {
        this.firstCall = true;
        return;
    }
    Kula_a19426.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19426.Firstowner == null) {
            Kula_a19426.Firstowner = owner;
            Kula_a19426.instance_First = new Kula_a19426();
            _level0.instance_First.push(this);
            return Kula_a19426.instance_First;
        }
        else if (Kula_a19426.Firstowner == owner) {
            if (firstCall) {
                Kula_a19426.instance_First.firstCall = true;
            }
            return Kula_a19426.instance_First;
        }
        else {
            if (Kula_a19426.instance_Second == null) {
                Kula_a19426.instance_Second = new Kula_a19426();
            }
            if (firstCall) {
                Kula_a19426.instance_Second.firstCall = true;
            }
            return Kula_a19426.instance_Second;
        }
    };
    Kula_a19426.addEventa19426 = function (MC, own_role) {
        var a19426 = Kula_a19426.getInstance(own_role, false);
        if (!a19426.firstCall) {
            return;
        }
        a19426.firstCall = false;
        MC.visible = false;
        // this.onUnload = function () {
        //     endFunc();
        // };
    };
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
    Kula_a19426.prototype.onEnterFrame = function () {
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
    };
    return Kula_a19426;
}());
__reflect(Kula_a19426.prototype, "Kula_a19426");
//# sourceMappingURL=Kula_a19426.js.map