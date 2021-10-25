class Ryu_punch_s{
	public static addSprite20416(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Ryu_punch_s.frame4,7,Ryu_punch_s.frame7,10,Ryu_punch_s.frame10,21,Ryu_punch_s.frame21]);
		return;
	}
    public static frame4(mc: zmovie.ZMovieClip){
		//_level0.pl_snd.start();
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		let a20401=Ryu_a20401.getInstance(_parentRole);
		a20401.Vx=21;
		a20401.flag="";
		a20401.target="";
	}

    public static frame7(mc: zmovie.ZMovieClip){
		let hitxheck=Hero_HitCheck.getInstance(mc);
		hitxheck.hurtBack="hurt2";
		hitxheck.hurtAway="hurt6";
		hitxheck.flag=1;
		hitxheck.end_status="";
		hitxheck.Vx=10;
		hitxheck.Vy=0;
		hitxheck.a=3;
		hitxheck.g=0;
		hitxheck.freezeTime2=0;
		hitxheck.freezeTime=3;
		hitxheck.slowTime=0;
		hitxheck.shake=0;
		hitxheck.d_rate=0.2;
		hitxheck.isObj=false;
		hitxheck.hitType="hitFire1";
		hitxheck.hitEff="";
		hitxheck.hitShinning=false;
		hitxheck.reCheck=true;
		hitxheck.checkTimes=1;
		hitxheck.hitPos="up";
	}

    public static frame10(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		_parentRole.stop_move_X1();
		let hitxheck=Hero_HitCheck.getInstance(mc);
		hitxheck.hurtBack="hurt2";
		hitxheck.hurtAway="hurt6";
		hitxheck.flag=1;
		hitxheck.end_status="";
		hitxheck.Vx=18;
		hitxheck.Vy=0;
		hitxheck.a=3;
		hitxheck.g=0;
		hitxheck.freezeTime2=0;
		hitxheck.freezeTime=5;
		hitxheck.slowTime=0;
		hitxheck.shake=0;
		hitxheck.d_rate=0.7;
		hitxheck.isObj=false;
		hitxheck.hitType="hitFire1";
		hitxheck.hitEff="";
		hitxheck.hitShinning=false;
		hitxheck.reCheck=true;
		hitxheck.checkTimes=1;
		hitxheck.hitPos="up";

	}

    public static frame21(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		_parentRole.toStatus_switch("stand");
	}
}

