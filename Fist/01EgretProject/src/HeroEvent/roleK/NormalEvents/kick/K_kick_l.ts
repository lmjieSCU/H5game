class K_kick_l {
  public static addSprite5393(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [2, K_kick_l.frame2, 4, K_kick_l.frame4, 8, K_kick_l.frame10]);
    return;
  }

  public static frame2() {
    // _level0.pl_snd.start();
    return;
  }



  public static frame4(mc: zmovie.ZMovieClip) {
    let hitcheck = Hero_HitCheck.getInstance(mc);
    hitcheck.hurtBack = "hurt2";
    hitcheck.hurtAway = "hurt6";
    hitcheck.flag = "s2";
    hitcheck.end_status = "";
    hitcheck.Vx = 15;
    hitcheck.Vy = 0;
    hitcheck.a = 3;
    hitcheck.g = 0;
    hitcheck.freezeTime2 = 2;
    hitcheck.freezeTime = 4;
    hitcheck.slowTime = 0;
    hitcheck.shake = 0;
    hitcheck.d_rate = 0.5;
    hitcheck.isObj = false;
    hitcheck.hitType = "hitfire_l";
    hitcheck.hitEff = "";
    hitcheck.hitShinning = false;
    hitcheck.reCheck = true;
    hitcheck.checkTimes = 1;
    hitcheck.hitPos = "";
    return;
  }

  public static frame10(mc: zmovie.ZMovieClip) {
    let _parentRole = EventUtil.getRole_Parent(mc);
    if (_parentRole == null) {
      return;
    }
    _parentRole.toStatus_switch("stand");
  }

}