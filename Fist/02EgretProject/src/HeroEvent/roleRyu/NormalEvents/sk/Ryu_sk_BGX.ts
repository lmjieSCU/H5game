class Ryu_sk_BGX{
	public static addSprite21012(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Ryu_sk_BGX.frame4,18,Ryu_sk_BGX.frame18,19,Ryu_sk_BGX.frame19,20,Ryu_sk_BGX.frame20,31,Ryu_sk_BGX.frame31,32,Ryu_sk_BGX.frame32,34,Ryu_sk_BGX.frame34,49,Ryu_sk_BGX.frame49,50,Ryu_sk_BGX.frame50,54,Ryu_sk_BGX.frame54,56,Ryu_sk_BGX.frame56]);
		return;
	}
    public static frame4(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=15;
        a20238.Vy=35;
        a20238.Va=0;
        a20238.Vg=4;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="frame_land";
    }

    public static frame18(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame19(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20401=Ryu_a20401.getInstance(_parentRole);
        a20401.Vx=10;
        a20401.flag="";
        a20401.target="";
    }

    public static frame20(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt5";
        hitcheck.flag=1;
        hitcheck.end_status="getup1";
        hitcheck.Vx=10;
        hitcheck.Vy=31;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="down";
    }

    public static frame31(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    }

    public static frame32(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=28;
        a20238.Vy=-20;
        a20238.Va=0;
        a20238.Vg=5;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land3";
        //hitPos = "up";
    }

    public static frame34(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt5";
        hitcheck.flag=1;
        hitcheck.end_status="getup1";
        hitcheck.Vx=10;
        hitcheck.Vy=31;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=3;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="down";
    }

    public static frame49(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame50(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=5;
        a20238.Vy=5;
        a20238.Va=0;
        a20238.Vg=4;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="";
        //hitPos = "up";
    }

    public static frame54(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="getup1";
        hitcheck.Vx=30;
        hitcheck.Vy=-30;
        hitcheck.a=4;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire0";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="up";
    }

    public static frame56(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}
