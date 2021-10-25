var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_dbk = (function () {
    function K_sk_dbk() {
    }
    K_sk_dbk.addSprite5606 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, K_sk_dbk.frame5, 9, K_sk_dbk.frame9, 11, K_sk_dbk.frame11, 25, K_sk_dbk.frame25]);
        return;
    };
    K_sk_dbk.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 40;
        a917.Vy = 14;
        a917.Va = 0;
        a917.Vg = 3;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    };
    K_sk_dbk.frame9 = function () {
        // _level0.k_snd.start();
    };
    K_sk_dbk.frame11 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 40;
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
    K_sk_dbk.frame25 = function (mc) {
        mc.stop();
    };
    return K_sk_dbk;
}());
__reflect(K_sk_dbk.prototype, "K_sk_dbk");
//# sourceMappingURL=K_sk_dbk.js.map