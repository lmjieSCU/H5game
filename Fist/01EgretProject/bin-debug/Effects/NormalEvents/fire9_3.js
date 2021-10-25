var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire9_3 = (function () {
    function fire9_3() {
    }
    fire9_3.addSprite4823 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire9_3.frame1, 3, fire9_3.frame3, 13, fire9_3.frame13]);
        return;
    };
    fire9_3.frame1 = function (mc) {
        mc.stop();
        var k_hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        k_hitcheck_obj.obj_Vx = 23;
        k_hitcheck_obj.obj_Vy = 17;
        k_hitcheck_obj.obj_level = 0;
        k_hitcheck_obj.hurtBack = "hurt1";
        k_hitcheck_obj.hurtAway = "hurt3";
        k_hitcheck_obj.flag = 1;
        k_hitcheck_obj.end_status = "";
        k_hitcheck_obj.Vx = 20;
        k_hitcheck_obj.Vy = 25;
        k_hitcheck_obj.a = 3;
        k_hitcheck_obj.g = 0;
        k_hitcheck_obj.freezeTime2 = 1;
        k_hitcheck_obj.freezeTime = 4;
        k_hitcheck_obj.slowTime = 0;
        k_hitcheck_obj.shake = 0;
        k_hitcheck_obj.d_rate = 1;
        k_hitcheck_obj.isObj = true;
        k_hitcheck_obj.hitType = "hitFire1";
        k_hitcheck_obj.hitEff = "fire_m1";
        k_hitcheck_obj.hitShinning = false;
        k_hitcheck_obj.reCheck = true;
        k_hitcheck_obj.checkTimes = 1;
        k_hitcheck_obj.hitPos = "";
    };
    fire9_3.frame3 = function () {
    };
    fire9_3.frame13 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire9_3;
}());
__reflect(fire9_3.prototype, "fire9_3");
//# sourceMappingURL=fire9_3.js.map