class Terry_df_o{
    public static addSprite9560(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3,Terry_df_o.frame3,8,Terry_df_o.frame8,10,Terry_df_o.frame10,12,Terry_df_o.frame12,19,Terry_df_o.frame19,20,Terry_df_o.frame20,28,Terry_df_o.frame28,30,Terry_df_o.frame30,32,Terry_df_o.frame32,40,Terry_df_o.frame40,48,Terry_df_o.frame48,56,Terry_df_o.frame56,62,Terry_df_o.frame62,64,Terry_df_o.frame64,68,Terry_df_o.frame68,72,Terry_df_o.frame72,76,Terry_df_o.frame76,80,Terry_df_o.frame80,84,Terry_df_o.frame84,88,Terry_df_o.frame88,89,Terry_df_o.frame89,111,Terry_df_o.frame111,150,Terry_df_o.frame150,151,Terry_df_o.frame151,168,Terry_df_o.frame168]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7078=Terry_a7078.getInstance(_parentRole);
        a7078.s_type="s2";
        a7078.f_time=20;
        a7078.bgType="2";
        a7078.roleName="Terry";
        a7078.faceName="";
    }

    public static frame8(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        
        let a6433=Terry_a6433.getInstance(_parentRole);
        a6433.Vx=50;
        a6433.flag="";
        a6433.target="";

        Terry_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
    }

    public static frame10(){
        //continueHit = true;
    }

    public static frame12(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=10;
        hitcheck.Vy=0;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=20;
        hitcheck.freezeTime=10;
        hitcheck.slowTime=0;
        hitcheck.shake=2;
        hitcheck.d_rate=2.2;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_h";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame19(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "bgEff_black";
    }

    public static frame20(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7153.getInstance(_parentRole).nohitFrame = "nohit";
    }

    public static frame28(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7156=Terry_a7156.getInstance(_parentRole);
        a7156.posObj="Terry_a7155";
        a7156.flag=1;
        a7156.status_1="hurt2";
        a7156.downHit=false;
        a7156.land=false;
        a7156.hurt=false;
        a7156.func=null;
        Terry_a7155.getInstance(_parentRole)._name = "Terry_a7155";
    }

    public static frame30(mc: zmovie.ZMovieClip){
        // _level0.charToCenter();
    }

    public static frame32(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=0;
        hitcheck.a=0;
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

    public static frame40(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=0;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.3;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame48(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=0;
        hitcheck.a=0;
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

    public static frame56(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt2";
        hitcheck.hurtAway="hurt2";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=0;
        hitcheck.a=0;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.3;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame62(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7156=Terry_a7156.getInstance(_parentRole);
        a7156.posObj="Terry_a7155";
        a7156.flag=1;
        a7156.status_1="hurt2";
        a7156.downHit=false;
        a7156.land=false;
        a7156.hurt=false;
        a7156.func=null;
        Terry_a7155.getInstance(_parentRole)._name = "Terry_a7155";
    }

    public static frame64(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // let a7078=Terry_a7078.getInstance(_parentRole);
        // a7078.bgType="0";
        // a7078.f_time=20;
        // a7078.roleName="";
        // a7078.s_type="s3";
        // a7078.faceName="";
    }

    public static frame68(mc: zmovie.ZMovieClip){
        //continueHit = false;
        
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=20;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.35;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame72(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=20;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.35;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame76(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=20;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.35;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame80(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=20;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.35;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame84(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=20;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.35;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame88(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt3";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=20;
        hitcheck.a=0;
        hitcheck.g=3;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=1;
        hitcheck.slowTime=0;
        hitcheck.shake=0;
        hitcheck.d_rate=0.35;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire1";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame89(mc: zmovie.ZMovieClip){
        
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=0;
        hitcheck.Vy=37;
        hitcheck.a=0;
        hitcheck.g=3.5;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=8;
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

    public static frame111(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "";
    }

    public static frame150(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

    public static frame151(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a7159.getInstance(_parentRole).effName = "";
    }

    public static frame168(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    }
}