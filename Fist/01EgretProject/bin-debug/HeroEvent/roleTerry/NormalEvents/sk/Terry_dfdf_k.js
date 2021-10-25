var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_dfdf_k = (function () {
    function Terry_dfdf_k() {
    }
    Terry_dfdf_k.addSprite9266 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Terry_dfdf_k.frame3, 4, Terry_dfdf_k.frame4, 6, Terry_dfdf_k.frame6, 7, Terry_dfdf_k.frame7, 9, Terry_dfdf_k.frame9, 13, Terry_dfdf_k.frame13, 14, Terry_dfdf_k.frame14, 15, Terry_dfdf_k.frame15, 18, Terry_dfdf_k.frame18, 29, Terry_dfdf_k.frame29, 30, Terry_dfdf_k.frame30, 34, Terry_dfdf_k.frame34, 54, Terry_dfdf_k.frame54]);
        return;
    };
    Terry_dfdf_k.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7978 = Terry_a7078.getInstance(_parentRole);
        a7978.s_type = "s1";
        a7978.f_time = 20;
        a7978.bgType = "1";
        a7978.roleName = "Terry";
        a7978.faceName = "";
    };
    Terry_dfdf_k.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2, "all");
    };
    Terry_dfdf_k.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 45;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_dfdf_k.frame7 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 0;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 5;
        hitcheck.freezeTime = 15;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_dfdf_k.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    };
    Terry_dfdf_k.frame13 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 8;
        hitcheck.Vy = 25;
        hitcheck.a = 0;
        hitcheck.g = 3;
        hitcheck.freezeTime2 = 0;
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
    Terry_dfdf_k.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6617 = Terry_a6617.getInstance(_parentRole);
        a6617.Vx = 15;
        a6617.Vy = 35;
        a6617.Va = 0;
        a6617.Vg = 0;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "frame_end";
    };
    Terry_dfdf_k.frame15 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 13;
        hitcheck.Vy = 25;
        hitcheck.a = 0;
        hitcheck.g = 3;
        hitcheck.freezeTime2 = 0;
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
    Terry_dfdf_k.frame18 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 13;
        hitcheck.Vy = 25;
        hitcheck.a = 0;
        hitcheck.g = 3;
        hitcheck.freezeTime2 = 0;
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
    Terry_dfdf_k.frame29 = function (mc) {
        mc.stop();
    };
    Terry_dfdf_k.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi4";
    };
    Terry_dfdf_k.frame34 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 8;
        hitcheck.Vy = 42;
        hitcheck.a = 3;
        hitcheck.g = 5;
        hitcheck.freezeTime2 = 1;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Terry_dfdf_k.frame54 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    return Terry_dfdf_k;
}());
__reflect(Terry_dfdf_k.prototype, "Terry_dfdf_k");
//# sourceMappingURL=Terry_dfdf_k.js.map