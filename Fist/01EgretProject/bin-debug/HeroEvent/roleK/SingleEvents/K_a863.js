/**火焰子骨骼 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a863 = (function () {
    function K_a863() {
        this.firstCall = true;
        return;
    }
    K_a863.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a863.Firstowner == null) {
            K_a863.Firstowner = owner;
            K_a863.instance_First = new K_a863();
            _level0.instance_First.push(this);
            return K_a863.instance_First;
        }
        else if (K_a863.Firstowner == owner) {
            if (firstCall) {
                K_a863.instance_First.firstCall = true;
            }
            return K_a863.instance_First;
        }
        else {
            if (K_a863.instance_Second == null) {
                K_a863.instance_Second = new K_a863();
            }
            if (firstCall) {
                K_a863.instance_Second.firstCall = true;
            }
            return K_a863.instance_Second;
        }
    };
    K_a863.addEventa863 = function (MC, own_role) {
        var a863 = K_a863.getInstance(own_role, false);
        if (!a863.firstCall) {
            return;
        }
        a863.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log(a863.name);
        own_role.addSkill(a863.name, MC, own_role.Vx, own_role.Va);
        EventUtil.printMC(MC, a863.name + ":" + String(own_role.FrameEvent_change_location()));
    };
    return K_a863;
}());
__reflect(K_a863.prototype, "K_a863");
//# sourceMappingURL=K_a863.js.map