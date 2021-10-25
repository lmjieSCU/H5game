class Terry_jump_b {

  public static addSprite8554(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [3,Terry_jump_b.frame3,20,Terry_jump_b.frame20,21,Terry_jump_b.frame21,24,Terry_jump_b.frame24,32,Terry_jump_b.frame32,36,Terry_jump_b.frame36,41,Terry_jump_b.frame41,44,Terry_jump_b.frame44,51,Terry_jump_b.frame51,54,Terry_jump_b.frame54,64,Terry_jump_b.frame64,69,Terry_jump_b.frame69,76,Terry_jump_b.frame76]);
    return;
  }

    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy,_parentRole.Vx);
        //_level0.k_snd.start();
    }

    public static frame20(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame21(mc: zmovie.ZMovieClip){}

    public static frame24(mc: zmovie.ZMovieClip){
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 17;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "up";
        return;
    }

    public static frame32(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame36(mc: zmovie.ZMovieClip){
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 17;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "up";
        return;
    }

    public static frame41(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame44(mc: zmovie.ZMovieClip){
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = "s2";
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 4;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitfire_l";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "up";
        return;
    }

    public static frame51(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame54(mc: zmovie.ZMovieClip){
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = "s2";
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 4;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 3;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitfire_l";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "up";
        return;
    }

    public static frame64(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame69(mc: zmovie.ZMovieClip){
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = "s2";
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 17;
        hitcheck.Vy = 30;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1.7;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        return;
    }

    public static frame76(mc: zmovie.ZMovieClip){
        mc.stop();
    }

}