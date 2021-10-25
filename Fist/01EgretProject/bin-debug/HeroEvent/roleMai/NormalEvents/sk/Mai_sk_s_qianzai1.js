var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_s_qianzai1 = (function () {
    function Mai_sk_s_qianzai1() {
    }
    Mai_sk_s_qianzai1.addSprite7281 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Mai_sk_s_qianzai1.frame2, 4, Mai_sk_s_qianzai1.frame4, 6, Mai_sk_s_qianzai1.frame6, 11, Mai_sk_s_qianzai1.frame11, 12, Mai_sk_s_qianzai1.frame12, 22, Mai_sk_s_qianzai1.frame22, 23, Mai_sk_s_qianzai1.frame23, 37, Mai_sk_s_qianzai1.frame37, 39, Mai_sk_s_qianzai1.frame39, 41, Mai_sk_s_qianzai1.frame41, 43, Mai_sk_s_qianzai1.frame43, 45, Mai_sk_s_qianzai1.frame45, 47, Mai_sk_s_qianzai1.frame47, 50, Mai_sk_s_qianzai1.frame50, 66, Mai_sk_s_qianzai1.frame66, 69, Mai_sk_s_qianzai1.frame69, 71, Mai_sk_s_qianzai1.frame71, 73, Mai_sk_s_qianzai1.frame73, 75, Mai_sk_s_qianzai1.frame75, 96, Mai_sk_s_qianzai1.frame96, 109, Mai_sk_s_qianzai1.frame109, 124, Mai_sk_s_qianzai1.frame124, 129, Mai_sk_s_qianzai1.frame129, 146, Mai_sk_s_qianzai1.frame146, 147, Mai_sk_s_qianzai1.frame147, 166, Mai_sk_s_qianzai1.frame166]);
        return;
    };
    Mai_sk_s_qianzai1.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7078 = Mai_a7078.getInstance(_parentRole);
        a7078.s_type = "s2";
        a7078.f_time = 20;
        a7078.bgType = "2";
        a7078.roleName = "Mai";
        a7078.faceName = "";
    };
    Mai_sk_s_qianzai1.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = 25;
        a6433.flag = "";
        a6433.target = "";
    };
    Mai_sk_s_qianzai1.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 5;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 8;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_h";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "up";
    };
    Mai_sk_s_qianzai1.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7153.getInstance(_parentRole).nohitFrame = "nohit";
    };
    Mai_sk_s_qianzai1.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.charToCenter();
    };
    Mai_sk_s_qianzai1.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7155.getInstance(_parentRole)._name = "Mai_a7155";
        var a7156 = Mai_a7156.getInstance(_parentRole);
        a7156.status_1 = "hurt2";
        a7156.flag = "s_catch";
        a7156.hurt = true;
        a7156.land = false;
        a7156.downHit = false;
        a7156.func = null;
        a7156.posObj = "Mai_a7155";
    };
    Mai_sk_s_qianzai1.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
    };
    Mai_sk_s_qianzai1.frame37 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame39 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame41 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame43 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame45 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame47 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame50 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 3;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame66 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7159.getInstance(_parentRole).effName = "bgEff_up";
    };
    Mai_sk_s_qianzai1.frame69 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 25;
        htcheck.a = 3;
        htcheck.g = 3;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame71 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 25;
        htcheck.a = 3;
        htcheck.g = 3;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame73 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 25;
        htcheck.a = 3;
        htcheck.g = 3;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame75 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 25;
        htcheck.a = 3;
        htcheck.g = 3;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame96 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 35;
        htcheck.a = 3;
        htcheck.g = 3;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 2;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.3;
        htcheck.isObj = true;
        htcheck.hitType = "";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Mai_sk_s_qianzai1.frame109 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7078 = Mai_a7078.getInstance(_parentRole);
        a7078.s_type = "s3";
        a7078.f_time = 20;
        a7078.bgType = "0";
        a7078.roleName = "";
        a7078.faceName = "";
    };
    Mai_sk_s_qianzai1.frame124 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt4";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 25;
        htcheck.Vy = 40;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 5;
        htcheck.d_rate = 3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "fire_m4";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "land";
    };
    Mai_sk_s_qianzai1.frame129 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7159.getInstance(_parentRole).effName = "";
    };
    Mai_sk_s_qianzai1.frame146 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Mai_sk_s_qianzai1.frame147 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7159.getInstance(_parentRole).effName = "";
    };
    Mai_sk_s_qianzai1.frame166 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_s_qianzai1;
}());
__reflect(Mai_sk_s_qianzai1.prototype, "Mai_sk_s_qianzai1");
//# sourceMappingURL=Mai_sk_s_qianzai1.js.map