var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a6594 = (function () {
    function Mai_a6594() {
        this.firstCall = true;
        return;
    }
    Mai_a6594.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a6594.Firstowner == null) {
            Mai_a6594.Firstowner = owner;
            Mai_a6594.instance_First = new Mai_a6594();
            _level0.instance_First.push(this);
            return Mai_a6594.instance_First;
        }
        else if (Mai_a6594.Firstowner == owner) {
            if (firstCall) {
                Mai_a6594.instance_First.firstCall = true;
            }
            return Mai_a6594.instance_First;
        }
        else {
            if (Mai_a6594.instance_Second == null) {
                Mai_a6594.instance_Second = new Mai_a6594();
            }
            if (firstCall) {
                Mai_a6594.instance_Second.firstCall = true;
            }
            return Mai_a6594.instance_Second;
        }
    };
    Mai_a6594.addEventa6954 = function (MC, own_role) {
        var a6594 = Mai_a6594.getInstance(own_role, false);
        if (!a6594.firstCall) {
            return;
        }
        a6594.firstCall = false;
        MC.stop();
        MC.visible = false;
        var dx = own_role.x + MC.x * own_role.dir;
        var dy = own_role.y + MC.y;
        var f_time = 10;
        var bgType = "0";
        _level0.effect_mc.superStart(a6594.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Mai_a6594;
}());
__reflect(Mai_a6594.prototype, "Mai_a6594");
//# sourceMappingURL=Mai_a6594.js.map