var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_s_luobing = (function () {
    function Kula_sk_s_luobing() {
    }
    Kula_sk_s_luobing.addSprite19701 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_luobing.frame2, 3, Kula_sk_s_luobing.frame3, 9, Kula_sk_s_luobing.frame9, 15, Kula_sk_s_luobing.frame15, 38, Kula_sk_s_luobing.frame38]);
        return;
    };
    Kula_sk_s_luobing.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s1";
        a19530.f_time = 20;
        a19530.bgType = "1";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    };
    Kula_sk_s_luobing.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big2";
    };
    Kula_sk_s_luobing.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big2";
    };
    Kula_sk_s_luobing.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big2";
    };
    Kula_sk_s_luobing.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_s_luobing;
}());
__reflect(Kula_sk_s_luobing.prototype, "Kula_sk_s_luobing");
//# sourceMappingURL=Kula_sk_s_luobing.js.map