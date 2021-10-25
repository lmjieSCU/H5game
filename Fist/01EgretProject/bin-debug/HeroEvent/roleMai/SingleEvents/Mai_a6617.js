var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a6617 = (function () {
    function Mai_a6617() {
        this.firstCall = true;
        return;
    }
    Mai_a6617.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6617.Firstowner == null) {
            Mai_a6617.Firstowner = owner;
            Mai_a6617.instance_First = new Mai_a6617();
            _level0.instance_First.push(this);
            if (!firstCall) {
                Mai_a6617.instance_First.firstCall = false;
            }
            return Mai_a6617.instance_First;
        }
        else if (Mai_a6617.Firstowner == owner) {
            if (firstCall) {
                Mai_a6617.instance_First.firstCall = true;
            }
            return Mai_a6617.instance_First;
        }
        else {
            if (Mai_a6617.instance_Second == null) {
                Mai_a6617.instance_Second = new Mai_a6617();
                if (!firstCall) {
                    Mai_a6617.instance_Second.firstCall = false;
                }
            }
            if (firstCall) {
                Mai_a6617.instance_Second.firstCall = true;
            }
            return Mai_a6617.instance_Second;
        }
    };
    Mai_a6617.addEventa6617 = function (MC, own_role) {
        var a6617 = Mai_a6617.getInstance(own_role, false);
        if (!a6617.firstCall) {
            return;
        }
        //a6617.firstCall = false;
        MC.visible = false;
        if (a6617.Vy != 0) {
            own_role.start_move_Y1(a6617.Vy, a6617.Vx, a6617.end_status, a6617.Vg);
        }
        else {
            own_role.start_move_X2(a6617.Vx);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Mai_a6617;
}());
__reflect(Mai_a6617.prototype, "Mai_a6617");
//# sourceMappingURL=Mai_a6617.js.map