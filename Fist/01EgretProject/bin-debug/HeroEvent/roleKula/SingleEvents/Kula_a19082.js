var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a19082 = (function () {
    function Kula_a19082() {
        this.firstCall = true;
        return;
    }
    Kula_a19082.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19082.Firstowner == null) {
            Kula_a19082.Firstowner = owner;
            Kula_a19082.instance_First = new Kula_a19082();
            _level0.instance_First.push(this);
            return Kula_a19082.instance_First;
        }
        else if (Kula_a19082.Firstowner == owner) {
            if (firstCall) {
                Kula_a19082.instance_First.firstCall = true;
            }
            return Kula_a19082.instance_First;
        }
        else {
            if (Kula_a19082.instance_Second == null) {
                Kula_a19082.instance_Second = new Kula_a19082();
            }
            if (firstCall) {
                Kula_a19082.instance_Second.firstCall = true;
            }
            return Kula_a19082.instance_Second;
        }
    };
    Kula_a19082.addEventa19082 = function (MC, own_role) {
        var a19082 = Kula_a19082.getInstance(own_role, false);
        if (!a19082.firstCall) {
            return;
        }
        a19082.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a19082.Vx, a19082.Vy, a19082.end_status);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Kula_a19082;
}());
__reflect(Kula_a19082.prototype, "Kula_a19082");
//# sourceMappingURL=Kula_a19082.js.map