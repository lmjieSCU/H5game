class K_sk_dfp_s3 {


    public static addSprite5675(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [5, K_sk_dfp_s3.frame5, 7, K_sk_dfp_s3.frame7, 18, K_sk_dfp_s3.frame18]);
        mc["own_role"] = own_role;
        return;
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc["own_role"]).name = "fire5";
    }

    public static frame7(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 7;
        hitcheck.Vy = 59;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 6;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.8;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m2";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }


    public static frame18(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }



}