class Terry_pitch2{
    public static addSprite8796(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1,Terry_pitch2.frame1,12,Terry_pitch2.frame12,14,Terry_pitch2.frame14,27,Terry_pitch2.frame27]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6754=Terry_a6754.getInstance(_parentRole);
        a6754.hurt=false;
        a6754.land=true;
        a6754.downHit=false;
        a6754.status_1="hurt2";
        a6754.flag="s_catch";
    }

    public static frame12(mc: zmovie.ZMovieClip){
        //_level0.p_snd.start();
    }

    public static frame14(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=25;
        hitcheck.Vy=30;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=10;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=1.5;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame27(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


}