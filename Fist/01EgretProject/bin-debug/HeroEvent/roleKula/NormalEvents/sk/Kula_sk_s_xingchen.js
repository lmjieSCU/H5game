var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_s_xingchen = (function () {
    function Kula_sk_s_xingchen() {
    }
    Kula_sk_s_xingchen.addSprite19599 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_xingchen.frame2, 4, Kula_sk_s_xingchen.frame4, 5, Kula_sk_s_xingchen.frame5, 67, Kula_sk_s_xingchen.frame67, 75, Kula_sk_s_xingchen.frame75, 86, Kula_sk_s_xingchen.frame86, 87, Kula_sk_s_xingchen.frame87, 95, Kula_sk_s_xingchen.frame95, 105, Kula_sk_s_xingchen.frame105, 121, Kula_sk_s_xingchen.frame121]);
        return;
    };
    Kula_sk_s_xingchen.frame2 = function (mc) {
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
    Kula_sk_s_xingchen.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    };
    Kula_sk_s_xingchen.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "bgEff_speed1";
        var a19574 = Kula_a19574.getInstance(_parentRole);
        a19574.name = "kula_ice_xingchen";
        a19574.numMax = 30;
        a19574.intvalFrame = 2;
        a19574.lastObj = "kula_ice_xingchen_end";
    };
    Kula_sk_s_xingchen.frame67 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    };
    Kula_sk_s_xingchen.frame75 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7153 = Kula_a7153.getInstance(_parentRole);
        a7153.nohitFrame = "end";
    };
    Kula_sk_s_xingchen.frame86 = function (mc) {
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
    Kula_sk_s_xingchen.frame87 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "kula_jiejie_bg";
    };
    Kula_sk_s_xingchen.frame95 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big";
    };
    Kula_sk_s_xingchen.frame105 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "";
    };
    Kula_sk_s_xingchen.frame121 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_s_xingchen;
}());
__reflect(Kula_sk_s_xingchen.prototype, "Kula_sk_s_xingchen");
//# sourceMappingURL=Kula_sk_s_xingchen.js.map