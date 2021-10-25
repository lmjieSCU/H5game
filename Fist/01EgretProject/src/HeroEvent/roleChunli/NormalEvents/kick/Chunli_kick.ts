class Chunli_kick{
	public static addSprite14764(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Chunli_kick.frame1,2,Chunli_kick.frame2,4,Chunli_kick.frame4,7,Chunli_kick.frame7,17,Chunli_kick.frame20]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3563.getInstance(_parentRole).flag = "kick2";
    }
     

    public static frame2(mc: zmovie.ZMovieClip) {
        // soundArray = [];
        // soundArray[0] = "chunli_att_l1";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        //_level0.k_snd.start();
    }

    public static frame7(mc: zmovie.ZMovieClip) {
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=6;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt2";
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
    }

    public static frame20(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
