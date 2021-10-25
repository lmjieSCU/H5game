var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_dbk_2_air = (function () {
    function K_sk_dbk_2_air() {
    }
    K_sk_dbk_2_air.addSprite5846 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, K_sk_dbk_2_air.frame2, 5, K_sk_dbk_2_air.frame5, 6, K_sk_dbk_2_air.frame6, 9, K_sk_dbk_2_air.frame9, 14, K_sk_dbk_2_air.frame14, 15, K_sk_dbk_2_air.frame15, 24, K_sk_dbk_2_air.frame24]);
        return;
    };
    K_sk_dbk_2_air.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 32;
        a917.Vy = 17;
        a917.Va = 0;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    };
    K_sk_dbk_2_air.frame5 = function () {
        // _level0.k_snd.start();
    };
    K_sk_dbk_2_air.frame6 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 17;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 2;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_dbk_2_air.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 15;
        a917.Vy = 5;
        a917.Va = 0;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 17;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 2;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_dbk_2_air.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 15;
        a917.Vy = 10;
        a917.Va = 0;
        a917.Vg = 4;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land3";
    };
    K_sk_dbk_2_air.frame15 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 3;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 25;
        hitcheck.Vy = 25;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        hitcheck.nohit_status = [];
        hitcheck.nohit_status[0] = "hurt4";
    };
    K_sk_dbk_2_air.frame24 = function (mc) {
        mc.stop();
    };
    return K_sk_dbk_2_air;
}());
__reflect(K_sk_dbk_2_air.prototype, "K_sk_dbk_2_air");
//# sourceMappingURL=K_sk_dbk_2_air.js.map