class Chunli_squatKick{
	public static addSprite14848(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Chunli_squatKick.frame3,4,Chunli_squatKick.frame4,16,Chunli_squatKick.frame16]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip) {
        //_level0.p_snd.start();
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=3;
        htcheck.isObj=false;
        htcheck.hitPos="down";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt5";
        htcheck.hurtBack="";
        htcheck.end_status="getup1";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=1;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=31;
        htcheck.a=0;
        htcheck.Vx=12;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;

        // soundArray = [];
        // soundArray[0] = "chunli_att_l2";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    }

    public static frame16(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

