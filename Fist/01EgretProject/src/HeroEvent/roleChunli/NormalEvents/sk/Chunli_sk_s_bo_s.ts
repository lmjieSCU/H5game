class Chunli_sk_s_bo_s {
    public static addSprite15607(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_bo_s.frame3, 4, Chunli_sk_s_bo_s.frame4, 5, Chunli_sk_s_bo_s.frame5, 12, Chunli_sk_s_bo_s.frame12, 15, Chunli_sk_s_bo_s.frame15, 18, Chunli_sk_s_bo_s.frame18, 21, Chunli_sk_s_bo_s.frame21, 24, Chunli_sk_s_bo_s.frame24, 27, Chunli_sk_s_bo_s.frame27, 30, Chunli_sk_s_bo_s.frame30, 33, Chunli_sk_s_bo_s.frame33, 36, Chunli_sk_s_bo_s.frame36, 39, Chunli_sk_s_bo_s.frame39, 42, Chunli_sk_s_bo_s.frame42, 45, Chunli_sk_s_bo_s.frame45, 48, Chunli_sk_s_bo_s.frame48, 74, Chunli_sk_s_bo_s.frame74]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.s_type = "s1_s";
        a4178.f_time = 20;
        a4178.bgType = "1";
        a4178.roleName = "Chunli";
        a4178.faceName = "";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //    shadow_name = "chunli_qg2shadow";
        //     start_alpha = 80;
        //     end_alpha = 0;
        //     d_alpha = 1;
        //     add_interval = 5;
        //     _rb = 0;
        //     _gb = -255;
        //     _bb = -255;
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_black";
    }


    public static frame12(mc: zmovie.ZMovieClip) {

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        // continueHit = true;

    }


    public static frame15(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame21(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame24(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame27(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame30(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame33(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame36(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame39(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame42(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 5;
        hitcheck_obj.Vy = 5;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 0;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame45(mc: zmovie.ZMovieClip) {

        let htcheck = Hero_HitCheck_obj.getInstance(mc);
        htcheck.obj_Vx = 0;
        htcheck.obj_Vy = 0;
        htcheck.obj_level = 2;
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 5;
        htcheck.Vy = 5;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.4;
        htcheck.isObj = true;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame48(mc: zmovie.ZMovieClip) {
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
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 30;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
        // continueHit = false;
    }


    public static frame74(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");

    }
}
