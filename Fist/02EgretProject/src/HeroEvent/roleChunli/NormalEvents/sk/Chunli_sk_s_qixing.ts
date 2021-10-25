class Chunli_sk_s_qixing {
    public static addSprite15469(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_qixing.frame3, 4, Chunli_sk_s_qixing.frame4, 7, Chunli_sk_s_qixing.frame7, 11, Chunli_sk_s_qixing.frame11, 19, Chunli_sk_s_qixing.frame19, 24, Chunli_sk_s_qixing.frame24, 27, Chunli_sk_s_qixing.frame27, 36, Chunli_sk_s_qixing.frame36, 38, Chunli_sk_s_qixing.frame38, 67, Chunli_sk_s_qixing.frame67, 68, Chunli_sk_s_qixing.frame68, 71, Chunli_sk_s_qixing.frame71, 74, Chunli_sk_s_qixing.frame74, 77, Chunli_sk_s_qixing.frame77, 80, Chunli_sk_s_qixing.frame80, 83, Chunli_sk_s_qixing.frame83, 86, Chunli_sk_s_qixing.frame86, 89, Chunli_sk_s_qixing.frame89, 92, Chunli_sk_s_qixing.frame92, 95, Chunli_sk_s_qixing.frame95, 98, Chunli_sk_s_qixing.frame98, 101, Chunli_sk_s_qixing.frame101, 106, Chunli_sk_s_qixing.frame106, 118, Chunli_sk_s_qixing.frame118, 120, Chunli_sk_s_qixing.frame120, 121, Chunli_sk_s_qixing.frame121, 140, Chunli_sk_s_qixing.frame140]);
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
        a3395.Vx = 28;
        a3395.flag = "";
        a3395.target = "";
    }


    public static frame7(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 10;
        htcheck.isObj = false;
        htcheck.hitPos = "up";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup2";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 45;
        htcheck.a = 0;
        htcheck.Vx = 7;
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


    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.s_type = "s3";
        a4178.f_time = 20;
        a4178.bgType = "0";
        a4178.roleName = "";
        a4178.faceName = "";
    }


    public static frame24(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_up";
    }


    public static frame27(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 45;
        a4023.Vy = 28;
        a4023.Va = 0;
        a4023.Vg = 2;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land2";
    }


    public static frame36(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 0.1;
        a4023.Vy = 0.1;
        a4023.Va = 0.001;
        a4023.Vg = 0.001;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land2";
        let a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "3";
        a4188.status_1 = "hurt3";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = true;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
        //  _level0.charToCenter();
    }


    public static frame38(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4188 = Chunli_a4188.getInstance(_parentRole);
        a4188.posObj = "Chunli_a4186";
        a4188.flag = "3";
        a4188.status_1 = "hurt3";
        a4188.downHit = false;
        a4188.land = false;
        a4188.hurt = true;
        a4188.func = null;
        Chunli_a4186.getInstance(_parentRole)._name = "Chunli_a4186";
         _parentRole.opp.inFreeze = true;
    }


    public static frame67(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.opp.inFreeze = false;
        let a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.bgType = "";
        a4178.f_time = 35;
        a4178.roleName = "";
        a4178.s_type = "";
        a4178.faceName = "";
        Chunli_a4196.getInstance(_parentRole).name = "chunli_qixingtxt";
        Chunli_a4196.getInstance(_parentRole).suspend = true;
    }


    public static frame68(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;

        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_up";
    }


    public static frame71(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame74(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame77(mc: zmovie.ZMovieClip) {
        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame80(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame83(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame86(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame89(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame92(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame95(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame98(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 0;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.2;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 5;
        htcheck.a = 3;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame101(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 1;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 3;
        htcheck.Vy = 25;
        htcheck.a = 0;
        htcheck.Vx = 0;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    }


    public static frame106(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 10;
        a4023.Vy = 6;
        a4023.Va = 0;
        a4023.Vg = 3;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "land3";
    }


    public static frame118(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    }


    public static frame120(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }


    public static frame121(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    }


    public static frame140(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
