var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a7153 = (function () {
    function Mai_a7153() {
        this.firstCall = true;
        return;
    }
    Mai_a7153.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a7153.Firstowner == null) {
            Mai_a7153.Firstowner = owner;
            Mai_a7153.instance_First = new Mai_a7153();
            _level0.instance_First.push(this);
            return Mai_a7153.instance_First;
        }
        else if (Mai_a7153.Firstowner == owner) {
            if (firstCall) {
                Mai_a7153.instance_First.firstCall = true;
            }
            return Mai_a7153.instance_First;
        }
        else {
            if (Mai_a7153.instance_Second == null) {
                Mai_a7153.instance_Second = new Mai_a7153();
            }
            if (firstCall) {
                Mai_a7153.instance_Second.firstCall = true;
            }
            return Mai_a7153.instance_Second;
        }
    };
    Mai_a7153.addEventa7153 = function (MC, own_role) {
        var a7153 = Mai_a7153.getInstance(own_role, false);
        if (!a7153.firstCall) {
            return;
        }
        a7153.firstCall = false;
        MC.visible = false;
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            own_role.bodyMC.gotoAndStop(a7153.nohitFrame);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Mai_a7153;
}());
__reflect(Mai_a7153.prototype, "Mai_a7153");
//# sourceMappingURL=Mai_a7153.js.map