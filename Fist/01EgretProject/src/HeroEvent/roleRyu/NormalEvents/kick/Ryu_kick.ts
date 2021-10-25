class Ryu_kick{
	public static addSprite20490(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_kick.frame1,5,Ryu_kick.frame5,6,Ryu_kick.frame6,15,Ryu_kick.frame17]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20424.getInstance(_parentRole).flag = "kick2";
    }

    public static frame5(){
        //_level0.k_snd.start();
    }

    public static frame6(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt1";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag=1;
        hitxheck.end_status="";
        hitxheck.Vx=23;
        hitxheck.Vy=0;
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
    }

    public static frame17(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
