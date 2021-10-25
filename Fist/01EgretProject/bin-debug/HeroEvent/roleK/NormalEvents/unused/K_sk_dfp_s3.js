var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_dfp_s3 = (function () {
    function K_sk_dfp_s3() {
    }
    K_sk_dfp_s3.addSprite5675 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, K_sk_dfp_s3.frame5, 7, K_sk_dfp_s3.frame7, 18, K_sk_dfp_s3.frame18]);
        mc["own_role"] = own_role;
        return;
    };
    K_sk_dfp_s3.frame5 = function (mc) {
        K_a863.getInstance(mc["own_role"]).name = "fire5";
    };
    K_sk_dfp_s3.frame7 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 7;
        hitcheck.Vy = 59;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.8;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m2";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_dfp_s3.frame18 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    return K_sk_dfp_s3;
}());
__reflect(K_sk_dfp_s3.prototype, "K_sk_dfp_s3");
//# sourceMappingURL=K_sk_dfp_s3.js.map