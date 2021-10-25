class K_sk_s3 {
    public static addSprite5806(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_sk_s3.frame1, 2, K_sk_s3.frame2, 7, K_sk_s3.frame7, 9, K_sk_s3.frame9,
            11, K_sk_s3.frame11, 13, K_sk_s3.frame13, 22, K_sk_s3.frame22]);
        mc["own_role"] = own_role;
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        EventUtil.printMC(mc,"s3_1");
        let a985 = K_a985.getInstance(mc["own_role"]);
        a985.s_type = "s1";
        a985.f_time = 20;
        a985.bgType = "1";
        a985.roleName = "K";
        a985.faceName = "";
    }

    public static frame2(mc: zmovie.ZMovieClip) {
        EventUtil.printMC(mc, "s3_2");
        let a917 = K_a917.getInstance(mc["own_role"]);
        a917.Vx = -15;
        a917.Vy = 35;
        a917.Va = 0;
        a917.Vg = 4.2;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "land3";
        K_a5755.getInstance(mc["own_role"]).effName = "bgEff_black";
    }

    public static frame7() {
        // _level0.k_snd.start();
    }

    public static frame9(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc["own_role"]).name = "fire9";
        let hitcheck = Hero_HitCheck.getInstance(mc);
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
    }


    public static frame11() {
    }


    public static frame13() {
    }




    public static frame22(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

}