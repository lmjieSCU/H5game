var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_snow_sheji2 = (function () {
    function kula_snow_sheji2() {
    }
    kula_snow_sheji2.addSprite19870 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, kula_snow_sheji2.frame1, 10, kula_snow_sheji2.frame10]);
        return;
    };
    kula_snow_sheji2.frame1 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 25;
        hitcheck_obj.obj_Vy = 25;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup2";
        hitcheck_obj.Vx = 20;
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
        hitcheck_obj.hitEff = "hitEff_ice1";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        // name = "kula_snow_sheji3";
        // numMax = 5;
        // intvalFrame = 5;
        // lastObj = "";
        // intvalDisX = 120;
        // intvalDisY = 0;
        mc.stop();
    };
    kula_snow_sheji2.frame10 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_snow_sheji2;
}());
__reflect(kula_snow_sheji2.prototype, "kula_snow_sheji2");
//# sourceMappingURL=kula_snow_sheji2.js.map