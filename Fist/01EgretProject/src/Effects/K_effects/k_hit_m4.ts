class k_hit_m4{
	public static addSprite4742(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,k_hit_m4.frame1,2,k_hit_m4.frame2,21,k_hit_m4.frame21,24,k_hit_m4.frame24,27,k_hit_m4.frame27,30,k_hit_m4.frame30,33,k_hit_m4.frame33,36,k_hit_m4.frame36,40,k_hit_m4.frame40,46,k_hit_m4.frame46]);
		mc["own_role"]=own_role;
        return;
	}
    public static frame1(mc:zmovie.ZMovieClip){
        mc.visible = false;
    }

    public static frame2(mc:zmovie.ZMovieClip){
        mc.visible = true;
    }

    public static frame21(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="fire_m1";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        mc.x = mc["own_role"].opp.x;
        mc.y = mc["own_role"].y - 70;
    }

    public static frame24(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="fire_m1";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame27(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="fire_m1";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame30(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="fire_m1";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame33(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="fire_m1";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame36(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="fire_m1";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame40(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-10;
        hitcheck.Vy=40;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=12;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="fire_m3";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        ///mc.parent.removeChild(mc);
    }

    public static frame46(mc:zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
    }
}
