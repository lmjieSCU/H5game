var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a594 = (function () {
    function K_a594() {
        this.firstCall = true;
        return;
    }
    K_a594.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a594.Firstowner == null) {
            K_a594.Firstowner = owner;
            K_a594.instance_First = new K_a594();
            _level0.instance_First.push(this);
            return K_a594.instance_First;
        }
        else if (K_a594.Firstowner == owner) {
            if (firstCall) {
                K_a594.instance_First.firstCall = true;
            }
            return K_a594.instance_First;
        }
        else {
            if (K_a594.instance_Second == null) {
                K_a594.instance_Second = new K_a594();
            }
            if (firstCall) {
                K_a594.instance_Second.firstCall = true;
            }
            return K_a594.instance_Second;
        }
    };
    K_a594.addEventa594 = function (MC, own_role) {
        var a594 = K_a594.getInstance(own_role, false);
        if (!a594.firstCall) {
            return;
        }
        //a594.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a594.Vx, a594);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return K_a594;
}());
__reflect(K_a594.prototype, "K_a594");
//# sourceMappingURL=K_a594.js.map