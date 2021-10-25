var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var k_fire9_s = (function () {
    function k_fire9_s() {
    }
    k_fire9_s.addSprite4807 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, k_fire9_s.frame1, 10, k_fire9_s.frame10, 11, k_fire9_s.frame11, 13, k_fire9_s.frame13,
            18, k_fire9_s.frame18, 22, k_fire9_s.frame22, 28, k_fire9_s.frame28, 30, k_fire9_s.frame30, 33, k_fire9_s.frame33,
            36, k_fire9_s.frame36, 50, k_fire9_s.frame50]);
        mc['own_role'] = own_role;
        return;
    };
    k_fire9_s.frame1 = function (mc) {
        mc.stop();
        var hero_flyingobj = Hero_flyingObj.getInstance(mc);
        hero_flyingobj.obj_Vx = 0;
        hero_flyingobj.obj_Vy = 0;
        hero_flyingobj.obj_level = 0;
        hero_flyingobj.hurtBack = "";
        hero_flyingobj.hurtAway = "hurt3";
        hero_flyingobj.flag = 1;
        hero_flyingobj.end_status = "";
        hero_flyingobj.Vx = 30;
        hero_flyingobj.Vy = 30;
        hero_flyingobj.a = 3;
        hero_flyingobj.g = 0;
        hero_flyingobj.freezeTime2 = 0;
        hero_flyingobj.freezeTime = 0;
        hero_flyingobj.slowTime = 0;
        hero_flyingobj.shake = 0;
        hero_flyingobj.d_rate = 0;
        hero_flyingobj.isObj = true;
        hero_flyingobj.hitType = "hitFire1";
        hero_flyingobj.hitEff = "fire_m1";
        hero_flyingobj.reCheck = true;
        hero_flyingobj.checkTimes = 1;
        hero_flyingobj.hitPos = "";
        hero_flyingobj.doaction = 'moveAim_pos';
        var pos_target_x = mc.x + 170 * mc['own_role'].dir;
        hero_flyingobj.doaction_params = [80, mc.x, mc.y, pos_target_x, mc['own_role'].land_Y];
        mc.addWaitingCallFun(mc, ['onLand', k_fire9_s.frame1_onLand, [mc], 'onHit', k_fire9_s.frame1_onHit, [mc]]);
    };
    k_fire9_s.frame1_onLand = function (mc) {
        mc.gotoAndStop('hit');
    };
    k_fire9_s.frame1_onHit = function (mc) {
        mc.gotoAndStop('hit2');
    };
    k_fire9_s.frame10 = function (mc) { };
    k_fire9_s.frame11 = function (mc) {
        //_level0.boom_snd.start();
    };
    k_fire9_s.frame13 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 20;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 3;
        hitcheck.d_rate = 1;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    k_fire9_s.frame18 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 20;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 3;
        hitcheck.d_rate = 1;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    k_fire9_s.frame22 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 20;
        hitcheck.Vy = 40;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 13;
        hitcheck.slowTime = 0;
        hitcheck.shake = 3;
        hitcheck.d_rate = 3.5;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    k_fire9_s.frame28 = function (mc) {
        mc.parent.removeChild(mc);
    };
    k_fire9_s.frame30 = function (mc) {
        //_level0.boom_snd.start();
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 10;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    k_fire9_s.frame33 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 10;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    k_fire9_s.frame36 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 10;
        hitcheck.Vy = 50;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 13;
        hitcheck.slowTime = 0;
        hitcheck.shake = 3;
        hitcheck.d_rate = 3;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    k_fire9_s.frame50 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return k_fire9_s;
}());
__reflect(k_fire9_s.prototype, "k_fire9_s");
//# sourceMappingURL=k_fire9_s.js.map