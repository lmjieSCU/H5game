var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**ok */
var K_sk_sanduan_2 = (function () {
    function K_sk_sanduan_2() {
    }
    K_sk_sanduan_2.addSprite5843 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, K_sk_sanduan_2.frame4, 8, K_sk_sanduan_2.frame8, 10, K_sk_sanduan_2.frame10,
            14, K_sk_sanduan_2.frame14,
            17, K_sk_sanduan_2.frame17,
            22, K_sk_sanduan_2.frame22, 24, K_sk_sanduan_2.frame24]);
        return;
    };
    K_sk_sanduan_2.frame4 = function () {
        //_level0.k_snd.start();
    };
    K_sk_sanduan_2.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 13;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 1;
        hitcheck.freezeTime = 2;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 18;
        a917.Vy = 35;
        a917.Va = 0;
        a917.Vg = 4.5;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land2";
    };
    K_sk_sanduan_2.frame10 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 31;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_sanduan_2.frame14 = function () {
        // if(_parentRole instanceof K_AI || _parentRole instanceof Type2_K_AI){
        // _parentRole.CPU_check2();
        // }
    };
    K_sk_sanduan_2.frame17 = function (mc) {
        mc.stop();
    };
    K_sk_sanduan_2.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 40;
        hitcheck.Vy = -30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        var a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 45;
        a917.Vy = -25;
        a917.Va = 0;
        a917.Vg = 4;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land3";
    };
    K_sk_sanduan_2.frame24 = function (mc) {
        mc.stop();
    };
    return K_sk_sanduan_2;
}());
__reflect(K_sk_sanduan_2.prototype, "K_sk_sanduan_2");
//# sourceMappingURL=K_sk_sanduan_2.js.map