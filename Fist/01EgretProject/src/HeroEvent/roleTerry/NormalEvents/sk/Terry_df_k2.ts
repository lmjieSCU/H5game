class Terry_df_k2{
	public static addSprite9175(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Terry_df_k2.frame4,9,Terry_df_k2.frame9,19,Terry_df_k2.frame19]);
		return;
	}
    public static frame4(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=18;
        a6433.flag="";
        a6433.target="";
    }

    public static frame9(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=10;
        hitcheck.Vy=30;
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

    public static frame19(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    }

}