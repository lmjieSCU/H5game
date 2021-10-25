class Ryu_jump_b{
	public static addSprite20303(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Ryu_jump_b.frame2,18,Ryu_jump_b.frame18,19,Ryu_jump_b.frame19,20,Ryu_jump_b.frame20,27,Ryu_jump_b.frame27,30,Ryu_jump_b.frame30,35,Ryu_jump_b.frame35,38,Ryu_jump_b.frame38,43,Ryu_jump_b.frame43,46,Ryu_jump_b.frame46,51,Ryu_jump_b.frame51,54,Ryu_jump_b.frame54,61,Ryu_jump_b.frame61]);
		return;
	}
    public static frame2(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy,_parentRole.Vx);
        //_level0.jump_snd.start();
    }

    public static frame18(mc: zmovie.ZMovieClip){
         mc.stop();
    }

    public static frame19(){
        //_root.attack = 1;
        //_level0[_root.enemy].AI_mc.defend();
    }

    public static frame20(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt2";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag=1;
        hitxheck.end_status="";
        hitxheck.Vx=17;
        hitxheck.Vy=0;
        hitxheck.a=3;
        hitxheck.g=0;
        hitxheck.freezeTime2=0;
        hitxheck.freezeTime=4;
        hitxheck.slowTime=0;
        hitxheck.shake=0;
        hitxheck.d_rate=1;
        hitxheck.isObj=false;
        hitxheck.hitType="hitFire_s3";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="up";
    }

    public static frame27(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame30(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt2";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag=1;
        hitxheck.end_status="";
        hitxheck.Vx=15;
        hitxheck.Vy=0;
        hitxheck.a=4;
        hitxheck.g=0;
        hitxheck.freezeTime2=0;
        hitxheck.freezeTime=4;
        hitxheck.slowTime=0;
        hitxheck.shake=0;
        hitxheck.d_rate=1;
        hitxheck.isObj=false;
        hitxheck.hitType="hitFire_s3";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="up";
    }

    public static frame35(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame38(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt2";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag="s2";
        hitxheck.end_status="";
        hitxheck.Vx=15;
        hitxheck.Vy=0;
        hitxheck.a=4;
        hitxheck.g=0;
        hitxheck.freezeTime2=2;
        hitxheck.freezeTime=3;
        hitxheck.slowTime=0;
        hitxheck.shake=0;
        hitxheck.d_rate=0.5;
        hitxheck.isObj=false;
        hitxheck.hitType="hitfire_l";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="up";
    }

    public static frame43(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame46(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="hurt2";
        hitxheck.hurtAway="hurt6";
        hitxheck.flag="s2";
        hitxheck.end_status="";
        hitxheck.Vx=15;
        hitxheck.Vy=0;
        hitxheck.a=4;
        hitxheck.g=0;
        hitxheck.freezeTime2=2;
        hitxheck.freezeTime=3;
        hitxheck.slowTime=0;
        hitxheck.shake=0;
        hitxheck.d_rate=0.5;
        hitxheck.isObj=false;
        hitxheck.hitType="hitfire_l";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="up";
    }
    

    public static frame51(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame54(mc: zmovie.ZMovieClip){
        let hitxheck=Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack="";
        hitxheck.hurtAway="hurt3";
        hitxheck.flag=1;
        hitxheck.end_status="getup2";
        hitxheck.Vx=17;
        hitxheck.Vy=30;
        hitxheck.a=0;
        hitxheck.g=0;
        hitxheck.freezeTime2=0;
        hitxheck.freezeTime=5;
        hitxheck.slowTime=0;
        hitxheck.shake=1;
        hitxheck.d_rate=2;
        hitxheck.isObj=false;
        hitxheck.hitType="hitFire_h";
        hitxheck.hitEff="";
        hitxheck.hitShinning=false;
        hitxheck.reCheck=true;
        hitxheck.checkTimes=1;
        hitxheck.hitPos="";
    }

    public static frame61(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}
