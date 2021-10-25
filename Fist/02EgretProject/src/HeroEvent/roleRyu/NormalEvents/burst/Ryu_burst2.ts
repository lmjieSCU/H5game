class Ryu_burst2{
	public static addSprite20395(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Ryu_burst2.frame3,5,Ryu_burst2.frame5]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		let hitxheck=Hero_HitCheck.getInstance(mc);
		hitxheck.hurtBack="";
		hitxheck.hurtAway="hurt3";
		hitxheck.flag=1;
		hitxheck.end_status="getup2";
		hitxheck.Vx=20;
		hitxheck.Vy=40;
		hitxheck.a=3;
		hitxheck.g=0;
		hitxheck.freezeTime2=0;
		hitxheck.freezeTime=3;
		hitxheck.slowTime=0;
		hitxheck.shake=0;
		hitxheck.d_rate=1;
		hitxheck.isObj=false;
		hitxheck.hitType="hitFire1";
		hitxheck.hitEff="";
		hitxheck.hitShinning=false;
		hitxheck.reCheck=true;
		hitxheck.checkTimes=1;
		hitxheck.hitPos="";
        Ryu_a20393.getInstance(_parentRole).s_type = "s_defend";
        _parentRole.powerBurst();
    }

    public static frame5(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

