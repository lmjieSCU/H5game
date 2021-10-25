class K_kick_s2 {

  public static addSprite5478(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [4, K_kick_s2.frame4, 8, K_kick_s2.frame8, 11, K_kick_s2.frame11, 19, K_kick_s2.frame19]);
    mc['own_role'] = own_role;
    return;
  }

  public static frame4() {
    //_level0.k_snd.start();
    return;
  }

  public static frame11(mc: zmovie.ZMovieClip) {
    mc['own_role'].stop_move_X1();
  }


  public static frame8(mc: zmovie.ZMovieClip) {
    let a594 = K_a594.getInstance(mc['own_role']);
    let hitcheck = Hero_HitCheck.getInstance(mc);
    a594.Vx = 15;
    a594.flag = "";
    a594.target = "none";
    hitcheck.hurtBack = "hurt1";
    hitcheck.hurtAway = "hurt6";
    hitcheck.flag = 1;
    hitcheck.end_status = "";
    hitcheck.Vx = 10;
    hitcheck.Vy = 0;
    hitcheck.a = 3;
    hitcheck.g = 0;
    hitcheck.freezeTime2 = 0;
    hitcheck.freezeTime = 4;
    hitcheck.slowTime = 0;
    hitcheck.shake = 0;
    hitcheck.d_rate = 0.6;
    hitcheck.isObj = false;
    hitcheck.hitType = "hitFire1";
    hitcheck.hitEff = "";
    hitcheck.hitShinning = false;
    hitcheck.reCheck = true;
    hitcheck.checkTimes = 1;
    hitcheck.hitPos = "";
  }

  public static frame19(mc: zmovie.ZMovieClip) {
    mc['own_role'].toStatus_switch("stand");
    return;
  }


}