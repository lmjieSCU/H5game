var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_s_fengyi = (function () {
    function Chunli_sk_s_fengyi() {
    }
    Chunli_sk_s_fengyi.addSprite15382 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Chunli_sk_s_fengyi.frame4, 6, Chunli_sk_s_fengyi.frame6, 7, Chunli_sk_s_fengyi.frame7, 9, Chunli_sk_s_fengyi.frame9, 12, Chunli_sk_s_fengyi.frame12, 13, Chunli_sk_s_fengyi.frame13, 15, Chunli_sk_s_fengyi.frame15, 18, Chunli_sk_s_fengyi.frame18, 21, Chunli_sk_s_fengyi.frame21, 24, Chunli_sk_s_fengyi.frame24, 27, Chunli_sk_s_fengyi.frame27, 28, Chunli_sk_s_fengyi.frame28, 29, Chunli_sk_s_fengyi.frame29, 35, Chunli_sk_s_fengyi.frame35, 36, Chunli_sk_s_fengyi.frame36, 39, Chunli_sk_s_fengyi.frame39, 42, Chunli_sk_s_fengyi.frame42, 45, Chunli_sk_s_fengyi.frame45, 48, Chunli_sk_s_fengyi.frame48, 51, Chunli_sk_s_fengyi.frame51, 54, Chunli_sk_s_fengyi.frame54, 57, Chunli_sk_s_fengyi.frame57, 60, Chunli_sk_s_fengyi.frame60, 64, Chunli_sk_s_fengyi.frame64, 81, Chunli_sk_s_fengyi.frame81]);
        return;
    };
    Chunli_sk_s_fengyi.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.s_type = "s1";
        a4178.f_time = 20;
        a4178.bgType = "1";
        a4178.roleName = "Chunli";
        a4178.faceName = "";
    };
    Chunli_sk_s_fengyi.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 20;
        a3395.flag = "";
        a3395.target = "";
    };
    Chunli_sk_s_fengyi.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // _level0.p_snd.start();
        // continueHit = true;
    };
    Chunli_sk_s_fengyi.frame9 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame12 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 10;
        a4023.Vy = 0;
        a4023.Va = 0;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "";
    };
    Chunli_sk_s_fengyi.frame15 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame18 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame21 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame24 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame27 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 16;
        a3395.flag = "";
        a3395.target = "";
    };
    Chunli_sk_s_fengyi.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Chunli_sk_s_fengyi.frame35 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 10;
        a4023.Vy = 0;
        a4023.Va = 0;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "";
    };
    Chunli_sk_s_fengyi.frame36 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame39 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame42 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame45 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame48 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame51 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame54 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame57 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_fengyi.frame60 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 20;
        a3395.flag = "";
        a3395.target = "";
        //continueHit = false;
    };
    Chunli_sk_s_fengyi.frame64 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 14;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 40;
        htcheck.a = 1;
        htcheck.Vx = 25;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 18;
        a4023.Vy = 0;
        a4023.Va = 0;
        a4023.Vg = 0;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "";
    };
    Chunli_sk_s_fengyi.frame81 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_s_fengyi;
}());
__reflect(Chunli_sk_s_fengyi.prototype, "Chunli_sk_s_fengyi");
//# sourceMappingURL=Chunli_sk_s_fengyi.js.map