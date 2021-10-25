class K_kick {

  public static addSprite5416(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [1, K_kick.frame1, 5, K_kick.frame5, 6, K_kick.frame6, 16, K_kick.frame19]);
    return;
  }

  public static frame1(mc: zmovie.ZMovieClip) {
    let _parentRole = EventUtil.getRole_Parent(mc);
    if (_parentRole == null) {
      return;
    }
    K_a742.getInstance(_parentRole).flag = "kick2";
  }


  public static frame5() {
    // _level0.k_snd.start();
  }

  public static frame6(mc: zmovie.ZMovieClip) {
    let hitcheck = Hero_HitCheck.getInstance(mc);
    hitcheck.hurtBack = "hurt1";
    hitcheck.hurtAway = "hurt6";
    hitcheck.flag = 1;
    hitcheck.end_status = "";
    hitcheck.Vx = 23;
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

  public static frame19(mc: zmovie.ZMovieClip) {
    let _parentRole = EventUtil.getRole_Parent(mc);
    if (_parentRole == null) {
      return;
    }
    _parentRole.toStatus_switch("stand");
  }

}