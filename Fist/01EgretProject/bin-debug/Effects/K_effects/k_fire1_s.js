var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var k_fire1_s = (function () {
    function k_fire1_s() {
    }
    k_fire1_s.addSprite4858 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, k_fire1_s.frame1, 3, k_fire1_s.frame3, 22, k_fire1_s.frame22]);
        return;
    };
    k_fire1_s.frame1 = function () {
        // _level0.fire2_snd.start();
    };
    k_fire1_s.frame3 = function (mc) {
        var K_hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        K_hitcheck_obj.obj_Vx = 0;
        K_hitcheck_obj.obj_Vy = 0;
        K_hitcheck_obj.obj_level = 0;
        K_hitcheck_obj.hurtBack = "";
        K_hitcheck_obj.hurtAway = "hurt3";
        K_hitcheck_obj.flag = 1;
        K_hitcheck_obj.end_status = "";
        K_hitcheck_obj.Vx = 15;
        K_hitcheck_obj.Vy = 32;
        K_hitcheck_obj.a = 3;
        K_hitcheck_obj.g = 4;
        K_hitcheck_obj.freezeTime2 = 2;
        K_hitcheck_obj.freezeTime = 7;
        K_hitcheck_obj.slowTime = 0;
        K_hitcheck_obj.shake = 1;
        K_hitcheck_obj.d_rate = 1;
        K_hitcheck_obj.isObj = true;
        K_hitcheck_obj.hitType = "hitFire1";
        K_hitcheck_obj.hitEff = "fire_m3";
        K_hitcheck_obj.hitShinning = false;
        K_hitcheck_obj.reCheck = true;
        K_hitcheck_obj.checkTimes = 1;
        K_hitcheck_obj.hitPos = "";
    };
    k_fire1_s.frame22 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return k_fire1_s;
}());
__reflect(k_fire1_s.prototype, "k_fire1_s");
//# sourceMappingURL=k_fire1_s.js.map