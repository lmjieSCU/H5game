class Mai_sk_luan1 {
    public static addSprite7664(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Mai_sk_luan1.frame3, 5, Mai_sk_luan1.frame5, 7, Mai_sk_luan1.frame7, 15, Mai_sk_luan1.frame15]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = 10;
        a6433.flag = "";
        a6433.target = "";
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.25;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzipo";
    }


    public static frame15(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

