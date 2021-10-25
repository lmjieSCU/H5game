class hitCombo1 {

    public static addSprite4739(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, hitCombo1.frame1, 13, hitCombo1.frame13, 17, hitCombo1.frame17,
            21, hitCombo1.frame21, 24, hitCombo1.frame24, 5, hitCombo1.frame5, 9, hitCombo1.frame9]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }
    public static frame13(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }
    public static frame17(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }
    public static frame21(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame24(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }
    public static frame9(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 0;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 0;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire4";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }
}