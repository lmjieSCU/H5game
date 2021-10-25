class Ryu_sk3{
	public static addSprite20707(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_sk3.frame1,3,Ryu_sk3.frame3,4,Ryu_sk3.frame4,5,Ryu_sk3.frame5,7,Ryu_sk3.frame7,8,Ryu_sk3.frame8,10,Ryu_sk3.frame10,21,Ryu_sk3.frame21]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2,"up");
    }

    public static frame3(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=10;
        hitcheck.Vy=0;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=2;
        hitcheck.freezeTime=5;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }
    

    public static frame4(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20401=Ryu_a20401.getInstance(_parentRole);
        a20401.Vx=15;
        a20401.flag="";
        a20401.target="";
    }

    public static frame5(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=3;
        hitcheck.end_status="";
        hitcheck.Vx=10;
        hitcheck.Vy=27;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=5;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.8;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame7(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    }

    public static frame8(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=17;
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
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=8;
        a20238.Vy=38;
        a20238.Va=0;
        a20238.Vg=4.5;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land2";
    }

    public static frame10(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
    }
    public static frame21(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}
