class Chunli_jump{
	public static addSprite14477(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Chunli_jump.frame3,30,Chunli_jump.frame30,31,Chunli_jump.frame31,32,Chunli_jump.frame32,42,Chunli_jump.frame42,45,Chunli_jump.frame45,51,Chunli_jump.frame51,54,Chunli_jump.frame54,61,Chunli_jump.frame61,64,Chunli_jump.frame64,74,Chunli_jump.frame74,80,Chunli_jump.frame80,86,Chunli_jump.frame86,89,Chunli_jump.frame89,91,Chunli_jump.frame91,92,Chunli_jump.frame92,94,Chunli_jump.frame94,105,Chunli_jump.frame105]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy,_parentRole.Vx);
        //_level0.k_snd.start();
    }

    public static frame30(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

    public static frame31(mc: zmovie.ZMovieClip) {
       
    }

    public static frame32(mc: zmovie.ZMovieClip) {
        
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=4;
        htcheck.isObj=false;
        htcheck.hitPos="up";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=1;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=3;
        htcheck.Vx=17;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
    }

    public static frame42(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

    public static frame45(mc: zmovie.ZMovieClip) {
        
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=4;
        htcheck.isObj=false;
        htcheck.hitPos="up";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=1;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=3;
        htcheck.Vx=17;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
    }

    public static frame51(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

    public static frame54(mc: zmovie.ZMovieClip) {
                
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=3;
        htcheck.isObj=false;
        htcheck.hitPos="up";
        htcheck.hitType="hitfire_l";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt2";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.5;
        htcheck.flag="s2";
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=4;
        htcheck.Vx=15;
        htcheck.freezeTime2=2;
        htcheck.shake=0;
        htcheck.reCheck=true;
    }

    public static frame61(mc: zmovie.ZMovieClip) {
         mc.stop();
    }

    public static frame64(mc: zmovie.ZMovieClip) {
        
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=3;
        htcheck.isObj=false;
        htcheck.hitPos="up";
        htcheck.hitType="hitfire_l";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt6";
        htcheck.hurtBack="hurt2";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=0.5;
        htcheck.flag="s2";
        htcheck.g=0;
        htcheck.Vy=0;
        htcheck.a=4;
        htcheck.Vx=15;
        htcheck.freezeTime2=2;
        htcheck.shake=0;
        htcheck.reCheck=true;
    }

    public static frame74(mc: zmovie.ZMovieClip) {
         mc.stop();
    }

    public static frame80(mc: zmovie.ZMovieClip) {
        
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=5;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire_h";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="";
        htcheck.end_status="getup2";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=2;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=30;
        htcheck.a=0;
        htcheck.Vx=17;
        htcheck.freezeTime2=0;
        htcheck.shake=1;
        htcheck.reCheck=true;
    }

    public static frame86(mc: zmovie.ZMovieClip) {
         mc.stop();
    }

    public static frame89(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a14462=Chunli_a14462.getInstance(_parentRole);
        a14462.flag = "att";
        a14462.defendSuper = false;
        a14462.obj_level = 0;
    }

    public static frame91(mc: zmovie.ZMovieClip) {
         mc.stop();
    }

    public static frame92(mc: zmovie.ZMovieClip) {
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=4;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire1";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="hurt1";
        htcheck.end_status="getup2";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=1;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=25;
        htcheck.a=0;
        htcheck.Vx=5;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
    }

    public static frame94(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4023=Chunli_a4023.getInstance(_parentRole);
        a4023.Vx=15;
        a4023.Vy=25;
        a4023.Va=0;
        a4023.Vg=3.5;
        a4023.Vx_min=0;
        a4023.posY2="";
        a4023.flag="";
        a4023.end_status="land2";
    }

    public static frame105(mc: zmovie.ZMovieClip) {
       mc.stop();
    }
}
