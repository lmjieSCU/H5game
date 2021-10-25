var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_sk_s1_2 = (function () {
    function K_sk_s1_2() {
    }
    K_sk_s1_2.addSprite5856 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, K_sk_s1_2.frame3, 4, K_sk_s1_2.frame4, 42, K_sk_s1_2.frame42, 44, K_sk_s1_2.frame44, 45, K_sk_s1_2.frame45, 46, K_sk_s1_2.frame46, 57, K_sk_s1_2.frame57, 60, K_sk_s1_2.frame60, 68, K_sk_s1_2.frame68, 95, K_sk_s1_2.frame95, 96, K_sk_s1_2.frame96, 98, K_sk_s1_2.frame98, 99, K_sk_s1_2.frame99, 100, K_sk_s1_2.frame100, 111, K_sk_s1_2.frame111, 114, K_sk_s1_2.frame114, 122, K_sk_s1_2.frame122, 149, K_sk_s1_2.frame149, 150, K_sk_s1_2.frame150, 169, K_sk_s1_2.frame169]);
        mc["own_role"] = own_role;
        return;
    };
    K_sk_s1_2.frame3 = function (mc) {
        var a985 = K_a985.getInstance(mc["own_role"]);
        a985.s_type = "s1";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    };
    K_sk_s1_2.frame4 = function (mc) {
        var hold_mc = K_a5740.getInstance(mc["own_role"]);
        hold_mc.key = mc["own_role"]._punchButton;
        hold_mc.holdFunc = function () { };
        hold_mc.releaseFunc = function (mc) {
            if (mc.getCurrFrame() > 35) {
                mc["own_role"].bodyMC.gotoAndStop("attack2");
            }
            else {
                mc["own_role"].bodyMC.gotoAndStop("attack");
            }
        };
        hold_mc.endFunc = function (mc) {
            mc["own_role"].bodyMC.gotoAndStop("attack2");
        };
    };
    K_sk_s1_2.frame42 = function (mc) {
        mc["own_role"].checkTouch_stop = true;
        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_speed1";
    };
    K_sk_s1_2.frame44 = function (mc) {
        var a594 = K_a594.getInstance(mc["own_role"]);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";
        var a5765 = K_a5765.getInstance(mc["own_role"]);
        a5765.shadow_name = "shadow7";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    };
    K_sk_s1_2.frame45 = function (mc) {
        var a863 = K_a863.getInstance(mc["own_role"]).name = "k_fire_land";
    };
    K_sk_s1_2.frame46 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 15;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 20;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "k_hit_m4";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_sk_s1_2.frame57 = function (mc) {
        mc['own_role'].stop_move_X1();
        var a804 = K_a804.getInstance(mc["own_role"]);
        a804.status_1 = "hurt2";
        a804.flag = "s_catch";
        a804.hurt = true;
        a804.land = true;
        a804.downHit = false;
        a804.func = null;
        a804.posObj = "K_a825";
        K_a825.getInstance(mc["own_role"])._name = "K_a825";
    };
    K_sk_s1_2.frame60 = function (mc) {
        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    };
    K_sk_s1_2.frame68 = function (mc) {
        K_a1227.getInstance(mc["own_role"]).nohitFrame = "nohit";
    };
    K_sk_s1_2.frame95 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    K_sk_s1_2.frame96 = function (mc) {
        mc["own_role"].checkTouch_stop = true;
        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_speed1";
    };
    K_sk_s1_2.frame98 = function (mc) {
        var a594 = K_a594.getInstance(mc["own_role"]);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";
        var a5765 = K_a5765.getInstance(mc["own_role"]);
        a5765.shadow_name = "shadow7";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    };
    K_sk_s1_2.frame99 = function (mc) {
        var a863 = K_a863.getInstance(mc["own_role"]).name = "k_fire_land";
    };
    K_sk_s1_2.frame100 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 15;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 20;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "k_hit_m4";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "all";
        mc['own_role'].stop_move_X1();
    };
    K_sk_s1_2.frame111 = function (mc) {
        var a804 = K_a804.getInstance(mc["own_role"]);
        a804.status_1 = "hurt2";
        a804.flag = "s_catch";
        a804.hurt = true;
        a804.land = true;
        a804.downHit = false;
        a804.func = null;
        a804.posObj = "K_a825";
        K_a825.getInstance(mc["own_role"])._name = "K_a825";
    };
    K_sk_s1_2.frame114 = function (mc) {
        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    };
    K_sk_s1_2.frame122 = function (mc) {
        K_a1227.getInstance(mc["own_role"]).nohitFrame = "nohit";
    };
    K_sk_s1_2.frame149 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    K_sk_s1_2.frame150 = function (mc) {
        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    };
    K_sk_s1_2.frame169 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    return K_sk_s1_2;
}());
__reflect(K_sk_s1_2.prototype, "K_sk_s1_2");
//# sourceMappingURL=K_sk_s1_2.js.map