var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a19125 = (function () {
    function Kula_a19125() {
        this.firstCall = true;
        return;
    }
    Kula_a19125.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19125.Firstowner == null) {
            Kula_a19125.Firstowner = owner;
            Kula_a19125.instance_First = new Kula_a19125();
            _level0.instance_First.push(this);
            return Kula_a19125.instance_First;
        }
        else if (Kula_a19125.Firstowner == owner) {
            if (firstCall) {
                Kula_a19125.instance_First.firstCall = true;
            }
            return Kula_a19125.instance_First;
        }
        else {
            if (Kula_a19125.instance_Second == null) {
                Kula_a19125.instance_Second = new Kula_a19125();
            }
            if (firstCall) {
                Kula_a19125.instance_Second.firstCall = true;
            }
            return Kula_a19125.instance_Second;
        }
    };
    Kula_a19125.addEventa19125 = function (MC, own_role) {
        var a19125 = Kula_a19125.getInstance(own_role, false);
        if (!a19125.firstCall) {
            return;
        }
        a19125.firstCall = false;
        MC.stop();
        MC.visible = false;
        var dx = own_role.x + MC.x * own_role.dir;
        var dy = own_role.y + MC.y;
        var f_time = 10;
        var bgType = "0";
        _level0.effect_mc.superStart(a19125.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Kula_a19125;
}());
__reflect(Kula_a19125.prototype, "Kula_a19125");
//# sourceMappingURL=Kula_a19125.js.map