class Terry_df_k1{
	public static addSprite9156(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [5,Terry_df_k1.frame5,11,Terry_df_k1.frame11,22,Terry_df_k1.frame22]);
		return;
	}
    public static frame5(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=23;
        a6433.flag="";
        a6433.target="";
    }

    public static frame11(mc: zmovie.ZMovieClip){
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
        hitcheck.Vy=25;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=5;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
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