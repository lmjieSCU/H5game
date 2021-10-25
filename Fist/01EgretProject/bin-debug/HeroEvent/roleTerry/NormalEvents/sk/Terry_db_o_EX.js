var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_db_o_EX = (function () {
    function Terry_db_o_EX() {
    }
    Terry_db_o_EX.addSprite9685 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Terry_db_o_EX.frame5, 6, Terry_db_o_EX.frame6, 9, Terry_db_o_EX.frame9, 10, Terry_db_o_EX.frame10, 19, Terry_db_o_EX.frame19, 23, Terry_db_o_EX.frame23, 26, Terry_db_o_EX.frame26, 30, Terry_db_o_EX.frame30, 31, Terry_db_o_EX.frame31, 34, Terry_db_o_EX.frame34, 38, Terry_db_o_EX.frame38, 42, Terry_db_o_EX.frame42, 48, Terry_db_o_EX.frame48, 56, Terry_db_o_EX.frame56, 62, Terry_db_o_EX.frame62, 68, Terry_db_o_EX.frame68, 76, Terry_db_o_EX.frame76, 84, Terry_db_o_EX.frame84, 92, Terry_db_o_EX.frame92, 102, Terry_db_o_EX.frame102, 106, Terry_db_o_EX.frame106, 109, Terry_db_o_EX.frame109, 112, Terry_db_o_EX.frame112, 114, Terry_db_o_EX.frame114, 116, Terry_db_o_EX.frame116, 118, Terry_db_o_EX.frame118, 120, Terry_db_o_EX.frame120, 122, Terry_db_o_EX.frame122, 124, Terry_db_o_EX.frame124, 136, Terry_db_o_EX.frame136, 137, Terry_db_o_EX.frame137, 139, Terry_db_o_EX.frame139, 153, Terry_db_o_EX.frame153,]);
        return;
    };
    Terry_db_o_EX.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7078 = Terry_a7078.getInstance(_parentRole);
        a7078.s_type = "s2";
        a7078.f_time = 20;
        a7078.bgType = "2";
        a7078.roleName = "Terry";
        a7078.faceName = "";
    };
    Terry_db_o_EX.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
    };
    Terry_db_o_EX.frame9 = function () {
        //continueHit = true;
    };
    Terry_db_o_EX.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt2";
        HitCheck.hurtAway = "hurt2";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 10;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 5;
        HitCheck.freezeTime = 4;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "down";
        var a6433 = Terry_a6433.getInstance(_parentRole);
        a6433.Vx = 35;
        a6433.flag = "";
        a6433.target = "";
    };
    Terry_db_o_EX.frame19 = function (mc) {
        //continueHit = true;
    };
    Terry_db_o_EX.frame23 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt1";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 15;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 10;
        HitCheck.freezeTime = 12;
        HitCheck.slowTime = 0;
        HitCheck.shake = 1;
        HitCheck.d_rate = 0.5;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire_h";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame26 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7153.getInstance(_parentRole).nohitFrame = "nohit";
    };
    Terry_db_o_EX.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a594 = K_a594.getInstance(_parentRole);
        a594.Vx = 10;
        a594.flag = "";
        a594.target = "";
    };
    Terry_db_o_EX.frame31 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt2";
        HitCheck.hurtAway = "hurt2";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 2;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame34 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt1";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 2;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a594 = K_a594.getInstance(_parentRole);
        a594.Vx = 5;
        a594.flag = "";
        a594.target = "";
    };
    Terry_db_o_EX.frame42 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt1";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame48 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt2";
        HitCheck.hurtAway = "hurt3";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame56 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt1";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame62 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt2";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame68 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt1";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 3;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame76 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt2";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame84 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt2";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame92 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt1";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 5;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 2;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.5;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame102 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt1";
        HitCheck.hurtAway = "hurt1";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 15;
        HitCheck.Vy = 0;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 5;
        HitCheck.freezeTime = 12;
        HitCheck.slowTime = 0;
        HitCheck.shake = 1;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire_h";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame106 = function (mc) {
        //continueHit = false;
    };
    Terry_db_o_EX.frame109 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7078 = Terry_a7078.getInstance(_parentRole);
        a7078.bgType = "0";
        a7078.f_time = 20;
        a7078.roleName = "";
        a7078.s_type = "s3";
        a7078.faceName = "";
    };
    Terry_db_o_EX.frame112 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "";
        HitCheck.hurtAway = "hurt3";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 0;
        HitCheck.Vy = 5;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame114 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "";
        HitCheck.hurtAway = "hurt3";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 0;
        HitCheck.Vy = 5;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame116 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "";
        HitCheck.hurtAway = "hurt3";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 0;
        HitCheck.Vy = 5;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame118 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "";
        HitCheck.hurtAway = "hurt3";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 0;
        HitCheck.Vy = 5;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame120 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "";
        HitCheck.hurtAway = "hurt3";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 0;
        HitCheck.Vy = 5;
        HitCheck.a = 0;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 1;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 0.2;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame122 = function (mc) {
        var HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "";
        HitCheck.hurtAway = "hurt4";
        HitCheck.flag = 1;
        HitCheck.end_status = "";
        HitCheck.Vx = 35;
        HitCheck.Vy = 30;
        HitCheck.a = 0;
        HitCheck.g = 4;
        HitCheck.freezeTime2 = 0;
        HitCheck.freezeTime = 5;
        HitCheck.slowTime = 0;
        HitCheck.shake = 0;
        HitCheck.d_rate = 2.4;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire1";
        HitCheck.hitEff = "";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
    };
    Terry_db_o_EX.frame124 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "bgEff_break";
    };
    Terry_db_o_EX.frame136 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Terry_db_o_EX.frame137 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "";
        //continueHit = false;
    };
    Terry_db_o_EX.frame139 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "bgEff_break";
    };
    Terry_db_o_EX.frame153 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_db_o_EX;
}());
__reflect(Terry_db_o_EX.prototype, "Terry_db_o_EX");
//# sourceMappingURL=Terry_db_o_EX.js.map