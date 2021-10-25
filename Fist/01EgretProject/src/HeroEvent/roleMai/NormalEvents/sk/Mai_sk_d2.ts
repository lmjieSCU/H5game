class Mai_sk_d2 {
    public static addSprite6887(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, Mai_sk_d2.frame1, 11, Mai_sk_d2.frame11, 28, Mai_sk_d2.frame28]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6617 = Mai_a6617.getInstance(_parentRole);
        a6617.Vx = 5;
        a6617.Vy = 15;
        a6617.Va = 0;
        a6617.Vg = 2;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "";
    }


    public static frame11(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 30;
        htcheck.Vy = -30;
        htcheck.a = 4;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 1;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire0";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "up";

        let a6617 = Mai_a6617.getInstance(_parentRole);
        a6617.Vx = 0;
        a6617.Vy = -10;
        a6617.Va = 0;
        a6617.Vg = 4.5;
        a6617.Vx_min = 0;
        a6617.posY2 = "";
        a6617.flag = "";
        a6617.end_status = "frame_land";
    }


    public static frame28(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    }
}

