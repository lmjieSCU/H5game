var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a5537 = (function () {
    function K_a5537() {
        this.firstCall = true;
        return;
    }
    K_a5537.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a5537.Firstowner == null) {
            K_a5537.Firstowner = owner;
            K_a5537.instance_First = new K_a5537();
            _level0.instance_First.push(this);
            return K_a5537.instance_First;
        }
        else if (K_a5537.Firstowner == owner) {
            if (firstCall) {
                K_a5537.instance_First.firstCall = true;
            }
            return K_a5537.instance_First;
        }
        else {
            if (K_a5537.instance_Second == null) {
                K_a5537.instance_Second = new K_a5537();
            }
            if (firstCall) {
                K_a5537.instance_Second.firstCall = true;
            }
            return K_a5537.instance_Second;
        }
    };
    K_a5537.addEventa5537 = function (MC, own_role) {
        var a5537 = K_a5537.getInstance(own_role, false);
        if (!a5537.firstCall) {
            return;
        }
        a5537.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC, a5537.status_1, a5537.flag, a5537.land, a5537.hurt, a5537.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a5537;
}());
__reflect(K_a5537.prototype, "K_a5537");
//# sourceMappingURL=K_a5537.js.map