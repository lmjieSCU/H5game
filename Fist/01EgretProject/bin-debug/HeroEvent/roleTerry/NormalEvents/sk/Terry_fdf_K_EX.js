var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_fdf_k_EX = (function () {
    function Terry_fdf_k_EX() {
    }
    Terry_fdf_k_EX.addSprite9125 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Terry_fdf_k_EX.frame2, 5, Terry_fdf_k_EX.frame5, 9, Terry_fdf_k_EX.frame9, 17, Terry_fdf_k_EX.frame17, 20, Terry_fdf_k_EX.frame20, 32, Terry_fdf_k_EX.frame32,]);
        return;
    };
    Terry_fdf_k_EX.frame2 = function (mc) { };
    Terry_fdf_k_EX.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 10;
        a6433.flag = "";
        a6433.target = "";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 0;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 5;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_fdf_k_EX.frame9 = function (mc) { };
    Terry_fdf_k_EX.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6617 = Terry_a6617.getInstance(_parentRole);
        a6617.Vx = 30;
        a6617.Vy = 12;
        a6617.Va = 1;
        a6617.Vg = 4;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "none";
    };
    Terry_fdf_k_EX.frame20 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 40;
        hitcheck.Vy = 25;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_fdf_k_EX.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_fdf_k_EX;
}());
__reflect(Terry_fdf_k_EX.prototype, "Terry_fdf_k_EX");
//# sourceMappingURL=Terry_fdf_K_EX.js.map