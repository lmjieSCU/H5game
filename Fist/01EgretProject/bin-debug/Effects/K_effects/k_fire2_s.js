var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var k_fire2_s = (function () {
    function k_fire2_s() {
    }
    k_fire2_s.addSprite4773 = function (mc, own_role) {
        mc.addWaitingCallFun(mc, ['frame3Call', k_fire2_s.frame3Call, [mc, own_role]]);
        mc.addFrameScript(mc, [1, k_fire2_s.frame1, 3, k_fire2_s.frame3, 24, k_fire2_s.frame24]);
        return;
    };
    k_fire2_s.frame3Call = function (mc, own_role) {
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y - 170;
    };
    k_fire2_s.frame3 = function (mc) {
        mc.checkWaitingCallFun('frame3Call');
    };
    k_fire2_s.frame1 = function (mc) {
        mc.stop();
        var K_hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        K_hitcheck_obj.obj_Vx = 40;
        K_hitcheck_obj.obj_Vy = 0;
        K_hitcheck_obj.obj_level = 0;
        K_hitcheck_obj.hurtBack = "";
        K_hitcheck_obj.hurtAway = "hurt4";
        K_hitcheck_obj.flag = 1;
        K_hitcheck_obj.end_status = "getup2";
        K_hitcheck_obj.Vx = 25;
        K_hitcheck_obj.Vy = 40;
        K_hitcheck_obj.a = 3;
        K_hitcheck_obj.g = 0;
        K_hitcheck_obj.freezeTime2 = 1;
        K_hitcheck_obj.freezeTime = 12;
        K_hitcheck_obj.slowTime = 0;
        K_hitcheck_obj.shake = 3;
        K_hitcheck_obj.d_rate = 1.5;
        K_hitcheck_obj.isObj = true;
        K_hitcheck_obj.hitType = "hitFire1";
        K_hitcheck_obj.hitEff = "fire_m3";
        K_hitcheck_obj.hitShinning = true;
        K_hitcheck_obj.reCheck = true;
        K_hitcheck_obj.checkTimes = 1;
        K_hitcheck_obj.hitPos = "";
    };
    k_fire2_s.frame24 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return k_fire2_s;
}());
__reflect(k_fire2_s.prototype, "k_fire2_s");
//# sourceMappingURL=k_fire2_s.js.map