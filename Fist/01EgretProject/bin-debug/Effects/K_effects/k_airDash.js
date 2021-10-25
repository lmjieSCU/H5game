var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var k_airDash = (function () {
    function k_airDash() {
    }
    k_airDash.addSprite6071 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, k_airDash.frame1, 24, k_airDash.frame24, 25, k_airDash.frame25,]);
        mc['own_role'] = own_role;
        return;
    };
    k_airDash.frame1 = function (mc) {
        // ColorEffect.setColor(_root.role_mc,"black");
        // ColorEffect.setColor(_root.role_mc.opp,"black");
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_red";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 3;
        hitcheck.Vy = 5;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 15;
        hitcheck.freezeTime = 15;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_cut_lb1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    k_airDash.frame24Call = function (mc, own_role) {
        K_a5755.getInstance(own_role).effName = "";
    };
    k_airDash.frame24 = function (mc) {
        K_a5755.getInstance(mc['own_role']).effName = "";
    };
    k_airDash.frame25 = function (mc) {
        mc.stop();
        // ColorEffect.setColor(_root.role_mc,"normal");
        // ColorEffect.setColor(_root.role_mc.opp,"normal");
        mc.parent.removeChild(mc);
    };
    return k_airDash;
}());
__reflect(k_airDash.prototype, "k_airDash");
//# sourceMappingURL=k_airDash.js.map