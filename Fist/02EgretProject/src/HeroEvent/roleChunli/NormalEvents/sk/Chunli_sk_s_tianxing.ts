class Chunli_sk_s_tianxing {
    public static addSprite15960(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_tianxing.frame3, 4, Chunli_sk_s_tianxing.frame4, 6, Chunli_sk_s_tianxing.frame6, 9, Chunli_sk_s_tianxing.frame9, 11, Chunli_sk_s_tianxing.frame11, 12, Chunli_sk_s_tianxing.frame12, 15, Chunli_sk_s_tianxing.frame15, 18, Chunli_sk_s_tianxing.frame18, 21, Chunli_sk_s_tianxing.frame21, 24, Chunli_sk_s_tianxing.frame24, 27, Chunli_sk_s_tianxing.frame27, 30, Chunli_sk_s_tianxing.frame30, 31, Chunli_sk_s_tianxing.frame31, 35, Chunli_sk_s_tianxing.frame35, 39, Chunli_sk_s_tianxing.frame39, 43, Chunli_sk_s_tianxing.frame43, 47, Chunli_sk_s_tianxing.frame47, 48, Chunli_sk_s_tianxing.frame48, 52, Chunli_sk_s_tianxing.frame52, 55, Chunli_sk_s_tianxing.frame55, 59, Chunli_sk_s_tianxing.frame59, 61, Chunli_sk_s_tianxing.frame61, 64, Chunli_sk_s_tianxing.frame64, 67, Chunli_sk_s_tianxing.frame67, 71, Chunli_sk_s_tianxing.frame71, 74, Chunli_sk_s_tianxing.frame74, 75, Chunli_sk_s_tianxing.frame75, 77, Chunli_sk_s_tianxing.frame77, 78, Chunli_sk_s_tianxing.frame78, 98, Chunli_sk_s_tianxing.frame98, 99, Chunli_sk_s_tianxing.frame99, 100, Chunli_sk_s_tianxing.frame100, 104, Chunli_sk_s_tianxing.frame104, 108, Chunli_sk_s_tianxing.frame108, 111, Chunli_sk_s_tianxing.frame111, 114, Chunli_sk_s_tianxing.frame114, 118, Chunli_sk_s_tianxing.frame118, 129, Chunli_sk_s_tianxing.frame129]);
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

        let a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 25;
        a3395.flag = "";
        a3395.target = "";
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    }


    public static frame9(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 10;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "";
        htcheck.hurtBack = "hurt3";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame11(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a4202.getInstance(_parentRole).nohitFrame = "nohit";
    }


    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        let a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = false;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    }


    public static frame15(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame21(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame24(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame27(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame30(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame31(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_up";
        let a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = false;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    }


    public static frame35(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame39(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame43(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame47(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 1;
        htcheck.Vy = 10;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 20;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame48(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0.1;
        htcheck.Vy = 1;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        let a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = false;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    }


    public static frame52(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0.1;
        htcheck.Vy = 1;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame55(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0.1;
        htcheck.Vy = 1;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame59(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 0.1;
        htcheck.Vy = 1;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame61(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
        let a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = false;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    }


    public static frame64(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame67(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame71(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame74(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = -35;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame75(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    }


    public static frame77(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    }


    public static frame78(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 8;
        htcheck.isObj = false;
        htcheck.hitPos = "land";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 1;
        htcheck.g = 4;
        htcheck.Vy = 45;
        htcheck.a = 0;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 2;
        htcheck.reCheck = true;
    }


    public static frame98(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


    public static frame99(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 10;
        a4023.Vy = 35;
        a4023.Va = 0;
        a4023.Vg = 3;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land3";
    }


    public static frame100(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame104(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.3;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame108(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame111(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame114(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame118(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 0.5;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame129(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }
}
