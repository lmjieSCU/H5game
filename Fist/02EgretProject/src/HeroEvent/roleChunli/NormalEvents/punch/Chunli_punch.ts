class Chunli_punch{
	public static addSprite14695(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Chunli_punch.frame1,3,Chunli_punch.frame3,5,Chunli_punch.frame5,15,Chunli_punch.frame18]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3563.getInstance(_parentRole).flag="punch2";
    }

    public static frame3(mc: zmovie.ZMovieClip) {
        //_level0.p_snd.start();
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=3;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=1.3;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
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

    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
