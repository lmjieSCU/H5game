var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_jump = (function () {
    function Chunli_jump() {
    }
    Chunli_jump.addSprite14477 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_jump.frame3, 30, Chunli_jump.frame30, 31, Chunli_jump.frame31, 32, Chunli_jump.frame32, 42, Chunli_jump.frame42, 45, Chunli_jump.frame45, 51, Chunli_jump.frame51, 54, Chunli_jump.frame54, 61, Chunli_jump.frame61, 64, Chunli_jump.frame64, 74, Chunli_jump.frame74, 80, Chunli_jump.frame80, 86, Chunli_jump.frame86, 89, Chunli_jump.frame89, 91, Chunli_jump.frame91, 92, Chunli_jump.frame92, 94, Chunli_jump.frame94, 105, Chunli_jump.frame105]);
        return;
    };
    Chunli_jump.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
        //_level0.k_snd.start();
    };
    Chunli_jump.frame30 = function (mc) {
        mc.stop();
    };
    Chunli_jump.frame31 = function (mc) {
    };
    Chunli_jump.frame32 = function (mc) {
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
    Chunli_jump.frame42 = function (mc) {
        mc.stop();
    };
    Chunli_jump.frame45 = function (mc) {
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
    Chunli_jump.frame51 = function (mc) {
        mc.stop();
    };
    Chunli_jump.frame54 = function (mc) {
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
    Chunli_jump.frame61 = function (mc) {
        mc.stop();
    };
    Chunli_jump.frame64 = function (mc) {
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
    Chunli_jump.frame74 = function (mc) {
        mc.stop();
    };
    Chunli_jump.frame80 = function (mc) {
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
    Chunli_jump.frame86 = function (mc) {
        mc.stop();
    };
    Chunli_jump.frame89 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a14462 = Chunli_a14462.getInstance(_parentRole);
        a14462.flag = "att";
        a14462.defendSuper = false;
        a14462.obj_level = 0;
    };
    Chunli_jump.frame91 = function (mc) {
        mc.stop();
    };
    Chunli_jump.frame92 = function (mc) {
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
    Chunli_jump.frame94 = function (mc) {
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
    Chunli_jump.frame105 = function (mc) {
        mc.stop();
    };
    return Chunli_jump;
}());
__reflect(Chunli_jump.prototype, "Chunli_jump");
//# sourceMappingURL=Chunli_jump.js.map