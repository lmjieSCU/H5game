class Ryu_punch_l{

	public static addSprite20423(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Ryu_punch_l.frame2,3,Ryu_punch_l.frame3,6,Ryu_punch_l.frame6,]);
		return;
	}
    public static frame2(){
        //_level0.pl_snd.start();
    }

    public static frame3(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt1";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag="s2";
        hitxheck.end_status="";
        hitxheck.Vx=14;
        hitxheck.Vy=0;
        hitxheck.a=3;
        hitxheck.g=0;
        hitxheck.freezeTime2=2;
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
    }

    public static frame6(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
