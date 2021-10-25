var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var terry_shanzi1 = (function () {
    function terry_shanzi1() {
    }
    terry_shanzi1.addSprite8052 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, terry_shanzi1.frame1, 15, terry_shanzi1.frame15]);
        return;
    };
    terry_shanzi1.frame1 = function (mc) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 12;
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
        hitcheck_obj.freezeTime = 2;
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
    terry_shanzi1.frame15 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    return terry_shanzi1;
}());
__reflect(terry_shanzi1.prototype, "terry_shanzi1");
//# sourceMappingURL=terry_shanzi1.js.map