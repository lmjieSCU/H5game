class Ryu_pitch{
	public static addSprite20598(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_pitch.frame1,22,Ryu_pitch.frame22,36,Ryu_pitch.frame36]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		let a20583=Ryu_a20583.getInstance(_parentRole);
		a20583.hurt=false;
		a20583.land=true;
		a20583.downHit=false;
		a20583.status_1="hurt2";
		a20583.flag="s3";
	}

    public static frame22(mc: zmovie.ZMovieClip){
		let hitxheck=Hero_HitCheck.getInstance(mc);
		hitxheck.hurtBack="";
		hitxheck.hurtAway="hurt4";
		hitxheck.flag=1;
		hitxheck.end_status="getup2";
		hitxheck.Vx=17;
		hitxheck.Vy=40;
		hitxheck.a=0;
		hitxheck.g=0;
		hitxheck.freezeTime2=0;
		hitxheck.freezeTime=5;
		hitxheck.slowTime=0;
		hitxheck.shake=1;
		hitxheck.d_rate=2;
		hitxheck.isObj=false;
		hitxheck.hitType="hitFire1";
		hitxheck.hitEff="";
		hitxheck.hitShinning=false;
		hitxheck.reCheck=true;
		hitxheck.checkTimes=1;
		hitxheck.hitPos="";
	}

    public static frame36(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		_parentRole.toStatus_switch("stand");
	}
}

