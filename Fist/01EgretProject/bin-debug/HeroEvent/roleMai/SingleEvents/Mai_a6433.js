var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a6433 = (function () {
    function Mai_a6433() {
        this.firstCall = true;
        return;
    }
    Mai_a6433.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6433.Firstowner == null) {
            Mai_a6433.Firstowner = owner;
            Mai_a6433.instance_First = new Mai_a6433();
            _level0.instance_First.push(this);
            return Mai_a6433.instance_First;
        }
        else if (Mai_a6433.Firstowner == owner) {
            if (firstCall) {
                Mai_a6433.instance_First.firstCall = true;
            }
            return Mai_a6433.instance_First;
        }
        else {
            if (Mai_a6433.instance_Second == null) {
                Mai_a6433.instance_Second = new Mai_a6433();
            }
            if (firstCall) {
                Mai_a6433.instance_Second.firstCall = true;
            }
            return Mai_a6433.instance_Second;
        }
    };
    Mai_a6433.addEventa6433 = function (MC, own_role) {
        var a6433 = Mai_a6433.getInstance(own_role, false);
        if (!a6433.firstCall) {
            return;
        }
        //a6433.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a6433.Vx, a6433);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Mai_a6433;
}());
__reflect(Mai_a6433.prototype, "Mai_a6433");
//# sourceMappingURL=Mai_a6433.js.map