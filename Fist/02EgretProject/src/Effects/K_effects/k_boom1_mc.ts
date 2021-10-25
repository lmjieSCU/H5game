class k_boom1_mc {

    public static addSprite4736(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, k_boom1_mc.frame1, 3, k_boom1_mc.frame3, 25, k_boom1_mc.frame25]);
        mc.addWaitingCallFun(mc, ['frame1Call', k_boom1_mc.frame1Call, [mc, own_role]]);
        return;
    }

    public static frame1Call(mc: zmovie.ZMovieClip,own_role: Role) {
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y - 170;
    }


    
    public static frame1(mc: zmovie.ZMovieClip) {
        mc.checkWaitingCallFun('frame1Call');
    }

    public static frame3(mc: zmovie.ZMovieClip) {
        let K_hitcheck = Hero_HitCheck.getInstance(mc);
        K_hitcheck.hurtBack = "";
        K_hitcheck.hurtAway = "hurt4";
        K_hitcheck.flag = 1;
        K_hitcheck.end_status = "getup2";
        K_hitcheck.Vx = -15;
        K_hitcheck.Vy = 45;
        K_hitcheck.a = 3;
        K_hitcheck.g = 0;
        K_hitcheck.freezeTime2 = 0;
        K_hitcheck.freezeTime = 8;
        K_hitcheck.slowTime = 0;
        K_hitcheck.shake = 3;
        K_hitcheck.d_rate = 1.5;
        K_hitcheck.isObj = true;
        K_hitcheck.hitType = "hitFire0";
        K_hitcheck.hitEff = "fire_m3";
        K_hitcheck.hitShinning = false;
        K_hitcheck.reCheck = true;
        K_hitcheck.checkTimes = 1;
        K_hitcheck.hitPos = "";
    }

    public static frame25(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}