var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var boom_redongMax = (function () {
    function boom_redongMax() {
    }
    boom_redongMax.addSprite4737 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, boom_redongMax.frame1, 25, boom_redongMax.frame25]);
        mc.addWaitingCallFun(mc, ['frame1Call', boom_redongMax.frame1Call, [mc, own_role]]);
        return;
    };
    boom_redongMax.frame1Call = function (mc, own_role) {
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y;
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y - 100;
    };
    boom_redongMax.frame1 = function (mc) {
        mc.checkWaitingCallFun('frame1Call');
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = -15;
        hitcheck.Vy = 45;
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
    boom_redongMax.frame25 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return boom_redongMax;
}());
__reflect(boom_redongMax.prototype, "boom_redongMax");
//# sourceMappingURL=boom_redongMax.js.map