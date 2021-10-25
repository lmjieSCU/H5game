var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_s_tianxing = (function () {
    function Chunli_sk_s_tianxing() {
    }
    Chunli_sk_s_tianxing.addSprite15960 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_tianxing.frame3, 4, Chunli_sk_s_tianxing.frame4, 6, Chunli_sk_s_tianxing.frame6, 9, Chunli_sk_s_tianxing.frame9, 11, Chunli_sk_s_tianxing.frame11, 12, Chunli_sk_s_tianxing.frame12, 15, Chunli_sk_s_tianxing.frame15, 18, Chunli_sk_s_tianxing.frame18, 21, Chunli_sk_s_tianxing.frame21, 24, Chunli_sk_s_tianxing.frame24, 27, Chunli_sk_s_tianxing.frame27, 30, Chunli_sk_s_tianxing.frame30, 31, Chunli_sk_s_tianxing.frame31, 35, Chunli_sk_s_tianxing.frame35, 39, Chunli_sk_s_tianxing.frame39, 43, Chunli_sk_s_tianxing.frame43, 47, Chunli_sk_s_tianxing.frame47, 48, Chunli_sk_s_tianxing.frame48, 52, Chunli_sk_s_tianxing.frame52, 55, Chunli_sk_s_tianxing.frame55, 59, Chunli_sk_s_tianxing.frame59, 61, Chunli_sk_s_tianxing.frame61, 64, Chunli_sk_s_tianxing.frame64, 67, Chunli_sk_s_tianxing.frame67, 71, Chunli_sk_s_tianxing.frame71, 74, Chunli_sk_s_tianxing.frame74, 75, Chunli_sk_s_tianxing.frame75, 77, Chunli_sk_s_tianxing.frame77, 78, Chunli_sk_s_tianxing.frame78, 98, Chunli_sk_s_tianxing.frame98, 99, Chunli_sk_s_tianxing.frame99, 100, Chunli_sk_s_tianxing.frame100, 104, Chunli_sk_s_tianxing.frame104, 108, Chunli_sk_s_tianxing.frame108, 111, Chunli_sk_s_tianxing.frame111, 114, Chunli_sk_s_tianxing.frame114, 118, Chunli_sk_s_tianxing.frame118, 129, Chunli_sk_s_tianxing.frame129]);
        return;
    };
    Chunli_sk_s_tianxing.frame3 = function (mc) {
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
    Chunli_sk_s_tianxing.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 25;
        a3395.flag = "";
        a3395.target = "";
    };
    Chunli_sk_s_tianxing.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    };
    Chunli_sk_s_tianxing.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 10;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "";
        htcheck.hurtBack = "hurt3";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a4202.getInstance(_parentRole).nohitFrame = "nohit";
    };
    Chunli_sk_s_tianxing.frame12 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        var a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = false;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    };
    Chunli_sk_s_tianxing.frame15 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame18 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame21 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame24 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame27 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame30 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame31 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_up";
        var a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = false;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    };
    Chunli_sk_s_tianxing.frame35 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame39 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame43 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame47 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame48 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0.1;
        htcheck.Vy = 1;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        var a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = false;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    };
    Chunli_sk_s_tianxing.frame52 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0.1;
        htcheck.Vy = 1;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame55 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0.1;
        htcheck.Vy = 1;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame59 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0.1;
        htcheck.Vy = 1;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame61 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        var a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = false;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    };
    Chunli_sk_s_tianxing.frame64 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame67 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame71 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame74 = function (mc) {
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
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame75 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    };
    Chunli_sk_s_tianxing.frame77 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    };
    Chunli_sk_s_tianxing.frame78 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 8;
        htcheck.isObj = false;
        htcheck.hitPos = "land";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 4;
        htcheck.Vy = 45;
        htcheck.a = 0;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 2;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame98 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Chunli_sk_s_tianxing.frame99 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 10;
        a4023.Vy = 35;
        a4023.Va = 0;
        a4023.Vg = 3;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land3";
    };
    Chunli_sk_s_tianxing.frame100 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame104 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame108 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame111 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame114 = function (mc) {
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
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame118 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
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
        htcheck.d_rate = 0.5;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_tianxing.frame129 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Chunli_sk_s_tianxing;
}());
__reflect(Chunli_sk_s_tianxing.prototype, "Chunli_sk_s_tianxing");
//# sourceMappingURL=Chunli_sk_s_tianxing.js.map