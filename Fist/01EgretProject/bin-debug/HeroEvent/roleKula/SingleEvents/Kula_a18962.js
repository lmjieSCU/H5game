var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a18962 = (function () {
    function Kula_a18962() {
        this.firstCall = true;
        return;
    }
    Kula_a18962.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a18962.Firstowner == null) {
            Kula_a18962.Firstowner = owner;
            Kula_a18962.instance_First = new Kula_a18962();
            _level0.instance_First.push(this);
            return Kula_a18962.instance_First;
        }
        else if (Kula_a18962.Firstowner == owner) {
            if (firstCall) {
                Kula_a18962.instance_First.firstCall = true;
            }
            return Kula_a18962.instance_First;
        }
        else {
            if (Kula_a18962.instance_Second == null) {
                Kula_a18962.instance_Second = new Kula_a18962();
            }
            if (firstCall) {
                Kula_a18962.instance_Second.firstCall = true;
            }
            return Kula_a18962.instance_Second;
        }
    };
    Kula_a18962.addEventa18962 = function (MC, own_role) {
        var a18962 = Kula_a18962.getInstance(own_role, false);
        if (!a18962.firstCall) {
            return;
        }
        //a18962.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a18962.Vx, a18962);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Kula_a18962;
}());
__reflect(Kula_a18962.prototype, "Kula_a18962");
//# sourceMappingURL=Kula_a18962.js.map