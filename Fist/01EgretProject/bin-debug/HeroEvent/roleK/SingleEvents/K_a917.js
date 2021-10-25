var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a917 = (function () {
    function K_a917() {
        this.firstCall = true;
        return;
    }
    K_a917.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a917.Firstowner == null) {
            K_a917.Firstowner = owner;
            K_a917.instance_First = new K_a917();
            _level0.instance_First.push(this);
            if (!firstCall) {
                K_a917.instance_First.firstCall = false;
            }
            return K_a917.instance_First;
        }
        else if (K_a917.Firstowner == owner) {
            if (firstCall) {
                K_a917.instance_First.firstCall = true;
            }
            return K_a917.instance_First;
        }
        else {
            if (K_a917.instance_Second == null) {
                K_a917.instance_Second = new K_a917();
                if (!firstCall) {
                    K_a917.instance_Second.firstCall = false;
                }
            }
            if (firstCall) {
                K_a917.instance_Second.firstCall = true;
            }
            return K_a917.instance_Second;
        }
    };
    K_a917.addEventa917 = function (MC, own_role) {
        var a917 = K_a917.getInstance(own_role, false);
        if (!a917.firstCall) {
            return;
        }
        //a917.firstCall = false;
        MC.visible = false;
        if (a917.Vy != 0) {
            own_role.start_move_Y1(a917.Vy, a917.Vx, a917.end_status, a917.Vg);
        }
        else {
            own_role.start_move_X2(a917.Vx);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a917;
}());
__reflect(K_a917.prototype, "K_a917");
//# sourceMappingURL=K_a917.js.map