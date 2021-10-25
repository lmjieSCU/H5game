class terry_shanzi3{
	public static addSprite7907(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,terry_shanzi3.frame3,18,terry_shanzi3.frame18,]);
		return;
	}
    public static frame3(mc:zmovie.ZMovieClip){
        let hitcheck_obj=Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx=0;
        hitcheck_obj.obj_Vy=0;
        hitcheck_obj.obj_level=0;
        hitcheck_obj.hurtBack="";
        hitcheck_obj.hurtAway="hurt3";
        hitcheck_obj.flag=1;
        hitcheck_obj.end_status="getup2";
        hitcheck_obj.Vx=10;
        hitcheck_obj.Vy=35;
        hitcheck_obj.a=0;
        hitcheck_obj.g=5;
        hitcheck_obj.freezeTime2=0;
        hitcheck_obj.freezeTime=3;
        hitcheck_obj.slowTime=0;
        hitcheck_obj.shake=0;
        hitcheck_obj.d_rate=1.5;
        hitcheck_obj.isObj=true;
        hitcheck_obj.hitType="hitFire1";
        hitcheck_obj.hitEff="";
        hitcheck_obj.hitShinning=false;
        hitcheck_obj.reCheck=true;
        hitcheck_obj.checkTimes=1;
        hitcheck_obj.hitPos="";
    }

    public static frame18(mc:zmovie.ZMovieClip){
        mc.stop();
        mc.parent.removeChild(mc);
    }
}