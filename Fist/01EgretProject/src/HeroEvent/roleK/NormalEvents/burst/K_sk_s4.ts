class K_sk_s4 {

    public static addSprite5834(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_sk_s4.frame1, 11, K_sk_s4.frame11, 113, K_sk_s4.frame113, 12, K_sk_s4.frame12, 132, K_sk_s4.frame132,
            133, K_sk_s4.frame133, 134, K_sk_s4.frame134, 152, K_sk_s4.frame152, 153, K_sk_s4.frame153, 165, K_sk_s4.frame165, 172, K_sk_s4.frame172,
            18, K_sk_s4.frame18, 3, K_sk_s4.frame3, 34, K_sk_s4.frame34, 42, K_sk_s4.frame42, 5, K_sk_s4.frame5, 54, K_sk_s4.frame54, 6, K_sk_s4.frame6,
            66, K_sk_s4.frame66, 7, K_sk_s4.frame7, 72, K_sk_s4.frame72, 8, K_sk_s4.frame8, 88, K_sk_s4.frame88, 9, K_sk_s4.frame9, 94, K_sk_s4.frame94,
            95, K_sk_s4.frame95, 98, K_sk_s4.frame98, 103, K_sk_s4.frame103]);
        mc['own_role'] = own_role;
        return;
    }

    public static frame103(mc: zmovie.ZMovieClip) {
        mc['own_role'].stop_move_X1();
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc['own_role'].checkTouch_stop = true;
    }

    public static frame11(mc: zmovie.ZMovieClip) {
        if (mc['own_role'].onHit && (mc['own_role'].opp).status_3 == "hurt") {//击中
            mc['own_role'].bodyMC.gotoAndStop("hit2");
            mc.visible = true;
            FightMainRender.getInstance().Remove(mc['own_role'], K_sk_s4.onEnterFrame7);
        }
        else if (mc['own_role'].opp.status_3 != "hurt") {//未击中
            mc.visible = true;
            mc['own_role'].bodyMC.gotoAndStop("nohit");
            FightMainRender.getInstance().Remove(mc['own_role'], K_sk_s4.onEnterFrame7);
        }
        else if (mc['own_role'].onHit && mc['own_role'].opp.status_2 != "air") {
        }
    }

    public static frame113(mc: zmovie.ZMovieClip) {
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_black";
        if (mc['own_role'].opp.status_3 != "hurt") {
            mc.gotoAndStop("nohit");
            FightMainRender.getInstance().Remove(mc['own_role'], K_sk_s4.onEnterFrame7);
        }
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        K_a825.getInstance(mc['own_role'])._name = "K_a825";
        let a804 = K_a804.getInstance(mc['own_role']);
        a804.status_1 = "hurt2";
        a804.flag = "s_catch";
        a804.hurt = true;
        a804.land = false;
        a804.downHit = false;
        a804.func = null;
        a804.posObj = "K_a825";
    }

    public static frame132(mc: zmovie.ZMovieClip) {
        let a985 = K_a985.getInstance(mc['own_role']);
        a985.s_type = "s3";
        a985.f_time = 20;
        a985.bgType = "0";
        a985.roleName = "";
        a985.faceName = "";
    }

    public static frame133() {
        // continueHit = false;
    }

    public static frame134(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "k_boom1_mc";
    }

    public static frame152(mc: zmovie.ZMovieClip) {
        mc['own_role'].checkTouch_stop = false;
        mc['own_role'].bodyTouch();
        mc['own_role'].toStatus_switch("stand");
    }

    public static frame153(mc: zmovie.ZMovieClip) {
        mc.visible = true;
        let a917 = K_a917.getInstance(mc['own_role']);
        a917.Vx = 40;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
        K_a5755.getInstance(mc['own_role']).effName = "";
    }


    public static frame165(mc: zmovie.ZMovieClip) {
        mc['own_role'].checkTouch_stop = false;
        mc['own_role'].bodyTouch();
    }

    public static frame172(mc: zmovie.ZMovieClip) {
        mc['own_role'].toStatus_switch("stand");
    }

    public static frame18(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "hitCombo1";
    }

    public static frame3(mc: zmovie.ZMovieClip) {
        let a985 = K_a985.getInstance(mc['own_role']);
        a985.s_type = "s2";
        a985.f_time = 20;
        a985.bgType = "2";
        a985.roleName = "K";
        a985.faceName = "";
    }

    public static frame34(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 35;
        hitcheck.a = 2;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 1;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame42(mc: zmovie.ZMovieClip) {
        let a804 = K_a804.getInstance(mc['own_role']);
        a804.status_1 = "hurt2";
        a804.flag = "s_catch";
        a804.hurt = true;
        a804.land = true;
        a804.downHit = false;
        a804.func = null;
        a804.posObj = "K_a825";
        K_a825.getInstance(mc['own_role'])._name = "K_a825";
        K_a863.getInstance(mc['own_role']).name = "hitCombo1";
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        // continueHit = true;
        K_a5755.getInstance(mc['own_role']).effName = "bgEff_speed1";
    }

    public static frame54(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "hitCombo1";
    }

    public static frame6(mc: zmovie.ZMovieClip) {
        let a5765 = K_a5765.getInstance(mc['own_role']);
        a5765.shadow_name = "shadow6";
        a5765.start_alpha = 70;
        a5765.end_alpha = 30;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    }

    public static frame66(mc: zmovie.ZMovieClip) {
        let a804 = K_a804.getInstance(mc['own_role']);
        a804.status_1 = "hurt2";
        a804.flag = "s_catch";
        a804.hurt = true;
        a804.land = true;
        a804.downHit = false;
        a804.func = null;
        a804.posObj = "K_a825";
        K_a825.getInstance(mc['own_role'])._name = "K_a825";
    }

    public static onEnterFrame7(mc: zmovie.ZMovieClip) {
        if (_level0.inPause) {
            return undefined;
        }
        if (mc['own_role'].onHit) {
            mc.visible = true;
            FightMainRender.getInstance().Remove(mc['own_role'], K_sk_s4.onEnterFrame7);
        }
        if (mc['own_role'].status_3 == "stand" || mc['own_role'].status_3 == "hurt") {
            mc.visible = true;
            FightMainRender.getInstance().Remove(mc['own_role'], K_sk_s4.onEnterFrame7);
        }
    }

    public static frame7(mc: zmovie.ZMovieClip) {
        mc.stop();
        mc.visible = false;
        FightMainRender.getInstance().Add(mc['own_role'], K_sk_s4.onEnterFrame7, [mc]);
        K_a863.getInstance(mc['own_role']).name = "eff_rush";
        //
        let a1124 = K_a1124.getInstance(mc['own_role']);
        a1124.Vx = 50;
        a1124.Vy = 0;
        a1124.Va = 0;
        a1124.S = 500;
        a1124.dis = 0;
        a1124.attFrame = "hit";
        a1124.endFrame = "nohit";
        a1124.target = "stand";
        a1124.nohit_status = "";
    }

    public static frame72(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "hitCombo1";
    }

    public static frame8(mc: zmovie.ZMovieClip) {
        mc.prevFrame();
    }

    public static frame88(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 35;
        hitcheck.a = 2;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 7;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame9(mc: zmovie.ZMovieClip) {
        mc.visible = true;
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 4;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h2";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame94(mc: zmovie.ZMovieClip) {
        let a804 = K_a804.getInstance(mc['own_role']);
        a804.status_1 = "hurt2";
        a804.flag = "s_catch";
        a804.hurt = true;
        a804.land = true;
        a804.downHit = false;
        a804.func = null;
        a804.posObj = "K_a825";
        K_a825.getInstance(mc['own_role'])._name = "K_a825";
    }

    public static frame95(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc['own_role']).name = "hitCombo2";
    }

    public static frame98(mc: zmovie.ZMovieClip) {
        let a594 = K_a594.getInstance(mc['own_role']);
        a594.Vx = 40;
        a594.flag = "";
        a594.target = "";
    }

}