class Ryu_jump_f{
	public static addSprite20302(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Ryu_jump_f.frame2,18,Ryu_jump_f.frame18,19,Ryu_jump_f.frame19,20,Ryu_jump_f.frame20,27,Ryu_jump_f.frame27,31,Ryu_jump_f.frame31,36,Ryu_jump_f.frame36,39,Ryu_jump_f.frame39,44,Ryu_jump_f.frame44,47,Ryu_jump_f.frame47,52,Ryu_jump_f.frame52,55,Ryu_jump_f.frame55,62,Ryu_jump_f.frame62]);
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

    public static frame31(mc: zmovie.ZMovieClip){
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

    public static frame36(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame39(mc: zmovie.ZMovieClip){
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

    public static frame44(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame47(mc: zmovie.ZMovieClip){
        
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

    public static frame52(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame55(mc: zmovie.ZMovieClip){
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

    public static frame62(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}
