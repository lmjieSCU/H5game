var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_jump_b = (function () {
    function Chunli_jump_b() {
    }
    Chunli_jump_b.addSprite14549 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_jump_b.frame3, 20, Chunli_jump_b.frame20, 21, Chunli_jump_b.frame21, 24, Chunli_jump_b.frame24, 32, Chunli_jump_b.frame32, 35, Chunli_jump_b.frame35, 41, Chunli_jump_b.frame41, 44, Chunli_jump_b.frame44, 51, Chunli_jump_b.frame51, 54, Chunli_jump_b.frame54, 64, Chunli_jump_b.frame64, 70, Chunli_jump_b.frame70, 76, Chunli_jump_b.frame76, 79, Chunli_jump_b.frame79, 81, Chunli_jump_b.frame81, 82, Chunli_jump_b.frame82, 84, Chunli_jump_b.frame84, 95, Chunli_jump_b.frame95]);
        return;
    };
    Chunli_jump_b.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
        //_level0.k_snd.start();
    };
    Chunli_jump_b.frame20 = function (mc) {
        mc.stop();
    };
    Chunli_jump_b.frame21 = function (mc) { };
    Chunli_jump_b.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 4;
        htcheck.isObj = false;
        htcheck.hitPos = "up";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt6";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.Vx = 17;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_jump_b.frame32 = function (mc) {
        mc.stop();
    };
    Chunli_jump_b.frame35 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 4;
        htcheck.isObj = false;
        htcheck.hitPos = "up";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt6";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.Vx = 17;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_jump_b.frame41 = function (mc) {
        mc.stop();
    };
    Chunli_jump_b.frame44 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "up";
        htcheck.hitType = "hitfire_l";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt6";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = "s2";
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 4;
        htcheck.Vx = 15;
        htcheck.freezeTime2 = 2;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_jump_b.frame51 = function (mc) {
        mc.stop();
    };
    Chunli_jump_b.frame54 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "up";
        htcheck.hitType = "hitfire_l";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt6";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = "s2";
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 4;
        htcheck.Vx = 15;
        htcheck.freezeTime2 = 2;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_jump_b.frame64 = function (mc) {
        mc.stop();
    };
    Chunli_jump_b.frame70 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 5;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.Vx = 17;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    };
    Chunli_jump_b.frame76 = function (mc) {
        mc.stop();
    };
    Chunli_jump_b.frame79 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a14462 = Chunli_a14462.getInstance(_parentRole);
        a14462.flag = "att";
        a14462.defendSuper = false;
        a14462.obj_level = 0;
    };
    Chunli_jump_b.frame81 = function (mc) {
        mc.stop();
    };
    Chunli_jump_b.frame82 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 4;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt1";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 25;
        htcheck.a = 0;
        htcheck.Vx = 5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_jump_b.frame84 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 15;
        a4023.Vy = 25;
        a4023.Va = 0;
        a4023.Vg = 3.5;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land2";
    };
    Chunli_jump_b.frame95 = function (mc) {
        mc.stop();
    };
    return Chunli_jump_b;
}());
__reflect(Chunli_jump_b.prototype, "Chunli_jump_b");
//# sourceMappingURL=Chunli_jump_b.js.map