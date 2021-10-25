class Ryu_sk3_l{
	public static addSprite20708(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_sk3_l.frame1,5,Ryu_sk3_l.frame5,6,Ryu_sk3_l.frame6,7,Ryu_sk3_l.frame7,15,Ryu_sk3_l.frame15]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2,"up");
    }

    public static frame5(mc: zmovie.ZMovieClip){
        
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=13;
        hitcheck.Vy=35;
        hitcheck.a=3;
        hitcheck.g=4;
        hitcheck.freezeTime2=2;
        hitcheck.freezeTime=10;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame6(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    }

    public static frame7(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=15;
        hitcheck.Vy=35;
        hitcheck.a=3;
        hitcheck.g=4;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=6;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=false;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=8;
        a20238.Vy=27;
        a20238.Va=0;
        a20238.Vg=4.5;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land2";
    }

    public static frame15(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}
