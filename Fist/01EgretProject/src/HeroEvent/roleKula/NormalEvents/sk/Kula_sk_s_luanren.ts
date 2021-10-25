class Kula_sk_s_luanren {
    public static addSprite19797(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, Kula_sk_s_luanren.frame1, 2, Kula_sk_s_luanren.frame2, 4, Kula_sk_s_luanren.frame4, 5, Kula_sk_s_luanren.frame5, 7, Kula_sk_s_luanren.frame7, 13, Kula_sk_s_luanren.frame13, 14, Kula_sk_s_luanren.frame14, 15, Kula_sk_s_luanren.frame15, 35, Kula_sk_s_luanren.frame35, 36, Kula_sk_s_luanren.frame36, 59, Kula_sk_s_luanren.frame59, 61, Kula_sk_s_luanren.frame61, 63, Kula_sk_s_luanren.frame63, 69, Kula_sk_s_luanren.frame69, 72, Kula_sk_s_luanren.frame72, 74, Kula_sk_s_luanren.frame74, 79, Kula_sk_s_luanren.frame79, 104, Kula_sk_s_luanren.frame104]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    }


    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s2";
        a19530.f_time = 20;
        a19530.bgType = "2";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "bgEff_speed1";
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = true;
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 15;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 20;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire0";
        htcheck.hitEff = "kula_slashEff1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        let a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 60;
        a18962.flag = "";
        a18962.target = "";
    }


    public static frame13(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.onHit && _parentRole.opp.status_3 == "hurt") {
            mc.gotoAndStop("hit");
            //play();
        }

    }


    public static frame14(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
        _parentRole.bodyTouch();
        //continueHit = false;
    }


    public static frame15(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "bgEff_black";
    }


    public static frame35(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


    public static frame36(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7155.getInstance(_parentRole)._name = "Kula_a7155"
        let a7156 = Kula_a7156.getInstance(_parentRole);
        a7156.status_1 = "hurt2";
        a7156.flag = "s_catch";
        a7156.hurt = true;
        a7156.land = true;
        a7156.downHit = false;
        a7156.func = null;
        a7156.posObj = "Kula_a7155";
        _parentRole.checkTouch_stop = false;
        _parentRole.bodyTouch();
    }


    public static frame59(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "";
    }


    public static frame61(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = -10;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.g = 3.5;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut2";
        htcheck.hitEff = "kula_slashEff2";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame63(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = -15;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.g = 3.5;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut2";
        htcheck.hitEff = "kula_slashEff2";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame69(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    }


    public static frame72(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s3";
        a19530.f_time = 20;
        a19530.bgType = "0";
        a19530.roleName = "";
        a19530.faceName = "";
    }


    public static frame74(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt4";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = -19;
        htcheck.Vy = 43;
        htcheck.a = 0;
        htcheck.g = 4;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 2;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut2";
        htcheck.hitEff = "kula_slashEff2";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame79(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "bgEff_black";
    }


    public static frame104(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}