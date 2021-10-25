var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a5755 = (function () {
    function K_a5755() {
        this.firstCall = true;
        return;
    }
    K_a5755.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a5755.Firstowner == null) {
            K_a5755.Firstowner = owner;
            K_a5755.instance_First = new K_a5755();
            _level0.instance_First.push(this);
            return K_a5755.instance_First;
        }
        else if (K_a5755.Firstowner == owner) {
            if (firstCall) {
                K_a5755.instance_First.firstCall = true;
            }
            return K_a5755.instance_First;
        }
        else {
            if (K_a5755.instance_Second == null) {
                K_a5755.instance_Second = new K_a5755();
            }
            if (firstCall) {
                K_a5755.instance_Second.firstCall = true;
            }
            return K_a5755.instance_Second;
        }
    };
    K_a5755.addEventa5755 = function (MC, own_role) {
        var a5755 = K_a5755.getInstance(own_role, false);
        if (!a5755.firstCall) {
            return;
        }
        a5755.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a5755.effName, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a5755;
}());
__reflect(K_a5755.prototype, "K_a5755");
//# sourceMappingURL=K_a5755.js.map