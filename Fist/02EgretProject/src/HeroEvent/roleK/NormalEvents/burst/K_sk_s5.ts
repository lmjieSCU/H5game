class K_sk_s5 {

    public static addSprite5836(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_sk_s5.frame1, 12, K_sk_s5.frame12, 15, K_sk_s5.frame15, 16, K_sk_s5.frame16, 17, K_sk_s5.frame17,
            2, K_sk_s5.frame2, 20, K_sk_s5.frame20, 23, K_sk_s5.frame23, 24, K_sk_s5.frame24, 25, K_sk_s5.frame25, 28, K_sk_s5.frame28,
            3, K_sk_s5.frame3, 43, K_sk_s5.frame43, 5, K_sk_s5.frame5, 6, K_sk_s5.frame6, 62, K_sk_s5.frame62, 63, K_sk_s5.frame63,
            8, K_sk_s5.frame8, 83, K_sk_s5.frame83]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a985 = K_a985.getInstance(_parentRole);
        a985.s_type = "s2";
        a985.f_time = 20;
        a985.bgType = "2";
        a985.roleName = "K";
        a985.faceName = "";
    }

    public static frame12() {
        // K_sk_s5.mc.stop();
    }

    public static frame15(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame16(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 15;
        a917.Vy = 18;
        a917.Va = 0;
        a917.Vg = 4;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    }

    public static frame17(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt1";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a5755.getInstance(_parentRole).effName = "bgEff_up";
    }

    public static frame20(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 9;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame23(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // K_sk_s5.mc.stop();
        _parentRole.countEnd();
    }

    public static frame24(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a1227.getInstance(_parentRole).nohitFrame = "nohit";
        K_a5755.getInstance(_parentRole).effName = "bgEff_black";
    }


    public static frame25(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a985 = K_a985.getInstance(_parentRole);
        a985.s_type = "s3";
        a985.f_time = 20;
        a985.bgType = "0";
        a985.roleName = "";
        a985.faceName = "";
    }

    public static frame28(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a863.getInstance(_parentRole).name = "k_fire1_s";
    }

    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(2, "up");
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame43(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a863.getInstance(_parentRole).name = "k_fire2_s";
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt1";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a917 = K_a917.getInstance(_parentRole);
        a917.Vx = 15;
        a917.Vy = 18;
        a917.Va = 0;
        a917.Vg = 4;
        a917.Vx_min = 0;
        a917.posY2 = "";
        a917.flag = "";
        a917.end_status = "none";
    }

    public static frame62(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");

    }

    public static frame63(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        K_a5755.getInstance(_parentRole).effName = "bgEff_black";
    }

    public static frame8(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt1";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 15;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "fire_m1";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame83(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

}