class Terry_f_p{

  public static addSprite8870(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [3,Terry_f_p.frame3,6,Terry_f_p.frame6,7,Terry_f_p.frame7,8,Terry_f_p.frame8,10,Terry_f_p.frame10,14,Terry_f_p.frame14,16,Terry_f_p.frame22]);
    return;
  }
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=10;
        a6433.flag="";
        a6433.target="";
    }

    public static frame6(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=8;
        a6433.flag="";
        a6433.target="";
    }

    public static frame7(mc: zmovie.ZMovieClip){
        
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=25;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=4;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.3;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="up";
    }

    public static frame8(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    }

    public static frame10(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=25;
        hitcheck.a=2;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=5;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.3;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="up";
    }

    public static frame14(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=-6;
        a6433.flag="";
        a6433.target="";
    }

    public static frame22(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    }

} 