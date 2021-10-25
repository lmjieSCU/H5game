class Chunli_sk_s_zuhe {
    public static addSprite15897(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_zuhe.frame3, 4, Chunli_sk_s_zuhe.frame4, 5, Chunli_sk_s_zuhe.frame5, 7, Chunli_sk_s_zuhe.frame7, 14, Chunli_sk_s_zuhe.frame14, 15, Chunli_sk_s_zuhe.frame15, 26, Chunli_sk_s_zuhe.frame26, 32, Chunli_sk_s_zuhe.frame32, 44, Chunli_sk_s_zuhe.frame44, 46, Chunli_sk_s_zuhe.frame46, 48, Chunli_sk_s_zuhe.frame48, 50, Chunli_sk_s_zuhe.frame50, 52, Chunli_sk_s_zuhe.frame52, 55, Chunli_sk_s_zuhe.frame55, 64, Chunli_sk_s_zuhe.frame64, 66, Chunli_sk_s_zuhe.frame66, 68, Chunli_sk_s_zuhe.frame68, 70, Chunli_sk_s_zuhe.frame70, 72, Chunli_sk_s_zuhe.frame72, 75, Chunli_sk_s_zuhe.frame75, 82, Chunli_sk_s_zuhe.frame82, 84, Chunli_sk_s_zuhe.frame84, 86, Chunli_sk_s_zuhe.frame86, 88, Chunli_sk_s_zuhe.frame88, 90, Chunli_sk_s_zuhe.frame90, 94, Chunli_sk_s_zuhe.frame94, 97, Chunli_sk_s_zuhe.frame97, 100, Chunli_sk_s_zuhe.frame100, 103, Chunli_sk_s_zuhe.frame103, 110, Chunli_sk_s_zuhe.frame110, 162, Chunli_sk_s_zuhe.frame162, 183, Chunli_sk_s_zuhe.frame183]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.bgType = "2";
        a4178.f_time = 21;
        a4178.roleName = "Chunli";
        a4178.s_type = "s2";
        a4178.faceName = "";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_speed1";
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 40;
        a3395.flag = "";
        a3395.target = "";
        // continueHit = true;
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 8;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.Vx = 25;
        htcheck.freezeTime2 = 5;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame14(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a4202.getInstance(_parentRole).nohitFrame = "nohit";
    }


    public static frame15(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = true;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    }


    public static frame26(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 6;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 30;
        htcheck.a = 0;
        htcheck.Vx = 25;
        htcheck.freezeTime2 = 5;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }


    public static frame32(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "1";
        a4188.status_1 = "hurt2";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = true;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
    }


    public static frame44(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame46(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame48(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame50(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame52(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame55(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame64(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame66(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame68(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame70(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame72(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame75(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame82(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -2;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame84(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -2;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame86(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -2;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame88(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -2;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame90(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -2;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame94(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt2";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 0;
        htcheck.a = 0;
        htcheck.Vx = -5;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame97(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    }


    public static frame100(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.bgType = "0";
        a4178.f_time = 20;
        a4178.roleName = "";
        a4178.s_type = "s3";
        a4178.faceName = "";
    }

    public static frame103(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 8;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 3.5;
        htcheck.Vy = 50;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 5;
        htcheck.shake = 1;
        htcheck.reCheck = true;
    }

    public static frame110(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    }


    public static frame162(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

    public static frame183(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
