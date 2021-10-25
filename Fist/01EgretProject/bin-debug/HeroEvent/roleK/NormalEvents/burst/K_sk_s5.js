var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_s5 = (function () {
    function K_sk_s5() {
    }
    K_sk_s5.addSprite5836 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_sk_s5.frame1, 12, K_sk_s5.frame12, 15, K_sk_s5.frame15, 16, K_sk_s5.frame16, 17, K_sk_s5.frame17,
            2, K_sk_s5.frame2, 20, K_sk_s5.frame20, 23, K_sk_s5.frame23, 24, K_sk_s5.frame24, 25, K_sk_s5.frame25, 28, K_sk_s5.frame28,
            3, K_sk_s5.frame3, 43, K_sk_s5.frame43, 5, K_sk_s5.frame5, 6, K_sk_s5.frame6, 62, K_sk_s5.frame62, 63, K_sk_s5.frame63,
            8, K_sk_s5.frame8, 83, K_sk_s5.frame83]);
        return;
    };
    K_sk_s5.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a985 = K_a985.getInstance(_parentRole);
        a985.s_type = "s2";
        a985.f_time = 20;
        a985.bgType = "2";
        a985.roleName = "K";
        a985.faceName = "";
    };
    K_sk_s5.frame12 = function () {
        // K_sk_s5.mc.stop();
    };
    K_sk_s5.frame15 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s5.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 15;
        a917.Vy = 18;
        a917.Va = 0;
        a917.Vg = 4;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    };
    K_sk_s5.frame17 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt1";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s5.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a5755.getInstance(_parentRole).effName = "bgEff_up";
    };
    K_sk_s5.frame20 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 9;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s5.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // K_sk_s5.mc.stop();
        _parentRole.countEnd();
    };
    K_sk_s5.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a1227.getInstance(_parentRole).nohitFrame = "nohit";
        K_a5755.getInstance(_parentRole).effName = "bgEff_black";
    };
    K_sk_s5.frame25 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a985 = K_a985.getInstance(_parentRole);
        a985.s_type = "s3";
        a985.f_time = 20;
        a985.bgType = "0";
        a985.roleName = "";
        a985.faceName = "";
    };
    K_sk_s5.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a863.getInstance(_parentRole).name = "k_fire1_s";
    };
    K_sk_s5.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2, "up");
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s5.frame43 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a863.getInstance(_parentRole).name = "k_fire2_s";
    };
    K_sk_s5.frame5 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt1";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s5.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 15;
        a917.Vy = 18;
        a917.Va = 0;
        a917.Vg = 4;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    };
    K_sk_s5.frame62 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    K_sk_s5.frame63 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a5755.getInstance(_parentRole).effName = "bgEff_black";
    };
    K_sk_s5.frame8 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt1";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s5.frame83 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return K_sk_s5;
}());
__reflect(K_sk_s5.prototype, "K_sk_s5");
//# sourceMappingURL=K_sk_s5.js.map