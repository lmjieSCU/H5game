class Moriya_sk_s4 {
    public static addSprite4198(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Moriya_sk_s4.frame2, 6, Moriya_sk_s4.frame6, 7, Moriya_sk_s4.frame7, 9, Moriya_sk_s4.frame9, 12, Moriya_sk_s4.frame12, 32, Moriya_sk_s4.frame32, 33, Moriya_sk_s4.frame33, 75, Moriya_sk_s4.frame75, 110, Moriya_sk_s4.frame110, 111, Moriya_sk_s4.frame111, 112, Moriya_sk_s4.frame112, 137, Moriya_sk_s4.frame137]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s2";
        a4178.f_time = 20;
        a4178.bgType = "2";
        a4178.roleName = "Moriya";
        a4178.faceName = "";
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = "";
        htcheck.end_status = "";
        htcheck.Vx = 10;
        htcheck.Vy = 35;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 7;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame9(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.opp.status_3 == "hurt" && _parentRole.onHit) {
            mc.gotoAndStop("hit");
            //play();
        }

    }


    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.opp.status_3 == "hurt" && _parentRole.onHit) {
            mc.gotoAndStop("hit");
            //play();
        }
    }


    public static frame32(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


    public static frame33(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4186.getInstance(_parentRole)._name = "Moriya_a4186";
        let a4188 = Moriya_a4188.getInstance(_parentRole);
        a4188.status_1 = "hurt2";
        a4188.flag = "s_catch";
        a4188.hurt = true;
        a4188.land = false;
        a4188.downHit = false;
        a4188.func = null
        a4188.posObj = "Moriya_a4186";
        Moriya_a4196.getInstance(_parentRole).name = "m_slash_3";
    }


    public static frame75(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4186.getInstance(_parentRole)._name = "Moriya_a4186";
        let a4188 = Moriya_a4188.getInstance(_parentRole);
        a4188.status_1 = "hurt2";
        a4188.flag = "s_catch";
        a4188.hurt = true;
        a4188.land = false;
        a4188.downHit = false;
        a4188.func = null;
        a4188.posObj = "Moriya_a4186";
    }


    public static frame110(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    }


    public static frame111(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s3";
        a4178.f_time = 20;
        a4178.bgType = "0";
        a4178.roleName = "";
        a4178.faceName = "";
    }


    public static frame112(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4196.getInstance(_parentRole).name = "m_slash_3_2";
    }


    public static frame137(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

