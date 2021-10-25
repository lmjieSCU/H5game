class Chunli_burst2{
	public static addSprite14656(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Chunli_burst2.frame4,7,Chunli_burst2.frame7]);
		return;
	}
    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=3;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="";
        htcheck.end_status="getup2";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=1;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=40;
        htcheck.a=3;
        htcheck.Vx=20;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
        _parentRole.powerBurst();
        Chunli_a3555.getInstance(_parentRole).s_type="s_defend"
    }

    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
