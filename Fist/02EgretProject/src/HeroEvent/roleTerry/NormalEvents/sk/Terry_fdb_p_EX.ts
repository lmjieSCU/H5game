class Terry_fdb_p_EX{
	public static addSprite8984(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Terry_fdb_p_EX.frame3,11,Terry_fdb_p_EX.frame11,13,Terry_fdb_p_EX.frame13,16,Terry_fdb_p_EX.frame16,27,Terry_fdb_p_EX.frame27]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=10;
        hitcheck.Vy=20;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.8;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame11(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=20;
        a6433.flag="";
        a6433.target="";
    }

    public static frame13(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=15;
        hitcheck.a=0;
        hitcheck.g=0;
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

    public static frame16(mc: zmovie.ZMovieClip){
        
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=15;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=4;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.8;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame27(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}