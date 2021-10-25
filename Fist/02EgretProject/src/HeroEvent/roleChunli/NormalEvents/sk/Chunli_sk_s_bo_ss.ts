class Chunli_sk_s_bo_ss {
    public static addSprite15528(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_bo_ss.frame3, 4, Chunli_sk_s_bo_ss.frame4, 5, Chunli_sk_s_bo_ss.frame5, 41, Chunli_sk_s_bo_ss.frame41, 42, Chunli_sk_s_bo_ss.frame42, 47, Chunli_sk_s_bo_ss.frame47, 65, Chunli_sk_s_bo_ss.frame65]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.bgType = "2";
        a4178.f_time = 20;
        a4178.roleName = "Chunli";
        a4178.s_type = "s2";
        a4178.faceName = "";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_speed1";
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // continueHit = true;
    }


    public static frame41(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    }


    public static frame42(mc: zmovie.ZMovieClip) {
        
let htcheck=Hero_HitCheck.getInstance(mc);
htcheck.freezeTime=10;
htcheck.isObj=true;
htcheck.hitPos="";
htcheck.hitType="hitFire_h";
htcheck.hitShinning=false;
htcheck.hitEff="";
htcheck.hurtAway="hurt4";
htcheck.hurtBack="";
htcheck.end_status="";
htcheck.slowTime=0;
htcheck.checkTimes=1;
htcheck.d_rate=1;
htcheck.flag=1;
htcheck.g=0;
htcheck.Vy=35;
htcheck.a=0;
htcheck.Vx=30;
htcheck.freezeTime2=0;
htcheck.shake=0;
htcheck.reCheck=true;
    }


    public static frame47(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    }


    public static frame65(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

