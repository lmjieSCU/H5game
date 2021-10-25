var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_dbk_2 = (function () {
    function K_sk_dbk_2() {
    }
    K_sk_dbk_2.addSprite5845 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, K_sk_dbk_2.frame5, 10, K_sk_dbk_2.frame10, 12, K_sk_dbk_2.frame12, 13, K_sk_dbk_2.frame13, 18, K_sk_dbk_2.frame18, 19, K_sk_dbk_2.frame19, 28, K_sk_dbk_2.frame28,]);
        return;
    };
    K_sk_dbk_2.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 40;
        a917.Vy = 17;
        a917.Va = 0;
        a917.Vg = 3;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    };
    K_sk_dbk_2.frame10 = function (mc) {
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
    K_sk_dbk_2.frame12 = function () {
        //_level0.k_snd.start();
    };
    K_sk_dbk_2.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 15;
        a917.Vy = 7;
        a917.Va = 0;
        a917.Vg = 4;
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
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_dbk_2.frame18 = function (mc) {
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
    K_sk_dbk_2.frame19 = function (mc) {
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
    K_sk_dbk_2.frame28 = function (mc) {
        mc.stop();
    };
    return K_sk_dbk_2;
}());
__reflect(K_sk_dbk_2.prototype, "K_sk_dbk_2");
//# sourceMappingURL=K_sk_dbk_2.js.map