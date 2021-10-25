class Ryu_punch2{
	public static addSprite20456(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Ryu_punch2.frame3,13,Ryu_punch2.frame16]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt1";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag=1;
        hitxheck.end_status="";
        hitxheck.Vx=20;
        hitxheck.Vy=0;
        hitxheck.a=3;
        hitxheck.g=0;
        hitxheck.freezeTime2=0;
        hitxheck.freezeTime=4;
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
        //_level0.p_snd.start();
    }


    public static frame16(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
