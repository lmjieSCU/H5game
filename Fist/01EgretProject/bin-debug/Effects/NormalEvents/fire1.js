var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire1 = (function () {
    function fire1() {
    }
    fire1.addSprite4857 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire1.frame1, 3, fire1.frame3, 22, fire1.frame22]);
        return;
    };
    fire1.frame1 = function () {
        // _level0.fire2_snd.start();
    };
    fire1.frame3 = function (mc) {
        var k_hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        k_hitcheck_obj.obj_Vx = 0;
        k_hitcheck_obj.obj_Vy = 0;
        k_hitcheck_obj.obj_level = 0;
        k_hitcheck_obj.hurtBack = "hurt2";
        k_hitcheck_obj.hurtAway = "hurt3";
        k_hitcheck_obj.flag = 1;
        k_hitcheck_obj.end_status = "";
        k_hitcheck_obj.Vx = 20;
        k_hitcheck_obj.Vy = 0;
        k_hitcheck_obj.a = 3;
        k_hitcheck_obj.g = 0;
        k_hitcheck_obj.freezeTime2 = 2;
        k_hitcheck_obj.freezeTime = 6;
        k_hitcheck_obj.slowTime = 0;
        k_hitcheck_obj.shake = 0;
        k_hitcheck_obj.d_rate = 1;
        k_hitcheck_obj.isObj = true;
        k_hitcheck_obj.hitType = "hitFire1";
        k_hitcheck_obj.hitEff = "fire_m2";
        k_hitcheck_obj.hitShinning = false;
        k_hitcheck_obj.reCheck = true;
        k_hitcheck_obj.checkTimes = 1;
        k_hitcheck_obj.hitPos = "";
        k_hitcheck_obj.nohit_status = [];
        k_hitcheck_obj.nohit_status[0] = "hurt3";
        k_hitcheck_obj.nohit_status[1] = "hurt4";
    };
    fire1.frame22 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire1;
}());
__reflect(fire1.prototype, "fire1");
//# sourceMappingURL=fire1.js.map