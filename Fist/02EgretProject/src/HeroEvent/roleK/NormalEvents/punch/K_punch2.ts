class K_punch2 {

  public static addSprite5382(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [5, K_punch2.frame5, 8, K_punch2.frame8, 11, K_punch2.frame14]);
    return;
  }





  public static frame5(mc: zmovie.ZMovieClip) {
    // _level0.p_snd.start();
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
    hitcheck.freezeTime = 4;
    hitcheck.slowTime = 0;
    hitcheck.shake = 0;
    hitcheck.d_rate = 0.5;
    hitcheck.isObj = false;
    hitcheck.hitType = "hitFire1";
    hitcheck.hitEff = "";
    hitcheck.hitShinning = false;
    hitcheck.reCheck = true;
    hitcheck.checkTimes = 1;
    hitcheck.hitPos = "";
    return;
  }

  public static frame8(mc: zmovie.ZMovieClip) {
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
    hitcheck.freezeTime = 4;
    hitcheck.slowTime = 0;
    hitcheck.shake = 0;
    hitcheck.d_rate = 0.5;
    hitcheck.isObj = false;
    hitcheck.hitType = "hitFire1";
    hitcheck.hitEff = "";
    hitcheck.hitShinning = false;
    hitcheck.reCheck = true;
    hitcheck.checkTimes = 1;
    hitcheck.hitPos = "";
  }

  public static frame14(mc: zmovie.ZMovieClip) {
    let _parentRole = EventUtil.getRole_Parent(mc);
    if (_parentRole == null) {
      return;
    }
    _parentRole.toStatus_switch("stand");
  }

}