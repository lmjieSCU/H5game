class Chunli_squatKick_l{
	public static addSprite14859(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Chunli_squatKick_l.frame2,8,Chunli_squatKick_l.frame8]);
		return;
	}
    public static frame2(mc: zmovie.ZMovieClip) {
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=3;
        htcheck.isObj=false;
        htcheck.hitPos="down";
        htcheck.hitType="hitfire_l";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt2";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.5;
        htcheck.flag="s2";
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=3;
        htcheck.Vx=15;
        htcheck.freezeTime2=3;
        htcheck.shake=0;
        htcheck.reCheck=true;
        //_level0.pl_snd.start();
    }

    public static frame8(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

