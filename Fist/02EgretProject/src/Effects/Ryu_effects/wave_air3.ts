class wave_air3{
	public static addSprite21299(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,wave_air3.frame1,23,wave_air3.frame23]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let hitcheck_obj=Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx=15;
        hitcheck_obj.obj_Vy=12;
        hitcheck_obj.obj_level=0;
        hitcheck_obj.hurtBack="hurt1";
        hitcheck_obj.hurtAway="hurt6";
        hitcheck_obj.flag=1;
        hitcheck_obj.end_status="";
        hitcheck_obj.Vx=20;
        hitcheck_obj.Vy=25;
        hitcheck_obj.a=3;
        hitcheck_obj.g=0;
        hitcheck_obj.freezeTime2=4;
        hitcheck_obj.freezeTime=2;
        hitcheck_obj.slowTime=0;
        hitcheck_obj.shake=0;
        hitcheck_obj.d_rate=1;
        hitcheck_obj.isObj=true;
        hitcheck_obj.hitType="hitFire_s1";
        hitcheck_obj.hitEff="";
        hitcheck_obj.hitShinning=false;
        hitcheck_obj.reCheck=true;
        hitcheck_obj.checkTimes=1;
        hitcheck_obj.hitPos="";
    }

    public static frame23(mc: zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
    }
}