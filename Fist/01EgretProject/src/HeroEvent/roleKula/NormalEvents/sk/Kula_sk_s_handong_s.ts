class Kula_sk_s_handong_s {
    public static addSprite19699(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_handong_s.frame2, 4, Kula_sk_s_handong_s.frame4, 6, Kula_sk_s_handong_s.frame6, 7, Kula_sk_s_handong_s.frame7, 8, Kula_sk_s_handong_s.frame8, 9, Kula_sk_s_handong_s.frame9, 12, Kula_sk_s_handong_s.frame12, 16, Kula_sk_s_handong_s.frame16, 17, Kula_sk_s_handong_s.frame17, 20, Kula_sk_s_handong_s.frame20, 22, Kula_sk_s_handong_s.frame22, 33, Kula_sk_s_handong_s.frame33, 49, Kula_sk_s_handong_s.frame49, 54, Kula_sk_s_handong_s.frame54, 83, Kula_sk_s_handong_s.frame83, 90, Kula_sk_s_handong_s.frame90]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s1_s";
        a19530.f_time = 20;
        a19530.bgType = "1";
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
        _parentRole.checkTouch_stop = true;
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 60;
        a18962.flag = "";
        a18962.target = "";
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFire";
    }


    public static frame8(mc: zmovie.ZMovieClip) {
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
        htcheck.freezeTime2 = 30;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "kula_hit_m5";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame9(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.visible = false;
        FightMainRender.getInstance().Add(_parentRole, Kula_sk_s_handong_s.onEnterFrame, [_parentRole])
    }
    public static onEnterFrame(_parentRole: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_parentRole.onHit) {
            _parentRole.visible = true;
            FightMainRender.getInstance().Remove(_parentRole, Kula_sk_s_handong_s.onEnterFrame)
        }
        else if (_parentRole.opp.onHit) {
            _parentRole.visible = true;
            FightMainRender.getInstance().Remove(_parentRole, Kula_sk_s_handong_s.onEnterFrame)
        }
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    }


    public static frame16(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.visible = true;
        FightMainRender.getInstance().Remove(_parentRole, Kula_sk_s_handong_s.onEnterFrame)
    }


    public static frame17(mc: zmovie.ZMovieClip) {
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
    }


    public static frame20(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
        _parentRole.bodyTouch();
    }


    public static frame22(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "bgEff_black";
    }


    public static frame33(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (!(_parentRole.onHit && _parentRole.opp.status_3 == "hurt")) {
            mc.gotoAndStop("nohit");
            //play();
        }
    }


    public static frame49(mc: zmovie.ZMovieClip) {
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


    public static frame54(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_ice_freeze2";
    }


    public static frame83(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


    public static frame90(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}