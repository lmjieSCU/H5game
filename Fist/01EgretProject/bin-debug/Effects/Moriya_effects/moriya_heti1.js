var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var moriya_heti1 = (function () {
    function moriya_heti1() {
    }
    moriya_heti1.addSprite4514 = function (mc, own_role) {
        mc.addFrameScript(mc, [18, moriya_heti1.frame18, 26, moriya_heti1.frame26, 39, moriya_heti1.frame39, 50, moriya_heti1.frame50, 81, moriya_heti1.frame81, 82, moriya_heti1.frame82, 104, moriya_heti1.frame104, 160, moriya_heti1.frame160]);
        mc["own_role"] = own_role;
        return;
    };
    moriya_heti1.frame18 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 3;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 15;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 4;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 1;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_heti1.frame26 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt1";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 2;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.2;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_heti1.frame39 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt1";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 2;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.2;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_heti1.frame50 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt1";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 2;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.2;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_heti1.frame81 = function (mc) {
        var a4178 = Moriya_a4178.getInstance(mc["own_role"]);
        a4178.s_type = "s3";
        a4178.f_time = 20;
        a4178.bgType = "0";
        a4178.roleName = "";
        a4178.faceName = "";
    };
    moriya_heti1.frame82 = function (mc) {
        mc.gotoAndPlay(102);
    };
    moriya_heti1.frame104 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 3;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 30;
        hitcheck_obj.Vy = -30;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 4;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 1;
        hitcheck_obj.d_rate = 1;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_cut_lb1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "land";
        Moriya_a4290.getInstance(mc["own_role"]).name = "m_slash_3_2_nohit";
    };
    moriya_heti1.frame160 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return moriya_heti1;
}());
__reflect(moriya_heti1.prototype, "moriya_heti1");
//# sourceMappingURL=moriya_heti1.js.map