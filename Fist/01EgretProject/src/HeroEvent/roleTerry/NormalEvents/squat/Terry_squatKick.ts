class Terry_squatKick {


  public static addSprite8768(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [3,Terry_squatKick.frame3,8,Terry_squatKick.frame8,21,Terry_squatKick.frame21]);
    return;
  }
  public static frame3(){
    //_level0.p_snd.start();
  }

  public static frame8(mc: zmovie.ZMovieClip){
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt5";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup1";
        hitcheck.Vx = 7;
        hitcheck.Vy = 31;
        hitcheck.a = 0;
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
        hitcheck.hitPos = "down";
  }

  public static frame21(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
  }

}