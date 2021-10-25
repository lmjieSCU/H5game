class Terry_pitch{
    public static addSprite8803(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1,Terry_pitch.frame1,12,Terry_pitch.frame12,16,Terry_pitch.frame16,24,Terry_pitch.frame24]);
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

    public static frame12(){
        //_level0.p_snd.start();
    }

    public static frame16(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt5";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=20;
        hitcheck.Vy=30;
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
        hitcheck.hitPos="";
    }

    public static frame24(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

}