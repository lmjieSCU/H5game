class Ryu_sk_xf2{
	public static addSprite20997(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Ryu_sk_xf2.frame2,7,Ryu_sk_xf2.frame7,13,Ryu_sk_xf2.frame13,19,Ryu_sk_xf2.frame19,25,Ryu_sk_xf2.frame25,34,Ryu_sk_xf2.frame34]);
		return;
	}
    public static frame2(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=10;
        a20238.Vy=20;
        a20238.Va=0;
        a20238.Vg=3;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land2";
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
        hitcheck.Vx=10;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=15;
        a20238.Vy=15;
        a20238.Va=0;
        a20238.Vg=3.2;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land3";
        //_level0.p_snd.start();
    }

    public static frame13(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=10;
        hitcheck.Vy=20;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame19(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="getup2";
        hitcheck.Vx=15;
        hitcheck.Vy=26;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=5;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame25(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="getup2";
        hitcheck.Vx=20;
        hitcheck.Vy=30;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=5;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //V;
    }

    public static frame34(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus("land2");
    }
}
