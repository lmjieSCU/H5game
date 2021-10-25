var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_punch = (function () {
    function K_punch() {
    }
    K_punch.addSprite5367 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_punch.frame1, 4, K_punch.frame4, 5, K_punch.frame5, 19, K_punch.frame22]);
        mc["own_role"] = own_role;
        return;
    };
    K_punch.frame1 = function (mc) {
        K_a742.getInstance(mc['own_role']).flag = "punch2";
    };
    K_punch.frame4 = function () {
        //_level0.p_snd.start();
    };
    K_punch.frame5 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        return;
    };
    K_punch.frame22 = function (mc) {
        mc.stop();
        mc["own_role"].toStatus_switch("stand");
    };
    return K_punch;
}());
__reflect(K_punch.prototype, "K_punch");
//# sourceMappingURL=K_punch.js.map