var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_jump = (function () {
    function Ryu_jump() {
    }
    Ryu_jump.addSprite20285 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Ryu_jump.frame2, 13, Ryu_jump.frame13, 14, Ryu_jump.frame14, 15, Ryu_jump.frame15, 21, Ryu_jump.frame21, 24, Ryu_jump.frame24, 29, Ryu_jump.frame29, 32, Ryu_jump.frame32, 37, Ryu_jump.frame37, 40, Ryu_jump.frame40, 45, Ryu_jump.frame45, 48, Ryu_jump.frame48, 55, Ryu_jump.frame55,]);
        return;
    };
    Ryu_jump.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
        //_level0.jump_snd.start();
    };
    Ryu_jump.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    Ryu_jump.frame14 = function () {
        //_parentRole.attack = 1;
        //_level0[_root.enemy].AI_mc.defend();
    };
    Ryu_jump.frame15 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt2";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = 1;
        hitxheck.end_status = "";
        hitxheck.Vx = 17;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 4;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 1;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire_s3";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "up";
    };
    Ryu_jump.frame21 = function (mc) {
        mc.stop();
    };
    Ryu_jump.frame24 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt2";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = 1;
        hitxheck.end_status = "";
        hitxheck.Vx = 15;
        hitxheck.Vy = 0;
        hitxheck.a = 4;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 4;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 1;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire_s3";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "up";
    };
    Ryu_jump.frame29 = function (mc) {
        mc.stop();
    };
    Ryu_jump.frame32 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt2";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = "s2";
        hitxheck.end_status = "";
        hitxheck.Vx = 15;
        hitxheck.Vy = 0;
        hitxheck.a = 4;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 2;
        hitxheck.freezeTime = 3;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 0.5;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitfire_l";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "up";
    };
    Ryu_jump.frame37 = function (mc) {
        mc.stop();
    };
    Ryu_jump.frame40 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt2";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = "s2";
        hitxheck.end_status = "";
        hitxheck.Vx = 15;
        hitxheck.Vy = 0;
        hitxheck.a = 4;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 2;
        hitxheck.freezeTime = 3;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 0.5;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitfire_l";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "up";
    };
    Ryu_jump.frame45 = function (mc) {
        mc.stop();
    };
    Ryu_jump.frame48 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "";
        hitxheck.hurtAway = "hurt3";
        hitxheck.flag = 1;
        hitxheck.end_status = "getup2";
        hitxheck.Vx = 17;
        hitxheck.Vy = 30;
        hitxheck.a = 0;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 5;
        hitxheck.slowTime = 0;
        hitxheck.shake = 1;
        hitxheck.d_rate = 2;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire_h";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "";
    };
    Ryu_jump.frame55 = function (mc) {
        mc.stop();
    };
    return Ryu_jump;
}());
__reflect(Ryu_jump.prototype, "Ryu_jump");
//# sourceMappingURL=Ryu_jump.js.map