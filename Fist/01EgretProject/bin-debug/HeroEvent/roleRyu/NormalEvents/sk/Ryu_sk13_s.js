var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk13_s = (function () {
    function Ryu_sk13_s() {
    }
    Ryu_sk13_s.addSprite20789 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_sk13_s.frame1, 2, Ryu_sk13_s.frame2, 4, Ryu_sk13_s.frame4, 8, Ryu_sk13_s.frame8, 6, Ryu_sk13_s.frame6, 13, Ryu_sk13_s.frame13, 14, Ryu_sk13_s.frame14, 15, Ryu_sk13_s.frame15, 17, Ryu_sk13_s.frame17, 22, Ryu_sk13_s.frame22, 23, Ryu_sk13_s.frame23, 24, Ryu_sk13_s.frame24, 26, Ryu_sk13_s.frame26, 32, Ryu_sk13_s.frame32, 33, Ryu_sk13_s.frame33, 34, Ryu_sk13_s.frame34, 39, Ryu_sk13_s.frame39, 42, Ryu_sk13_s.frame42, 45, Ryu_sk13_s.frame45, 48, Ryu_sk13_s.frame48, 50, Ryu_sk13_s.frame50, 51, Ryu_sk13_s.frame51, 52, Ryu_sk13_s.frame52, 58, Ryu_sk13_s.frame58]);
        return;
    };
    Ryu_sk13_s.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2, "up");
        //continueHit = true;
    };
    Ryu_sk13_s.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s1_s";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    };
    Ryu_sk13_s.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 18;
        a20401.flag = "";
        a20401.target = "";
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_up3";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame6 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame8 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 4;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 15;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk13_s.frame14 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame15 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame17 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 4;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 15;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk13_s.frame23 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame24 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 7;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame26 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 7;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s3";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    };
    Ryu_sk13_s.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 15;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk13_s.frame34 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_up";
    };
    Ryu_sk13_s.frame39 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 5;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.25;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 2;
        a20238.Vy = 38;
        a20238.Va = 0;
        a20238.Vg = 3.8;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
        var a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
    };
    Ryu_sk13_s.frame42 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        var a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 5;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.25;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame45 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 5;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.25;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame48 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 5;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.25;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame50 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
        _parentRole.countEnd();
    };
    Ryu_sk13_s.frame51 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 27;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13_s.frame52 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 2;
        a20238.Vy = -1;
        a20238.Va = 0;
        a20238.Vg = 4.5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land3";
    };
    Ryu_sk13_s.frame58 = function (mc) {
        mc.stop();
    };
    return Ryu_sk13_s;
}());
__reflect(Ryu_sk13_s.prototype, "Ryu_sk13_s");
//# sourceMappingURL=Ryu_sk13_s.js.map