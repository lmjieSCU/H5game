var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a1227 = (function () {
    function K_a1227() {
        this.firstCall = true;
        return;
    }
    K_a1227.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a1227.Firstowner == null) {
            K_a1227.Firstowner = owner;
            K_a1227.instance_First = new K_a1227();
            _level0.instance_First.push(this);
            return K_a1227.instance_First;
        }
        else if (K_a1227.Firstowner == owner) {
            if (firstCall) {
                K_a1227.instance_First.firstCall = true;
            }
            return K_a1227.instance_First;
        }
        else {
            if (K_a1227.instance_Second == null) {
                K_a1227.instance_Second = new K_a1227();
            }
            if (firstCall) {
                K_a1227.instance_Second.firstCall = true;
            }
            return K_a1227.instance_Second;
        }
    };
    K_a1227.addEventa1227 = function (MC, own_role) {
        var a1227 = K_a1227.getInstance(own_role, false);
        if (!a1227.firstCall) {
            return;
        }
        a1227.firstCall = false;
        MC.visible = false;
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            own_role.bodyMC.gotoAndStop(a1227.nohitFrame);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a1227;
}());
__reflect(K_a1227.prototype, "K_a1227");
//# sourceMappingURL=K_a1227.js.map