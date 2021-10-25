var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a6637 = (function () {
    function Mai_a6637() {
        this.firstCall = true;
        return;
    }
    Mai_a6637.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6637.Firstowner == null) {
            Mai_a6637.Firstowner = owner;
            Mai_a6637.instance_First = new Mai_a6637();
            _level0.instance_First.push(this);
            return Mai_a6637.instance_First;
        }
        else if (Mai_a6637.Firstowner == owner) {
            if (firstCall) {
                Mai_a6637.instance_First.firstCall = true;
            }
            return Mai_a6637.instance_First;
        }
        else {
            if (Mai_a6637.instance_Second == null) {
                Mai_a6637.instance_Second = new Mai_a6637();
            }
            if (firstCall) {
                Mai_a6637.instance_Second.firstCall = true;
            }
            return Mai_a6637.instance_Second;
        }
    };
    Mai_a6637.addEventa6637 = function (MC, own_role) {
        var a6637 = Mai_a6637.getInstance(own_role, false);
        if (a6637.flag == null) {
            console.log("flag is null in a6637");
            return;
        }
        if (!a6637.firstCall) {
            return;
        }
        a6637.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a6637.flag);
        } // end if
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        return;
    };
    return Mai_a6637;
}());
__reflect(Mai_a6637.prototype, "Mai_a6637");
//# sourceMappingURL=Mai_a6637.js.map