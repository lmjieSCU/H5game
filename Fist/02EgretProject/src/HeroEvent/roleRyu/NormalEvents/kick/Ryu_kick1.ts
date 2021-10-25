class Ryu_kick1{
	public static addSprite20505(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_kick1.frame1,8,Ryu_kick1.frame8,9,Ryu_kick1.frame9,11,Ryu_kick1.frame13]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=13;
        a20238.Vy=15;
        a20238.Va=0;
        a20238.Vg=3.5;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land2";
    }

    public static frame8(){
       // _level0.p_snd.start();
    }

    public static frame9(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt1";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag=3;
        hitxheck.end_status="";
        hitxheck.Vx=17;
        hitxheck.Vy=0;
        hitxheck.a=3;
        hitxheck.g=0;
        hitxheck.freezeTime2=0;
        hitxheck.freezeTime=4;
        hitxheck.slowTime=0;
        hitxheck.shake=0;
        hitxheck.d_rate=0.7;
        hitxheck.isObj=false;
        hitxheck.hitType="hitFire1";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="";
    }

    public static frame13(mc: zmovie.ZMovieClip){
         mc.stop();
    }
}
