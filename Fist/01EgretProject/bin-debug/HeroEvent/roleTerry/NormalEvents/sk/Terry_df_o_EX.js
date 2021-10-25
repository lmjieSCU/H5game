var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_df_o_EX = (function () {
    function Terry_df_o_EX() {
    }
    Terry_df_o_EX.addSprite9668 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Terry_df_o_EX.frame5, 7, Terry_df_o_EX.frame7, 8, Terry_df_o_EX.frame8, 30, Terry_df_o_EX.frame30, 31, Terry_df_o_EX.frame31, 51, Terry_df_o_EX.frame51, 92, Terry_df_o_EX.frame92, 107, Terry_df_o_EX.frame107, 108, Terry_df_o_EX.frame108, 120, Terry_df_o_EX.frame120,]);
        return;
    };
    Terry_df_o_EX.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7078 = Terry_a7078.getInstance(_parentRole);
        a7078.s_type = "s2";
        a7078.f_time = 20;
        a7078.bgType = "2";
        a7078.roleName = "Terry";
        a7078.faceName = "";
    };
    Terry_df_o_EX.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_Rock1";
    };
    Terry_df_o_EX.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
        //continueHit = true;
    };
    Terry_df_o_EX.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "bgEff_black";
    };
    Terry_df_o_EX.frame31 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7153.getInstance(_parentRole).nohitFrame = "nohit";
    };
    Terry_df_o_EX.frame51 = function (mc) {
        //continueHit = false;
    };
    Terry_df_o_EX.frame92 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "";
    };
    Terry_df_o_EX.frame107 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Terry_df_o_EX.frame108 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "";
        //continueHit = false;
    };
    Terry_df_o_EX.frame120 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_df_o_EX;
}());
__reflect(Terry_df_o_EX.prototype, "Terry_df_o_EX");
//# sourceMappingURL=Terry_df_o_EX.js.map