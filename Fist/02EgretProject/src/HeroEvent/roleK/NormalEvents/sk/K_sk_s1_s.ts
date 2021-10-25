class K_sk_s1_s {
    public static DownChanged: boolean = false;
    public static addSprite5786(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_sk_s1_s.frame1, 3, K_sk_s1_s.frame3, 4, K_sk_s1_s.frame4, 42, K_sk_s1_s.frame42, 44, K_sk_s1_s.frame44, 45, K_sk_s1_s.frame45, 46, K_sk_s1_s.frame46, 47, K_sk_s1_s.frame47, 51, K_sk_s1_s.frame51, 52, K_sk_s1_s.frame52, 56, K_sk_s1_s.frame56, 57, K_sk_s1_s.frame57, 58, K_sk_s1_s.frame58, 60, K_sk_s1_s.frame60, 66, K_sk_s1_s.frame66, 72, K_sk_s1_s.frame72, 76, K_sk_s1_s.frame76, 92, K_sk_s1_s.frame92, 93, K_sk_s1_s.frame93, 95, K_sk_s1_s.frame95, 96, K_sk_s1_s.frame96, 97, K_sk_s1_s.frame97, 98, K_sk_s1_s.frame98, 102, K_sk_s1_s.frame102, 103, K_sk_s1_s.frame103, 107, K_sk_s1_s.frame107, 108, K_sk_s1_s.frame108, 109, K_sk_s1_s.frame109, 111, K_sk_s1_s.frame111, 117, K_sk_s1_s.frame117, 124, K_sk_s1_s.frame124, 127, K_sk_s1_s.frame127, 143, K_sk_s1_s.frame143, 151, K_sk_s1_s.frame151]);
        mc["own_role"] = own_role;
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {

        mc["own_role"].checkTouch_stop = true;
    }

    public static frame3(mc: zmovie.ZMovieClip) {

        let a985 = K_a985.getInstance(mc["own_role"]);
        a985.s_type = "s1_s";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        // var owner = this;
        // hold_mc.holdFunc = function()
        // {
        // };
        // hold_mc.releaseFunc = function()
        // {
        // if(owner._currentframe > 35)
        // {
        //     owner.gotoAndPlay("attack2");
        // }
        // else
        // {
        //     owner.gotoAndPlay("attack");
        // }
        // };
        // hold_mc.endFunc = function()
        // {
        // owner.gotoAndPlay("attack2");
        // };

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
        // if (K_sk_s1_s.DownChanged) {
        //     mc["own_role"].keyCtrl.isKeyDown = true;
        //     console.log("Frame4")
        // }
    }

    public static frame42(mc: zmovie.ZMovieClip) {

        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_speed1";
    }

    public static frame44(mc: zmovie.ZMovieClip) {

        let a5765 = K_a5765.getInstance(mc["own_role"]);
        a5765.shadow_name = "shadow7";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
        let a594 = K_a594.getInstance(mc["own_role"]);
        a594.flag = "";
        a594.Vx = 60;
        a594.target = "";
    }

    public static frame45(mc: zmovie.ZMovieClip) {

        K_a863.getInstance(mc["own_role"]).name = "eff_rush";
    }

    public static frame46(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 42;
        hitcheck.a = 3;
        hitcheck.g = 3;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 4;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "all";

    }

    public static frame47(mc: zmovie.ZMovieClip) {
        mc["own_role"].visible = false;
        FightMainRender.getInstance().Add(mc, K_sk_s1_s.onEnterFrame, [mc, mc["own_role"]])
    }

    public static onEnterFrame(mc: zmovie.ZMovieClip) {
        if (_level0.inPause) {
            return undefined;
        }
        if (mc["own_role"].onHit) {
            mc["own_role"].visible = true;
            FightMainRender.getInstance().Remove(mc, K_sk_s1_s.onEnterFrame)
        }
        else if (mc["own_role"].opp.onHit) {
            mc["own_role"].visible = true;
            FightMainRender.getInstance().Remove(mc, K_sk_s1_s.onEnterFrame)
        }
        if (mc["own_role"].status_3 == "stand") {
            mc["own_role"].visible = true;
            FightMainRender.getInstance().Remove(mc, K_sk_s1_s.onEnterFrame)
        }
    }
    public static frame51(mc: zmovie.ZMovieClip) {

        let a5765 = K_a5765.getInstance(mc["own_role"]);
        a5765.shadow_name = "shadow1";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    }

    public static frame52() { }

    public static frame56(mc: zmovie.ZMovieClip) {
        mc['own_role'].stop_move_X1();
        mc["own_role"].visible = true;
    }

    public static frame57(mc: zmovie.ZMovieClip) {

        let a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = 20;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    }

    public static frame58(mc: zmovie.ZMovieClip) {

        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    }

    public static frame60(mc: zmovie.ZMovieClip) {

        K_a5755.getInstance(mc["own_role"]).effName = "";
    }

    public static frame66(mc: zmovie.ZMovieClip) {

        K_a1227.getInstance(mc["own_role"]).nohitFrame = "nohit";
    }

    public static frame72(mc: zmovie.ZMovieClip) {

        let a985 = K_a985.getInstance(mc["own_role"]);
        a985.s_type = "s3";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    }

    public static frame76(mc: zmovie.ZMovieClip) {

        K_a863.getInstance(mc["own_role"]).name = "boom_redongMax";;
    }

    public static frame92(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }

    public static frame93(mc: zmovie.ZMovieClip) {

        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_black";
    }

    public static frame95(mc: zmovie.ZMovieClip) {

        let a594 = K_a594.getInstance(mc["own_role"]);
        a594.flag = "";
        a594.Vx = 60;
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

    public static frame96(mc: zmovie.ZMovieClip) {

        K_a863.getInstance(mc["own_role"]).name = "eff_rush";
    }

    public static frame97(mc: zmovie.ZMovieClip) {

        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 42;
        hitcheck.a = 3;
        hitcheck.g = 3;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 4;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "fire_m3";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame98(mc: zmovie.ZMovieClip) {

        FightMainRender.getInstance().Add(mc, K_sk_s1_s.onEnterFrame, [mc, mc["own_role"]])
    }

    public static frame102(mc: zmovie.ZMovieClip) {

        let a5765 = K_a5765.getInstance(mc["own_role"]);
        a5765.shadow_name = "shadow1";
        a5765.start_alpha = 70;
        a5765.end_alpha = 20;
        a5765.d_alpha = 4;
        a5765.add_interval = 2;
        a5765._rb = 0;
        a5765._gb = 0;
        a5765._bb = 170;
    }

    public static frame103() { }

    public static frame107(mc: zmovie.ZMovieClip) {
        mc['own_role'].stop_move_X1();
        mc["own_role"].visible = true;
    }

    public static frame108(mc: zmovie.ZMovieClip) {

        let a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = 20;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    }

    public static frame109(mc: zmovie.ZMovieClip) {

        mc["own_role"].checkTouch_stop = false;
        mc["own_role"].bodyTouch();
    }

    public static frame111(mc: zmovie.ZMovieClip) {

        K_a5755.getInstance(mc["own_role"]).effName = "";
    }

    public static frame117(mc: zmovie.ZMovieClip) {

        K_a1227.getInstance(mc["own_role"]).nohitFrame = "nohit";
    }

    public static frame124(mc: zmovie.ZMovieClip) {

        let a985 = K_a985.getInstance(mc["own_role"]);
        a985.s_type = "s3";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    }

    public static frame127(mc: zmovie.ZMovieClip) {

        K_a863.getInstance(mc["own_role"]).name = "boom_redongMax";
    }

    public static frame143(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }

    public static frame151(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }
}