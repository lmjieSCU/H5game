var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_jump_f = (function () {
    function Ryu_jump_f() {
    }
    Ryu_jump_f.addSprite20302 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Ryu_jump_f.frame2, 18, Ryu_jump_f.frame18, 19, Ryu_jump_f.frame19, 20, Ryu_jump_f.frame20, 27, Ryu_jump_f.frame27, 31, Ryu_jump_f.frame31, 36, Ryu_jump_f.frame36, 39, Ryu_jump_f.frame39, 44, Ryu_jump_f.frame44, 47, Ryu_jump_f.frame47, 52, Ryu_jump_f.frame52, 55, Ryu_jump_f.frame55, 62, Ryu_jump_f.frame62]);
        return;
    };
    Ryu_jump_f.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
        //_level0.jump_snd.start();
    };
    Ryu_jump_f.frame18 = function (mc) {
        mc.stop();
    };
    Ryu_jump_f.frame19 = function () {
        //_root.attack = 1;
        //_level0[_root.enemy].AI_mc.defend();
    };
    Ryu_jump_f.frame20 = function (mc) {
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
    Ryu_jump_f.frame27 = function (mc) {
        mc.stop();
    };
    Ryu_jump_f.frame31 = function (mc) {
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
    Ryu_jump_f.frame36 = function (mc) {
        mc.stop();
    };
    Ryu_jump_f.frame39 = function (mc) {
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
    Ryu_jump_f.frame44 = function (mc) {
        mc.stop();
    };
    Ryu_jump_f.frame47 = function (mc) {
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
    Ryu_jump_f.frame52 = function (mc) {
        mc.stop();
    };
    Ryu_jump_f.frame55 = function (mc) {
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
    Ryu_jump_f.frame62 = function (mc) {
        mc.stop();
    };
    return Ryu_jump_f;
}());
__reflect(Ryu_jump_f.prototype, "Ryu_jump_f");
//# sourceMappingURL=Ryu_jump_f.js.map