var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var boom_airDash = (function () {
    function boom_airDash() {
    }
    boom_airDash.addSprite4738 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, boom_airDash.frame1, 25, boom_airDash.frame25,]);
        mc.addWaitingCallFun(mc, ['frame1Call', boom_airDash.frame1Call, [mc, own_role]]);
        return;
    };
    boom_airDash.frame1Call = function (mc, own_role) {
        mc.x = own_role.x;
        mc.y = own_role.y;
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y - 170;
    };
    boom_airDash.frame1 = function (mc) {
        mc.checkWaitingCallFun('frame1Call');
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 25;
        hitcheck.Vy = 40;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 3;
        hitcheck.d_rate = 2;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "all";
    };
    boom_airDash.frame25 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return boom_airDash;
}());
__reflect(boom_airDash.prototype, "boom_airDash");
//# sourceMappingURL=boom_airDash.js.map