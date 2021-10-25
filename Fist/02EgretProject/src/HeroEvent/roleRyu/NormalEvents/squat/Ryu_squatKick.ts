class Ryu_squatKick{
	public static addSprite20580(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [6,Ryu_squatKick.frame6,7,Ryu_squatKick.frame7,19,Ryu_squatKick.frame19]);
		return;
	}
    public static frame6(){
        //_level0.k_snd.start();
    }

    public static frame7(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="";
        hitxheck.hurtAway="hurt5";
        hitxheck.flag=1;
        hitxheck.end_status="getup1";
        hitxheck.Vx=10;
        hitxheck.Vy=31;
        hitxheck.a=0;
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
        hitxheck.hitPos="down";
    }

    public static frame19(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
