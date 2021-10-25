var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_burst = (function () {
    function Kula_burst() {
    }
    Kula_burst.addSprite19128 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_burst.frame3, 6, Kula_burst.frame6]);
        return;
    };
    Kula_burst.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.powerBurst();
        var a19125 = Kula_a19125.getInstance(_parentRole);
        a19125.s_type = "s_attack";
    };
    Kula_burst.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_burst;
}());
__reflect(Kula_burst.prototype, "Kula_burst");
//# sourceMappingURL=Kula_burst.js.map