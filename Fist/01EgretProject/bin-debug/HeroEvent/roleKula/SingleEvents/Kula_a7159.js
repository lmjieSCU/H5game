var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a7159 = (function () {
    function Kula_a7159() {
        this.firstCall = true;
        return;
    }
    Kula_a7159.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a7159.Firstowner == null) {
            Kula_a7159.Firstowner = owner;
            Kula_a7159.instance_First = new Kula_a7159();
            _level0.instance_First.push(this);
            return Kula_a7159.instance_First;
        }
        else if (Kula_a7159.Firstowner == owner) {
            if (firstCall) {
                Kula_a7159.instance_First.firstCall = true;
            }
            return Kula_a7159.instance_First;
        }
        else {
            if (Kula_a7159.instance_Second == null) {
                Kula_a7159.instance_Second = new Kula_a7159();
            }
            if (firstCall) {
                Kula_a7159.instance_Second.firstCall = true;
            }
            return Kula_a7159.instance_Second;
        }
    };
    Kula_a7159.addEventa7159 = function (MC, own_role) {
        var a7159 = Kula_a7159.getInstance(own_role, false);
        if (!a7159.firstCall) {
            return;
        }
        a7159.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a7159.effName, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Kula_a7159;
}());
__reflect(Kula_a7159.prototype, "Kula_a7159");
//# sourceMappingURL=Kula_a7159.js.map