var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_burst3 = (function () {
    function Kula_burst3() {
    }
    Kula_burst3.addSprite19130 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_burst3.frame3, 6, Kula_burst3.frame6]);
        return;
    };
    Kula_burst3.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19125 = Kula_a19125.getInstance(_parentRole);
        a19125.s_type = "s_power";
        _parentRole.powerBurst();
    };
    Kula_burst3.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_burst3;
}());
__reflect(Kula_burst3.prototype, "Kula_burst3");
//# sourceMappingURL=Kula_burst3.js.map