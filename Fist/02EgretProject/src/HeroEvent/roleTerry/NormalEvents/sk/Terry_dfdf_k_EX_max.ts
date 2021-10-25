class Terry_dfdf_k_EX_max{
	public static addSprite9331(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Terry_dfdf_k_EX_max.frame3,7,Terry_dfdf_k_EX_max.frame7,8,Terry_dfdf_k_EX_max.frame8,9,Terry_dfdf_k_EX_max.frame9,15,Terry_dfdf_k_EX_max.frame15,16,Terry_dfdf_k_EX_max.frame16,24,Terry_dfdf_k_EX_max.frame24,47,Terry_dfdf_k_EX_max.frame47]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7078=Terry_a7078.getInstance(_parentRole);
        a7078.s_type="s1_s";
        a7078.f_time=20;
        a7078.bgType="1";
        a7078.roleName="Terry";
        a7078.faceName="";
    }

    public static frame7(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = true;
    }

    public static frame8(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=58;
        a6433.flag="";
        a6433.target="";
    }
    public static frame9(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi6";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=10;
        hitcheck.Vy=55;
        hitcheck.a=0;
        hitcheck.g=8;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=2.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="fire_m3";
        hitcheck.hitShinning=true;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        
    }
    public static frame15(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-12;
        hitcheck.Vy=55;
        hitcheck.a=1;
        hitcheck.g=8;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=2.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="fire_m3";
        hitcheck.hitShinning=true;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        
    }

    public static frame16(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=12;
        a6433.flag="";
        a6433.target="";
        _parentRole.bodyTouch();
    }

    public static frame24(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi8";
    }

    public static frame47(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    }
}
