var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_s_storm = (function () {
    function Kula_sk_s_storm() {
    }
    Kula_sk_s_storm.addSprite19712 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_sk_s_storm.frame3, 7, Kula_sk_s_storm.frame7, 9, Kula_sk_s_storm.frame9, 35, Kula_sk_s_storm.frame35]);
        return;
    };
    Kula_sk_s_storm.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s2";
        a19530.f_time = 20;
        a19530.bgType = "2";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    };
    Kula_sk_s_storm.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_storm";
    };
    Kula_sk_s_storm.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19549 = Kula_a19549.getInstance(_parentRole);
        a19549.soundArray = [];
        a19549.soundArray[0] = "kula_s6";
        a19549.startPos = 0;
        a19549.loop = 1;
    };
    Kula_sk_s_storm.frame35 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_s_storm;
}());
__reflect(Kula_sk_s_storm.prototype, "Kula_sk_s_storm");
//# sourceMappingURL=Kula_sk_s_storm.js.map