var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk13 = (function () {
    function Ryu_sk13() {
    }
    Ryu_sk13.addSprite20764 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_sk13.frame1, 2, Ryu_sk13.frame2, 4, Ryu_sk13.frame4, 5, Ryu_sk13.frame5, 7, Ryu_sk13.frame7, 8, Ryu_sk13.frame8, 14, Ryu_sk13.frame14, 15, Ryu_sk13.frame15, 16, Ryu_sk13.frame16, 18, Ryu_sk13.frame18, 24, Ryu_sk13.frame24, 26, Ryu_sk13.frame26, 28, Ryu_sk13.frame28, 30, Ryu_sk13.frame30, 31, Ryu_sk13.frame31, 33, Ryu_sk13.frame33, 35, Ryu_sk13.frame35, 37, Ryu_sk13.frame37, 39, Ryu_sk13.frame39, 50, Ryu_sk13.frame50]);
        return;
    };
    Ryu_sk13.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2, "up");
        //continueHit = true;
    };
    Ryu_sk13.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s1";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    };
    Ryu_sk13.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_up3";
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 20;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk13.frame5 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13.frame7 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13.frame8 = function (mc) {
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
    Ryu_sk13.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 15;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk13.frame15 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13.frame16 = function (mc) {
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
        hitcheck.freezeTime = 3;
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
    Ryu_sk13.frame18 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
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
    Ryu_sk13.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 15;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk13.frame26 = function (mc) {
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
    Ryu_sk13.frame28 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 10;
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
    Ryu_sk13.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
        _parentRole.countEnd();
    };
    Ryu_sk13.frame31 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 8;
        a20238.Vy = 40;
        a20238.Va = 0;
        a20238.Vg = 4.5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land3";
        Ryu_a20657.getInstance(_parentRole).name = "ryu_dragon";
    };
    Ryu_sk13.frame33 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13.frame35 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13.frame37 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13.frame39 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk13.frame50 = function (mc) {
        mc.stop();
    };
    return Ryu_sk13;
}());
__reflect(Ryu_sk13.prototype, "Ryu_sk13");
//# sourceMappingURL=Ryu_sk13.js.map