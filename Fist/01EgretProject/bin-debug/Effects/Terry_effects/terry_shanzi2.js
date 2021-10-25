var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var terry_shanzi2 = (function () {
    function terry_shanzi2() {
    }
    terry_shanzi2.addSprite8083 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, terry_shanzi2.frame1, 10, terry_shanzi2.frame10]);
        return;
    };
    terry_shanzi2.frame1 = function (mc) {
        mc.stop();
        var hitcheck = Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx = 18;
        hitcheck.obj_Vy = 0;
        hitcheck.obj_level = 0;
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 22;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 2;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    terry_shanzi2.frame10 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    return terry_shanzi2;
}());
__reflect(terry_shanzi2.prototype, "terry_shanzi2");
//# sourceMappingURL=terry_shanzi2.js.map