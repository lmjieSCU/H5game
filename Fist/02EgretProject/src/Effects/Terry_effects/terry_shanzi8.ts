class terry_shanzi8{
	public static addSprite8006(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,terry_shanzi8.frame1,3,terry_shanzi8.frame3,5,terry_shanzi8.frame5,7,terry_shanzi8.frame7,9,terry_shanzi8.frame9,21,terry_shanzi8.frame21]);
		return;
	}
    public static frame1(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=0;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-18;
        hitcheck.Vy=20;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame3(mc:zmovie.ZMovieClip){
        
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=0;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-18;
        hitcheck.Vy=20;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame5(mc:zmovie.ZMovieClip){
        
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=0;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-22;
        hitcheck.Vy=25;
        hitcheck.a=4;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame7(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=0;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-25;
        hitcheck.Vy=28;
        hitcheck.a=4;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame9(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck_obj.getInstance(mc);
        hitcheck.obj_Vx=0;
        hitcheck.obj_Vy=0;
        hitcheck.obj_level=0;
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-28;
        hitcheck.Vy=30;
        hitcheck.a=5;
        hitcheck.g=3;
        hitcheck.freezeTime2=15;
        hitcheck.freezeTime=5;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1.2;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame21(mc:zmovie.ZMovieClip){
        mc.stop();
        mc.parent.removeChild(mc);
    }
}

