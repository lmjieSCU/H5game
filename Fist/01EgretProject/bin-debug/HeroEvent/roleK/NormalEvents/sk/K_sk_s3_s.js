var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_s3_s = (function () {
    function K_sk_s3_s() {
    }
    K_sk_s3_s.addSprite5807 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_sk_s3_s.frame1, 2, K_sk_s3_s.frame2, 8, K_sk_s3_s.frame8, 10, K_sk_s3_s.frame10, 12, K_sk_s3_s.frame12, 14, K_sk_s3_s.frame14, 23, K_sk_s3_s.frame23,]);
        mc["own_role"] = own_role;
        return;
    };
    K_sk_s3_s.frame1 = function (mc) {
        var a985 = K_a985.getInstance(mc["own_role"]);
        a985.s_type = "s1_s";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
        EventUtil.printMC(mc, "s3s_1");
    };
    K_sk_s3_s.frame2 = function (mc) {
        EventUtil.printMC(mc, "s3s_2");
        var a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = -15;
        a917.Vy = 35;
        a917.Va = 0;
        a917.Vg = 4.2;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land3";
        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_up";
    };
    K_sk_s3_s.frame8 = function () {
        //_level0.k_snd.start();
    };
    K_sk_s3_s.frame10 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 45;
        hitcheck.Vy = -45;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 0.8;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        // var pt = new Object();
        // pt.x = add_mc._x;
        // pt.y = add_mc._y;
        // this.localToGlobal(pt);
        K_a863.getInstance(mc["own_role"]).name = "k_fire9_s";
    };
    K_sk_s3_s.frame12 = function () { };
    K_sk_s3_s.frame14 = function () { };
    K_sk_s3_s.frame23 = function (mc) {
        mc.stop();
    };
    return K_sk_s3_s;
}());
__reflect(K_sk_s3_s.prototype, "K_sk_s3_s");
//# sourceMappingURL=K_sk_s3_s.js.map