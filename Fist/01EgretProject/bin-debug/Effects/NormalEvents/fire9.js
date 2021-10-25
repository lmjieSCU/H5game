var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire9 = (function () {
    function fire9() {
    }
    fire9.addSprite4806 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire9.frame1, 10, fire9.frame10, 11, fire9.frame11, 12, fire9.frame12, 15, fire9.frame15,
            27, fire9.frame27, 28, fire9.frame28, 48, fire9.frame48]);
        mc['own_role'] = own_role;
        return;
    };
    fire9.frame1 = function (mc) {
        // _level0.fire2_snd.start();
        mc.stop();
        var hero_flyingobj = Hero_flyingObj.getInstance(mc);
        hero_flyingobj.obj_Vx = 0;
        hero_flyingobj.obj_Vy = 0;
        hero_flyingobj.obj_level = 1;
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
        var pos_target_x = mc.x + 200 * mc['own_role'].dir;
        hero_flyingobj.doaction_params = [80, mc.x, mc.y, pos_target_x, mc['own_role'].land_Y];
        mc.addWaitingCallFun(mc, ['onLand', fire9.frame1_onLand, [mc], 'onHit', fire9.frame1_onHit, [mc]]);
    };
    fire9.frame1_onLand = function (mc) {
        mc.gotoAndStop('hit');
    };
    fire9.frame1_onHit = function (mc) {
        mc.gotoAndStop('hit2');
    };
    fire9.frame10 = function () {
    };
    fire9.frame11 = function () {
        // _level0.boom_snd.start();
    };
    fire9.frame12 = function (mc) {
        var hero_hitcheck = Hero_HitCheck.getInstance(mc);
        hero_hitcheck.hurtBack = "";
        hero_hitcheck.hurtAway = "hurt3";
        hero_hitcheck.flag = 1;
        hero_hitcheck.end_status = "getup2";
        hero_hitcheck.Vx = 10;
        hero_hitcheck.Vy = 50;
        hero_hitcheck.a = 3;
        hero_hitcheck.g = 0;
        hero_hitcheck.freezeTime2 = 0;
        hero_hitcheck.freezeTime = 13;
        hero_hitcheck.slowTime = 0;
        hero_hitcheck.shake = 3;
        hero_hitcheck.d_rate = 3.5;
        hero_hitcheck.isObj = true;
        hero_hitcheck.hitType = "hitFire1";
        hero_hitcheck.hitEff = "fire_m3";
        hero_hitcheck.hitShinning = false;
        hero_hitcheck.reCheck = true;
        hero_hitcheck.checkTimes = 1;
        hero_hitcheck.hitPos = "";
    };
    fire9.frame15 = function () {
    };
    fire9.frame27 = function (mc) {
        mc.parent.removeChild(mc);
    };
    fire9.frame28 = function (mc) {
        // _level0.boom_snd.start();
        var hero_hitcheck = Hero_HitCheck.getInstance(mc);
        hero_hitcheck.hurtBack = "";
        hero_hitcheck.hurtAway = "hurt3";
        hero_hitcheck.flag = 1;
        hero_hitcheck.end_status = "getup2";
        hero_hitcheck.Vx = 10;
        hero_hitcheck.Vy = 50;
        hero_hitcheck.a = 3;
        hero_hitcheck.g = 0;
        hero_hitcheck.freezeTime2 = 0;
        hero_hitcheck.freezeTime = 13;
        hero_hitcheck.slowTime = 0;
        hero_hitcheck.shake = 3;
        hero_hitcheck.d_rate = 3.5;
        hero_hitcheck.isObj = true;
        hero_hitcheck.hitType = "hitFire1";
        hero_hitcheck.hitEff = "fire_m3";
        hero_hitcheck.hitShinning = false;
        hero_hitcheck.reCheck = true;
        hero_hitcheck.checkTimes = 1;
        hero_hitcheck.hitPos = "";
    };
    fire9.frame48 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire9;
}());
__reflect(fire9.prototype, "fire9");
//# sourceMappingURL=fire9.js.map