class Mai_sk_s_heti2 {
    public static addSprite7650(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Mai_sk_s_heti2.frame2, 3, Mai_sk_s_heti2.frame3, 13, Mai_sk_s_heti2.frame13, 14, Mai_sk_s_heti2.frame14, 19, Mai_sk_s_heti2.frame19, 25, Mai_sk_s_heti2.frame25, 29, Mai_sk_s_heti2.frame29, 38, Mai_sk_s_heti2.frame38, 47, Mai_sk_s_heti2.frame47, 56, Mai_sk_s_heti2.frame56, 60, Mai_sk_s_heti2.frame60, 64, Mai_sk_s_heti2.frame64, 70, Mai_sk_s_heti2.frame70, 75, Mai_sk_s_heti2.frame75, 77, Mai_sk_s_heti2.frame77, 90, Mai_sk_s_heti2.frame90, 107, Mai_sk_s_heti2.frame107, 110, Mai_sk_s_heti2.frame110, 120, Mai_sk_s_heti2.frame120, 144, Mai_sk_s_heti2.frame144, 145, Mai_sk_s_heti2.frame145, 165, Mai_sk_s_heti2.frame165]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a7078 = Mai_a7078.getInstance(_parentRole);
        a7078.s_type = "s2";
        a7078.f_time = 20;
        a7078.bgType = "2";
        a7078.roleName = "Mai";
        a7078.faceName = "";
    }


    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 25;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 5;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";

        let a6433 = Mai_a6433.getInstance(_parentRole);
        a6433.Vx = 30;
        a6433.flag = "";
        a6433.target = "";
        Mai_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
        //continueHit = true;
    }


    public static frame13(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7153.getInstance(_parentRole).nohitFrame = "nohit";
    }


    public static frame14(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7155.getInstance(_parentRole)._name = "Mai_a7155";
        let a7156 = Mai_a7156.getInstance(_parentRole);
        a7156.status_1 = "hurt2";
        a7156.flag = "1";
        a7156.hurt = true;
        a7156.land = false;
        a7156.downHit = false;
        a7156.func = null
        a7156.posObj = "Mai_a7155";
        //_level0.charToCenter();
    }


    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 0;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 5;
        htcheck.freezeTime = 10;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_h";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame25(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7155.getInstance(_parentRole)._name = "Mai_a7155";
        let a7156 = Mai_a7156.getInstance(_parentRole);
        a7156.status_1 = "hurt2";
        a7156.flag = "1";
        a7156.hurt = true;
        a7156.land = false;
        a7156.downHit = false;
        a7156.func = null
        a7156.posObj = "Mai_a7155";
    }


    public static frame29(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 5;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame38(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 5;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame47(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 7;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame56(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7155.getInstance(_parentRole)._name = "Mai_a7155";
        let a7156 = Mai_a7156.getInstance(_parentRole);
        a7156.status_1 = "hurt2";
        a7156.flag = "1";
        a7156.hurt = true;
        a7156.land = false;
        a7156.downHit = false;
        a7156.func = null
        a7156.posObj = "Mai_a7155";
    }


    public static frame60(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_fire_longyanwu";
    }


    public static frame64(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 5;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = true;
        htcheck.hitType = "";
        htcheck.hitEff = "fire_m2";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame70(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_fire_longyanwu";
    }


    public static frame75(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 0;
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = true;
        htcheck.hitType = "";
        htcheck.hitEff = "fire_m2";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame77(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7155.getInstance(_parentRole)._name = "Mai_a7155";
        let a7156 = Mai_a7156.getInstance(_parentRole);
        a7156.status_1 = "hurt1";
        a7156.flag = "1";
        a7156.hurt = true;
        a7156.land = false;
        a7156.downHit = false;
        a7156.func = null
        a7156.posObj = "Mai_a7155";
    }


    public static frame90(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7159.getInstance(_parentRole).effName = "bgEff_black";
    }


    public static frame107(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    }


    public static frame110(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt4";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 0;
        htcheck.Vy = 45;
        htcheck.a = 3;
        htcheck.g = 3.5;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 10;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_h";
        htcheck.hitEff = "fire_m4";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame120(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7159.getInstance(_parentRole).effName = "";
    }


    public static frame144(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


    public static frame145(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a7159.getInstance(_parentRole).effName = "";
    }


    public static frame165(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

