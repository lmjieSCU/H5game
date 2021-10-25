var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a6754 = (function () {
    function Kula_a6754() {
        this.firstCall = true;
        return;
    }
    Kula_a6754.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a6754.Firstowner == null) {
            Kula_a6754.Firstowner = owner;
            Kula_a6754.instance_First = new Kula_a6754();
            _level0.instance_First.push(this);
            return Kula_a6754.instance_First;
        }
        else if (Kula_a6754.Firstowner == owner) {
            if (firstCall) {
                Kula_a6754.instance_First.firstCall = true;
            }
            return Kula_a6754.instance_First;
        }
        else {
            if (Kula_a6754.instance_Second == null) {
                Kula_a6754.instance_Second = new Kula_a6754();
            }
            if (firstCall) {
                Kula_a6754.instance_Second.firstCall = true;
            }
            return Kula_a6754.instance_Second;
        }
    };
    Kula_a6754.addEventa6754 = function (MC, own_role) {
        var a6754 = Kula_a6754.getInstance(own_role, false);
        if (!a6754.firstCall) {
            return;
        }
        a6754.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC, a6754.status_1, a6754.flag, a6754.land, a6754.hurt, a6754.downHit);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Kula_a6754;
}());
__reflect(Kula_a6754.prototype, "Kula_a6754");
//# sourceMappingURL=Kula_a6754.js.map