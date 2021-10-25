var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fire2 = (function () {
    function fire2() {
    }
    fire2.addSprite4772 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, fire2.frame1, 2, fire2.frame2]);
        return;
    };
    fire2.frame1 = function (mc) {
        mc.stop();
        var k_hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        k_hitcheck_obj.obj_Vx = 25;
        k_hitcheck_obj.obj_Vy = 0;
        k_hitcheck_obj.obj_level = 0;
        k_hitcheck_obj.hurtBack = "hurt2";
        k_hitcheck_obj.hurtAway = "hurt3";
        k_hitcheck_obj.flag = 1;
        k_hitcheck_obj.end_status = "";
        k_hitcheck_obj.Vx = 20;
        k_hitcheck_obj.Vy = 35;
        k_hitcheck_obj.a = 3;
        k_hitcheck_obj.g = 0;
        k_hitcheck_obj.freezeTime2 = 1;
        k_hitcheck_obj.freezeTime = 4;
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
    };
    fire2.frame2 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return fire2;
}());
__reflect(fire2.prototype, "fire2");
//# sourceMappingURL=fire2.js.map