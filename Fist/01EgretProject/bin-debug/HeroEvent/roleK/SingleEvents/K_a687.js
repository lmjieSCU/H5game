var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a687 = (function () {
    function K_a687() {
        this.firstCall = true;
        return;
    }
    K_a687.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a687.Firstowner == null) {
            K_a687.Firstowner = owner;
            K_a687.instance_First = new K_a687();
            _level0.instance_First.push(this);
            return K_a687.instance_First;
        }
        else if (K_a687.Firstowner == owner) {
            if (firstCall) {
                K_a687.instance_First.firstCall = true;
            }
            return K_a687.instance_First;
        }
        else {
            if (K_a687.instance_Second == null) {
                K_a687.instance_Second = new K_a687();
            }
            if (firstCall) {
                K_a687.instance_Second.firstCall = true;
            }
            return K_a687.instance_Second;
        }
    };
    K_a687.addEventa687 = function (MC, own_role) {
        var a687 = K_a687.getInstance(own_role, false);
        if (!a687.firstCall) {
            return;
        }
        a687.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a687.Vx, a687.Vy, a687.end_status);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a687;
}());
__reflect(K_a687.prototype, "K_a687");
//# sourceMappingURL=K_a687.js.map