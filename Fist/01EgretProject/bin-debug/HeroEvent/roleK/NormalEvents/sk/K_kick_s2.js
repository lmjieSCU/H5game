var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_kick_s2 = (function () {
    function K_kick_s2() {
    }
    K_kick_s2.addSprite5478 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, K_kick_s2.frame4, 8, K_kick_s2.frame8, 11, K_kick_s2.frame11, 19, K_kick_s2.frame19]);
        mc['own_role'] = own_role;
        return;
    };
    K_kick_s2.frame4 = function () {
        //_level0.k_snd.start();
        return;
    };
    K_kick_s2.frame11 = function (mc) {
        mc['own_role'].stop_move_X1();
    };
    K_kick_s2.frame8 = function (mc) {
        var a594 = K_a594.getInstance(mc['own_role']);
        var hitcheck = Hero_HitCheck.getInstance(mc);
        a594.Vx = 15;
        a594.flag = "";
        a594.target = "none";
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.6;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_kick_s2.frame19 = function (mc) {
        mc['own_role'].toStatus_switch("stand");
        return;
    };
    return K_kick_s2;
}());
__reflect(K_kick_s2.prototype, "K_kick_s2");
//# sourceMappingURL=K_kick_s2.js.map