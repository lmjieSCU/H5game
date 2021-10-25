var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var k_boom1_mc = (function () {
    function k_boom1_mc() {
    }
    k_boom1_mc.addSprite4736 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, k_boom1_mc.frame1, 3, k_boom1_mc.frame3, 25, k_boom1_mc.frame25]);
        mc.addWaitingCallFun(mc, ['frame1Call', k_boom1_mc.frame1Call, [mc, own_role]]);
        return;
    };
    k_boom1_mc.frame1Call = function (mc, own_role) {
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y - 170;
    };
    k_boom1_mc.frame1 = function (mc) {
        mc.checkWaitingCallFun('frame1Call');
    };
    k_boom1_mc.frame3 = function (mc) {
        var K_hitcheck = Hero_HitCheck.getInstance(mc);
        K_hitcheck.hurtBack = "";
        K_hitcheck.hurtAway = "hurt4";
        K_hitcheck.flag = 1;
        K_hitcheck.end_status = "getup2";
        K_hitcheck.Vx = -15;
        K_hitcheck.Vy = 45;
        K_hitcheck.a = 3;
        K_hitcheck.g = 0;
        K_hitcheck.freezeTime2 = 0;
        K_hitcheck.freezeTime = 8;
        K_hitcheck.slowTime = 0;
        K_hitcheck.shake = 3;
        K_hitcheck.d_rate = 1.5;
        K_hitcheck.isObj = true;
        K_hitcheck.hitType = "hitFire0";
        K_hitcheck.hitEff = "fire_m3";
        K_hitcheck.hitShinning = false;
        K_hitcheck.reCheck = true;
        K_hitcheck.checkTimes = 1;
        K_hitcheck.hitPos = "";
    };
    k_boom1_mc.frame25 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return k_boom1_mc;
}());
__reflect(k_boom1_mc.prototype, "k_boom1_mc");
//# sourceMappingURL=k_boom1_mc.js.map