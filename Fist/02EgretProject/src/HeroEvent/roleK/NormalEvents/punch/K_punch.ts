class K_punch {

  public static addSprite5367(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [1, K_punch.frame1, 4, K_punch.frame4, 5, K_punch.frame5, 19, K_punch.frame22]);
    mc["own_role"] = own_role;
    return;
  }

  public static frame1(mc: zmovie.ZMovieClip) {
    K_a742.getInstance(mc['own_role']).flag = "punch2";
  }


  public static frame4() {
    //_level0.p_snd.start();
  }

  public static frame5(mc: zmovie.ZMovieClip) {
    let hitcheck = Hero_HitCheck.getInstance(mc);
    hitcheck.hurtBack = "hurt1";
    hitcheck.hurtAway = "hurt6";
    hitcheck.flag = 1;
    hitcheck.end_status = "";
    hitcheck.Vx = 20;
    hitcheck.Vy = 0;
    hitcheck.a = 3;
    hitcheck.g = 0;
    hitcheck.freezeTime2 = 0;
    hitcheck.freezeTime = 3;
    hitcheck.slowTime = 0;
    hitcheck.shake = 0;
    hitcheck.d_rate = 1;
    hitcheck.isObj = false;
    hitcheck.hitType = "hitFire1";
    hitcheck.hitEff = "";
    hitcheck.hitShinning = false;
    hitcheck.reCheck = true;
    hitcheck.checkTimes = 1;
    hitcheck.hitPos = "";
    return;
  }

  public static frame22(mc: zmovie.ZMovieClip) {
    mc.stop();
    mc["own_role"].toStatus_switch("stand");
  }

}