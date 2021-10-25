class Terry_dbdf_p_max {


    public static addSprite9238(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3,Terry_dbdf_p_max.frame3,11,Terry_dbdf_p_max.frame11,14,Terry_dbdf_p_max.frame14,19,Terry_dbdf_p_max.frame19,24,Terry_dbdf_p_max.frame24,30,Terry_dbdf_p_max.frame30,34,Terry_dbdf_p_max.frame34,61,Terry_dbdf_p_max.frame61]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7078=Terry_a7078.getInstance(_parentRole);
        a7078.bgType="1";
        a7078.f_time=20;
        a7078.roleName="Terry";
        a7078.s_type="s1_s";
        a7078.faceName="";
    }

    public static frame11(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi4";
    }

    public static frame14(mc: zmovie.ZMovieClip){
        
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=0;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="getup2";
        hitcheck.Vx=20;
        hitcheck.Vy=35;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=2;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        hitcheck.nohit_status=[];
    }

    public static frame19(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi4";
    }

    public static frame24(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=0;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="getup2";
        hitcheck.Vx=20;
        hitcheck.Vy=28;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=2;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        hitcheck.nohit_status=[];
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
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=0;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="getup2";
        hitcheck.Vx=20;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=8;
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
        hitcheck.nohit_status=[];
    }

    public static frame61(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
       _parentRole.toStatus_switch("stand");
    }
}