class Mai_sk_longyanwu {
    public static addSprite7027(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [5, Mai_sk_longyanwu.frame5, 8, Mai_sk_longyanwu.frame8, 13, Mai_sk_longyanwu.frame13, 27, Mai_sk_longyanwu.frame27]);
        return;
    }
    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";

        let a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = 10;
        a6433.flag = "";
        a6433.target = "";
    }


    public static frame8(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_fire_longyanwu";
    }


    public static frame13(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack="hurt1";
        htcheck.hurtAway="hurt3";
        htcheck.flag=1;
        htcheck.end_status="";
        htcheck.Vx=25;
        htcheck.Vy=20;
        htcheck.a=0;
        htcheck.g=0;
        htcheck.freezeTime2=4;
        htcheck.freezeTime=0;
        htcheck.slowTime=0;
        htcheck.shake=0;
        htcheck.d_rate=1.5;
        htcheck.isObj=true;
        htcheck.hitType="";
        htcheck.hitEff="fire_m2";
        htcheck.hitShinning=false;
        htcheck.reCheck=true;
        htcheck.checkTimes=1;
        htcheck.hitPos="";
    }


    public static frame27(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}


