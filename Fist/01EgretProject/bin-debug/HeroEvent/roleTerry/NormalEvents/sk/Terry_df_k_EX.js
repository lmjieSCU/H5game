var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_df_k_EX = (function () {
    function Terry_df_k_EX() {
    }
    Terry_df_k_EX.addSprite9141 = function (mc, own_role) {
        mc.addFrameScript(mc, [7, Terry_df_k_EX.frame7, 11, Terry_df_k_EX.frame11, 12, Terry_df_k_EX.frame12, 19, Terry_df_k_EX.frame20]);
        return;
    };
    Terry_df_k_EX.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 32;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_df_k_EX.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 6;
        hitcheck.Vy = 45;
        hitcheck.a = 0;
        hitcheck.g = 4.5;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        hitcheck.nohit_skills = [];
        hitcheck.nohit_skills[0] = "df_k_EX";
    };
    Terry_df_k_EX.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6617 = Terry_a6617.getInstance(_parentRole);
        a6617.Vx = 10;
        a6617.Vy = 0;
        a6617.Va = 0;
        a6617.Vg = 0;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "none";
    };
    Terry_df_k_EX.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_df_k_EX;
}());
__reflect(Terry_df_k_EX.prototype, "Terry_df_k_EX");
//# sourceMappingURL=Terry_df_k_EX.js.map