var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mai_shanzi1_s = (function () {
    function mai_shanzi1_s() {
    }
    mai_shanzi1_s.addSprite7823 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, mai_shanzi1_s.frame1, 12, mai_shanzi1_s.frame12]);
        return;
    };
    mai_shanzi1_s.frame1 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 20;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup2";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 1;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "fire_m2";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        mc.stop();
    };
    mai_shanzi1_s.frame12 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return mai_shanzi1_s;
}());
__reflect(mai_shanzi1_s.prototype, "mai_shanzi1_s");
//# sourceMappingURL=mai_shanzi1_s.js.map