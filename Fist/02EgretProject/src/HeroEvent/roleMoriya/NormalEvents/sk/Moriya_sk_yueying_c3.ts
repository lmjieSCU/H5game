class Moriya_sk_yueying_c3 {
    public static addSprite4064(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [5, Moriya_sk_yueying_c3.frame5, 6, Moriya_sk_yueying_c3.frame6, 19, Moriya_sk_yueying_c3.frame19]);
        return;
    }
    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 22;
        a3395.flag = "";
        a3395.target = "";
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 13;
        htcheck.Vy = 32;
        htcheck.a = 3;
        htcheck.g = 4;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.6;
        htcheck.isObj = false;
        htcheck.hitType = "hitfire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

