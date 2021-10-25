class Ryu_sk2{
	public static addSprite20693(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Ryu_sk2.frame2,6,Ryu_sk2.frame6,9,Ryu_sk2.frame9,15,Ryu_sk2.frame15,21,Ryu_sk2.frame21,24,Ryu_sk2.frame24,33,Ryu_sk2.frame33]);
        
        return;
	}
    public static frame2(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=5;
        a20238.Vy=6;
        a20238.Va=0;
        a20238.Vg=1;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land";
        
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=15;
        hitcheck.Vy=0;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=3;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=4;
        hitcheck.shake=0;
        hitcheck.d_rate=0.2;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_s3";
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
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=13;
        a20238.Vy=1;
        a20238.Va=0;
        a20238.Vg=0.1;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land";
    }

    public static frame9(mc: zmovie.ZMovieClip){
        //_level0.p_snd.start();
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=23;
        hitcheck.Vy=0;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
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

    public static frame15(mc: zmovie.ZMovieClip){
        //_level0.p_snd.start();
        
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=23;
        hitcheck.Vy=0;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
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

    public static frame21(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="getup2";
        hitcheck.Vx=15;
        hitcheck.Vy=32;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=7;
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
        //_level0.p_snd.start();
    }

    public static frame24(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=8;
        a20238.Vy=-1;
        a20238.Va=0;
        a20238.Vg=1;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land2";
    }

    public static frame33(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus("land2");
    }
}
