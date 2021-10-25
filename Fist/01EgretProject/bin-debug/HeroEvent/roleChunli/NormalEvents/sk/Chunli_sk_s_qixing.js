var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_s_qixing = (function () {
    function Chunli_sk_s_qixing() {
    }
    Chunli_sk_s_qixing.addSprite15469 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_qixing.frame3, 4, Chunli_sk_s_qixing.frame4, 7, Chunli_sk_s_qixing.frame7, 11, Chunli_sk_s_qixing.frame11, 19, Chunli_sk_s_qixing.frame19, 24, Chunli_sk_s_qixing.frame24, 27, Chunli_sk_s_qixing.frame27, 36, Chunli_sk_s_qixing.frame36, 38, Chunli_sk_s_qixing.frame38, 67, Chunli_sk_s_qixing.frame67, 68, Chunli_sk_s_qixing.frame68, 71, Chunli_sk_s_qixing.frame71, 74, Chunli_sk_s_qixing.frame74, 77, Chunli_sk_s_qixing.frame77, 80, Chunli_sk_s_qixing.frame80, 83, Chunli_sk_s_qixing.frame83, 86, Chunli_sk_s_qixing.frame86, 89, Chunli_sk_s_qixing.frame89, 92, Chunli_sk_s_qixing.frame92, 95, Chunli_sk_s_qixing.frame95, 98, Chunli_sk_s_qixing.frame98, 101, Chunli_sk_s_qixing.frame101, 106, Chunli_sk_s_qixing.frame106, 118, Chunli_sk_s_qixing.frame118, 120, Chunli_sk_s_qixing.frame120, 121, Chunli_sk_s_qixing.frame121, 140, Chunli_sk_s_qixing.frame140]);
        return;
    };
    Chunli_sk_s_qixing.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.bgType = "2";
        a4178.f_time = 20;
        a4178.roleName = "Chunli";
        a4178.s_type = "s2";
        a4178.faceName = "";
    };
    Chunli_sk_s_qixing.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 28;
        a3395.flag = "";
        a3395.target = "";
    };
    Chunli_sk_s_qixing.frame7 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 10;
        htcheck.isObj = false;
        htcheck.hitPos = "up";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 45;
        htcheck.a = 0;
        htcheck.Vx = 7;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a4202.getInstance(_parentRole).nohitFrame = "nohit";
    };
    Chunli_sk_s_qixing.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.s_type = "s3";
        a4178.f_time = 20;
        a4178.bgType = "0";
        a4178.roleName = "";
        a4178.faceName = "";
    };
    Chunli_sk_s_qixing.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_up";
    };
    Chunli_sk_s_qixing.frame27 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 45;
        a4023.Vy = 28;
        a4023.Va = 0;
        a4023.Vg = 2;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land2";
    };
    Chunli_sk_s_qixing.frame36 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 0.1;
        a4023.Vy = 0.1;
        a4023.Va = 0.001;
        a4023.Vg = 0.001;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land2";
        var a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "3";
        a4188.status_1 = "hurt3";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = true;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
        //  _level0.charToCenter();
    };
    Chunli_sk_s_qixing.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "3";
        a4188.status_1 = "hurt3";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = true;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
        _parentRole.opp.inFreeze = true;
    };
    Chunli_sk_s_qixing.frame67 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.opp.inFreeze = false;
        var a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.bgType = "";
        a4178.f_time = 35;
        a4178.roleName = "";
        a4178.s_type = "";
        a4178.faceName = "";
        Chunli_a4196.getInstance(_parentRole).name = "chunli_qixingtxt";
        Chunli_a4196.getInstance(_parentRole).suspend = true;
    };
    Chunli_sk_s_qixing.frame68 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_up";
    };
    Chunli_sk_s_qixing.frame71 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame74 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame77 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame80 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame83 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame86 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame89 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame92 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame95 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame98 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame101 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 25;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_qixing.frame106 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 10;
        a4023.Vy = 6;
        a4023.Va = 0;
        a4023.Vg = 3;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land3";
    };
    Chunli_sk_s_qixing.frame118 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    };
    Chunli_sk_s_qixing.frame120 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Chunli_sk_s_qixing.frame121 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    };
    Chunli_sk_s_qixing.frame140 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_s_qixing;
}());
__reflect(Chunli_sk_s_qixing.prototype, "Chunli_sk_s_qixing");
//# sourceMappingURL=Chunli_sk_s_qixing.js.map