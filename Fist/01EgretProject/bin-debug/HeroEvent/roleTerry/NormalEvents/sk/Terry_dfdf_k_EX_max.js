var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_dfdf_k_EX_max = (function () {
    function Terry_dfdf_k_EX_max() {
    }
    Terry_dfdf_k_EX_max.addSprite9331 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_dfdf_k_EX_max.frame3, 7, Terry_dfdf_k_EX_max.frame7, 8, Terry_dfdf_k_EX_max.frame8, 9, Terry_dfdf_k_EX_max.frame9, 15, Terry_dfdf_k_EX_max.frame15, 16, Terry_dfdf_k_EX_max.frame16, 24, Terry_dfdf_k_EX_max.frame24, 47, Terry_dfdf_k_EX_max.frame47]);
        return;
    };
    Terry_dfdf_k_EX_max.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7078 = Terry_a7078.getInstance(_parentRole);
        a7078.s_type = "s1_s";
        a7078.f_time = 20;
        a7078.bgType = "1";
        a7078.roleName = "Terry";
        a7078.faceName = "";
    };
    Terry_dfdf_k_EX_max.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = true;
    };
    Terry_dfdf_k_EX_max.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 58;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_dfdf_k_EX_max.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi6";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 55;
        hitcheck.a = 0;
        hitcheck.g = 8;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 2.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_dfdf_k_EX_max.frame15 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = -12;
        hitcheck.Vy = 55;
        hitcheck.a = 1;
        hitcheck.g = 8;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 2.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_dfdf_k_EX_max.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 12;
        a6433.flag = "";
        a6433.target = "";
        _parentRole.bodyTouch();
    };
    Terry_dfdf_k_EX_max.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi8";
    };
    Terry_dfdf_k_EX_max.frame47 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    return Terry_dfdf_k_EX_max;
}());
__reflect(Terry_dfdf_k_EX_max.prototype, "Terry_dfdf_k_EX_max");
//# sourceMappingURL=Terry_dfdf_k_EX_max.js.map