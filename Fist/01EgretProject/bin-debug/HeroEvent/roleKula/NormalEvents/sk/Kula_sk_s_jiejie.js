var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_s_jiejie = (function () {
    function Kula_sk_s_jiejie() {
    }
    Kula_sk_s_jiejie.addSprite19617 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_jiejie.frame2, 3, Kula_sk_s_jiejie.frame3, 5, Kula_sk_s_jiejie.frame5, 20, Kula_sk_s_jiejie.frame20, 25, Kula_sk_s_jiejie.frame25, 65, Kula_sk_s_jiejie.frame65]);
        return;
    };
    Kula_sk_s_jiejie.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s2";
        a19530.f_time = 20;
        a19530.bgType = "2";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    };
    Kula_sk_s_jiejie.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_jiejie_char";
    };
    Kula_sk_s_jiejie.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "bgEff_speed1";
    };
    Kula_sk_s_jiejie.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s3";
        a19530.f_time = 20;
        a19530.bgType = "0";
        a19530.roleName = "";
        a19530.faceName = "";
    };
    Kula_sk_s_jiejie.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "kula_jiejie_bg";
        Kula_a19439.getInstance(_parentRole).name = "hitTest_jiejie";
    };
    Kula_sk_s_jiejie.frame65 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_s_jiejie;
}());
__reflect(Kula_sk_s_jiejie.prototype, "Kula_sk_s_jiejie");
//# sourceMappingURL=Kula_sk_s_jiejie.js.map