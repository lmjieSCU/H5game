class Chunli_jump_f{
	public static addSprite14522(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Chunli_jump_f.frame3,23,Chunli_jump_f.frame23,24,Chunli_jump_f.frame24,27,Chunli_jump_f.frame27,35,Chunli_jump_f.frame35,38,Chunli_jump_f.frame38,44,Chunli_jump_f.frame44,47,Chunli_jump_f.frame47,54,Chunli_jump_f.frame54,57,Chunli_jump_f.frame57,67,Chunli_jump_f.frame67,73,Chunli_jump_f.frame73,79,Chunli_jump_f.frame79,82,Chunli_jump_f.frame82,84,Chunli_jump_f.frame84,85,Chunli_jump_f.frame85,87,Chunli_jump_f.frame87,98,Chunli_jump_f.frame98]);
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

    public static frame23(mc: zmovie.ZMovieClip) { 
        mc.stop();
    }

    public static frame24(mc: zmovie.ZMovieClip) { }

    public static frame27(mc: zmovie.ZMovieClip) { 
        
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

    public static frame35(mc: zmovie.ZMovieClip) { 
        mc.stop();
    }
    

    public static frame38(mc: zmovie.ZMovieClip) { 
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

    public static frame44(mc: zmovie.ZMovieClip) { 
        mc.stop();
    }

    public static frame47(mc: zmovie.ZMovieClip) { 
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

    public static frame54(mc: zmovie.ZMovieClip) { 
        mc.stop();
    }

    public static frame57(mc: zmovie.ZMovieClip) { 
        
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

    public static frame67(mc: zmovie.ZMovieClip) { 
         mc.stop();
    }

    public static frame73(mc: zmovie.ZMovieClip) { 
        
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

    public static frame79(mc: zmovie.ZMovieClip) { 
        mc.stop();
    }

    public static frame82(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        } 
        let a14462=Chunli_a14462.getInstance(_parentRole);
        a14462.flag = "att";
        a14462.defendSuper = false;
        a14462.obj_level = 0;
    }

    public static frame84(mc: zmovie.ZMovieClip) { 
        mc.stop();
    }

    public static frame85(mc: zmovie.ZMovieClip) { 
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
    

    public static frame87(mc: zmovie.ZMovieClip) {
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

    public static frame98(mc: zmovie.ZMovieClip) { 
        mc.stop();
    }
}
