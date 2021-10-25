var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_s_luobing_s = (function () {
    function Kula_sk_s_luobing_s() {
    }
    Kula_sk_s_luobing_s.addSprite19702 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_luobing_s.frame2, 3, Kula_sk_s_luobing_s.frame3, 9, Kula_sk_s_luobing_s.frame9, 15, Kula_sk_s_luobing_s.frame15, 21, Kula_sk_s_luobing_s.frame21, 29, Kula_sk_s_luobing_s.frame29, 54, Kula_sk_s_luobing_s.frame54]);
        return;
    };
    Kula_sk_s_luobing_s.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s1_s";
        a19530.f_time = 20;
        a19530.bgType = "1";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    };
    Kula_sk_s_luobing_s.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big2";
    };
    Kula_sk_s_luobing_s.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big2";
    };
    Kula_sk_s_luobing_s.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big2";
    };
    Kula_sk_s_luobing_s.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big2";
    };
    Kula_sk_s_luobing_s.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big2";
    };
    Kula_sk_s_luobing_s.frame54 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_s_luobing_s;
}());
__reflect(Kula_sk_s_luobing_s.prototype, "Kula_sk_s_luobing_s");
//# sourceMappingURL=Kula_sk_s_luobing_s.js.map