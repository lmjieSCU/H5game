var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a825 = (function () {
    function K_a825() {
        this.firstCall = true;
        return;
    }
    K_a825.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a825.Firstowner == null) {
            K_a825.Firstowner = owner;
            K_a825.instance_First = new K_a825();
            _level0.instance_First.push(this);
            return K_a825.instance_First;
        }
        else if (K_a825.Firstowner == owner) {
            if (firstCall) {
                K_a825.instance_First.firstCall = true;
            }
            return K_a825.instance_First;
        }
        else {
            if (K_a825.instance_Second == null) {
                K_a825.instance_Second = new K_a825();
            }
            if (firstCall) {
                K_a825.instance_Second.firstCall = true;
            }
            return K_a825.instance_Second;
        }
    };
    K_a825.addEventa825 = function (MC, own_role) {
        var a825 = K_a825.getInstance(own_role, false);
        if (!a825.firstCall) {
            return;
        }
        //a825.firstCall = false;
        a825.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a825;
}());
__reflect(K_a825.prototype, "K_a825");
//# sourceMappingURL=K_a825.js.map