var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a742 = (function () {
    function K_a742() {
        this.firstCall = true;
        return;
    }
    K_a742.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a742.Firstowner == null) {
            K_a742.Firstowner = owner;
            K_a742.instance_First = new K_a742();
            _level0.instance_First.push(this);
            return K_a742.instance_First;
        }
        else if (K_a742.Firstowner == owner) {
            if (firstCall) {
                K_a742.instance_First.firstCall = true;
            }
            return K_a742.instance_First;
        }
        else {
            if (K_a742.instance_Second == null) {
                K_a742.instance_Second = new K_a742();
            }
            if (firstCall) {
                K_a742.instance_Second.firstCall = true;
            }
            return K_a742.instance_Second;
        }
    };
    K_a742.addEventa742 = function (MC, own_role) {
        var a742 = K_a742.getInstance(own_role, false);
        if (a742.flag == null) {
            console.log("flag is null in a742");
            return;
        }
        if (!a742.firstCall) {
            return;
        }
        a742.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a742.flag);
        } // end if
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        return;
    };
    return K_a742;
}());
__reflect(K_a742.prototype, "K_a742");
//# sourceMappingURL=K_a742.js.map