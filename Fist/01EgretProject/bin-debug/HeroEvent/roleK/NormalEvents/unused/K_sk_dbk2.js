var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**废用 */
var K_sk_dbk2 = (function () {
    function K_sk_dbk2() {
    }
    K_sk_dbk2.addSprite5608 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, K_sk_dbk2.frame2, 7, K_sk_dbk2.frame7, 8, K_sk_dbk2.frame8, 25, K_sk_dbk2.frame25]);
        mc["own_role"] = own_role;
        return;
    };
    K_sk_dbk2.frame2 = function (mc) {
        var a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = 32;
        a917.Vy = 17;
        a917.Va = 0;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    };
    K_sk_dbk2.frame7 = function (mc) {
        // _level0.k_snd.start();
    };
    K_sk_dbk2.frame8 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 45;
        hitcheck.Vy = 40;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_dbk2.frame25 = function (mc) {
        mc.stop();
    };
    return K_sk_dbk2;
}());
__reflect(K_sk_dbk2.prototype, "K_sk_dbk2");
//# sourceMappingURL=K_sk_dbk2.js.map