var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a19418 = (function () {
    function Kula_a19418() {
        this.firstCall = true;
        return;
    }
    Kula_a19418.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19418.Firstowner == null) {
            Kula_a19418.Firstowner = owner;
            Kula_a19418.instance_First = new Kula_a19418();
            _level0.instance_First.push(this);
            if (!firstCall) {
                Kula_a19418.instance_First.firstCall = false;
            }
            return Kula_a19418.instance_First;
        }
        else if (Kula_a19418.Firstowner == owner) {
            if (firstCall) {
                Kula_a19418.instance_First.firstCall = true;
            }
            return Kula_a19418.instance_First;
        }
        else {
            if (Kula_a19418.instance_Second == null) {
                Kula_a19418.instance_Second = new Kula_a19418();
                if (!firstCall) {
                    Kula_a19418.instance_Second.firstCall = false;
                }
            }
            if (firstCall) {
                Kula_a19418.instance_Second.firstCall = true;
            }
            return Kula_a19418.instance_Second;
        }
    };
    Kula_a19418.addEventa19418 = function (MC, own_role) {
        var a19418 = Kula_a19418.getInstance(own_role, false);
        if (!a19418.firstCall) {
            return;
        }
        //a19418.firstCall = false;
        MC.visible = false;
        if (a19418.Vy != 0) {
            own_role.start_move_Y1(a19418.Vy, a19418.Vx, a19418.end_status, a19418.Vg);
        }
        else {
            own_role.start_move_X2(a19418.Vx);
        }
    };
    return Kula_a19418;
}());
__reflect(Kula_a19418.prototype, "Kula_a19418");
//# sourceMappingURL=Kula_a19418.js.map