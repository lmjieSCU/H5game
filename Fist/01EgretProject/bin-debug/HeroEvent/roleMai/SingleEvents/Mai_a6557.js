var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a6557 = (function () {
    function Mai_a6557() {
        this.firstCall = true;
        return;
    }
    Mai_a6557.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6557.Firstowner == null) {
            Mai_a6557.Firstowner = owner;
            Mai_a6557.instance_First = new Mai_a6557();
            _level0.instance_First.push(this);
            return Mai_a6557.instance_First;
        }
        else if (Mai_a6557.Firstowner == owner) {
            if (firstCall) {
                Mai_a6557.instance_First.firstCall = true;
            }
            return Mai_a6557.instance_First;
        }
        else {
            if (Mai_a6557.instance_Second == null) {
                Mai_a6557.instance_Second = new Mai_a6557();
            }
            if (firstCall) {
                Mai_a6557.instance_Second.firstCall = true;
            }
            return Mai_a6557.instance_Second;
        }
    };
    Mai_a6557.addEventa6557 = function (MC, own_role) {
        var a6557 = Mai_a6557.getInstance(own_role, false);
        if (!a6557.firstCall) {
            return;
        }
        a6557.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a6557.Vx, a6557.Vy, a6557.end_status);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Mai_a6557;
}());
__reflect(Mai_a6557.prototype, "Mai_a6557");
//# sourceMappingURL=Mai_a6557.js.map