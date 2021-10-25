class terry_shanzi2{
	public static addSprite8083(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,terry_shanzi2.frame1,10,terry_shanzi2.frame10]);
		return;
	}
    public static frame1(mc:zmovie.ZMovieClip){
        mc.stop();
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=18;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="getup2";
        hitcheck.Vx=22;
        hitcheck.Vy=35;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=2;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame10(mc:zmovie.ZMovieClip){
        mc.stop();
       mc.parent.removeChild(mc);
    }
}