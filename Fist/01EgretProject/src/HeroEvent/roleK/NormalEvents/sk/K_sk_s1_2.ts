class K_sk_s1_2 {
    public static addSprite5856(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, K_sk_s1_2.frame3, 4, K_sk_s1_2.frame4, 42, K_sk_s1_2.frame42, 44, K_sk_s1_2.frame44, 45, K_sk_s1_2.frame45, 46, K_sk_s1_2.frame46, 57, K_sk_s1_2.frame57, 60, K_sk_s1_2.frame60, 68, K_sk_s1_2.frame68, 95, K_sk_s1_2.frame95, 96, K_sk_s1_2.frame96, 98, K_sk_s1_2.frame98, 99, K_sk_s1_2.frame99, 100, K_sk_s1_2.frame100, 111, K_sk_s1_2.frame111, 114, K_sk_s1_2.frame114, 122, K_sk_s1_2.frame122, 149, K_sk_s1_2.frame149, 150, K_sk_s1_2.frame150, 169, K_sk_s1_2.frame169]);
        mc["own_role"] = own_role;
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let a985 = K_a985.getInstance(mc["own_role"]);
        a985.s_type = "s1";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        let hold_mc = K_a5740.getInstance(mc["own_role"]);
        hold_mc.key = mc["own_role"]._punchButton;
        hold_mc.holdFunc = function () { };
        hold_mc.releaseFunc = function (mc: zmovie.ZMovieClip) {
            if (mc.getCurrFrame() > 35) {
                mc["own_role"].bodyMC.gotoAndStop("attack2");
            }
            else {
                mc["own_role"].bodyMC.gotoAndStop("attack");
            }
        };
        hold_mc.endFunc = function (mc: zmovie.ZMovieClip) {
            mc["own_role"].bodyMC.gotoAndStop("attack2");
        };
    }

    public static frame42(mc: zmovie.ZMovieClip) {
        mc["own_role"].checkTouch_stop = true;
        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_speed1";
    }

    public static frame44(mc: zmovie.ZMovieClip) {
        let a594 = K_a594.getInstance(mc["own_role"]);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";

        let a5765 = K_a5765.getInstance(mc["own_role"]);
        a5765.shadow_name = "shadow7";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    }

    public static frame45(mc: zmovie.ZMovieClip) {
        let a863 = K_a863.getInstance(mc["own_role"]).name = "k_fire_land";
    }

    public static frame46(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
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
        
    }

    public static frame57(mc: zmovie.ZMovieClip) {
        mc['own_role'].stop_move_X1();
        let a804 = K_a804.getInstance(mc["own_role"]);
        a804.status_1 = "hurt2";
        a804.flag = "s_catch";
        a804.hurt = true;
        a804.land = true;
        a804.downHit = false;
        a804.func = null;
        a804.posObj = "K_a825";
        K_a825.getInstance(mc["own_role"])._name = "K_a825";
    }

    public static frame60(mc: zmovie.ZMovieClip) {
        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    }

    public static frame68(mc: zmovie.ZMovieClip) {
        K_a1227.getInstance(mc["own_role"]).nohitFrame = "nohit";
    }

    public static frame95(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }

    public static frame96(mc: zmovie.ZMovieClip) {
        mc["own_role"].checkTouch_stop = true;
        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_speed1";
    }

    public static frame98(mc: zmovie.ZMovieClip) {
        let a594 = K_a594.getInstance(mc["own_role"]);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";
        let a5765 = K_a5765.getInstance(mc["own_role"]);
        a5765.shadow_name = "shadow7";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    }

    public static frame99(mc: zmovie.ZMovieClip) {
        let a863 = K_a863.getInstance(mc["own_role"]).name = "k_fire_land";
    }

    public static frame100(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
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
    }

    public static frame111(mc: zmovie.ZMovieClip) {
        let a804 = K_a804.getInstance(mc["own_role"]);
        a804.status_1 = "hurt2";
        a804.flag = "s_catch";
        a804.hurt = true;
        a804.land = true;
        a804.downHit = false;
        a804.func = null;
        a804.posObj = "K_a825";
        K_a825.getInstance(mc["own_role"])._name = "K_a825";
    }

    public static frame114(mc: zmovie.ZMovieClip) {
        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    }

    public static frame122(mc: zmovie.ZMovieClip) {
        K_a1227.getInstance(mc["own_role"]).nohitFrame = "nohit";
    }

    public static frame149(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }

    public static frame150(mc: zmovie.ZMovieClip) {
        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    }

    public static frame169(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }
}
