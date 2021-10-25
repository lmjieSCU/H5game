class Terry_db_k{


  public static addSprite8945(mc: zmovie.ZMovieClip, own_role: Role) {
    mc.addFrameScript(mc, [3,Terry_db_k.frame3,4,Terry_db_k.frame4,6,Terry_db_k.frame6,8,Terry_db_k.frame8,10,Terry_db_k.frame10,14,Terry_db_k.frame14,20,Terry_db_k.frame20]);
    return;
  }
    public static frame3(mc: zmovie.ZMovieClip){
         let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6617=Terry_a6617.getInstance(_parentRole);
        a6617.Vx=17;
        a6617.Vy=24;
        a6617.Va=0;
        a6617.Vg=4.8;
        a6617.Vx_min=0;
        a6617.posY2="";
        a6617.flag="";
        a6617.end_status="frame_end";
    }

    public static frame4(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=25;
        hitcheck.a=0;
        hitcheck.g=5;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=4;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame6(mc: zmovie.ZMovieClip){
        
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=28;
        hitcheck.a=3;
        hitcheck.g=5;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.3;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame8(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=28;
        hitcheck.a=3;
        hitcheck.g=5;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame10(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=28;
        hitcheck.a=3;
        hitcheck.g=5;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame14(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame20(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
} 