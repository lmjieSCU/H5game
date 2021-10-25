class Terry_dfdf_k {
    public static addSprite9266(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3,Terry_dfdf_k.frame3,4,Terry_dfdf_k.frame4,6,Terry_dfdf_k.frame6,7,Terry_dfdf_k.frame7,9,Terry_dfdf_k.frame9,13,Terry_dfdf_k.frame13,14,Terry_dfdf_k.frame14,15,Terry_dfdf_k.frame15,18,Terry_dfdf_k.frame18,29,Terry_dfdf_k.frame29,30,Terry_dfdf_k.frame30,34,Terry_dfdf_k.frame34,54,Terry_dfdf_k.frame54]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7978 = Terry_a7078.getInstance(_parentRole);
        a7978.s_type = "s1";
        a7978.f_time = 20;
        a7978.bgType = "1";
        a7978.roleName = "Terry";
        a7978.faceName = "";
    }

    public static frame4(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2,"all");
    }

    public static frame6(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=45;
        a6433.flag="";
        a6433.target="";
    }


    public static frame7(mc: zmovie.ZMovieClip){
          
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=5;
        hitcheck.Vy=0;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=5;
        hitcheck.freezeTime=15;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=1;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame9(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    }

    public static frame13(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=25;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=5;
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
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6617=Terry_a6617.getInstance(_parentRole);
        a6617.Vx=15;
        a6617.Vy=35;
        a6617.Va=0;
        a6617.Vg=0;
        a6617.Vx_min=0;
        a6617.posY2="";
        a6617.flag="";
        a6617.end_status="frame_end";
    }

    public static frame15(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=13;
        hitcheck.Vy=25;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=5;
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

    public static frame18(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=13;
        hitcheck.Vy=25;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=5;
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

    public static frame29(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame30(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi4";
    }

    public static frame34(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=42;
        hitcheck.a=3;
        hitcheck.g=5;
        hitcheck.freezeTime2=1;
        hitcheck.freezeTime=6;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=2;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame54(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    }
}