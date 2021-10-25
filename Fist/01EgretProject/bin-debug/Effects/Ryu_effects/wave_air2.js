var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var wave_air2 = (function () {
    function wave_air2() {
    }
    wave_air2.addSprite21080 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, wave_air2.frame1, 9, wave_air2.frame9]);
        return;
    };
    wave_air2.frame1 = function (mc) {
        mc.stop();
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 20;
        hitcheck_obj.obj_Vy = 12;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt6";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 15;
        hitcheck_obj.Vy = 25;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 4;
        hitcheck_obj.freezeTime = 2;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.35;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    wave_air2.frame9 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return wave_air2;
}());
__reflect(wave_air2.prototype, "wave_air2");
//# sourceMappingURL=wave_air2.js.map