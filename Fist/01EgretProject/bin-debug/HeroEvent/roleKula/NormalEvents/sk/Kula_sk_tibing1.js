var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_tibing1 = (function () {
    function Kula_sk_tibing1() {
    }
    Kula_sk_tibing1.addSprite19441 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Kula_sk_tibing1.frame5, 25, Kula_sk_tibing1.frame25]);
        return;
    };
    Kula_sk_tibing1.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_ice_sheji2";
    };
    Kula_sk_tibing1.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_tibing1;
}());
__reflect(Kula_sk_tibing1.prototype, "Kula_sk_tibing1");
//# sourceMappingURL=Kula_sk_tibing1.js.map