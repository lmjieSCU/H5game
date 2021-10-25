class Ryu_squatPunch_l{

	public static addSprite20548(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Ryu_squatPunch_l.frame3,6,Ryu_squatPunch_l.frame6]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt2";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag="s2";
        hitxheck.end_status="";
        hitxheck.Vx=15;
        hitxheck.Vy=0;
        hitxheck.a=3;
        hitxheck.g=0;
        hitxheck.freezeTime2=1;
        hitxheck.freezeTime=4;
        hitxheck.slowTime=0;
        hitxheck.shake=0;
        hitxheck.d_rate=0.5;
        hitxheck.isObj=false;
        hitxheck.hitType="hitfire_l";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="";
        //_level0.pl_snd.start();
    }

    public static frame6(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("squat");
    }
}
