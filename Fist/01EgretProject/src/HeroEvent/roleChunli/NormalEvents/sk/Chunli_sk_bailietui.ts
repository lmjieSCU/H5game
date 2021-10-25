class Chunli_sk_bailietui{
	public static addSprite15030(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [8,Chunli_sk_bailietui.frame8,11,Chunli_sk_bailietui.frame11,14,Chunli_sk_bailietui.frame14,17,Chunli_sk_bailietui.frame17,20,Chunli_sk_bailietui.frame20,23,Chunli_sk_bailietui.frame23,26,Chunli_sk_bailietui.frame26,35,Chunli_sk_bailietui.frame35]);
		return;
	}
	public static frame8(mc:zmovie.ZMovieClip){
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=1;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=0;
        htcheck.Vx=8;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame11(mc:zmovie.ZMovieClip){
		
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=1;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=0;
        htcheck.Vx=8;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame14(mc:zmovie.ZMovieClip){
		
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=1;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=0;
        htcheck.Vx=5;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame17(mc:zmovie.ZMovieClip){
                
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=1;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=0;
        htcheck.Vx=8;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame20(mc:zmovie.ZMovieClip){
		
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=1;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=0;
        htcheck.Vx=8;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame23(mc:zmovie.ZMovieClip){
		
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=1;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=0;
        htcheck.Vx=5;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame26(mc:zmovie.ZMovieClip){
		
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=1;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=0;
        htcheck.Vx=8;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame35(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
        _parentRole.toStatus_switch("stand");
	}
}
