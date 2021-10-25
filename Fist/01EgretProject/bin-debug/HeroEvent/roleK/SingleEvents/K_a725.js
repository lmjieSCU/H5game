var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a725 = (function () {
    function K_a725() {
        this.firstCall = true;
        return;
    }
    K_a725.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a725.Firstowner == null) {
            K_a725.Firstowner = owner;
            K_a725.instance_First = new K_a725();
            _level0.instance_First.push(this);
            return K_a725.instance_First;
        }
        else if (K_a725.Firstowner == owner) {
            if (firstCall) {
                K_a725.instance_First.firstCall = true;
            }
            return K_a725.instance_First;
        }
        else {
            if (K_a725.instance_Second == null) {
                K_a725.instance_Second = new K_a725();
            }
            if (firstCall) {
                K_a725.instance_Second.firstCall = true;
            }
            return K_a725.instance_Second;
        }
    };
    K_a725.addEventa725 = function (MC, own_role) {
        var a725 = K_a725.getInstance(own_role, false);
        if (!a725.firstCall) {
            return;
        }
        a725.firstCall = false;
        MC.stop();
        MC.visible = false;
        var dx = own_role.x + MC.x * own_role.dir;
        var dy = own_role.y + MC.y;
        var f_time = 10;
        var bgType = "0";
        _level0.effect_mc.superStart(a725.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a725;
}());
__reflect(K_a725.prototype, "K_a725");
//# sourceMappingURL=K_a725.js.map