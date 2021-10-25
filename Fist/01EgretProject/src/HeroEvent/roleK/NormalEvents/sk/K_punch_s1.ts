class K_punch_s1 {

  public static addSprite5345(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [5, K_punch_s1.frame5, 7, K_punch_s1.frame7, 22, K_punch_s1.frame22]);
    return;
  }

  public static frame5() {
    // _level0.p_snd.start();
    return;
  }
  public static frame7(mc: zmovie.ZMovieClip) {
    let hitcheck = Hero_HitCheck.getInstance(mc);
    hitcheck.hurtBack = "";
    hitcheck.hurtAway = "hurt3";
    hitcheck.flag = 1;
    hitcheck.end_status = "getup2";
    hitcheck.Vx = 25;
    hitcheck.Vy = 15;
    hitcheck.a = 0;
    hitcheck.g = 0;
    hitcheck.freezeTime2 = 0;
    hitcheck.freezeTime = 6;
    hitcheck.slowTime = 0;
    hitcheck.shake = 1;
    hitcheck.d_rate = 0.7;
    hitcheck.isObj = false;
    hitcheck.hitType = "hitFire0";
    hitcheck.hitEff = "";
    hitcheck.hitShinning = false;
    hitcheck.reCheck = true;
    hitcheck.checkTimes = 1;
    hitcheck.hitPos = "";
  }

  public static frame22(mc: zmovie.ZMovieClip) {
    let _parentRole = EventUtil.getRole_Parent(mc);
    if (_parentRole == null) {
      return;
    }
    _parentRole.toStatus_switch("stand");
    return;
  }


}