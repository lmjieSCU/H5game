var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk_s_q1 = (function () {
    function Ryu_sk_s_q1() {
    }
    Ryu_sk_s_q1.addSprite21067 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_sk_s_q1.frame3, 5, Ryu_sk_s_q1.frame5, 8, Ryu_sk_s_q1.frame8, 35, Ryu_sk_s_q1.frame35, 40, Ryu_sk_s_q1.frame40, 64, Ryu_sk_s_q1.frame64]);
        return;
    };
    Ryu_sk_s_q1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s1_s";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
        Ryu_a20657.getInstance(_parentRole).name = "ken_waveCannon";
    };
    Ryu_sk_s_q1.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_speed1";
    };
    Ryu_sk_s_q1.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "waveCannon";
    };
    Ryu_sk_s_q1.frame35 = function () { };
    Ryu_sk_s_q1.frame40 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_black";
    };
    Ryu_sk_s_q1.frame64 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_sk_s_q1;
}());
__reflect(Ryu_sk_s_q1.prototype, "Ryu_sk_s_q1");
//# sourceMappingURL=Ryu_sk_s_q1.js.map