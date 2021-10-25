var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_dfk_hit = (function () {
    function K_sk_dfk_hit() {
    }
    K_sk_dfk_hit.addSprite5688 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_sk_dfk_hit.frame1, 4, K_sk_dfk_hit.frame4, 7, K_sk_dfk_hit.frame7, 13, K_sk_dfk_hit.frame13, 25, K_sk_dfk_hit.frame25]);
        mc['own_role'] = own_role;
        return;
    };
    K_sk_dfk_hit.frame1 = function (mc) {
        mc['own_role'].checkTouch_stop = true;
    };
    K_sk_dfk_hit.frame4 = function (mc) {
        var a594 = K_a594.getInstance(mc['own_role']);
        a594.Vx = 40;
        a594.flag = "";
        a594.target = "";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 27;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_dfk_hit.frame7 = function (mc) {
        mc['own_role'].stop_move_X1();
    };
    K_sk_dfk_hit.frame13 = function (mc) {
        mc['own_role'].checkTouch_stop = false;
        var a917 = K_a917.getInstance(mc['own_role']);
        a917.Vx = 25;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    };
    K_sk_dfk_hit.frame25 = function (mc) {
        mc['own_role'].toStatus_switch("stand");
    };
    return K_sk_dfk_hit;
}());
__reflect(K_sk_dfk_hit.prototype, "K_sk_dfk_hit");
//# sourceMappingURL=K_sk_dfk_hit.js.map