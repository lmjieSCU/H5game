class K_sk_dfk_hit {

    public static addSprite5688(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_sk_dfk_hit.frame1, 4, K_sk_dfk_hit.frame4, 7, K_sk_dfk_hit.frame7, 13, K_sk_dfk_hit.frame13, 25, K_sk_dfk_hit.frame25]);
        mc['own_role'] = own_role;
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc['own_role'].checkTouch_stop = true;
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        let a594 = K_a594.getInstance(mc['own_role']);
        a594.Vx = 40;
        a594.flag = "";
        a594.target = "";
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 27;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        mc['own_role'].stop_move_X1();
    }


    public static frame13(mc: zmovie.ZMovieClip) {
        mc['own_role'].checkTouch_stop = false;
        let a917 = K_a917.getInstance(mc['own_role']);
        a917.Vx = 25;
        a917.Vy = 0;
        a917.Va = 3;
        a917.Vg = 0;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    }


    public static frame25(mc: zmovie.ZMovieClip) {
        mc['own_role'].toStatus_switch("stand");
    }

}