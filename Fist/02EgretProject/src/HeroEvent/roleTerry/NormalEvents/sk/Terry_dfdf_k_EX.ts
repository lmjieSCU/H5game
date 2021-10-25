class Terry_dfdf_k_EX{
	public static addSprite9330(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Terry_dfdf_k_EX.frame3,8,Terry_dfdf_k_EX.frame8,9,Terry_dfdf_k_EX.frame9,24,Terry_dfdf_k_EX.frame24,51,Terry_dfdf_k_EX.frame51]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7078=Terry_a7078.getInstance(_parentRole);
        a7078.s_type="s1";
        a7078.f_time=20;
        a7078.bgType="1";
        a7078.roleName="Terry";
        a7078.faceName="";
    }

    public static frame8(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=40;
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
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=16;
        hitcheck.Vy=20;
        hitcheck.a=3;
        hitcheck.g=3;
        hitcheck.freezeTime2=10;
        hitcheck.freezeTime=10;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=1.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="";
        hitcheck.hitShinning=true;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame24(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi7";
    }

    public static frame51(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
       mc.stop();
        _parentRole.toStatus_switch("stand");
    }
}
