class K_sk_s1_2_s {
    public static DownChanged: boolean = false;
    public static addSprite5858(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, K_sk_s1_2_s.frame3, 4, K_sk_s1_2_s.frame4, 42, K_sk_s1_2_s.frame42, 44, K_sk_s1_2_s.frame44, 45, K_sk_s1_2_s.frame45, 46, K_sk_s1_2_s.frame46, 63, K_sk_s1_2_s.frame63, 70, K_sk_s1_2_s.frame70, 75, K_sk_s1_2_s.frame75, 76, K_sk_s1_2_s.frame76, 87, K_sk_s1_2_s.frame87, 98, K_sk_s1_2_s.frame98, 100, K_sk_s1_2_s.frame100, 119, K_sk_s1_2_s.frame119, 120, K_sk_s1_2_s.frame120, 122, K_sk_s1_2_s.frame122, 123, K_sk_s1_2_s.frame123, 124, K_sk_s1_2_s.frame124, 141, K_sk_s1_2_s.frame141, 148, K_sk_s1_2_s.frame148, 153, K_sk_s1_2_s.frame153, 154, K_sk_s1_2_s.frame154, 165, K_sk_s1_2_s.frame165, 176, K_sk_s1_2_s.frame176, 178, K_sk_s1_2_s.frame178, 197, K_sk_s1_2_s.frame197, 198, K_sk_s1_2_s.frame198, 217, K_sk_s1_2_s.frame217]);
        mc['own_role'] = own_role;
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let a985 = K_a985.getInstance(mc['own_role']);
        a985.s_type = "s1_s";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        let hold_mc = K_a5740.getInstance(mc['own_role']);
        hold_mc.key = mc['own_role']._punchButton;
        hold_mc.holdFunc = function () { };
        hold_mc.releaseFunc = function (mc: zmovie.ZMovieClip) {
            if (mc.getCurrFrame() > 35) {
                mc['own_role'].bodyMC.gotoAndStop("attack2");
            }
            else {
                mc['own_role'].bodyMC.gotoAndStop("attack");
            }
        };
        hold_mc.endFunc = function (mc: zmovie.ZMovieClip) {
            mc['own_role'].bodyMC.gotoAndStop("attack2");
        };
        // if (K_sk_s1_2_s.DownChanged) {
        //     mc['own_role'].keyCtrl.isKeyDown = true;
        //     console.log("Frame4")
        // }
    }

    public static frame42(mc: zmovie.ZMovieClip) {
        mc['own_role'].checkTouch_stop = true;
        //continueHit = true;
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_speed1";
    }

    public static frame44(mc: zmovie.ZMovieClip) {
        let a594 = K_a594.getInstance(mc['own_role']);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";

        let a5765 = K_a5765.getInstance(mc['own_role']);
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
        K_a863.getInstance(mc['own_role']).name = "k_fire_land";
    }

    public static frame46(mc: zmovie.ZMovieClip) {
        let HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt2";
        HitCheck.hurtAway = "hurt2";
        HitCheck.flag = 1;
        HitCheck.end_status = "getup2";
        HitCheck.Vx = 15;
        HitCheck.Vy = 30;
        HitCheck.a = 3;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 20;
        HitCheck.freezeTime = 3;
        HitCheck.slowTime = 0;
        HitCheck.shake = 1;
        HitCheck.d_rate = 0.5;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire0";
        HitCheck.hitEff = "k_hit_m4_s";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "";
        //mc['own_role'].stop_move_X1();
    }

    public static frame63(mc: zmovie.ZMovieClip) {
        K_a1227.getInstance(mc['own_role']).nohitFrame = "nohit";
    }

    public static frame70(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "k_lastFire2";
    }

    public static frame75(mc: zmovie.ZMovieClip) {
        K_a1227.getInstance(mc['own_role']).nohitFrame = "nohit";
        mc['own_role'].stop_move_X1();
    }

    public static frame76(mc: zmovie.ZMovieClip) {
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_black";
        mc['own_role'].checkTouch_stop = false;
        mc['own_role'].bodyTouch();
    }

    public static frame87() {
        //continueHit = false;
    }

    public static frame98(mc: zmovie.ZMovieClip) {
        let a985 = K_a985.getInstance(mc['own_role']);
        a985.s_type = "s3";
        a985.f_time = 20;
        a985.bgType = "0";
        a985.roleName = "";
        a985.faceName = "";
    }

    public static frame100(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "k_boom1_mc";
    }

    public static frame119(mc: zmovie.ZMovieClip) {
        mc['own_role'].toStatus_switch("stand");
    }

    public static frame120(mc: zmovie.ZMovieClip) {
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_speed1";
        mc['own_role'].checkTouch_stop = true;
        //continueHit = true;
    }

    public static frame122(mc: zmovie.ZMovieClip) {
        let a594 = K_a594.getInstance(mc['own_role']);
        a594.Vx = 60;
        a594.flag = "";
        a594.target = "";
        let a5765 = K_a5765.getInstance(mc['own_role']);
        a5765.shadow_name = "shadow7";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    }

    public static frame123(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "k_fire_land";
    }

    public static frame124(mc: zmovie.ZMovieClip) {
        let HitCheck = Hero_HitCheck.getInstance(mc);
        HitCheck.hurtBack = "hurt2";
        HitCheck.hurtAway = "hurt2";
        HitCheck.flag = 1;
        HitCheck.end_status = "getup2";
        HitCheck.Vx = 15;
        HitCheck.Vy = 30;
        HitCheck.a = 3;
        HitCheck.g = 0;
        HitCheck.freezeTime2 = 20;
        HitCheck.freezeTime = 3;
        HitCheck.slowTime = 0;
        HitCheck.shake = 1;
        HitCheck.d_rate = 0.5;
        HitCheck.isObj = false;
        HitCheck.hitType = "hitFire0";
        HitCheck.hitEff = "k_hit_m4_s";
        HitCheck.hitShinning = false;
        HitCheck.reCheck = true;
        HitCheck.checkTimes = 1;
        HitCheck.hitPos = "all";
        mc['own_role'].stop_move_X1();
    }

    public static frame141(mc: zmovie.ZMovieClip) {
        K_a1227.getInstance(mc['own_role']).nohitFrame = "nohit";
    }

    public static frame148(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "k_lastFire2";
    }

    public static frame153(mc: zmovie.ZMovieClip) {
        K_a1227.getInstance(mc['own_role']).nohitFrame = "nohit";
    }

    public static frame154(mc: zmovie.ZMovieClip) {
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_black";
        mc['own_role'].checkTouch_stop = false;
        mc['own_role'].bodyTouch();
    }

    public static frame165() {
        //continueHit = false;
    }

    public static frame176(mc: zmovie.ZMovieClip) {

        let a985 = K_a985.getInstance(mc['own_role']);
        a985.s_type = "s3";
        a985.f_time = 20;
        a985.bgType = "0";
        a985.roleName = "";
        a985.faceName = "";
    }

    public static frame178(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "k_boom1_mc";
    }

    public static frame197(mc: zmovie.ZMovieClip) {
        mc['own_role'].toStatus_switch("stand");
    }

    public static frame198(mc: zmovie.ZMovieClip) {
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_black";
        mc['own_role'].checkTouch_stop = false;
        mc['own_role'].bodyTouch();
    }

    public static frame217(mc: zmovie.ZMovieClip) {
        mc['own_role'].toStatus_switch("stand");
    }
}
