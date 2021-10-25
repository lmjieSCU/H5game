class Chunli_kick_l{
	public static addSprite14741(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Chunli_kick_l.frame3,4,Chunli_kick_l.frame4,9,Chunli_kick_l.frame12]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip) {
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=2;
        htcheck.isObj=false;
        htcheck.hitPos="";
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
        htcheck.freezeTime2=2;
        htcheck.shake=0;
        htcheck.reCheck=true;
        // soundArray = [];
        // soundArray[0] = "chunli_att_l1";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        //_level0.kl_snd.start();
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

