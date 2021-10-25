class k_hit_m4_s{
	public static addSprite4744(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,k_hit_m4_s.frame1,2,k_hit_m4_s.frame2,17,k_hit_m4_s.frame17,20,k_hit_m4_s.frame20,23,k_hit_m4_s.frame23,26,k_hit_m4_s.frame26,29,k_hit_m4_s.frame29,32,k_hit_m4_s.frame32,35,k_hit_m4_s.frame35,41,k_hit_m4_s.frame41]);
		mc["own_role"]=own_role;
        return;
	}
    public static frame1(mc:zmovie.ZMovieClip){
        mc.visible = false;
    }

    public static frame2(mc:zmovie.ZMovieClip){
        mc.visible = true;
    }

    public static frame17(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=3;
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
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        mc.x = mc["own_role"].opp.x;
        mc.y = mc["own_role"].y - 70;
    }

    public static frame20(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=2;
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
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame23(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=2;
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
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame26(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=2;
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
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        
    }

    public static frame29(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=2;
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
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame32(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=2;
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
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame35(mc:zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=10;
        hitcheck.Vy=40;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=30;
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
    }

    public static frame41(mc:zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
    }
}
