class Mai_sk_hulu {
    public static addSprite7729(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [8, Mai_sk_hulu.frame8, 18, Mai_sk_hulu.frame18]);
        return;
    }
    public static frame8(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";

        let a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = 35;
        a6433.flag = "";
        a6433.target = "";

        let a7441 = Mai_a7441.getInstance(_parentRole);
        a7441.shadow_name = "mai_hulu_shadow";
        a7441.start_alpha = 70;
        a7441.end_alpha = 10;
        a7441.d_alpha = 8;
        a7441.add_interval = 1;
        a7441._rb = 15;
        a7441._gb = 20;
        a7441._bb = 190;
    }


    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}


