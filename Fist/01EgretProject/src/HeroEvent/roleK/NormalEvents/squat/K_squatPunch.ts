class K_squatPunch {

  public static addSprite5497(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [4, K_squatPunch.frame4, 7, K_squatPunch.frame7, 17, K_squatPunch.frame17]);
    return;
  }




  public static frame4(mc:zmovie.ZMovieClip) {
    //_level0.p_snd.start();
  }

  public static frame7(mc:zmovie.ZMovieClip) {
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
    hitcheck.freezeTime = 5;
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

  public static frame17(mc:zmovie.ZMovieClip) {
    let _parentRole = EventUtil.getRole_Parent(mc);
    if (_parentRole == null) {
       return;
    }
    _parentRole.toStatus_switch("squat");
  }

}