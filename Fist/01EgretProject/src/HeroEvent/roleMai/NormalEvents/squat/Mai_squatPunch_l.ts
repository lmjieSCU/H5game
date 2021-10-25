class Mai_squatPunch_l{
	public static addSprite6720(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Mai_squatPunch_l.frame3,4,Mai_squatPunch_l.frame4,9,Mai_squatPunch_l.frame9]);
		return;
	}
	public static frame3(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        //_level0.pl_snd.start();
	}


	public static frame4(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack="hurt2";
        htcheck.hurtAway="hurt6";
        htcheck.flag="s2";
        htcheck.end_status="";
        htcheck.Vx=15;
        htcheck.Vy=0;
        htcheck.a=3;
        htcheck.g=0;
        htcheck.freezeTime2=1;
        htcheck.freezeTime=3;
        htcheck.slowTime=0;
        htcheck.shake=0;
        htcheck.d_rate=0.5;
        htcheck.isObj=false;
        htcheck.hitType="hitfire_l";
        htcheck.hitEff="";
        htcheck.hitShinning=false;
        htcheck.reCheck=true;
        htcheck.checkTimes=1;
        htcheck.hitPos="";
	}


	public static frame9(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}

