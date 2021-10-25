class Ryu_kick2{
	public static addSprite20524(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_kick2.frame1,4,Ryu_kick2.frame4,10,Ryu_kick2.frame10,22,Ryu_kick2.frame24]);
		return;
	}
    public static frame1(){
       //hitPos = "up";
    }

    public static frame4(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt1";
        hitxheck.hurtAway="hurt3";
        hitxheck.flag=1;
        hitxheck.end_status="";
        hitxheck.Vx=10;
        hitxheck.Vy=20;
        hitxheck.a=3;
        hitxheck.g=0;
        hitxheck.freezeTime2=0;
        hitxheck.freezeTime=6;
        hitxheck.slowTime=0;
        hitxheck.shake=0;
        hitxheck.d_rate=0.5;
        hitxheck.isObj=false;
        hitxheck.hitType="hitFire1";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="";
        //_level0.k_snd.start();
    }

    public static frame10(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt1";
        hitxheck.hurtAway="hurt3";
        hitxheck.flag=1;
        hitxheck.end_status="";
        hitxheck.Vx=19;
        hitxheck.Vy=-20;
        hitxheck.a=3;
        hitxheck.g=0;
        hitxheck.freezeTime2=0;
        hitxheck.freezeTime=6;
        hitxheck.slowTime=0;
        hitxheck.shake=0;
        hitxheck.d_rate=0.7;
        hitxheck.isObj=false;
        hitxheck.hitType="hitFire1";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="up";
    }

    public static frame24(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

