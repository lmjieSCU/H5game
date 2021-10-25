class k_fire1_s {
    public static addSprite4858(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, k_fire1_s.frame1, 3, k_fire1_s.frame3, 22, k_fire1_s.frame22]);
        return;
    }
    public static frame1() {
        // _level0.fire2_snd.start();
    }


    public static frame3(mc:zmovie.ZMovieClip) {
        let K_hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        K_hitcheck_obj.obj_Vx = 0;
        K_hitcheck_obj.obj_Vy = 0;
        K_hitcheck_obj.obj_level = 0;
        K_hitcheck_obj.hurtBack = "";
        K_hitcheck_obj.hurtAway = "hurt3";
        K_hitcheck_obj.flag = 1;
        K_hitcheck_obj.end_status = "";
        K_hitcheck_obj.Vx = 15;
        K_hitcheck_obj.Vy = 32;
        K_hitcheck_obj.a = 3;
        K_hitcheck_obj.g = 4;
        K_hitcheck_obj.freezeTime2 = 2;
        K_hitcheck_obj.freezeTime = 7;
        K_hitcheck_obj.slowTime = 0;
        K_hitcheck_obj.shake = 1;
        K_hitcheck_obj.d_rate = 1;
        K_hitcheck_obj.isObj = true;
        K_hitcheck_obj.hitType = "hitFire1";
        K_hitcheck_obj.hitEff = "fire_m3";
        K_hitcheck_obj.hitShinning = false;
        K_hitcheck_obj.reCheck = true;
        K_hitcheck_obj.checkTimes = 1;
        K_hitcheck_obj.hitPos = "";
    }

    public static frame22(mc:zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}