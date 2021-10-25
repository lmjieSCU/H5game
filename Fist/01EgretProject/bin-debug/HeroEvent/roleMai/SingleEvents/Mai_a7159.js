var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a7159 = (function () {
    function Mai_a7159() {
        this.firstCall = true;
        return;
    }
    Mai_a7159.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a7159.Firstowner == null) {
            Mai_a7159.Firstowner = owner;
            Mai_a7159.instance_First = new Mai_a7159();
            _level0.instance_First.push(this);
            return Mai_a7159.instance_First;
        }
        else if (Mai_a7159.Firstowner == owner) {
            if (firstCall) {
                Mai_a7159.instance_First.firstCall = true;
            }
            return Mai_a7159.instance_First;
        }
        else {
            if (Mai_a7159.instance_Second == null) {
                Mai_a7159.instance_Second = new Mai_a7159();
            }
            if (firstCall) {
                Mai_a7159.instance_Second.firstCall = true;
            }
            return Mai_a7159.instance_Second;
        }
    };
    Mai_a7159.addEventa7159 = function (MC, own_role) {
        var a7159 = Mai_a7159.getInstance(own_role, false);
        if (!a7159.firstCall) {
            return;
        }
        a7159.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a7159.effName, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Mai_a7159;
}());
__reflect(Mai_a7159.prototype, "Mai_a7159");
//# sourceMappingURL=Mai_a7159.js.map