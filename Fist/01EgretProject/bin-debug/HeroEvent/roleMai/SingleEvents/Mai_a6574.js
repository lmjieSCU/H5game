var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a6754 = (function () {
    function Mai_a6754() {
        this.firstCall = true;
        return;
    }
    Mai_a6754.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6754.Firstowner == null) {
            Mai_a6754.Firstowner = owner;
            Mai_a6754.instance_First = new Mai_a6754();
            _level0.instance_First.push(this);
            return Mai_a6754.instance_First;
        }
        else if (Mai_a6754.Firstowner == owner) {
            if (firstCall) {
                Mai_a6754.instance_First.firstCall = true;
            }
            return Mai_a6754.instance_First;
        }
        else {
            if (Mai_a6754.instance_Second == null) {
                Mai_a6754.instance_Second = new Mai_a6754();
            }
            if (firstCall) {
                Mai_a6754.instance_Second.firstCall = true;
            }
            return Mai_a6754.instance_Second;
        }
    };
    Mai_a6754.addEventa6574 = function (MC, own_role) {
        var a6754 = Mai_a6754.getInstance(own_role, false);
        if (!a6754.firstCall) {
            return;
        }
        a6754.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC, a6754.status_1, a6754.flag, a6754.land, a6754.hurt, a6754.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Mai_a6754;
}());
__reflect(Mai_a6754.prototype, "Mai_a6754");
//# sourceMappingURL=Mai_a6574.js.map