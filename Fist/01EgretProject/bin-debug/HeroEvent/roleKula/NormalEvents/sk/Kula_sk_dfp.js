var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_dfp = (function () {
    function Kula_sk_dfp() {
    }
    Kula_sk_dfp.addSprite19461 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Kula_sk_dfp.frame4, 27, Kula_sk_dfp.frame27]);
        return;
    };
    Kula_sk_dfp.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_ice_qixi";
    };
    Kula_sk_dfp.frame27 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_dfp;
}());
__reflect(Kula_sk_dfp.prototype, "Kula_sk_dfp");
//# sourceMappingURL=Kula_sk_dfp.js.map