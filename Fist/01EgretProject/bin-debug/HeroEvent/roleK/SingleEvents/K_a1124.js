var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a1124 = (function () {
    function K_a1124() {
        this.firstCall = true;
        return;
    }
    K_a1124.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a1124.Firstowner == null) {
            K_a1124.Firstowner = owner;
            K_a1124.instance_First = new K_a1124();
            _level0.instance_First.push(this);
            return K_a1124.instance_First;
        }
        else if (K_a1124.Firstowner == owner) {
            if (firstCall) {
                K_a1124.instance_First.firstCall = true;
            }
            return K_a1124.instance_First;
        }
        else {
            if (K_a1124.instance_Second == null) {
                K_a1124.instance_Second = new K_a1124();
            }
            if (firstCall) {
                K_a1124.instance_Second.firstCall = true;
            }
            return K_a1124.instance_Second;
        }
    };
    K_a1124.addEventa1124 = function (MC, own_role) {
        var a1124 = K_a1124.getInstance(own_role, false);
        if (!a1124.firstCall) {
            return;
        }
        a1124.firstCall = false;
        MC.visible = false;
        own_role.move_HitTest(MC, a1124.attFrame, a1124.endFrame, a1124.S, a1124.Vx);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a1124;
}());
__reflect(K_a1124.prototype, "K_a1124");
//# sourceMappingURL=K_a1124.js.map