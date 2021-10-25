var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var moriya_light = (function () {
    function moriya_light() {
    }
    moriya_light.addSprite4303 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, moriya_light.frame1, 3, moriya_light.frame3, 10, moriya_light.frame19]);
        return;
    };
    moriya_light.frame1 = function (mc) {
    };
    moriya_light.frame3 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 25;
        hitcheck_obj.Vy = 26;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 4;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 2;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 1.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "m_hitFire_light";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    };
    moriya_light.frame19 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return moriya_light;
}());
__reflect(moriya_light.prototype, "moriya_light");
//# sourceMappingURL=moriya_light.js.map