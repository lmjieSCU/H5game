class Chunli_pitch2{
	public static addSprite14869(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Chunli_pitch2.frame1,9,Chunli_pitch2.frame9,12,Chunli_pitch2.frame12,15,Chunli_pitch2.frame15,20,Chunli_pitch2.frame20,26,Chunli_pitch2.frame26,32,Chunli_pitch2.frame32,38,Chunli_pitch2.frame38,48,Chunli_pitch2.frame48]);
		return;
	}
    public static frame1(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        let a14862=Chunli_a14862.getInstance(_parentRole);
        a14862.hurt=false;
        a14862.land=true;
        a14862.downHit=false;
        a14862.status_1="hurt2";
        a14862.flag="s_catch";
	}


	public static frame9(mc:zmovie.ZMovieClip){
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


	public static frame12(mc:zmovie.ZMovieClip){
		//_level0.p_snd.start();
	}


	public static frame15(mc:zmovie.ZMovieClip){
		
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
        htcheck.Vx=5;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame26(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
                
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


	public static frame32(mc:zmovie.ZMovieClip){
		
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


	public static frame38(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=10;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire_h";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt4";
        htcheck.hurtBack="";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=30;
        htcheck.a=0;
        htcheck.Vx=25;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
	}


	public static frame48(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}
	