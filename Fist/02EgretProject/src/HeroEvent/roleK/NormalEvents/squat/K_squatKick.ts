class K_squatKick {

  public static addSprite5534(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [4, K_squatKick.frame4, 5, K_squatKick.frame5, 22, K_squatKick.frame22]);
    return;
  }




  public static frame4(mc: zmovie.ZMovieClip) {
    //_level0.k_snd.start();
  }

  public static frame5(mc: zmovie.ZMovieClip) {
    let hitcheck = Hero_HitCheck.getInstance(mc);
    hitcheck.hurtBack = "";
    hitcheck.hurtAway = "hurt5";
    hitcheck.flag = 1;
    hitcheck.end_status = "getup1";
    hitcheck.Vx = 12;
    hitcheck.Vy = 31;
    hitcheck.a = 0;
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
    hitcheck.hitPos = "down";
    return;
  }

  public static frame22(mc: zmovie.ZMovieClip) {
    let _parentRole = EventUtil.getRole_Parent(mc);
    if (_parentRole == null) {
      return;
    }
    _parentRole.toStatus_switch("stand");
  }

}