var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var moriya_slash_m3 = (function () {
    function moriya_slash_m3() {
    }
    moriya_slash_m3.addSprite4441 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, moriya_slash_m3.frame1, 4, moriya_slash_m3.frame4, 7, moriya_slash_m3.frame7, 10, moriya_slash_m3.frame10, 13, moriya_slash_m3.frame13, 16, moriya_slash_m3.frame16, 19, moriya_slash_m3.frame19, 22, moriya_slash_m3.frame22, 25, moriya_slash_m3.frame25, 29, moriya_slash_m3.frame29, 31, moriya_slash_m3.frame31]);
        mc["own_role"] = own_role;
        _level0.effect_mc.bgEff_start("bgEff_black", mc["own_role"]);
        return;
    };
    moriya_slash_m3.frame1 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        mc.x = mc["own_role"].opp.x;
    };
    moriya_slash_m3.frame4 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb2";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame7 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame10 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb2";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame13 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame16 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb2";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame19 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame22 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb2";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame25 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 10;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame29 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 20;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb2";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_slash_m3.frame31 = function (mc) {
        _level0.effect_mc.bgEff_start("", mc["own_role"]);
        mc.parent.removeChild(mc);
    };
    return moriya_slash_m3;
}());
__reflect(moriya_slash_m3.prototype, "moriya_slash_m3");
//# sourceMappingURL=moriya_slash_m3.js.map