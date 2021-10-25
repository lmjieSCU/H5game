class fire9_3 {

    public static addSprite4823(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, fire9_3.frame1, 3, fire9_3.frame3, 13, fire9_3.frame13]);
        return;
    }

    public static frame1(mc:zmovie.ZMovieClip) {
        mc.stop();
        let k_hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        k_hitcheck_obj.obj_Vx = 23;
        k_hitcheck_obj.obj_Vy = 17;
        k_hitcheck_obj.obj_level = 0;
        k_hitcheck_obj.hurtBack = "hurt1";
        k_hitcheck_obj.hurtAway = "hurt3";
        k_hitcheck_obj.flag = 1;
        k_hitcheck_obj.end_status = "";
        k_hitcheck_obj.Vx = 20;
        k_hitcheck_obj.Vy = 25;
        k_hitcheck_obj.a = 3;
        k_hitcheck_obj.g = 0;
        k_hitcheck_obj.freezeTime2 = 1;
        k_hitcheck_obj.freezeTime = 4;
        k_hitcheck_obj.slowTime = 0;
        k_hitcheck_obj.shake = 0;
        k_hitcheck_obj.d_rate = 1;
        k_hitcheck_obj.isObj = true;
        k_hitcheck_obj.hitType = "hitFire1";
        k_hitcheck_obj.hitEff = "fire_m1";
        k_hitcheck_obj.hitShinning = false;
        k_hitcheck_obj.reCheck = true;
        k_hitcheck_obj.checkTimes = 1;
        k_hitcheck_obj.hitPos = "";
    }

    public static frame3() {
    }

    public static frame13(mc:zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}