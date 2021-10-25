class Chunli_sk_bailietui_air{
	public static addSprite15057(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Chunli_sk_bailietui_air.frame1,5,Chunli_sk_bailietui_air.frame5,9,Chunli_sk_bailietui_air.frame9,13,Chunli_sk_bailietui_air.frame13,18,Chunli_sk_bailietui_air.frame18,26,Chunli_sk_bailietui_air.frame26]);
		return;
	}
    public static frame1(mc:zmovie.ZMovieClip){ 
		
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=0;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.25;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=30;
        htcheck.a=0;
        htcheck.Vx=10;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame5(mc:zmovie.ZMovieClip){
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=0;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.25;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=30;
        htcheck.a=0;
        htcheck.Vx=10;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame9(mc:zmovie.ZMovieClip){      
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=0;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.25;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=30;
        htcheck.a=0;
        htcheck.Vx=10;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame13(mc:zmovie.ZMovieClip){
		
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=0;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.25;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=30;
        htcheck.a=0;
        htcheck.Vx=10;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame18(mc:zmovie.ZMovieClip){
                
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=0;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.25;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=30;
        htcheck.a=0;
        htcheck.Vx=10;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame26(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
        _parentRole.toStatus_switch("stand");
	}
}
	