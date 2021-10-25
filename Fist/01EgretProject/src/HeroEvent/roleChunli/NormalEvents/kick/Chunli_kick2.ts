class Chunli_kick2{
	public static addSprite14789(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Chunli_kick2.frame4,5,Chunli_kick2.frame5,17,Chunli_kick2.frame20]);
		return;
	}
    public static frame4(mc: zmovie.ZMovieClip) {
        //_level0.k_snd.start();
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=3;
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
        htcheck.d_rate=1;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=30;
        htcheck.a=3;
        htcheck.Vx=20;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;

        // soundArray = [];
        // soundArray[0] = "chunli_att_l1";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    }

    public static frame20(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
