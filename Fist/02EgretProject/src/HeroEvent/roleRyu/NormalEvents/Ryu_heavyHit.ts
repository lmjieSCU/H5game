class Ryu_heavyHit{
	public static addSprite20599(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_heavyHit.frame1,7,Ryu_heavyHit.frame7,9,Ryu_heavyHit.frame9,23,Ryu_heavyHit.frame23]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(1,"up");
    }

    public static frame7(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    }

    public static frame9(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="";
        hitxheck.hurtAway="hurt4";
        hitxheck.flag=1;
        hitxheck.end_status="getup2";
        hitxheck.Vx=17;
        hitxheck.Vy=40;
        hitxheck.a=0;
        hitxheck.g=0;
        hitxheck.freezeTime2=0;
        hitxheck.freezeTime=5;
        hitxheck.slowTime=0;
        hitxheck.shake=1;
        hitxheck.d_rate=2;
        hitxheck.isObj=false;
        hitxheck.hitType="hitFire_h";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="";
    }

    public static frame23(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
